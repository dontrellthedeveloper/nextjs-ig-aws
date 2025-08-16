import { generateClient } from 'aws-amplify/api';

// GraphQL client
export const client = generateClient();

// GraphQL mutations
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoId
      username
      email
      name
      bio
      website
      profilePictureKey
      postsCount
      followersCount
      followingCount
      createdAt
      updatedAt
    }
  }
`;

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoId
      username
      email
      name
      bio
      website
      profilePictureKey
      postsCount
      followersCount
      followingCount
      createdAt
      updatedAt
    }
  }
`;

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      description
      imageKey
      imageUrl
      location
      tags
      userId
      likesCount
      commentsCount
      user {
        id
        username
        profilePictureKey
      }
      createdAt
      updatedAt
    }
  }
`;

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      postId
      userId
      createdAt
    }
  }
`;

export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      postId
      userId
      user {
        id
        username
        profilePictureKey
      }
      createdAt
    }
  }
`;

export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;

export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
      id
    }
  }
`;

// GraphQL queries
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoId
      username
      email
      name
      bio
      website
      profilePictureKey
      postsCount
      followersCount
      followingCount
      createdAt
      updatedAt
    }
  }
`;

export const getUserByCognitoId = /* GraphQL */ `
  query GetUserByCognitoId(
    $cognitoId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUsersByCognitoId(
      cognitoId: $cognitoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoId
        username
        email
        name
        bio
        website
        profilePictureKey
        postsCount
        followersCount
        followingCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getUserByUsername = /* GraphQL */ `
  query GetUserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUsersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoId
        username
        email
        name
        bio
        website
        profilePictureKey
        postsCount
        followersCount
        followingCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        imageKey
        imageUrl
        location
        tags
        userId
        likesCount
        commentsCount
        user {
          id
          username
          profilePictureKey
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getPostsByUser = /* GraphQL */ `
  query GetPostsByUser(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        imageKey
        imageUrl
        location
        tags
        userId
        likesCount
        commentsCount
        user {
          id
          username
          profilePictureKey
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      description
      imageKey
      imageUrl
      location
      tags
      userId
      likesCount
      commentsCount
      user {
        id
        username
        profilePictureKey
      }
      likes {
        items {
          id
          userId
          user {
            id
            username
          }
        }
      }
      comments {
        items {
          id
          content
          userId
          user {
            id
            username
            profilePictureKey
          }
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const getCommentsByPost = /* GraphQL */ `
  query GetCommentsByPost(
    $postId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByPost(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        postId
        userId
        user {
          id
          username
          profilePictureKey
        }
        createdAt
      }
      nextToken
    }
  }
`;

export const getFollowsByFollower = /* GraphQL */ `
  query GetFollowsByFollower(
    $followerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFollowsByFollower(
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerId
        followingId
        following {
          id
          username
          profilePictureKey
        }
        createdAt
      }
      nextToken
    }
  }
`;

export const getFollowsByFollowing = /* GraphQL */ `
  query GetFollowsByFollowing(
    $followingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFollowsByFollowing(
      followingId: $followingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerId
        followingId
        follower {
          id
          username
          profilePictureKey
        }
        createdAt
      }
      nextToken
    }
  }
`;