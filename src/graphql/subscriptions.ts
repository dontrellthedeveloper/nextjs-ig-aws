/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onCreatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onUpdatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onDeletePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateLike = /* GraphQL */ `subscription OnCreateLike(
  $filter: ModelSubscriptionLikeFilterInput
  $owner: String
) {
  onCreateLike(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLikeSubscriptionVariables,
  APITypes.OnCreateLikeSubscription
>;
export const onUpdateLike = /* GraphQL */ `subscription OnUpdateLike(
  $filter: ModelSubscriptionLikeFilterInput
  $owner: String
) {
  onUpdateLike(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLikeSubscriptionVariables,
  APITypes.OnUpdateLikeSubscription
>;
export const onDeleteLike = /* GraphQL */ `subscription OnDeleteLike(
  $filter: ModelSubscriptionLikeFilterInput
  $owner: String
) {
  onDeleteLike(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLikeSubscriptionVariables,
  APITypes.OnDeleteLikeSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateFollow = /* GraphQL */ `subscription OnCreateFollow(
  $filter: ModelSubscriptionFollowFilterInput
  $owner: String
) {
  onCreateFollow(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFollowSubscriptionVariables,
  APITypes.OnCreateFollowSubscription
>;
export const onUpdateFollow = /* GraphQL */ `subscription OnUpdateFollow(
  $filter: ModelSubscriptionFollowFilterInput
  $owner: String
) {
  onUpdateFollow(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFollowSubscriptionVariables,
  APITypes.OnUpdateFollowSubscription
>;
export const onDeleteFollow = /* GraphQL */ `subscription OnDeleteFollow(
  $filter: ModelSubscriptionFollowFilterInput
  $owner: String
) {
  onDeleteFollow(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFollowSubscriptionVariables,
  APITypes.OnDeleteFollowSubscription
>;
export const onCreateStory = /* GraphQL */ `subscription OnCreateStory(
  $filter: ModelSubscriptionStoryFilterInput
  $owner: String
) {
  onCreateStory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStorySubscriptionVariables,
  APITypes.OnCreateStorySubscription
>;
export const onUpdateStory = /* GraphQL */ `subscription OnUpdateStory(
  $filter: ModelSubscriptionStoryFilterInput
  $owner: String
) {
  onUpdateStory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStorySubscriptionVariables,
  APITypes.OnUpdateStorySubscription
>;
export const onDeleteStory = /* GraphQL */ `subscription OnDeleteStory(
  $filter: ModelSubscriptionStoryFilterInput
  $owner: String
) {
  onDeleteStory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStorySubscriptionVariables,
  APITypes.OnDeleteStorySubscription
>;
export const onCreateStoryView = /* GraphQL */ `subscription OnCreateStoryView(
  $filter: ModelSubscriptionStoryViewFilterInput
  $owner: String
) {
  onCreateStoryView(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStoryViewSubscriptionVariables,
  APITypes.OnCreateStoryViewSubscription
>;
export const onUpdateStoryView = /* GraphQL */ `subscription OnUpdateStoryView(
  $filter: ModelSubscriptionStoryViewFilterInput
  $owner: String
) {
  onUpdateStoryView(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStoryViewSubscriptionVariables,
  APITypes.OnUpdateStoryViewSubscription
>;
export const onDeleteStoryView = /* GraphQL */ `subscription OnDeleteStoryView(
  $filter: ModelSubscriptionStoryViewFilterInput
  $owner: String
) {
  onDeleteStoryView(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStoryViewSubscriptionVariables,
  APITypes.OnDeleteStoryViewSubscription
>;
