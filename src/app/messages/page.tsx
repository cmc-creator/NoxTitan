'use client';

import { useState } from 'react';
import { MessageCircle, Send, Search, Plus, Users, User, Phone, Video, MoreVertical, Paperclip, Smile, Check, CheckCheck, Circle } from 'lucide-react';

interface Message {
  id: number;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
  reactions?: string[];
}

interface Conversation {
  id: string;
  name: string;
  type: 'private' | 'group';
  participants: string[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  avatar: string;
  online?: boolean;
}

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<string>('conv-1');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewChatModal, setShowNewChatModal] = useState(false);

  const conversations: Conversation[] = [
    {
      id: 'conv-1',
      name: 'Sarah Miller',
      type: 'private',
      participants: ['sarah-miller'],
      lastMessage: 'Thanks for covering my shift today!',
      lastMessageTime: '2m ago',
      unreadCount: 2,
      avatar: '👩',
      online: true,
    },
    {
      id: 'conv-2',
      name: 'Team Leaders',
      type: 'group',
      participants: ['john-davis', 'mike-johnson', 'rachel-green'],
      lastMessage: 'John: Let\'s discuss the schedule for next week',
      lastMessageTime: '15m ago',
      unreadCount: 5,
      avatar: '👥',
    },
    {
      id: 'conv-3',
      name: 'Alex Thompson',
      type: 'private',
      participants: ['alex-thompson'],
      lastMessage: 'When is my next shift?',
      lastMessageTime: '1h ago',
      unreadCount: 0,
      avatar: '👨',
      online: false,
    },
    {
      id: 'conv-4',
      name: 'Kitchen Staff',
      type: 'group',
      participants: ['emma-wilson', 'david-lee', 'alex-thompson'],
      lastMessage: 'Emma: Remember to check inventory tomorrow',
      lastMessageTime: '2h ago',
      unreadCount: 0,
      avatar: '🍳',
    },
    {
      id: 'conv-5',
      name: 'Emma Wilson',
      type: 'private',
      participants: ['emma-wilson'],
      lastMessage: 'See you tomorrow!',
      lastMessageTime: '3h ago',
      unreadCount: 0,
      avatar: '👩',
      online: true,
    },
    {
      id: 'conv-6',
      name: 'All Staff',
      type: 'group',
      participants: ['all'],
      lastMessage: 'Management: Team meeting on Friday at 3pm',
      lastMessageTime: '5h ago',
      unreadCount: 0,
      avatar: '📢',
    },
  ];

  const messages: Record<string, Message[]> = {
    'conv-1': [
      { id: 1, senderId: 'sarah-miller', senderName: 'Sarah Miller', content: 'Hey! Are you available to cover my shift tomorrow?', timestamp: '10:30 AM', read: true },
      { id: 2, senderId: 'me', senderName: 'You', content: 'Sure, no problem! What time?', timestamp: '10:32 AM', read: true },
      { id: 3, senderId: 'sarah-miller', senderName: 'Sarah Miller', content: '2pm to 8pm. I have a doctor\'s appointment.', timestamp: '10:33 AM', read: true },
      { id: 4, senderId: 'me', senderName: 'You', content: 'Got it, I\'ll be there!', timestamp: '10:35 AM', read: true },
      { id: 5, senderId: 'sarah-miller', senderName: 'Sarah Miller', content: 'Thanks for covering my shift today!', timestamp: '2:15 PM', read: false, reactions: ['👍', '❤️'] },
      { id: 6, senderId: 'sarah-miller', senderName: 'Sarah Miller', content: 'You\'re a lifesaver! 🙏', timestamp: '2:16 PM', read: false },
    ],
    'conv-2': [
      { id: 1, senderId: 'john-davis', senderName: 'John Davis', content: 'Hi team, we need to finalize next week\'s schedule', timestamp: 'Yesterday 4:30 PM', read: true },
      { id: 2, senderId: 'mike-johnson', senderName: 'Mike Johnson', content: 'I can work Monday through Wednesday', timestamp: 'Yesterday 4:35 PM', read: true },
      { id: 3, senderId: 'rachel-green', senderName: 'Rachel Green', content: 'I need Thursday off for a training session', timestamp: 'Yesterday 5:00 PM', read: true },
      { id: 4, senderId: 'me', senderName: 'You', content: 'I\'m flexible this week, let me know what you need', timestamp: 'Yesterday 5:15 PM', read: true },
      { id: 5, senderId: 'john-davis', senderName: 'John Davis', content: 'Let\'s discuss the schedule for next week', timestamp: '1:45 PM', read: false },
    ],
    'conv-3': [
      { id: 1, senderId: 'alex-thompson', senderName: 'Alex Thompson', content: 'When is my next shift?', timestamp: '12:30 PM', read: true },
      { id: 2, senderId: 'me', senderName: 'You', content: 'Let me check the schedule...', timestamp: '12:32 PM', read: true },
    ],
  };

  const employees = [
    { id: 'sarah-miller', name: 'Sarah Miller', department: 'Sales', avatar: '👩', online: true },
    { id: 'john-davis', name: 'John Davis', department: 'Operations', avatar: '👨', online: true },
    { id: 'emma-wilson', name: 'Emma Wilson', department: 'Kitchen', avatar: '👩', online: true },
    { id: 'mike-johnson', name: 'Mike Johnson', department: 'Management', avatar: '👨', online: false },
    { id: 'alex-thompson', name: 'Alex Thompson', department: 'Kitchen', avatar: '👨', online: false },
    { id: 'rachel-green', name: 'Rachel Green', department: 'HR', avatar: '👩', online: true },
    { id: 'david-lee', name: 'David Lee', department: 'Maintenance', avatar: '👨', online: false },
    { id: 'lisa-anderson', name: 'Lisa Anderson', department: 'Sales', avatar: '👩', online: true },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add message logic here
      setMessageInput('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeConv = conversations.find(c => c.id === activeConversation);
  const activeMessages = messages[activeConversation] || [];

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Header */}
      <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
        <h1 className="text-3xl font-bold flex items-center gap-3" style={{ color: 'var(--header-text)' }}>
          <MessageCircle className="h-8 w-8" style={{ color: 'var(--today-highlight)' }} />
          Messages
        </h1>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Conversations Sidebar */}
        <div className="w-80 border-r flex flex-col" style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}>
          {/* Search & New Chat */}
          <div className="p-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg"
                style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)', color: 'var(--body-text)' }}
              />
            </div>
            <button
              onClick={() => setShowNewChatModal(true)}
              className="w-full py-2 px-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
              style={{ background: 'var(--primary-btn)' }}
            >
              <Plus className="h-4 w-4" />
              New Chat
            </button>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setActiveConversation(conv.id)}
                className={`p-4 cursor-pointer hover:bg-opacity-70 transition-all border-l-4 ${
                  activeConversation === conv.id ? 'border-opacity-100' : 'border-transparent'
                }`}
                style={{
                  background: activeConversation === conv.id ? 'var(--calendar-bg)' : 'transparent',
                  borderLeftColor: activeConversation === conv.id ? 'var(--today-highlight)' : 'transparent',
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="text-3xl">{conv.avatar}</div>
                    {conv.type === 'private' && conv.online && (
                      <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold truncate" style={{ color: 'var(--header-text)' }}>
                        {conv.name}
                      </div>
                      <div className="text-xs opacity-60 whitespace-nowrap ml-2">
                        {conv.lastMessageTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm opacity-70 truncate flex-1">
                        {conv.lastMessage}
                      </div>
                      {conv.unreadCount > 0 && (
                        <div
                          className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold text-white"
                          style={{ background: 'var(--today-highlight)' }}
                        >
                          {conv.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col" style={{ background: 'var(--page-bg)' }}>
          {activeConv ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="text-4xl">{activeConv.avatar}</div>
                    {activeConv.type === 'private' && activeConv.online && (
                      <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: 'var(--header-text)' }}>
                      {activeConv.name}
                    </div>
                    <div className="text-sm opacity-60">
                      {activeConv.type === 'private' 
                        ? (activeConv.online ? 'Online' : 'Offline')
                        : `${activeConv.participants.length} members`}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {activeConv.type === 'private' && (
                    <>
                      <button className="p-2 rounded-lg hover:bg-opacity-70 transition-all" style={{ background: 'var(--calendar-bg)' }}>
                        <Phone className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-opacity-70 transition-all" style={{ background: 'var(--calendar-bg)' }}>
                        <Video className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  <button className="p-2 rounded-lg hover:bg-opacity-70 transition-all" style={{ background: 'var(--calendar-bg)' }}>
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {activeMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md ${msg.senderId === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
                      {msg.senderId !== 'me' && (
                        <div className="text-xs font-semibold mb-1 opacity-70">{msg.senderName}</div>
                      )}
                      <div
                        className="px-4 py-2 rounded-2xl"
                        style={{
                          background: msg.senderId === 'me' ? 'var(--primary-btn)' : 'var(--card-bg)',
                          color: msg.senderId === 'me' ? '#ffffff' : 'var(--body-text)',
                        }}
                      >
                        <div>{msg.content}</div>
                        {msg.reactions && msg.reactions.length > 0 && (
                          <div className="flex gap-1 mt-1">
                            {msg.reactions.map((reaction, idx) => (
                              <span key={idx} className="text-sm">{reaction}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-xs opacity-60">
                        <span>{msg.timestamp}</span>
                        {msg.senderId === 'me' && (
                          msg.read ? <CheckCheck className="h-3 w-3 text-blue-500" /> : <Check className="h-3 w-3" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t" style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}>
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-opacity-70 transition-all" style={{ background: 'var(--calendar-bg)' }}>
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 px-4 py-3 rounded-xl"
                    style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)', color: 'var(--body-text)' }}
                  />
                  <button className="p-2 rounded-lg hover:bg-opacity-70 transition-all" style={{ background: 'var(--calendar-bg)' }}>
                    <Smile className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-3 rounded-xl text-white font-semibold hover:scale-105 transition-all"
                    style={{ background: 'var(--primary-btn)' }}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <div className="text-xl font-semibold opacity-70">Select a conversation to start messaging</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* New Chat Modal */}
      {showNewChatModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-2xl rounded-2xl shadow-2xl" style={{ background: 'var(--card-bg)' }}>
            <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>
                  Start New Chat
                </h2>
                <button
                  onClick={() => setShowNewChatModal(false)}
                  className="p-2 rounded-lg hover:bg-opacity-70 transition-all"
                  style={{ background: 'var(--calendar-bg)' }}
                >
                  ×
                </button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg"
                  style={{ background: 'var(--calendar-bg)', border: '1px solid var(--border-color)', color: 'var(--body-text)' }}
                />
              </div>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {employees.map((employee) => (
                  <button
                    key={employee.id}
                    onClick={() => {
                      setShowNewChatModal(false);
                      // Add logic to start new conversation
                    }}
                    className="w-full p-4 rounded-xl flex items-center gap-3 hover:bg-opacity-70 transition-all"
                    style={{ background: 'var(--calendar-bg)' }}
                  >
                    <div className="relative">
                      <div className="text-3xl">{employee.avatar}</div>
                      {employee.online && (
                        <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold" style={{ color: 'var(--header-text)' }}>
                        {employee.name}
                      </div>
                      <div className="text-sm opacity-60">{employee.department}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${employee.online ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                      {employee.online ? 'Online' : 'Offline'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
