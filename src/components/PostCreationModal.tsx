'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, Upload, ArrowLeft, MapPin, Smile, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { postService } from '../services/postService';

interface PostCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostCreationModal({ isOpen, onClose }: PostCreationModalProps) {
  const { user } = useAuth();
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
      
      // Success! Reset and close
      handleClose();
      
      // Optionally refresh the feed or show success message
      window.location.reload(); // Simple refresh for now
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
      setStep('details');
    }
  };

  // Handle modal close
  const handleClose = () => {
    setStep('upload');
    setSelectedFile(null);
    setPreviewUrl(null);
    setCaption('');
    setLocation('');
    setAltText('');
    setHideLikes(false);
    setDisableComments(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          {step !== 'upload' && (
            <button
              onClick={() => setStep('upload')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <h2 className="text-xl font-semibold flex-1 text-center">
            {step === 'upload' && 'Create new post'}
            {step === 'details' && 'Create new post'}
            {step === 'processing' && 'Sharing...'}
          </h2>
          {step === 'details' && (
            <button
              onClick={handleCreatePost}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Share
            </button>
          )}
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex h-[70vh]">
          {/* Upload Step */}
          {step === 'upload' && (
            <div
              className="flex-1 flex flex-col items-center justify-center p-8"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Upload className="w-20 h-20 text-gray-400 mb-4" />
              <h3 className="text-2xl font-light mb-2">Drag photos and videos here</h3>
              <p className="text-gray-500 mb-6">or</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
          )}

          {/* Details Step */}
          {step === 'details' && (
            <>
              {/* Preview */}
              <div className="flex-1 bg-black flex items-center justify-center">
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

              {/* Form */}
              <div className="w-96 p-6 overflow-y-auto">
                {/* User info */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {user?.profile?.username?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="font-semibold">{user?.profile?.username || user?.email || 'User'}</span>
                </div>

                {/* Caption */}
                <textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full p-2 border-0 resize-none focus:outline-none text-gray-900"
                  rows={8}
                  maxLength={2200}
                />
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <button className="hover:text-gray-600">
                    <Smile className="w-5 h-5" />
                  </button>
                  <span>{caption.length}/2,200</span>
                </div>

                {/* Location */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <input
                      type="text"
                      placeholder="Add location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="flex-1 focus:outline-none text-gray-900"
                    />
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Accessibility */}
                <details className="border-t pt-4">
                  <summary className="flex items-center justify-between cursor-pointer mb-2">
                    <span className="font-semibold">Accessibility</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </summary>
                  <input
                    type="text"
                    placeholder="Alt text"
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Alt text describes your photos for people with visual impairments.
                  </p>
                </details>

                {/* Advanced Settings */}
                <details className="border-t pt-4 mt-4">
                  <summary className="flex items-center justify-between cursor-pointer mb-4">
                    <span className="font-semibold">Advanced settings</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </summary>
                  
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <span>Hide like and view counts on this post</span>
                      <input
                        type="checkbox"
                        checked={hideLikes}
                        onChange={(e) => setHideLikes(e.target.checked)}
                        className="rounded"
                      />
                    </label>
                    
                    <label className="flex items-center justify-between">
                      <span>Turn off commenting</span>
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
            </>
          )}

          {/* Processing Step */}
          {step === 'processing' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="w-20 h-20 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
              <h3 className="text-xl font-light">Your post is being shared...</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}