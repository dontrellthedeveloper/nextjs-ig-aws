/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  cognitoId: string,
  username: string,
  email: string,
  name?: string | null,
  bio?: string | null,
  website?: string | null,
  profilePictureKey?: string | null,
  postsCount?: number | null,
  followersCount?: number | null,
  followingCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  cognitoId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  profilePictureKey?: ModelStringInput | null,
  postsCount?: ModelIntInput | null,
  followersCount?: ModelIntInput | null,
  followingCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoId: string,
  username: string,
  email: string,
  name?: string | null,
  bio?: string | null,
  website?: string | null,
  profilePictureKey?: string | null,
  posts?: ModelPostConnection | null,
  followers?: ModelFollowConnection | null,
  following?: ModelFollowConnection | null,
  stories?: ModelStoryConnection | null,
  likes?: ModelLikeConnection | null,
  comments?: ModelCommentConnection | null,
  storyViews?: ModelStoryViewConnection | null,
  postsCount?: number | null,
  followersCount?: number | null,
  followingCount?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  description?: string | null,
  imageKey: string,
  imageUrl?: string | null,
  location?: string | null,
  tags?: Array< string | null > | null,
  userId: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  comments?: ModelCommentConnection | null,
  likesCount?: number | null,
  commentsCount?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  postId: string,
  userId: string,
  post?: Post | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  postId: string,
  userId: string,
  post?: Post | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelFollowConnection = {
  __typename: "ModelFollowConnection",
  items:  Array<Follow | null >,
  nextToken?: string | null,
};

export type Follow = {
  __typename: "Follow",
  id: string,
  followerId: string,
  followingId: string,
  follower?: User | null,
  following?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type Story = {
  __typename: "Story",
  id: string,
  userId: string,
  user?: User | null,
  imageKey?: string | null,
  videoKey?: string | null,
  viewers?: ModelStoryViewConnection | null,
  expiresAt: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStoryViewConnection = {
  __typename: "ModelStoryViewConnection",
  items:  Array<StoryView | null >,
  nextToken?: string | null,
};

export type StoryView = {
  __typename: "StoryView",
  id: string,
  storyId: string,
  userId: string,
  story?: Story | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoId?: string | null,
  username?: string | null,
  email?: string | null,
  name?: string | null,
  bio?: string | null,
  website?: string | null,
  profilePictureKey?: string | null,
  postsCount?: number | null,
  followersCount?: number | null,
  followingCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  description?: string | null,
  imageKey: string,
  imageUrl?: string | null,
  location?: string | null,
  tags?: Array< string | null > | null,
  userId: string,
  likesCount?: number | null,
  commentsCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  description?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  location?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  likesCount?: ModelIntInput | null,
  commentsCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  description?: string | null,
  imageKey?: string | null,
  imageUrl?: string | null,
  location?: string | null,
  tags?: Array< string | null > | null,
  userId?: string | null,
  likesCount?: number | null,
  commentsCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  postId: string,
  userId: string,
  createdAt?: string | null,
};

export type ModelLikeConditionInput = {
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateLikeInput = {
  id: string,
  postId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postId: string,
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateFollowInput = {
  id?: string | null,
  followerId: string,
  followingId: string,
  createdAt?: string | null,
};

export type ModelFollowConditionInput = {
  followerId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFollowConditionInput | null > | null,
  or?: Array< ModelFollowConditionInput | null > | null,
  not?: ModelFollowConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateFollowInput = {
  id: string,
  followerId?: string | null,
  followingId?: string | null,
  createdAt?: string | null,
};

export type DeleteFollowInput = {
  id: string,
};

export type CreateStoryInput = {
  id?: string | null,
  userId: string,
  imageKey?: string | null,
  videoKey?: string | null,
  expiresAt: string,
  createdAt?: string | null,
};

export type ModelStoryConditionInput = {
  userId?: ModelIDInput | null,
  imageKey?: ModelStringInput | null,
  videoKey?: ModelStringInput | null,
  expiresAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStoryInput = {
  id: string,
  userId?: string | null,
  imageKey?: string | null,
  videoKey?: string | null,
  expiresAt?: string | null,
  createdAt?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type CreateStoryViewInput = {
  id?: string | null,
  storyId: string,
  userId: string,
  createdAt?: string | null,
};

export type ModelStoryViewConditionInput = {
  storyId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelStoryViewConditionInput | null > | null,
  or?: Array< ModelStoryViewConditionInput | null > | null,
  not?: ModelStoryViewConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStoryViewInput = {
  id: string,
  storyId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type DeleteStoryViewInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  profilePictureKey?: ModelStringInput | null,
  postsCount?: ModelIntInput | null,
  followersCount?: ModelIntInput | null,
  followingCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  location?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  likesCount?: ModelIntInput | null,
  commentsCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFollowFilterInput = {
  id?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFollowFilterInput | null > | null,
  or?: Array< ModelFollowFilterInput | null > | null,
  not?: ModelFollowFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  imageKey?: ModelStringInput | null,
  videoKey?: ModelStringInput | null,
  expiresAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStoryViewFilterInput = {
  id?: ModelIDInput | null,
  storyId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryViewFilterInput | null > | null,
  or?: Array< ModelStoryViewFilterInput | null > | null,
  not?: ModelStoryViewFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoId?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  profilePictureKey?: ModelSubscriptionStringInput | null,
  postsCount?: ModelSubscriptionIntInput | null,
  followersCount?: ModelSubscriptionIntInput | null,
  followingCount?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  likesCount?: ModelSubscriptionIntInput | null,
  commentsCount?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  postId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFollowFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  followerId?: ModelSubscriptionIDInput | null,
  followingId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFollowFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  videoKey?: ModelSubscriptionStringInput | null,
  expiresAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStoryViewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  storyId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoryViewFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryViewFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFollowMutationVariables = {
  input: CreateFollowInput,
  condition?: ModelFollowConditionInput | null,
};

export type CreateFollowMutation = {
  createFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFollowMutationVariables = {
  input: UpdateFollowInput,
  condition?: ModelFollowConditionInput | null,
};

export type UpdateFollowMutation = {
  updateFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFollowMutationVariables = {
  input: DeleteFollowInput,
  condition?: ModelFollowConditionInput | null,
};

export type DeleteFollowMutation = {
  deleteFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStoryViewMutationVariables = {
  input: CreateStoryViewInput,
  condition?: ModelStoryViewConditionInput | null,
};

export type CreateStoryViewMutation = {
  createStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStoryViewMutationVariables = {
  input: UpdateStoryViewInput,
  condition?: ModelStoryViewConditionInput | null,
};

export type UpdateStoryViewMutation = {
  updateStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStoryViewMutationVariables = {
  input: DeleteStoryViewInput,
  condition?: ModelStoryViewConditionInput | null,
};

export type DeleteStoryViewMutation = {
  deleteStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowQueryVariables = {
  id: string,
};

export type GetFollowQuery = {
  getFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFollowsQueryVariables = {
  filter?: ModelFollowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowsQuery = {
  listFollows?:  {
    __typename: "ModelFollowConnection",
    items:  Array< {
      __typename: "Follow",
      id: string,
      followerId: string,
      followingId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoriesQuery = {
  listStories?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryViewQueryVariables = {
  id: string,
};

export type GetStoryViewQuery = {
  getStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStoryViewsQueryVariables = {
  filter?: ModelStoryViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoryViewsQuery = {
  listStoryViews?:  {
    __typename: "ModelStoryViewConnection",
    items:  Array< {
      __typename: "StoryView",
      id: string,
      storyId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByCognitoIdQueryVariables = {
  cognitoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByCognitoIdQuery = {
  usersByCognitoId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByUsernameQuery = {
  usersByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIdAndCreatedAtQuery = {
  postsByUserIdAndCreatedAt?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByPostIdQuery = {
  likesByPostId?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByUserIdQuery = {
  likesByUserId?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIdAndCreatedAtQueryVariables = {
  postId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIdAndCreatedAtQuery = {
  commentsByPostIdAndCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIdQuery = {
  commentsByUserId?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowsByFollowerIdQueryVariables = {
  followerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowsByFollowerIdQuery = {
  followsByFollowerId?:  {
    __typename: "ModelFollowConnection",
    items:  Array< {
      __typename: "Follow",
      id: string,
      followerId: string,
      followingId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowsByFollowingIdQueryVariables = {
  followingId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowsByFollowingIdQuery = {
  followsByFollowingId?:  {
    __typename: "ModelFollowConnection",
    items:  Array< {
      __typename: "Follow",
      id: string,
      followerId: string,
      followingId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoriesByUserIdAndExpiresAtQueryVariables = {
  userId: string,
  expiresAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoriesByUserIdAndExpiresAtQuery = {
  storiesByUserIdAndExpiresAt?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryViewsByStoryIdQueryVariables = {
  storyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryViewsByStoryIdQuery = {
  storyViewsByStoryId?:  {
    __typename: "ModelStoryViewConnection",
    items:  Array< {
      __typename: "StoryView",
      id: string,
      storyId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoryViewsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoryViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoryViewsByUserIdQuery = {
  storyViewsByUserId?:  {
    __typename: "ModelStoryViewConnection",
    items:  Array< {
      __typename: "StoryView",
      id: string,
      storyId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    username: string,
    email: string,
    name?: string | null,
    bio?: string | null,
    website?: string | null,
    profilePictureKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowConnection",
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    storyViews?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    postsCount?: number | null,
    followersCount?: number | null,
    followingCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    imageKey: string,
    imageUrl?: string | null,
    location?: string | null,
    tags?: Array< string | null > | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likesCount?: number | null,
    commentsCount?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postId: string,
    userId: string,
    post?:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      imageKey: string,
      imageUrl?: string | null,
      location?: string | null,
      tags?: Array< string | null > | null,
      userId: string,
      likesCount?: number | null,
      commentsCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFollowSubscriptionVariables = {
  filter?: ModelSubscriptionFollowFilterInput | null,
  owner?: string | null,
};

export type OnCreateFollowSubscription = {
  onCreateFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFollowSubscriptionVariables = {
  filter?: ModelSubscriptionFollowFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFollowSubscription = {
  onUpdateFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFollowSubscriptionVariables = {
  filter?: ModelSubscriptionFollowFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFollowSubscription = {
  onDeleteFollow?:  {
    __typename: "Follow",
    id: string,
    followerId: string,
    followingId: string,
    follower?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    following?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
  owner?: string | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    imageKey?: string | null,
    videoKey?: string | null,
    viewers?:  {
      __typename: "ModelStoryViewConnection",
      nextToken?: string | null,
    } | null,
    expiresAt: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStoryViewSubscriptionVariables = {
  filter?: ModelSubscriptionStoryViewFilterInput | null,
  owner?: string | null,
};

export type OnCreateStoryViewSubscription = {
  onCreateStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStoryViewSubscriptionVariables = {
  filter?: ModelSubscriptionStoryViewFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStoryViewSubscription = {
  onUpdateStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStoryViewSubscriptionVariables = {
  filter?: ModelSubscriptionStoryViewFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStoryViewSubscription = {
  onDeleteStoryView?:  {
    __typename: "StoryView",
    id: string,
    storyId: string,
    userId: string,
    story?:  {
      __typename: "Story",
      id: string,
      userId: string,
      imageKey?: string | null,
      videoKey?: string | null,
      expiresAt: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      username: string,
      email: string,
      name?: string | null,
      bio?: string | null,
      website?: string | null,
      profilePictureKey?: string | null,
      postsCount?: number | null,
      followersCount?: number | null,
      followingCount?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
