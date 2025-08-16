/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    cognitoId
    username
    email
    name
    bio
    website
    profilePictureKey
    posts {
      nextToken
      __typename
    }
    followers {
      nextToken
      __typename
    }
    following {
      nextToken
      __typename
    }
    stories {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    storyViews {
      nextToken
      __typename
    }
    postsCount
    followersCount
    followingCount
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    description
    imageKey
    imageUrl
    location
    tags
    userId
    user {
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
      owner
      __typename
    }
    likes {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    likesCount
    commentsCount
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getLike = /* GraphQL */ `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    postId
    userId
    post {
      id
      description
      imageKey
      imageUrl
      location
      tags
      userId
      likesCount
      commentsCount
      createdAt
      updatedAt
      owner
      __typename
    }
    user {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    postId
    userId
    post {
      id
      description
      imageKey
      imageUrl
      location
      tags
      userId
      likesCount
      commentsCount
      createdAt
      updatedAt
      owner
      __typename
    }
    user {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      postId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getFollow = /* GraphQL */ `query GetFollow($id: ID!) {
  getFollow(id: $id) {
    id
    followerId
    followingId
    follower {
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
      owner
      __typename
    }
    following {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFollowQueryVariables, APITypes.GetFollowQuery>;
export const listFollows = /* GraphQL */ `query ListFollows(
  $filter: ModelFollowFilterInput
  $limit: Int
  $nextToken: String
) {
  listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      followerId
      followingId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFollowsQueryVariables,
  APITypes.ListFollowsQuery
>;
export const getStory = /* GraphQL */ `query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    userId
    user {
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
      owner
      __typename
    }
    imageKey
    videoKey
    viewers {
      nextToken
      __typename
    }
    expiresAt
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStoryQueryVariables, APITypes.GetStoryQuery>;
export const listStories = /* GraphQL */ `query ListStories(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      imageKey
      videoKey
      expiresAt
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoriesQueryVariables,
  APITypes.ListStoriesQuery
>;
export const getStoryView = /* GraphQL */ `query GetStoryView($id: ID!) {
  getStoryView(id: $id) {
    id
    storyId
    userId
    story {
      id
      userId
      imageKey
      videoKey
      expiresAt
      createdAt
      updatedAt
      owner
      __typename
    }
    user {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStoryViewQueryVariables,
  APITypes.GetStoryViewQuery
>;
export const listStoryViews = /* GraphQL */ `query ListStoryViews(
  $filter: ModelStoryViewFilterInput
  $limit: Int
  $nextToken: String
) {
  listStoryViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      storyId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoryViewsQueryVariables,
  APITypes.ListStoryViewsQuery
>;
export const usersByCognitoId = /* GraphQL */ `query UsersByCognitoId(
  $cognitoId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByCognitoId(
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByCognitoIdQueryVariables,
  APITypes.UsersByCognitoIdQuery
>;
export const usersByUsername = /* GraphQL */ `query UsersByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUsername(
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByUsernameQueryVariables,
  APITypes.UsersByUsernameQuery
>;
export const postsByUserIdAndCreatedAt = /* GraphQL */ `query PostsByUserIdAndCreatedAt(
  $userId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByUserIdAndCreatedAt(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByUserIdAndCreatedAtQueryVariables,
  APITypes.PostsByUserIdAndCreatedAtQuery
>;
export const likesByPostId = /* GraphQL */ `query LikesByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByPostIdQueryVariables,
  APITypes.LikesByPostIdQuery
>;
export const likesByUserId = /* GraphQL */ `query LikesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByUserIdQueryVariables,
  APITypes.LikesByUserIdQuery
>;
export const commentsByPostIdAndCreatedAt = /* GraphQL */ `query CommentsByPostIdAndCreatedAt(
  $postId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostIdAndCreatedAt(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIdAndCreatedAtQueryVariables,
  APITypes.CommentsByPostIdAndCreatedAtQuery
>;
export const commentsByUserId = /* GraphQL */ `query CommentsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByUserId(
    userId: $userId
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByUserIdQueryVariables,
  APITypes.CommentsByUserIdQuery
>;
export const followsByFollowerId = /* GraphQL */ `query FollowsByFollowerId(
  $followerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFollowFilterInput
  $limit: Int
  $nextToken: String
) {
  followsByFollowerId(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FollowsByFollowerIdQueryVariables,
  APITypes.FollowsByFollowerIdQuery
>;
export const followsByFollowingId = /* GraphQL */ `query FollowsByFollowingId(
  $followingId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFollowFilterInput
  $limit: Int
  $nextToken: String
) {
  followsByFollowingId(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FollowsByFollowingIdQueryVariables,
  APITypes.FollowsByFollowingIdQuery
>;
export const storiesByUserIdAndExpiresAt = /* GraphQL */ `query StoriesByUserIdAndExpiresAt(
  $userId: ID!
  $expiresAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  storiesByUserIdAndExpiresAt(
    userId: $userId
    expiresAt: $expiresAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      imageKey
      videoKey
      expiresAt
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoriesByUserIdAndExpiresAtQueryVariables,
  APITypes.StoriesByUserIdAndExpiresAtQuery
>;
export const storyViewsByStoryId = /* GraphQL */ `query StoryViewsByStoryId(
  $storyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoryViewFilterInput
  $limit: Int
  $nextToken: String
) {
  storyViewsByStoryId(
    storyId: $storyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      storyId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoryViewsByStoryIdQueryVariables,
  APITypes.StoryViewsByStoryIdQuery
>;
export const storyViewsByUserId = /* GraphQL */ `query StoryViewsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoryViewFilterInput
  $limit: Int
  $nextToken: String
) {
  storyViewsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      storyId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoryViewsByUserIdQueryVariables,
  APITypes.StoryViewsByUserIdQuery
>;
