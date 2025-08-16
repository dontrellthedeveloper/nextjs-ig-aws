# Amazon DynamoDB Deep Dive Guide

## 🎯 What is DynamoDB?

Amazon DynamoDB is a **fully managed NoSQL database** service that provides fast and predictable performance with seamless scalability. It's designed for applications that need consistent, single-digit millisecond latency at any scale.

### Key Characteristics:
- **NoSQL Document/Key-Value Store**
- **Fully Managed** (no servers to manage)
- **Auto-scaling** based on demand
- **ACID Transactions** support
- **Global Tables** for multi-region replication
- **Event-driven** with DynamoDB Streams

---

## 🏗️ DynamoDB Architecture

```
                    Amazon DynamoDB
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────┐    ┌─────────────────────────┐    │
│  │   Base Table    │    │   Global Secondary      │    │
│  │                 │    │   Indexes (GSI)         │    │
│  │ ┌─────────────┐ │    │                         │    │
│  │ │Partition Key│ │    │ ┌─────────────────────┐ │    │
│  │ │   (PK)      │ │    │ │ GSI1: PK + SK       │ │    │
│  │ └─────────────┘ │    │ └─────────────────────┘ │    │
│  │                 │    │                         │    │
│  │ ┌─────────────┐ │    │ ┌─────────────────────┐ │    │
│  │ │  Sort Key   │ │    │ │ GSI2: PK + SK       │ │    │
│  │ │    (SK)     │ │    │ └─────────────────────┘ │    │
│  │ └─────────────┘ │    │                         │    │
│  │                 │    │ ┌─────────────────────┐ │    │
│  │ ┌─────────────┐ │    │ │ GSI3: PK + SK       │ │    │
│  │ │ Attributes  │ │    │ └─────────────────────┘ │    │
│  │ └─────────────┘ │    │                         │    │
│  └─────────────────┘    └─────────────────────────┘    │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              DynamoDB Streams                   │   │
│  │  • Change capture • Real-time events • TTL     │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 🔑 Core Concepts

### Primary Key Structure
```javascript
// Option 1: Partition Key Only (Hash Key)
const simpleKey = {
  tableName: 'Users',
  partitionKey: 'userId',
  item: {
    userId: 'user123',        // Partition Key
    username: 'johndoe',
    email: 'john@example.com'
  }
};

// Option 2: Composite Key (Partition Key + Sort Key)
const compositeKey = {
  tableName: 'SocialMediaApp',
  partitionKey: 'PK',         // Partition Key
  sortKey: 'SK',              // Sort Key
  item: {
    PK: 'USER#123',           // Partition Key
    SK: 'PROFILE',            // Sort Key
    username: 'johndoe',
    email: 'john@example.com'
  }
};
```

### Data Types
```javascript
const dynamoDBTypes = {
  // Scalar Types
  string: 'S',                // "Hello World"
  number: 'N',                // 123 or 123.45
  binary: 'B',                // Binary data
  boolean: 'BOOL',            // true/false
  null: 'NULL',               // null value
  
  // Document Types
  map: 'M',                   // { key: value } object
  list: 'L',                  // [item1, item2] array
  
  // Set Types
  stringSet: 'SS',            // ["val1", "val2"]
  numberSet: 'NS',            // [1, 2, 3]
  binarySet: 'BS'             // [binary1, binary2]
};

// Example item with different types
const exampleItem = {
  PK: { S: 'USER#123' },
  SK: { S: 'PROFILE' },
  username: { S: 'johndoe' },
  age: { N: '30' },
  isActive: { BOOL: true },
  tags: { SS: ['photographer', 'traveler'] },
  metadata: {
    M: {
      createdAt: { S: '2024-01-01T00:00:00Z' },
      lastLogin: { S: '2024-01-15T10:30:00Z' }
    }
  },
  followers: { L: [
    { S: 'user456' },
    { S: 'user789' }
  ]}
};
```

---

## 📊 Single Table Design Pattern

### Why Single Table?
- **Performance**: Fewer network calls
- **Cost**: Reduced provisioned capacity
- **Relationships**: Efficient data modeling
- **Scalability**: Better distribution

### Our Social Media Schema
```javascript
const singleTableSchema = {
  tableName: 'SocialMediaApp',
  
  // Base table structure
  primaryKey: {
    partitionKey: 'PK',       // Partition Key
    sortKey: 'SK'             // Sort Key
  },
  
  // Entity patterns
  entities: {
    // User Profile
    userProfile: {
      PK: 'USER#{{userId}}',
      SK: 'PROFILE',
      attributes: ['username', 'email', 'bio', 'followersCount']
    },
    
    // User Posts
    userPost: {
      PK: 'USER#{{userId}}',
      SK: 'POST#{{postId}}',
      attributes: ['description', 'imageUrl', 'likesCount', 'createdAt']
    },
    
    // Post Metadata
    postMetadata: {
      PK: 'POST#{{postId}}',
      SK: 'METADATA',
      attributes: ['userId', 'description', 'imageUrl', 'tags']
    },
    
    // Post Likes
    postLike: {
      PK: 'POST#{{postId}}',
      SK: 'LIKE#USER#{{userId}}',
      attributes: ['timestamp']
    },
    
    // Post Comments
    postComment: {
      PK: 'POST#{{postId}}',
      SK: 'COMMENT#{{commentId}}',
      attributes: ['userId', 'content', 'createdAt']
    },
    
    // User Followers
    userFollower: {
      PK: 'USER#{{userId}}',
      SK: 'FOLLOWER#{{followerId}}',
      attributes: ['followedAt']
    },
    
    // User Following
    userFollowing: {
      PK: 'USER#{{userId}}',
      SK: 'FOLLOWING#{{followingId}}',
      attributes: ['followedAt']
    }
  }
};
```

### Access Patterns Implementation
```javascript
// 1. Get user profile
const getUserProfile = {
  query: {
    KeyConditionExpression: 'PK = :pk AND SK = :sk',
    ExpressionAttributeValues: {
      ':pk': 'USER#123',
      ':sk': 'PROFILE'
    }
  },
  example: {
    PK: 'USER#123',
    SK: 'PROFILE',
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Photography enthusiast',
    followersCount: 1250
  }
};

// 2. Get all posts by user (paginated)
const getUserPosts = {
  query: {
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': 'USER#123',
      ':sk': 'POST#'
    },
    ScanIndexForward: false,  // Newest first
    Limit: 20
  },
  results: [
    { PK: 'USER#123', SK: 'POST#456', description: 'Beautiful sunset' },
    { PK: 'USER#123', SK: 'POST#455', description: 'Morning coffee' }
  ]
};

// 3. Get all likes for a post
const getPostLikes = {
  query: {
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': 'POST#456',
      ':sk': 'LIKE#'
    }
  },
  results: [
    { PK: 'POST#456', SK: 'LIKE#USER#123', timestamp: '2024-01-15T10:30:00Z' },
    { PK: 'POST#456', SK: 'LIKE#USER#789', timestamp: '2024-01-15T11:15:00Z' }
  ]
};

// 4. Get user followers
const getUserFollowers = {
  query: {
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': 'USER#123',
      ':sk': 'FOLLOWER#'
    }
  }
};
```

---

## 🔍 Global Secondary Indexes (GSI)

### GSI Design Principles
```javascript
const gsiDesignPrinciples = {
  // 1. Different access patterns
  purpose: 'Enable queries not possible on base table',
  
  // 2. Sparse indexes
  sparseIndexing: 'Only items with GSI keys are projected',
  
  // 3. Eventually consistent
  consistency: 'GSI updates are eventually consistent',
  
  // 4. Additional cost
  cost: 'Separate read/write capacity for each GSI'
};
```

### Our GSI Configuration
```javascript
const globalSecondaryIndexes = {
  // GSI1: Query by entity type and timestamp
  GSI1: {
    indexName: 'GSI1',
    partitionKey: 'GSI1PK',     // Entity type
    sortKey: 'GSI1SK',          // Timestamp or other sort criteria
    projection: 'ALL',          // Include all attributes
    
    // Usage examples
    useCases: [
      'Get all posts ordered by creation time',
      'Get all users who joined recently',
      'Get trending posts by likes'
    ],
    
    // Example items
    exampleItems: [
      {
        PK: 'POST#456',
        SK: 'METADATA',
        GSI1PK: 'POST',
        GSI1SK: '2024-01-15T10:30:00Z',
        description: 'Beautiful sunset'
      },
      {
        PK: 'USER#123',
        SK: 'PROFILE',
        GSI1PK: 'USER',
        GSI1SK: '2024-01-01T00:00:00Z',
        username: 'johndoe'
      }
    ]
  },
  
  // GSI2: Query by username
  GSI2: {
    indexName: 'GSI2',
    partitionKey: 'GSI2PK',     // Username
    sortKey: 'GSI2SK',          // User ID or timestamp
    projection: 'KEYS_ONLY',    // Minimal projection
    
    useCases: [
      'Search users by username',
      'Check username availability',
      'User lookup for mentions'
    ],
    
    exampleItems: [
      {
        PK: 'USER#123',
        SK: 'PROFILE',
        GSI2PK: 'johndoe',
        GSI2SK: 'USER#123'
      }
    ]
  },
  
  // GSI3: Query by status and timestamp
  GSI3: {
    indexName: 'GSI3',
    partitionKey: 'GSI3PK',     // Status/Category
    sortKey: 'GSI3SK',          // Timestamp
    projection: 'INCLUDE',      // Selected attributes
    projectedAttributes: ['PK', 'SK', 'userId', 'title'],
    
    useCases: [
      'Get active posts',
      'Get trending content',
      'Get posts by category'
    ]
  }
};
```

### GSI Query Examples
```javascript
// Query GSI1: Get recent posts
const getRecentPosts = {
  IndexName: 'GSI1',
  KeyConditionExpression: 'GSI1PK = :gsi1pk',
  ExpressionAttributeValues: {
    ':gsi1pk': 'POST'
  },
  ScanIndexForward: false,  // Newest first
  Limit: 50
};

// Query GSI2: Find user by username
const findUserByUsername = {
  IndexName: 'GSI2',
  KeyConditionExpression: 'GSI2PK = :username',
  ExpressionAttributeValues: {
    ':username': 'johndoe'
  },
  Limit: 1
};

// Query GSI3: Get trending posts
const getTrendingPosts = {
  IndexName: 'GSI3',
  KeyConditionExpression: 'GSI3PK = :status AND GSI3SK > :timestamp',
  ExpressionAttributeValues: {
    ':status': 'TRENDING',
    ':timestamp': '2024-01-01T00:00:00Z'
  }
};
```

---

## ⚡ Performance Optimization

### Partition Key Design
```javascript
const partitionKeyBestPractices = {
  // ❌ Bad: Hot partition
  badExample: {
    pattern: 'All users in same partition',
    PK: 'USER',
    problem: 'Single partition gets all traffic'
  },
  
  // ✅ Good: Distributed partitions
  goodExample: {
    pattern: 'User ID as partition key',
    PK: 'USER#{{userId}}',
    benefit: 'Traffic distributed across partitions'
  },
  
  // Advanced: Composite partition keys
  advancedExample: {
    pattern: 'Include timestamp in partition key',
    PK: 'POST#{{date}}#{{postId}}',
    benefit: 'Time-based distribution + ordering'
  }
};
```

### Query Optimization
```javascript
const queryOptimization = {
  // 1. Use Query instead of Scan
  preferQuery: {
    // ✅ Efficient: Query with partition key
    query: {
      KeyConditionExpression: 'PK = :pk',
      ExpressionAttributeValues: { ':pk': 'USER#123' }
    },
    
    // ❌ Inefficient: Scan entire table
    scan: {
      FilterExpression: 'contains(PK, :pk)',
      ExpressionAttributeValues: { ':pk': 'USER#123' }
    }
  },
  
  // 2. Use begins_with for hierarchical data
  hierarchicalQueries: {
    getAllPosts: {
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': 'USER#123',
        ':sk': 'POST#'
      }
    }
  },
  
  // 3. Use between for range queries
  rangeQueries: {
    getPostsInTimeRange: {
      KeyConditionExpression: 'PK = :pk AND SK BETWEEN :start AND :end',
      ExpressionAttributeValues: {
        ':pk': 'USER#123',
        ':start': 'POST#2024-01-01',
        ':end': 'POST#2024-01-31'
      }
    }
  }
};
```

### Batch Operations
```javascript
// Batch write (up to 25 items)
const batchWrite = {
  RequestItems: {
    'SocialMediaApp': [
      {
        PutRequest: {
          Item: {
            PK: 'USER#123',
            SK: 'POST#456',
            description: 'Beautiful sunset',
            createdAt: '2024-01-15T10:30:00Z'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            PK: 'POST#456',
            SK: 'METADATA',
            userId: 'USER#123',
            description: 'Beautiful sunset',
            tags: ['sunset', 'photography']
          }
        }
      }
    ]
  }
};

// Batch get (up to 100 items)
const batchGet = {
  RequestItems: {
    'SocialMediaApp': {
      Keys: [
        { PK: 'USER#123', SK: 'PROFILE' },
        { PK: 'USER#456', SK: 'PROFILE' },
        { PK: 'POST#789', SK: 'METADATA' }
      ]
    }
  }
};

// Transaction write (up to 25 items, ACID)
const transactionWrite = {
  TransactItems: [
    {
      Put: {
        TableName: 'SocialMediaApp',
        Item: {
          PK: 'USER#123',
          SK: 'POST#456',
          description: 'New post'
        }
      }
    },
    {
      Update: {
        TableName: 'SocialMediaApp',
        Key: { PK: 'USER#123', SK: 'PROFILE' },
        UpdateExpression: 'ADD postsCount :inc',
        ExpressionAttributeValues: { ':inc': 1 }
      }
    }
  ]
};
```

---

## 📈 Capacity Management

### Capacity Modes
```javascript
const capacityModes = {
  // On-Demand (Pay per request)
  onDemand: {
    billingMode: 'PAY_PER_REQUEST',
    pros: [
      'No capacity planning needed',
      'Scales automatically',
      'Good for unpredictable workloads'
    ],
    cons: [
      'Higher cost per request',
      'Less predictable costs'
    ],
    pricing: {
      readRequests: '$0.25 per million',
      writeRequests: '$1.25 per million'
    }
  },
  
  // Provisioned (Pay for capacity)
  provisioned: {
    billingMode: 'PROVISIONED',
    readCapacityUnits: 100,   // RCU
    writeCapacityUnits: 50,   // WCU
    pros: [
      'Lower cost for steady workloads',
      'Predictable costs',
      'Auto-scaling available'
    ],
    cons: [
      'Requires capacity planning',
      'Throttling if exceeded'
    ],
    pricing: {
      readCapacityUnit: '$0.00013 per hour',
      writeCapacityUnit: '$0.00065 per hour'
    }
  }
};
```

### Capacity Unit Calculations
```javascript
const capacityCalculations = {
  // Read Capacity Units (RCU)
  readCapacity: {
    // 1 RCU = 1 strongly consistent read of 4KB per second
    // 1 RCU = 2 eventually consistent reads of 4KB per second
    
    stronglyConsistent: {
      itemSize: '4KB',
      readsPerSecond: 1,
      rcuRequired: 1
    },
    
    eventuallyConsistent: {
      itemSize: '4KB',
      readsPerSecond: 2,
      rcuRequired: 1
    },
    
    // Example: 100 items of 8KB each, strongly consistent
    example: {
      itemSize: 8,          // KB
      itemsPerSecond: 100,
      readType: 'strong',
      calculation: Math.ceil(8 / 4) * 100,  // 200 RCU
      rcuRequired: 200
    }
  },
  
  // Write Capacity Units (WCU)
  writeCapacity: {
    // 1 WCU = 1 write of 1KB per second
    
    standard: {
      itemSize: '1KB',
      writesPerSecond: 1,
      wcuRequired: 1
    },
    
    // Example: 50 items of 3KB each
    example: {
      itemSize: 3,          // KB
      itemsPerSecond: 50,
      calculation: Math.ceil(3 / 1) * 50,   // 150 WCU
      wcuRequired: 150
    }
  }
};
```

### Auto Scaling Configuration
```javascript
const autoScalingConfig = {
  readCapacity: {
    minCapacity: 5,
    maxCapacity: 1000,
    targetUtilization: 70,    // Scale when 70% utilized
    scaleUpCooldown: 60,      // Wait 60s before scaling up
    scaleDownCooldown: 300    // Wait 5m before scaling down
  },
  
  writeCapacity: {
    minCapacity: 5,
    maxCapacity: 500,
    targetUtilization: 70,
    scaleUpCooldown: 60,
    scaleDownCooldown: 300
  }
};
```

---

## 🔄 DynamoDB Streams

### Stream Configuration
```javascript
const streamConfig = {
  streamEnabled: true,
  streamViewType: 'NEW_AND_OLD_IMAGES',  // What data to capture
  
  // Stream view types
  viewTypes: {
    'KEYS_ONLY': 'Only key attributes',
    'NEW_IMAGE': 'Entire item after modification',
    'OLD_IMAGE': 'Entire item before modification',
    'NEW_AND_OLD_IMAGES': 'Both new and old images'
  }
};
```

### Stream Record Structure
```javascript
const streamRecord = {
  eventID: 'unique-event-id',
  eventName: 'INSERT',           // INSERT, MODIFY, REMOVE
  eventVersion: '1.1',
  eventSource: 'aws:dynamodb',
  awsRegion: 'us-west-1',
  dynamodb: {
    // Approximate time of change
    ApproximateCreationDateTime: 1640995200.0,
    
    // Primary key of modified item
    Keys: {
      PK: { S: 'USER#123' },
      SK: { S: 'POST#456' }
    },
    
    // New image (after change)
    NewImage: {
      PK: { S: 'USER#123' },
      SK: { S: 'POST#456' },
      description: { S: 'Updated post description' },
      likesCount: { N: '15' },
      updatedAt: { S: '2024-01-15T10:30:00Z' }
    },
    
    // Old image (before change)
    OldImage: {
      PK: { S: 'USER#123' },
      SK: { S: 'POST#456' },
      description: { S: 'Original post description' },
      likesCount: { N: '10' },
      updatedAt: { S: '2024-01-14T15:20:00Z' }
    },
    
    // Sequence information
    SequenceNumber: '12345678901234567890',
    SizeBytes: 256,
    StreamViewType: 'NEW_AND_OLD_IMAGES'
  }
};
```

### Stream Use Cases
```javascript
const streamUseCases = {
  // 1. Real-time analytics
  analytics: {
    description: 'Track user engagement metrics',
    implementation: 'Lambda function processes stream records',
    example: 'Increment user activity counters when posts are liked'
  },
  
  // 2. Data replication
  replication: {
    description: 'Replicate data to other systems',
    implementation: 'Stream to ElasticSearch for search functionality',
    example: 'Index posts in ElasticSearch for full-text search'
  },
  
  // 3. Audit logging
  auditLog: {
    description: 'Track all changes for compliance',
    implementation: 'Store change history in separate table',
    example: 'Log all profile updates for security audit'
  },
  
  // 4. Cache invalidation
  cacheInvalidation: {
    description: 'Clear cache when data changes',
    implementation: 'Lambda function clears Redis cache',
    example: 'Clear user profile cache when profile is updated'
  },
  
  // 5. Aggregation
  aggregation: {
    description: 'Maintain aggregated data',
    implementation: 'Update counters in real-time',
    example: 'Update total likes count when individual posts are liked'
  }
};
```

### Lambda Stream Processing
```javascript
// Lambda function to process DynamoDB stream
exports.processStream = async (event) => {
  for (const record of event.Records) {
    const { eventName, dynamodb } = record;
    
    switch (eventName) {
      case 'INSERT':
        await handleInsert(dynamodb.NewImage);
        break;
        
      case 'MODIFY':
        await handleModify(dynamodb.NewImage, dynamodb.OldImage);
        break;
        
      case 'REMOVE':
        await handleRemove(dynamodb.OldImage);
        break;
    }
  }
};

const handleInsert = async (newImage) => {
  // New item created
  if (newImage.SK.S === 'PROFILE') {
    // New user registered, send welcome email
    await sendWelcomeEmail(newImage.email.S);
  }
};

const handleModify = async (newImage, oldImage) => {
  // Item updated
  if (newImage.likesCount && oldImage.likesCount) {
    const newLikes = parseInt(newImage.likesCount.N);
    const oldLikes = parseInt(oldImage.likesCount.N);
    
    if (newLikes > oldLikes) {
      // Post was liked, update analytics
      await updateEngagementMetrics(newImage.PK.S, 'like');
    }
  }
};
```

---

## 🛡️ Security Best Practices

### IAM Policies
```javascript
const iamPolicies = {
  // Fine-grained access control
  userSpecificAccess: {
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:GetItem',
          'dynamodb:PutItem',
          'dynamodb:UpdateItem',
          'dynamodb:DeleteItem'
        ],
        Resource: 'arn:aws:dynamodb:region:account:table/SocialMediaApp',
        Condition: {
          'ForAllValues:StringEquals': {
            'dynamodb:LeadingKeys': ['USER#${cognito-identity.amazonaws.com:sub}']
          }
        }
      }
    ]
  },
  
  // Read-only access for public data
  publicReadAccess: {
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Action: ['dynamodb:Query'],
        Resource: [
          'arn:aws:dynamodb:region:account:table/SocialMediaApp',
          'arn:aws:dynamodb:region:account:table/SocialMediaApp/index/*'
        ],
        Condition: {
          'ForAllValues:StringEquals': {
            'dynamodb:Select': ['SpecificAttributes']
          }
        }
      }
    ]
  }
};
```

### Encryption
```javascript
const encryptionConfig = {
  // Encryption at rest
  atRest: {
    encryptionType: 'AWS_MANAGED',  // or CUSTOMER_MANAGED
    kmsKeyId: 'alias/aws/dynamodb',
    description: 'All data encrypted using AWS managed keys'
  },
  
  // Encryption in transit
  inTransit: {
    protocol: 'TLS 1.2',
    description: 'All communication encrypted using HTTPS'
  },
  
  // Application-level encryption
  applicationLevel: {
    sensitiveFields: ['email', 'phone', 'personalInfo'],
    encryptionLibrary: 'aws-encryption-sdk',
    keyManagement: 'AWS KMS'
  }
};
```

### Data Validation
```javascript
const dataValidation = {
  // Item size limits
  itemSize: {
    maxSize: '400KB',
    recommendation: 'Keep items under 4KB for best performance'
  },
  
  // Attribute name restrictions
  attributeNames: {
    reserved: ['HASH', 'RANGE', 'TYPE', 'ORDER'],
    solution: 'Use ExpressionAttributeNames for reserved words'
  },
  
  // Validation patterns
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    username: /^[a-zA-Z0-9_]{3,30}$/,
    postId: /^POST#[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
  }
};
```

---

## 💰 Cost Optimization

### Cost Components
```javascript
const costComponents = {
  // Storage costs
  storage: {
    standardStorage: '$0.25 per GB per month',
    backupStorage: '$0.20 per GB per month',
    optimization: 'Use TTL to automatically delete old data'
  },
  
  // Request costs (On-Demand)
  requests: {
    readRequests: '$0.25 per million requests',
    writeRequests: '$1.25 per million requests',
    optimization: 'Batch operations, use eventually consistent reads'
  },
  
  // GSI costs
  gsiCosts: {
    storage: 'Same as base table',
    capacity: 'Separate RCU/WCU for each GSI',
    optimization: 'Use sparse indexes, minimize projections'
  },
  
  // Streams costs
  streamsCosts: {
    readRequests: '$0.02 per 100,000 requests',
    optimization: 'Process in batches, filter unnecessary events'
  }
};
```

### Optimization Strategies
```javascript
const optimizationStrategies = {
  // 1. Data modeling
  dataModeling: {
    singleTable: 'Reduce number of tables',
    denormalization: 'Store computed values',
    sparseIndexes: 'Only index when needed',
    ttl: 'Auto-delete expired data'
  },
  
  // 2. Query optimization
  queryOptimization: {
    projectionsOnly: 'Fetch only required attributes',
    pagination: 'Use Limit and LastEvaluatedKey',
    eventualConsistency: 'Use eventually consistent reads when possible',
    batchOperations: 'Group multiple operations'
  },
  
  // 3. Capacity optimization
  capacityOptimization: {
    rightSizing: 'Monitor CloudWatch metrics',
    autoScaling: 'Enable auto-scaling',
    onDemandVsProvisioned: 'Choose based on traffic patterns',
    reservedCapacity: 'Purchase reserved capacity for steady workloads'
  }
};
```

---

## 📊 Monitoring & Troubleshooting

### CloudWatch Metrics
```javascript
const cloudWatchMetrics = {
  // Capacity metrics
  capacity: {
    'ConsumedReadCapacityUnits': 'Actual read usage',
    'ConsumedWriteCapacityUnits': 'Actual write usage',
    'ProvisionedReadCapacityUnits': 'Allocated read capacity',
    'ProvisionedWriteCapacityUnits': 'Allocated write capacity'
  },
  
  // Performance metrics
  performance: {
    'SuccessfulRequestLatency': 'Response time for successful requests',
    'ThrottledRequests': 'Number of throttled requests',
    'SystemErrors': 'DynamoDB service errors',
    'UserErrors': 'Client-side errors'
  },
  
  // Item metrics
  items: {
    'ItemCount': 'Approximate number of items',
    'TableSizeBytes': 'Total table size',
    'ConditionalCheckFailedRequests': 'Failed conditional operations'
  }
};
```

### Common Issues & Solutions
```javascript
const troubleshooting = {
  // Hot partitions
  hotPartitions: {
    symptoms: ['High throttling', 'Uneven capacity utilization'],
    causes: ['Poor partition key design', 'Access pattern skew'],
    solutions: [
      'Add randomization to partition key',
      'Use composite keys',
      'Distribute writes across time'
    ]
  },
  
  // Throttling
  throttling: {
    symptoms: ['ProvisionedThroughputExceeded errors'],
    causes: ['Insufficient capacity', 'Hot partitions', 'Burst usage'],
    solutions: [
      'Increase provisioned capacity',
      'Enable auto-scaling',
      'Implement exponential backoff',
      'Switch to on-demand billing'
    ]
  },
  
  // Large items
  largeItems: {
    symptoms: ['High latency', 'Throttling'],
    causes: ['Items approaching 400KB limit'],
    solutions: [
      'Store large attributes in S3',
      'Compress data',
      'Split items across multiple records'
    ]
  }
};
```

---

## 📚 Interview Key Points

### Core Concepts
- **NoSQL vs SQL**: Schema flexibility vs ACID transactions
- **Partition Key Design**: Even distribution of data
- **Single Table Design**: Reduces complexity and cost
- **GSI vs LSI**: Different query patterns and limitations

### Performance
- **Query vs Scan**: Always prefer Query operations
- **Eventually Consistent**: Default for better performance
- **Batch Operations**: Reduce API calls and costs
- **Hot Partitions**: Main performance bottleneck

### Scalability
- **Automatic Scaling**: Seamless capacity adjustment
- **Global Tables**: Multi-region replication
- **No Server Management**: Fully managed service
- **Consistent Performance**: Predictable latency at scale

### Cost Management
- **On-Demand vs Provisioned**: Choose based on traffic patterns
- **Storage Optimization**: Use TTL and compression
- **GSI Optimization**: Sparse indexes and minimal projections
- **Monitoring**: CloudWatch metrics for optimization

This comprehensive understanding of DynamoDB will help you discuss NoSQL database design, scalability patterns, and performance optimization in technical interviews.