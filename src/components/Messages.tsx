import React, { FC, useState } from 'react';
import Link from 'next/link';

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isMe: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: number;
  username: string;
  fullName: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  isTyping?: boolean;
  isPinned?: boolean;
  messages: Message[];
}

const Messages: FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [messageInput, setMessageInput] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const conversations: Conversation[] = [
    {
      id: 1,
      username: 'sarah_design',
      fullName: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d25b52?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Those mockups look amazing! 🎨',
      timestamp: '2m',
      unreadCount: 3,
      isOnline: true,
      isPinned: true,
      messages: [
        { id: 1, text: "Hey! Did you see the new designs?", timestamp: "10:00 AM", isMe: false },
        { id: 2, text: "Yes! They look incredible", timestamp: "10:02 AM", isMe: true, status: 'read' },
        { id: 3, text: "The color palette is perfect", timestamp: "10:03 AM", isMe: true, status: 'read' },
        { id: 4, text: "Thanks! I spent hours on those", timestamp: "10:05 AM", isMe: false },
        { id: 5, text: "Those mockups look amazing! 🎨", timestamp: "10:07 AM", isMe: false },
      ]
    },
    {
      id: 2,
      username: 'alex_dev',
      fullName: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Can we review the code tomorrow?',
      timestamp: '15m',
      unreadCount: 0,
      isOnline: true,
      isTyping: true,
      messages: [
        { id: 1, text: "The new feature is ready for review", timestamp: "9:30 AM", isMe: false },
        { id: 2, text: "Great! I'll check it out", timestamp: "9:35 AM", isMe: true, status: 'read' },
        { id: 3, text: "Can we review the code tomorrow?", timestamp: "9:45 AM", isMe: false },
      ]
    },
    {
      id: 3,
      username: 'jenny_photo',
      fullName: 'Jenny Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The sunset shots are breathtaking!',
      timestamp: '1h',
      unreadCount: 5,
      isOnline: false,
      messages: [
        { id: 1, text: "Just uploaded new photos!", timestamp: "8:00 AM", isMe: false },
        { id: 2, text: "The sunset shots are breathtaking!", timestamp: "8:15 AM", isMe: false },
      ]
    },
    {
      id: 4,
      username: 'mike_travel',
      fullName: 'Mike Anderson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'You: Sounds like an adventure!',
      timestamp: '3h',
      unreadCount: 0,
      isOnline: false,
      isPinned: true,
      messages: [
        { id: 1, text: "Planning my next trip to Japan", timestamp: "7:00 AM", isMe: false },
        { id: 2, text: "Sounds like an adventure!", timestamp: "7:30 AM", isMe: true, status: 'delivered' },
      ]
    },
    {
      id: 5,
      username: 'emma_foodie',
      fullName: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Have you tried the new restaurant?',
      timestamp: '5h',
      unreadCount: 2,
      isOnline: true,
      messages: [
        { id: 1, text: "Have you tried the new restaurant?", timestamp: "6:00 AM", isMe: false },
      ]
    },
    {
      id: 6,
      username: 'david_fitness',
      fullName: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'You: See you at the gym!',
      timestamp: '1d',
      unreadCount: 0,
      isOnline: false,
      messages: [
        { id: 1, text: "New workout routine is killer!", timestamp: "Yesterday", isMe: false },
        { id: 2, text: "See you at the gym!", timestamp: "Yesterday", isMe: true, status: 'read' },
      ]
    },
    {
      id: 7,
      username: 'lisa_artist',
      fullName: 'Lisa Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The gallery opening was amazing',
      timestamp: '2d',
      unreadCount: 0,
      isOnline: false,
      messages: [
        { id: 1, text: "The gallery opening was amazing", timestamp: "2 days ago", isMe: false },
      ]
    },
    {
      id: 8,
      username: 'team_project',
      fullName: 'Project Team',
      avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Meeting scheduled for Monday',
      timestamp: '3d',
      unreadCount: 12,
      isOnline: false,
      messages: [
        { id: 1, text: "Meeting scheduled for Monday", timestamp: "3 days ago", isMe: false },
      ]
    },
  ];

  const filteredConversations = conversations.filter(conv => 
    conv.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Conversations List */}
      <div className="w-96 border-r border-gray-100 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <div className="flex items-center gap-2">
              {totalUnread > 0 && (
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-semibold">
                  {totalUnread}
                </span>
              )}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors relative ${
                selectedConversation === conversation.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
            >
              {/* Pinned Indicator */}
              {conversation.isPinned && (
                <div className="absolute top-2 right-2">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                  </svg>
                </div>
              )}

              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <img
                  src={conversation.avatar}
                  alt={conversation.fullName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {conversation.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">{conversation.fullName}</h3>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{conversation.timestamp}</span>
                </div>
                <div className="flex items-center">
                  <p className={`text-sm truncate flex-1 ${
                    conversation.unreadCount > 0 ? 'text-gray-900 font-semibold' : 'text-gray-600'
                  }`}>
                    {conversation.isTyping ? (
                      <span className="italic text-green-600">typing...</span>
                    ) : (
                      conversation.lastMessage
                    )}
                  </p>
                  {conversation.unreadCount > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full font-semibold">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Message Thread */}
      {currentConversation ? (
        <div className="flex-1 flex flex-col">
          {/* Thread Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <Link href={`/users/${currentConversation.username}`} className="relative">
                <img
                  src={currentConversation.avatar}
                  alt={currentConversation.fullName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {currentConversation.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </Link>
              <div>
                <h3 className="font-semibold text-gray-900">{currentConversation.fullName}</h3>
                <p className="text-xs text-gray-500">
                  {currentConversation.isOnline ? 'Active now' : 'Offline'}
                  {currentConversation.isTyping && ' • Typing...'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {currentConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md ${
                  message.isMe 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                    : 'bg-white border border-gray-200 text-gray-900'
                } rounded-2xl px-4 py-2 shadow-sm`}>
                  <p className="text-sm">{message.text}</p>
                  <div className={`flex items-center gap-1 mt-1 ${
                    message.isMe ? 'justify-end' : 'justify-start'
                  }`}>
                    <span className={`text-xs ${
                      message.isMe ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </span>
                    {message.isMe && message.status && (
                      <span className="text-xs text-blue-100">
                        {message.status === 'read' && '✓✓'}
                        {message.status === 'delivered' && '✓'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {currentConversation.isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-4 py-2 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a conversation</h3>
            <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;