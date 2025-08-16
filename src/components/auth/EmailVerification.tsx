'use client';

import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface EmailVerificationProps {
  email: string;
  onSuccess: () => void;
  onBack: () => void;
}

export default function EmailVerification({ email, onSuccess, onBack }: EmailVerificationProps) {
  const { confirmSignUp, resendConfirmationCode } = useAuth();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      setError('Please enter the verification code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await confirmSignUp(email, code);
      
      if (result.success) {
        setSuccess('Email verified successfully!');
        setTimeout(() => {
          onSuccess();
        }, 1000);
      } else {
        setError(result.error || 'Failed to verify email');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await resendConfirmationCode(email);
      
      if (result.success) {
        setSuccess('Verification code sent to your email');
      } else {
        setError(result.error || 'Failed to resend verification code');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to resend verification code');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">S</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h1>
        <p className="text-gray-600">
          We sent a verification code to{' '}
          <span className="font-medium text-gray-900">{email}</span>
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-600 text-sm">{success}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Verification Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
            Verification code
          </label>
          <input
            id="code"
            name="code"
            type="text"
            required
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (error) setError('');
              if (success) setSuccess('');
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-wider"
            placeholder="Enter 6-digit code"
            maxLength={6}
          />
          <p className="text-xs text-gray-500 mt-2">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Verifying...</span>
            </div>
          ) : (
            'Verify email'
          )}
        </button>
      </form>

      {/* Resend Code */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-3">Didn't receive the code?</p>
        <button
          onClick={handleResendCode}
          disabled={resendLoading}
          className="text-blue-600 hover:text-blue-700 font-semibold disabled:opacity-50"
        >
          {resendLoading ? 'Sending...' : 'Resend code'}
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-700 font-medium"
        >
          ← Back to sign up
        </button>
      </div>
    </div>
  );
}