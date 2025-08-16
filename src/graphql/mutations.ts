/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createLike = /* GraphQL */ `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const updateLike = /* GraphQL */ `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLikeMutationVariables,
  APITypes.UpdateLikeMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createFollow = /* GraphQL */ `mutation CreateFollow(
  $input: CreateFollowInput!
  $condition: ModelFollowConditionInput
) {
  createFollow(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFollowMutationVariables,
  APITypes.CreateFollowMutation
>;
export const updateFollow = /* GraphQL */ `mutation UpdateFollow(
  $input: UpdateFollowInput!
  $condition: ModelFollowConditionInput
) {
  updateFollow(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFollowMutationVariables,
  APITypes.UpdateFollowMutation
>;
export const deleteFollow = /* GraphQL */ `mutation DeleteFollow(
  $input: DeleteFollowInput!
  $condition: ModelFollowConditionInput
) {
  deleteFollow(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFollowMutationVariables,
  APITypes.DeleteFollowMutation
>;
export const createStory = /* GraphQL */ `mutation CreateStory(
  $input: CreateStoryInput!
  $condition: ModelStoryConditionInput
) {
  createStory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStoryMutationVariables,
  APITypes.CreateStoryMutation
>;
export const updateStory = /* GraphQL */ `mutation UpdateStory(
  $input: UpdateStoryInput!
  $condition: ModelStoryConditionInput
) {
  updateStory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStoryMutationVariables,
  APITypes.UpdateStoryMutation
>;
export const deleteStory = /* GraphQL */ `mutation DeleteStory(
  $input: DeleteStoryInput!
  $condition: ModelStoryConditionInput
) {
  deleteStory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStoryMutationVariables,
  APITypes.DeleteStoryMutation
>;
export const createStoryView = /* GraphQL */ `mutation CreateStoryView(
  $input: CreateStoryViewInput!
  $condition: ModelStoryViewConditionInput
) {
  createStoryView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStoryViewMutationVariables,
  APITypes.CreateStoryViewMutation
>;
export const updateStoryView = /* GraphQL */ `mutation UpdateStoryView(
  $input: UpdateStoryViewInput!
  $condition: ModelStoryViewConditionInput
) {
  updateStoryView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStoryViewMutationVariables,
  APITypes.UpdateStoryViewMutation
>;
export const deleteStoryView = /* GraphQL */ `mutation DeleteStoryView(
  $input: DeleteStoryViewInput!
  $condition: ModelStoryViewConditionInput
) {
  deleteStoryView(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStoryViewMutationVariables,
  APITypes.DeleteStoryViewMutation
>;
