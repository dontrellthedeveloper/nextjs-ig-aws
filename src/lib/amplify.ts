import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';

// Configure Amplify with additional settings for your social media app
export const configureAmplify = () => {
  try {
    Amplify.configure({
      ...amplifyconfig,
      // Add any additional configuration for your social media features
      ssr: true, // Enable server-side rendering support
    });
    
    console.log('✅ Amplify configured successfully');
  } catch (error) {
    console.error('❌ Error configuring Amplify:', error);
  }
};

// Export the configuration for use in other parts of your app
export { amplifyconfig };

// Helper function to check if Amplify is properly configured
export const isAmplifyConfigured = () => {
  try {
    const config = Amplify.getConfig();
    return !!config && !!config.aws_project_region;
  } catch {
    return false;
  }
};