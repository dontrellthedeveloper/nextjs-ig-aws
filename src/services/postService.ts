import { generateClient } from 'aws-amplify/api';
// import { uploadData, getUrl } from 'aws-amplify/storage'; // TODO: Enable when S3 is configured
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { v4 as uuidv4 } from 'uuid';

const client = generateClient();

export interface CreatePostInput {
  userId: string;
  caption: string;
  location?: string;
  altText?: string;
  hideLikes?: boolean;
  disableComments?: boolean;
  file: File;
}

export interface Post {
  id: string;
  userId: string;
  description: string;
  imageKey: string;
  imageUrl?: string;
  location?: string;
  tags?: string[];
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
}

class PostService {
  /**
   * Upload image to S3 (or convert to base64 for now)
   */
  async uploadImage(file: File, userId: string): Promise<string> {
    try {
      // TODO: When S3 is configured, use this:
      // const fileExtension = file.name.split('.').pop();
      // const fileName = `${uuidv4()}.${fileExtension}`;
      // const key = `posts/${userId}/${fileName}`;
      // const result = await uploadData({ key, data: file }).result;
      // return result.key;

      // For now, convert to base64 or use a mock URL
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Store base64 string (not ideal for production, but works for testing)
          const base64 = reader.result as string;
          // For demo, we'll just return a mock key
          const mockKey = `posts/${userId}/${uuidv4()}.jpg`;
          console.log('Mock image upload:', mockKey);
          resolve(mockKey);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  }

  /**
   * Get signed URL for image (or return mock URL for now)
   */
  async getImageUrl(key: string): Promise<string> {
    try {
      // TODO: When S3 is configured, use this:
      // const result = await getUrl({ key, options: { expiresIn: 3600 * 24 * 7 } });
      // return result.url.toString();

      // For now, return a placeholder image
      const mockImages = [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
      ];
      
      // Return a random mock image for demo
      const randomIndex = Math.floor(Math.random() * mockImages.length);
      return mockImages[randomIndex];
    } catch (error) {
      console.error('Error getting image URL:', error);
      return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop';
    }
  }

  /**
   * Create a new post
   */
  async createPost(input: CreatePostInput): Promise<Post | null> {
    try {
      // First, upload the image to S3
      const imageKey = await this.uploadImage(input.file, input.userId);
      
      // Get the public URL for the image
      const imageUrl = await this.getImageUrl(imageKey);

      // Extract hashtags from caption
      const tags = this.extractHashtags(input.caption);

      // Create post in DynamoDB
      const response = await client.graphql({
        query: mutations.createPost,
        variables: {
          input: {
            userId: input.userId,
            description: input.caption,
            imageKey,
            imageUrl,
            location: input.location || '',
            tags,
            likesCount: 0,
            commentsCount: 0
          }
        }
      });

      console.log('Post created successfully:', response.data.createPost);
      return response.data.createPost as Post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  /**
   * Extract hashtags from caption
   */
  private extractHashtags(caption: string): string[] {
    const hashtagRegex = /#[a-zA-Z0-9_]+/g;
    const matches = caption.match(hashtagRegex);
    return matches ? matches.map(tag => tag.substring(1)) : [];
  }

  /**
   * Get posts for home feed
   */
  async getHomeFeed(limit: number = 20, nextToken?: string) {
    try {
      const response = await client.graphql({
        query: queries.listPosts,
        variables: {
          limit,
          nextToken
        }
      });

      const posts = response.data.listPosts.items;
      
      // Get URLs for all images
      const postsWithUrls = await Promise.all(
        posts.map(async (post: any) => ({
          ...post,
          imageUrl: await this.getImageUrl(post.imageKey)
        }))
      );

      return {
        posts: postsWithUrls,
        nextToken: response.data.listPosts.nextToken
      };
    } catch (error) {
      console.error('Error fetching home feed:', error);
      return {
        posts: [],
        nextToken: null
      };
    }
  }

  /**
   * Get posts by user
   */
  async getUserPosts(userId: string, limit: number = 20, nextToken?: string) {
    try {
      const response = await client.graphql({
        query: queries.postsByUserIdAndCreatedAt,
        variables: {
          userId,
          limit,
          nextToken,
          sortDirection: 'DESC'
        }
      });

      const posts = response.data.postsByUserIdAndCreatedAt.items;
      
      // Get URLs for all images
      const postsWithUrls = await Promise.all(
        posts.map(async (post: any) => ({
          ...post,
          imageUrl: await this.getImageUrl(post.imageKey)
        }))
      );

      return {
        posts: postsWithUrls,
        nextToken: response.data.postsByUserIdAndCreatedAt.nextToken
      };
    } catch (error) {
      console.error('Error fetching user posts:', error);
      return {
        posts: [],
        nextToken: null
      };
    }
  }
}

export const postService = new PostService();