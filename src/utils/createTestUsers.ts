// Utility to create test users for development
// Run this in browser console or create a test page

export const testUsers = [
  {
    email: 'user1@test.com',
    password: 'TestPass123!',
    username: 'testuser1'
  },
  {
    email: 'user2@test.com',
    password: 'TestPass123!',
    username: 'testuser2'
  },
  {
    email: 'user3@test.com',
    password: 'TestPass123!',
    username: 'testuser3'
  },
  {
    email: 'john@test.com',
    password: 'TestPass123!',
    username: 'johndoe'
  },
  {
    email: 'jane@test.com',
    password: 'TestPass123!',
    username: 'janedoe'
  },
  {
    email: 'mike@test.com',
    password: 'TestPass123!',
    username: 'mikesmith'
  },
  {
    email: 'sarah@test.com',
    password: 'TestPass123!',
    username: 'sarahj'
  },
  {
    email: 'alex@test.com',
    password: 'TestPass123!',
    username: 'alexm'
  },
  {
    email: 'emma@test.com',
    password: 'TestPass123!',
    username: 'emmaw'
  },
  {
    email: 'chris@test.com',
    password: 'TestPass123!',
    username: 'chrisp'
  }
];

// Instructions for creating test users:
// 1. Sign up each user using the signup form
// 2. Since email verification is disabled for testing, you can immediately sign in
// 3. The user profile will be created in DynamoDB upon first sign-in

export const getTestUser = (index: number = 0) => {
  return testUsers[index] || testUsers[0];
};

// Helper to generate unique test emails
export const generateTestEmail = (prefix: string = 'test') => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 6);
  return `${prefix}_${timestamp}_${random}@test.com`;
};

// Helper to generate unique usernames
export const generateTestUsername = (prefix: string = 'user') => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 6);
  return `${prefix}_${random}`;
};