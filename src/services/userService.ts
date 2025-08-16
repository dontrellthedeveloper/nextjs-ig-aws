import { client, createUser, updateUser, getUser, getUserByCognitoId, getUserByUsername } from '../lib/graphql';

export interface CreateUserInput {
  cognitoId: string;
  username: string;
  email: string;
  name?: string;
  bio?: string;
  website?: string;
}

export interface UpdateUserInput {
  id: string;
  username?: string;
  name?: string;
  bio?: string;
  website?: string;
  profilePictureKey?: string;
}

export interface UserProfile {
  id: string;
  cognitoId: string;
  username: string;
  email: string;
  name?: string;
  bio?: string;
  website?: string;
  profilePictureKey?: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  createdAt: string;
  updatedAt: string;
}

class UserService {
  /**
   * Create a new user profile in the database
   */
  async createUserProfile(input: CreateUserInput): Promise<UserProfile | null> {
    try {
      const response = await client.graphql({
        query: createUser,
        variables: {
          input: {
            cognitoId: input.cognitoId,
            username: input.username,
            email: input.email,
            name: input.name || '',
            bio: input.bio || '',
            website: input.website || '',
            postsCount: 0,
            followersCount: 0,
            followingCount: 0,
          }
        }
      });

      return response.data.createUser as UserProfile;
    } catch (error) {
      console.error('Error creating user profile:', error);
      return null;
    }
  }

  /**
   * Update an existing user profile
   */
  async updateUserProfile(input: UpdateUserInput): Promise<UserProfile | null> {
    try {
      const response = await client.graphql({
        query: updateUser,
        variables: {
          input: {
            id: input.id,
            ...(input.username && { username: input.username }),
            ...(input.name && { name: input.name }),
            ...(input.bio && { bio: input.bio }),
            ...(input.website && { website: input.website }),
            ...(input.profilePictureKey && { profilePictureKey: input.profilePictureKey }),
          }
        }
      });

      return response.data.updateUser as UserProfile;
    } catch (error) {
      console.error('Error updating user profile:', error);
      return null;
    }
  }

  /**
   * Get user profile by ID
   */
  async getUserProfile(id: string): Promise<UserProfile | null> {
    try {
      const response = await client.graphql({
        query: getUser,
        variables: { id }
      });

      return response.data.getUser as UserProfile;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  }

  /**
   * Get user profile by Cognito ID
   */
  async getUserProfileByCognitoId(cognitoId: string): Promise<UserProfile | null> {
    try {
      const response = await client.graphql({
        query: getUserByCognitoId,
        variables: { cognitoId, limit: 1 }
      });

      const users = response.data.getUsersByCognitoId?.items || [];
      return users.length > 0 ? users[0] as UserProfile : null;
    } catch (error) {
      console.error('Error getting user profile by Cognito ID:', error);
      return null;
    }
  }

  /**
   * Get user profile by username
   */
  async getUserProfileByUsername(username: string): Promise<UserProfile | null> {
    try {
      const response = await client.graphql({
        query: getUserByUsername,
        variables: { username, limit: 1 }
      });

      const users = response.data.getUsersByUsername?.items || [];
      return users.length > 0 ? users[0] as UserProfile : null;
    } catch (error) {
      console.error('Error getting user profile by username:', error);
      return null;
    }
  }

  /**
   * Check if username is available
   */
  async isUsernameAvailable(username: string): Promise<boolean> {
    try {
      const existingUser = await this.getUserProfileByUsername(username);
      return !existingUser;
    } catch (error) {
      console.error('Error checking username availability:', error);
      return false;
    }
  }

  /**
   * Create or sync user profile with Cognito user
   */
  async createOrSyncUserProfile(cognitoUser: {
    userId: string;
    username: string;
    email: string;
    attributes: any;
  }): Promise<UserProfile | null> {
    try {
      // First, try to find existing user by Cognito ID
      let userProfile = await this.getUserProfileByCognitoId(cognitoUser.userId);

      if (!userProfile) {
        // User doesn't exist in database, create new profile
        const createInput: CreateUserInput = {
          cognitoId: cognitoUser.userId,
          username: cognitoUser.attributes?.preferred_username || cognitoUser.username || cognitoUser.email.split('@')[0],
          email: cognitoUser.email,
          name: cognitoUser.attributes?.name || cognitoUser.attributes?.preferred_username || '',
        };

        userProfile = await this.createUserProfile(createInput);
        
        if (userProfile) {
          console.log('✅ Created new user profile:', userProfile.username);
        }
      } else {
        console.log('✅ Found existing user profile:', userProfile.username);
      }

      return userProfile;
    } catch (error) {
      console.error('❌ Error creating or syncing user profile:', error);
      return null;
    }
  }
}

export const userService = new UserService();