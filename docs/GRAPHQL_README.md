# GraphQL Architecture & Implementation Guide

## 🎯 What is GraphQL?

GraphQL is a **query language** and **runtime** for APIs that allows clients to request exactly the data they need. Unlike REST APIs that have multiple endpoints, GraphQL provides a single endpoint with flexible data fetching.

### Key Benefits:
- **Single Endpoint**: One URL handles all requests
- **Precise Data Fetching**: Request only what you need
- **Strong Type System**: Schema defines exact structure
- **Real-time Subscriptions**: Live data updates
- **Introspection**: Self-documenting API

---

## 🏗️ Our Schema Architecture

### Core Models Overview

```graphql
User ──┐
        ├── Posts (1:many)
        ├── Followers (1:many)
        ├── Following (1:many)
        └── Stories (1:many)

Post ──┐
       ├── User (many:1)
       ├── Likes (1:many)
       └── Comments (1:many)

Follow ──┐
         ├── Follower (many:1)
         └── Following (many:1)
```

---

## 📊 Detailed Schema Breakdown

### 1. User Model
```graphql
type User @model @auth(rules: [
  { allow: owner },
  { allow: private, operations: [read] }
]) {
  id: ID!                              # Auto-generated unique ID
  cognitoId: String! @index           # Links to AWS Cognito user
  username: String! @index            # Unique username for profile
  email: String!                      # User's email address
  name: String                        # Display name
  bio: String                         # Profile bio/description
  website: String                     # Personal website URL
  profilePictureKey: String           # S3 key for profile image
  
  # Relationships
  posts: [Post] @hasMany              # User's posts
  followers: [Follow] @hasMany        # Who follows this user
  following: [Follow] @hasMany        # Who this user follows
  stories: [Story] @hasMany           # User's stories
  
  # Counters (for performance)
  postsCount: Int @default(value: "0")
  followersCount: Int @default(value: "0")
  followingCount: Int @default(value: "0")
  
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}
```

**Key Features:**
- **@model**: Creates DynamoDB table automatically
- **@auth**: Owner can CRUD, others can only read
- **@index**: Creates GSI for fast lookups
- **@hasMany**: One-to-many relationships
- **Counters**: Denormalized for performance

### 2. Post Model
```graphql
type Post @model @auth(rules: [
  { allow: owner },
  { allow: private, operations: [read] }
]) {
  id: ID!
  description: String                 # Post caption
  imageKey: String!                   # S3 key for image
  imageUrl: String                    # CDN URL for image
  location: String                    # Geolocation tag
  tags: [String]                      # Hashtags array
  
  # Relationships
  userId: ID! @index(name: "byUser", sortKeyFields: ["createdAt"])
  user: User @belongsTo(fields: ["userId"])
  likes: [Like] @hasMany
  comments: [Comment] @hasMany
  
  # Performance counters
  likesCount: Int @default(value: "0")
  commentsCount: Int @default(value: "0")
  
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}
```

**Key Features:**
- **sortKeyFields**: Orders posts by creation time
- **@belongsTo**: Many-to-one relationship with User
- **Denormalized counts**: Avoid expensive aggregations

### 3. Like Model (Junction Table)
```graphql
type Like @model @auth(rules: [
  { allow: owner },
  { allow: private, operations: [read] }
]) {
  id: ID!
  postId: ID! @index(name: "byPost")  # Which post was liked
  userId: ID! @index(name: "byUser")  # Who liked it
  post: Post @belongsTo(fields: ["postId"])
  user: User @belongsTo(fields: ["userId"])
  createdAt: AWSDateTime!
}
```

**Purpose:**
- **Many-to-Many**: Users can like many posts, posts can have many likes
- **Composite Key**: Prevents duplicate likes (user + post)
- **Fast Queries**: Indexes for both directions

### 4. Comment Model
```graphql
type Comment @model @auth(rules: [
  { allow: owner },
  { allow: private, operations: [read] }
]) {
  id: ID!
  content: String!                    # Comment text
  postId: ID! @index(name: "byPost", sortKeyFields: ["createdAt"])
  userId: ID!
  post: Post @belongsTo(fields: ["postId"])
  user: User @belongsTo(fields: ["userId"])
  createdAt: AWSDateTime!
}
```

**Features:**
- **Chronological ordering**: Comments sorted by time
- **Nested relationships**: Comment → User, Comment → Post

### 5. Follow Model (Social Graph)
```graphql
type Follow @model @auth(rules: [
  { allow: owner },
  { allow: private, operations: [read] }
]) {
  id: ID!
  followerId: ID! @index(name: "byFollower")    # Who is following
  followingId: ID! @index(name: "byFollowing")  # Who is being followed
  follower: User @belongsTo(fields: ["followerId"])
  following: User @belongsTo(fields: ["followingId"])
  createdAt: AWSDateTime!
}
```

**Social Graph Features:**
- **Bidirectional indexes**: Fast follower/following queries
- **Self-referencing**: Users follow other users
- **Junction table**: Enables many-to-many relationships

### 6. Story Model
```graphql
type Story @model @auth(rules: [
  { allow: owner },
  { allow: private, operations: [read] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser", sortKeyFields: ["expiresAt"])
  user: User @belongsTo(fields: ["userId"])
  imageKey: String                    # S3 key for image
  videoKey: String                    # S3 key for video
  viewers: [StoryView] @hasMany       # Who viewed this story
  expiresAt: AWSDateTime!             # 24-hour expiration
  createdAt: AWSDateTime!
}
```

**Story Features:**
- **Expiration**: Stories automatically expire after 24 hours
- **Media flexibility**: Support for images and videos
- **View tracking**: Track who viewed each story

---

## 🔐 Security Model

### Authentication Rules
```graphql
@auth(rules: [
  { allow: owner },                    # User owns their data
  { allow: private, operations: [read] } # Others can read
])
```

**What this means:**
- **Owner**: Full CRUD access to their own records
- **Private**: Authenticated users can read others' public data
- **Cognito Integration**: Uses AWS Cognito for user identity

### Data Access Patterns

1. **User owns their posts**: Only you can edit/delete your posts
2. **Public reading**: Anyone can view posts (like Instagram)
3. **Private interactions**: Only you can see who you follow
4. **Secure by default**: All operations require authentication

---

## 🚀 Query Examples

### Fetch User Profile with Posts
```graphql
query GetUserProfile($userId: ID!) {
  getUser(id: $userId) {
    id
    username
    bio
    followersCount
    posts {
      items {
        id
        imageUrl
        likesCount
        createdAt
      }
    }
  }
}
```

### Get Home Feed (Recent Posts)
```graphql
query GetHomeFeed($limit: Int, $nextToken: String) {
  listPosts(
    limit: $limit
    nextToken: $nextToken
    filter: { createdAt: { gt: "2024-01-01" } }
  ) {
    items {
      id
      description
      imageUrl
      user {
        username
        profilePictureKey
      }
      likesCount
      commentsCount
      createdAt
    }
    nextToken
  }
}
```

### Check if User Liked Post
```graphql
query CheckUserLike($postId: ID!, $userId: ID!) {
  listLikes(filter: {
    and: [
      { postId: { eq: $postId } }
      { userId: { eq: $userId } }
    ]
  }) {
    items {
      id
    }
  }
}
```

---

## 🔧 Implementation Details

### 1. Client Setup
```typescript
import { generateClient } from 'aws-amplify/api';
export const client = generateClient();
```

### 2. Making Queries
```typescript
const response = await client.graphql({
  query: getUser,
  variables: { id: userId }
});
```

### 3. Handling Relationships
```typescript
// Posts automatically include user data
const posts = response.data.listPosts.items;
posts.forEach(post => {
  console.log(`${post.user.username}: ${post.description}`);
});
```

### 4. Pagination
```typescript
let nextToken = null;
do {
  const response = await client.graphql({
    query: listPosts,
    variables: { limit: 20, nextToken }
  });
  
  const posts = response.data.listPosts.items;
  nextToken = response.data.listPosts.nextToken;
  
  // Process posts...
} while (nextToken);
```

---

## 📈 Performance Optimizations

### 1. Indexes for Fast Queries
- **byUser**: Get all posts by a specific user
- **byPost**: Get all likes/comments for a post
- **byCognitoId**: Link Cognito users to profiles
- **byUsername**: User lookup by username

### 2. Denormalized Counters
```typescript
// Instead of counting relationships every time
const likesCount = post.likes.items.length; // ❌ Expensive

// Store the count directly
const likesCount = post.likesCount; // ✅ Fast
```

### 3. Batch Operations
```typescript
// Create multiple likes at once
const promises = postIds.map(postId => 
  client.graphql({
    query: createLike,
    variables: { input: { postId, userId } }
  })
);
await Promise.all(promises);
```

---

## 🛠️ Development Workflow

### 1. Schema Changes
```bash
# Modify schema.graphql
amplify push  # Deploy changes
```

### 2. Code Generation
```bash
amplify codegen  # Generate TypeScript types
```

### 3. Testing Queries
```bash
# Use GraphQL playground
amplify console api
```

---

## 📚 Key Concepts for Interviews

### GraphQL vs REST
| GraphQL | REST |
|---------|------|
| Single endpoint | Multiple endpoints |
| Flexible data fetching | Fixed data structure |
| Strong typing | Loose typing |
| Real-time subscriptions | Polling required |

### DynamoDB Patterns
- **Single Table Design**: All entities in one table
- **GSI Usage**: Secondary indexes for access patterns
- **Partition Key Strategy**: Distribute data evenly
- **Sort Key Optimization**: Enable range queries

### AWS AppSync Features
- **Real-time subscriptions**: WebSocket connections
- **Offline sync**: Local caching and sync
- **Security**: Fine-grained access control
- **Caching**: CloudFront integration

This architecture provides a scalable, secure, and performant backend for a social media application using modern GraphQL patterns and AWS best practices.