# AWS Services Architecture Guide

## 🎯 Overview

This document covers the AWS infrastructure powering our social media application. Understanding these services at the infrastructure level is crucial for interviews and system design discussions.

### Services Used:
- **AWS Cognito**: Identity and access management
- **Amazon DynamoDB**: NoSQL database
- **AWS AppSync**: GraphQL API service
- **Amazon S3**: Object storage (for images/videos)
- **Amazon CloudFront**: Content delivery network

---

## 🔐 AWS Cognito Deep Dive

### Service Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     AWS Cognito                            │
│                                                             │
│  ┌─────────────────┐          ┌─────────────────────────┐   │
│  │   User Pools    │          │   Identity Pools        │   │
│  │                 │          │                         │   │
│  │ • Authentication│          │ • AWS Resource Access   │   │
│  │ • User Directory│          │ • Temporary Credentials │   │
│  │ • JWT Tokens    │          │ • Role-based Access     │   │
│  │ • OAuth/SAML    │          │ • Anonymous Users       │   │
│  └─────────────────┘          └─────────────────────────┘   │
│           │                              │                  │
│           └──────────────┬───────────────┘                  │
│                          │                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Federated Identities                  │   │
│  │  • Google • Facebook • Apple • SAML • OpenID      │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### User Pools vs Identity Pools

| Feature | User Pools | Identity Pools |
|---------|------------|----------------|
| **Purpose** | Authentication | Authorization |
| **Output** | JWT Tokens | AWS Credentials |
| **Use Case** | App Login | AWS Resource Access |
| **Users** | App Users | App + Anonymous |
| **Scaling** | Millions | Unlimited |

### Our User Pool Configuration

#### Basic Settings
```json
{
  "UserPoolId": "us-west-1_jnT5usNnO",
  "ClientId": "3997amosekoinpvpibk7d6tbn6",
  "Region": "us-west-1",
  "SignInAliases": ["email"],
  "UsernameAttributes": ["email"]
}
```

#### Password Policy
```json
{
  "MinimumLength": 8,
  "RequireUppercase": false,
  "RequireLowercase": false,
  "RequireNumbers": false,
  "RequireSymbols": false,
  "TemporaryPasswordValidityDays": 7
}
```

#### MFA Configuration
```json
{
  "MfaConfiguration": "OFF",
  "SmsConfiguration": {
    "SnsCallerArn": "arn:aws:iam::account:role/service-role/Cognito-SMS-Role"
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": true
  }
}
```

### Advanced Cognito Features

#### Lambda Triggers
```javascript
// Pre-signup trigger (validate user data)
exports.preSignUp = async (event) => {
  // Custom validation logic
  if (!isValidEmail(event.request.userAttributes.email)) {
    throw new Error('Invalid email domain');
  }
  return event;
};

// Post-confirmation trigger (create user profile)
exports.postConfirmation = async (event) => {
  await createUserProfile({
    cognitoId: event.request.userAttributes.sub,
    email: event.request.userAttributes.email
  });
  return event;
};
```

#### Custom Attributes
```json
{
  "Schema": [
    {
      "Name": "preferred_username",
      "AttributeDataType": "String",
      "Required": false,
      "Mutable": true
    },
    {
      "Name": "profile_picture_url",
      "AttributeDataType": "String",
      "Required": false,
      "Mutable": true
    }
  ]
}
```

### Security Features

#### JWT Token Structure
```json
{
  "header": {
    "kid": "key-id",
    "alg": "RS256"
  },
  "payload": {
    "sub": "user-uuid",
    "aud": "client-id",
    "iss": "https://cognito-idp.region.amazonaws.com/user-pool-id",
    "token_use": "access",
    "scope": "openid profile email",
    "exp": 1640995200,
    "iat": 1640991600
  }
}
```

#### Token Types
- **Access Token**: API access (1 hour)
- **ID Token**: User information (1 hour)
- **Refresh Token**: Token renewal (30 days)

### Pricing Model
- **Monthly Active Users (MAU)**
- **First 50,000 MAU**: Free
- **Beyond 50,000**: $0.0055 per MAU
- **SMS/Email**: Separate charges

---

## 🗄️ Amazon DynamoDB Deep Dive

### Core Concepts

#### Table Structure
```
Table: SocialMediaApp
┌─────────────────┬─────────────────┬──────────────────┐
│ Partition Key   │ Sort Key        │ Attributes       │
│ (PK)           │ (SK)            │                  │
├─────────────────┼─────────────────┼──────────────────┤
│ USER#123       │ PROFILE         │ username, email  │
│ USER#123       │ POST#456        │ description, url │
│ POST#456       │ LIKE#USER#789   │ timestamp        │
│ POST#456       │ COMMENT#001     │ content, user    │
└─────────────────┴─────────────────┴──────────────────┘
```

### Single Table Design Pattern

#### Access Patterns
```javascript
// Our app's access patterns:
const accessPatterns = [
  'Get user profile by ID',
  'Get all posts by user',
  'Get all likes for a post',
  'Get all comments for a post',
  'Get user followers',
  'Get user following',
  'Get home feed (recent posts)',
  'Get stories by user'
];
```

#### Entity Relationships
```
PK: USER#123              PK: POST#456
├── SK: PROFILE          ├── SK: METADATA
├── SK: POST#001         ├── SK: LIKE#USER#123
├── SK: POST#002         ├── SK: LIKE#USER#789
├── SK: FOLLOWER#456     ├── SK: COMMENT#001
└── SK: FOLLOWING#789    └── SK: COMMENT#002
```

### Global Secondary Indexes (GSI)

#### GSI Design
```javascript
// GSI1: Query posts by timestamp
{
  PartitionKey: 'POST',
  SortKey: 'timestamp',
  ProjectionType: 'ALL'
}

// GSI2: Query users by username
{
  PartitionKey: 'USER',
  SortKey: 'username',
  ProjectionType: 'KEYS_ONLY'
}

// GSI3: Query by entity type
{
  PartitionKey: 'entityType',
  SortKey: 'createdAt',
  ProjectionType: 'ALL'
}
```

### Capacity Modes

#### On-Demand vs Provisioned
| Feature | On-Demand | Provisioned |
|---------|-----------|-------------|
| **Scaling** | Automatic | Manual/Auto |
| **Cost** | Pay per request | Pay for capacity |
| **Predictability** | Variable | Fixed |
| **Best for** | Variable workloads | Predictable traffic |

#### Our Configuration
```json
{
  "BillingMode": "PAY_PER_REQUEST",
  "PointInTimeRecoveryEnabled": true,
  "DeletionProtectionEnabled": true,
  "StreamSpecification": {
    "StreamEnabled": true,
    "StreamViewType": "NEW_AND_OLD_IMAGES"
  }
}
```

### Performance Optimization

#### Hot Partitions
```javascript
// ❌ Bad: All users in same partition
PK: "USER", SK: "user123"

// ✅ Good: Distributed across partitions
PK: "USER#123", SK: "PROFILE"
PK: "USER#456", SK: "PROFILE"
```

#### Batch Operations
```javascript
// Batch write for efficiency
const batchWrite = {
  RequestItems: {
    'SocialMediaApp': [
      {
        PutRequest: {
          Item: { PK: 'USER#123', SK: 'POST#001', data: '...' }
        }
      },
      {
        PutRequest: {
          Item: { PK: 'POST#001', SK: 'METADATA', data: '...' }
        }
      }
    ]
  }
};
```

#### Query Optimization
```javascript
// ✅ Efficient: Use partition key + begins_with
const params = {
  KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
  ExpressionAttributeValues: {
    ':pk': 'USER#123',
    ':sk': 'POST#'
  }
};

// ❌ Inefficient: Scan with filter
const badParams = {
  FilterExpression: 'contains(SK, :sk)',
  ExpressionAttributeValues: {
    ':sk': 'POST'
  }
};
```

### DynamoDB Streams

#### Stream Record Structure
```json
{
  "eventID": "1",
  "eventName": "INSERT",
  "eventVersion": "1.0",
  "eventSource": "aws:dynamodb",
  "awsRegion": "us-west-1",
  "dynamodb": {
    "Keys": {
      "PK": {"S": "USER#123"},
      "SK": {"S": "POST#001"}
    },
    "NewImage": {
      "PK": {"S": "USER#123"},
      "SK": {"S": "POST#001"},
      "description": {"S": "My new post!"}
    },
    "StreamViewType": "NEW_AND_OLD_IMAGES"
  }
}
```

#### Use Cases
- **Real-time analytics**
- **Data replication**
- **Audit logging**
- **Triggering workflows**

### Cost Optimization

#### Request Patterns
```javascript
// Read Cost: 1 RRU = 4KB strongly consistent
// Write Cost: 1 WRU = 1KB

// Example costs (On-Demand):
const costs = {
  read: '$0.25 per million requests',
  write: '$1.25 per million requests',
  storage: '$0.25 per GB per month'
};
```

#### Best Practices
- **Use sparse indexes**
- **Batch operations**
- **Optimize item size**
- **Use TTL for temporary data**

---

## 🚀 AWS AppSync Deep Dive

### GraphQL Service Architecture
```
┌─────────────────────────────────────────────────────────┐
│                   AWS AppSync                          │
│                                                         │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   │
│  │   Schema    │   │  Resolvers  │   │ Data Sources│   │
│  │             │   │             │   │             │   │
│  │ • Types     │   │ • Query     │   │ • DynamoDB  │   │
│  │ • Queries   │   │ • Mutation  │   │ • Lambda    │   │
│  │ • Mutations │   │ • Subscribe │   │ • HTTP      │   │
│  │ • Subscript │   │ • Pipeline  │   │ • RDS       │   │
│  └─────────────┘   └─────────────┘   └─────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Real-time Features                 │   │
│  │ • WebSocket Connections • Live Subscriptions   │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Resolver Types

#### Direct Lambda Resolver
```javascript
const resolver = {
  typeName: 'Mutation',
  fieldName: 'createPost',
  dataSourceName: 'CreatePostLambda',
  requestMappingTemplate: `
    {
      "version": "2017-02-28",
      "operation": "Invoke",
      "payload": $util.toJson($context)
    }
  `,
  responseMappingTemplate: '$util.toJson($context.result)'
};
```

#### DynamoDB Direct Resolver
```vtl
## Request Mapping Template
{
  "version": "2017-02-28",
  "operation": "GetItem",
  "key": {
    "id": $util.dynamodb.toDynamoDBJson($ctx.args.id)
  }
}

## Response Mapping Template
$util.toJson($ctx.result)
```

### Caching Strategy

#### CloudFront Integration
```javascript
const cachingConfig = {
  cachingBehavior: 'PER_RESOLVER_CACHING',
  ttl: 3600, // 1 hour
  cachingKeys: [
    '$context.identity.sub',
    '$context.args.id'
  ]
};
```

### Security Integration

#### Authorization Modes
```javascript
const authModes = [
  {
    authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    userPoolConfig: {
      userPoolId: 'us-west-1_jnT5usNnO',
      defaultAction: 'ALLOW'
    }
  },
  {
    authenticationType: 'API_KEY',
    apiKeyConfig: {
      description: 'Public API access',
      expires: '2024-12-31'
    }
  }
];
```

---

## 📦 Amazon S3 & CloudFront

### S3 Bucket Structure
```
social-media-bucket/
├── users/
│   ├── {userId}/
│   │   ├── profile/
│   │   │   └── avatar.jpg
│   │   └── posts/
│   │       ├── {postId}/
│   │       │   ├── original.jpg
│   │       │   ├── thumbnail.jpg
│   │       │   └── medium.jpg
│   │       └── {postId}/
└── stories/
    └── {userId}/
        └── {storyId}/
            ├── image.jpg
            └── video.mp4
```

### Image Processing Pipeline
```javascript
// Lambda function for image processing
exports.processImage = async (event) => {
  const { bucket, key } = event.Records[0].s3;
  
  // Generate thumbnails
  const sizes = [150, 300, 600, 1200];
  
  for (const size of sizes) {
    const resized = await sharp(originalImage)
      .resize(size, size, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer();
      
    await s3.putObject({
      Bucket: bucket,
      Key: `${key}_${size}.jpg`,
      Body: resized,
      ContentType: 'image/jpeg'
    }).promise();
  }
};
```

### CloudFront Configuration
```javascript
const distribution = {
  Origins: [
    {
      DomainName: 'social-media-bucket.s3.amazonaws.com',
      OriginPath: '/images',
      S3OriginConfig: {
        OriginAccessIdentity: 'E1234567890'
      }
    }
  ],
  DefaultCacheBehavior: {
    TargetOriginId: 'S3-social-media-bucket',
    ViewerProtocolPolicy: 'redirect-to-https',
    CachePolicyId: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad', // Managed-CachingOptimized
    TTL: {
      DefaultTTL: 86400,  // 1 day
      MaxTTL: 31536000    // 1 year
    }
  }
};
```

---

## 🔧 Infrastructure as Code

### AWS CDK Stack
```typescript
export class SocialMediaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Cognito User Pool
    const userPool = new UserPool(this, 'UserPool', {
      signInAliases: { email: true },
      selfSignUpEnabled: true,
      passwordPolicy: {
        minLength: 8,
        requireDigits: false,
        requireLowercase: false,
        requireUppercase: false,
        requireSymbols: false,
      },
    });

    // DynamoDB Table
    const table = new Table(this, 'SocialMediaTable', {
      partitionKey: { name: 'PK', type: AttributeType.STRING },
      sortKey: { name: 'SK', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
      stream: StreamViewType.NEW_AND_OLD_IMAGES,
    });

    // AppSync API
    const api = new GraphqlApi(this, 'SocialMediaAPI', {
      name: 'social-media-api',
      schema: Schema.fromAsset('schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: AuthorizationType.USER_POOL,
          userPoolConfig: { userPool },
        },
      },
    });
  }
}
```

---

## 📊 Monitoring & Observability

### CloudWatch Metrics

#### Cognito Metrics
- **SignInSuccesses**: Successful authentications
- **SignInThrottles**: Rate-limited requests
- **TokenRefreshSuccesses**: Token refresh rate

#### DynamoDB Metrics
- **ConsumedReadCapacityUnits**: Read usage
- **ConsumedWriteCapacityUnits**: Write usage
- **ThrottledRequests**: Rate-limited requests
- **SuccessfulRequestLatency**: Response times

#### AppSync Metrics
- **Requests**: Total API requests
- **Errors**: Error rate
- **Latency**: Response times
- **ConnectedClients**: WebSocket connections

### Alarms & Notifications
```javascript
const alarm = new Alarm(this, 'HighErrorRate', {
  metric: api.metricError(),
  threshold: 10,
  evaluationPeriods: 2,
  treatMissingData: TreatMissingData.NOT_BREACHING,
});

alarm.addAlarmAction(
  new SnsAction(Topic.fromTopicArn(this, 'Topic', topicArn))
);
```

---

## 💰 Cost Management

### Service Costs (Estimated)
```javascript
const monthlyCosts = {
  cognito: {
    freetier: '50,000 MAU',
    beyond: '$0.0055 per MAU'
  },
  dynamodb: {
    onDemand: {
      read: '$0.25 per million requests',
      write: '$1.25 per million requests',
      storage: '$0.25 per GB'
    }
  },
  appSync: {
    queries: '$4.00 per million requests',
    realTime: '$2.00 per million minutes'
  },
  s3: {
    storage: '$0.023 per GB',
    requests: '$0.0004 per 1,000 requests'
  },
  cloudfront: {
    dataTransfer: '$0.085 per GB',
    requests: '$0.0075 per 10,000 requests'
  }
};
```

### Cost Optimization Strategies
1. **Use S3 Intelligent Tiering**
2. **Enable DynamoDB TTL**
3. **Optimize image sizes**
4. **Cache frequently accessed data**
5. **Use CloudFront for static assets**

---

## 🚨 Disaster Recovery

### Backup Strategy
```javascript
const backupPlan = {
  dynamodb: {
    pointInTimeRecovery: true,
    continuousBackups: true,
    onDemandBackups: 'weekly'
  },
  s3: {
    crossRegionReplication: true,
    versioningEnabled: true,
    lifecyclePolicies: true
  },
  cognito: {
    userPoolExport: 'automated',
    configBackup: 'git'
  }
};
```

### Multi-Region Deployment
```javascript
const regions = {
  primary: 'us-west-1',
  secondary: 'us-east-1',
  replication: {
    dynamodb: 'global-tables',
    s3: 'cross-region-replication',
    cognito: 'manual-migration'
  }
};
```

---

## 📚 Interview Key Points

### AWS Service Benefits
- **Managed Services**: No infrastructure management
- **Scalability**: Auto-scaling capabilities
- **Security**: Enterprise-grade security
- **Integration**: Services work together seamlessly

### DynamoDB Advantages
- **Performance**: Single-digit millisecond latency
- **Scalability**: Handles any amount of traffic
- **Serverless**: No server management
- **Global**: Multi-region replication

### Cognito Benefits
- **Compliance**: SOC, PCI, HIPAA certified
- **Federation**: Support for social providers
- **Security**: Built-in security features
- **Scalability**: Millions of users

This infrastructure provides enterprise-grade scalability, security, and performance while minimizing operational overhead - perfect for modern applications and technical discussions.