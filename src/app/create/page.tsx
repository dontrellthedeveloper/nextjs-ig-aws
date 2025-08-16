'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Upload, MapPin, Smile, ChevronDown, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { postService } from '../../services/postService';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function CreatePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<'upload' | 'details' | 'processing'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [altText, setAltText] = useState('');
  const [hideLikes, setHideLikes] = useState(false);
  const [disableComments, setDisableComments] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        alert('Please select an image or video file');
        return;
      }

      // Validate file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        alert('File size must be less than 100MB');
        return;
      }

      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setStep('details');
    }
  };

  // Handle drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file) {
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        alert('Please select an image or video file');
        return;
      }

      if (file.size > 100 * 1024 * 1024) {
        alert('File size must be less than 100MB');
        return;
      }

      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setStep('details');
    }
  }, []);

  // Handle post creation
  const handleCreatePost = async () => {
    if (!selectedFile || !caption.trim()) {
      alert('Please add a caption to your post');
      return;
    }

    if (!user?.profile?.id) {
      alert('Please sign in to create a post');
      return;
    }

    setStep('processing');

    try {
      // Create the post (uploads to S3 and saves to DynamoDB)
      await postService.createPost({
        userId: user.profile.id,
        caption,
        location,
        altText,
        hideLikes,
        disableComments,
        file: selectedFile
      });
      
      // Success! Navigate to home
      router.push('/');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
      setStep('details');
    }
  };

  // Handle back navigation
  const handleBack = () => {
    if (step === 'details') {
      setStep('upload');
      setSelectedFile(null);
      setPreviewUrl(null);
    } else {
      router.push('/');
    }
  };

  return (
    <ProtectedRoute>
      <div className="bg-gray-50 min-h-screen font-sans">
        <AmplifyConfigCheck />
        <Navbar />
        <div className="flex pt-20">
          <Sidebar />
          <main className="flex-1 flex justify-center px-4 md:px-0">
            <div className="py-8 w-full max-w-4xl">
              {/* Header */}
              <div className="bg-white border border-gray-200 rounded-lg mb-6 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={handleBack}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {step === 'upload' && 'Create new post'}
                      {step === 'details' && 'Create new post'}
                      {step === 'processing' && 'Sharing...'}
                    </h1>
                  </div>
                  {step === 'details' && (
                    <button
                      onClick={handleCreatePost}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                    >
                      Share
                    </button>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div>
                {/* Upload Step */}
                {step === 'upload' && (
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-blue-400 transition-colors"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <Upload className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                      <h2 className="text-3xl font-light text-gray-900 mb-4">Drag photos and videos here</h2>
                      <p className="text-gray-500 mb-8 text-lg">Share moments with your friends</p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg"
                      >
                        Select from computer
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}

                {/* Details Step */}
                {step === 'details' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Preview */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <div className="aspect-square bg-black flex items-center justify-center">
                        {previewUrl && selectedFile?.type.startsWith('image/') && (
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain"
                          />
                        )}
                        {previewUrl && selectedFile?.type.startsWith('video/') && (
                          <video
                            src={previewUrl}
                            controls
                            className="max-w-full max-h-full"
                          />
                        )}
                      </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-xl border border-gray-200 p-8">
                      {/* User info */}
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">
                            {user?.profile?.username?.[0]?.toUpperCase() || 'U'}
                          </span>
                        </div>
                        <span className="text-xl font-semibold">{user?.profile?.username || user?.email || 'User'}</span>
                      </div>

                      {/* Caption */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Caption
                        </label>
                        <textarea
                          placeholder="Write a caption..."
                          value={caption}
                          onChange={(e) => setCaption(e.target.value)}
                          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                          rows={6}
                          maxLength={2200}
                        />
                        <div className="flex items-center justify-between mt-2">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Smile className="w-5 h-5" />
                          </button>
                          <span className="text-sm text-gray-500">{caption.length}/2,200</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Add location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                          />
                          <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      {/* Accessibility */}
                      <details className="mb-6">
                        <summary className="flex items-center justify-between cursor-pointer mb-2 font-medium text-gray-700">
                          <span>Accessibility</span>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </summary>
                        <input
                          type="text"
                          placeholder="Alt text"
                          value={altText}
                          onChange={(e) => setAltText(e.target.value)}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Alt text describes your photos for people with visual impairments.
                        </p>
                      </details>

                      {/* Advanced Settings */}
                      <details>
                        <summary className="flex items-center justify-between cursor-pointer mb-4 font-medium text-gray-700">
                          <span>Advanced settings</span>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </summary>
                        
                        <div className="space-y-4">
                          <label className="flex items-center justify-between">
                            <span className="text-gray-700">Hide like and view counts on this post</span>
                            <input
                              type="checkbox"
                              checked={hideLikes}
                              onChange={(e) => setHideLikes(e.target.checked)}
                              className="rounded"
                            />
                          </label>
                          
                          <label className="flex items-center justify-between">
                            <span className="text-gray-700">Turn off commenting</span>
                            <input
                              type="checkbox"
                              checked={disableComments}
                              onChange={(e) => setDisableComments(e.target.checked)}
                              className="rounded"
                            />
                          </label>
                        </div>
                      </details>
                    </div>
                  </div>
                )}

                {/* Processing Step */}
                {step === 'processing' && (
                  <div className="bg-white rounded-xl border border-gray-200 p-16 text-center">
                    <div className="w-24 h-24 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-3xl font-light text-gray-900">Your post is being shared...</h2>
                  </div>
                )}
              </div>
            </div>
          </main>
          <RightSidebar />
        </div>
      </div>
    </ProtectedRoute>
  );
}