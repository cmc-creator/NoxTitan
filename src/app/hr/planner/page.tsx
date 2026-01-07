'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, CheckCircle, Clock, AlertTriangle, Bell, Users, FileText, Award, Shield, Heart, TrendingUp, Plus, Check, X, Settings, Filter, Download, Upload, Search, Star, Zap, Target, MessageSquare, Paperclip, MoreVertical, Edit, Trash2, Copy, Archive, Pin, Tag, RefreshCw, Eye } from 'lucide-react';

export default function HRPlanner() {
  const [activeView, setActiveView] = useState('today');
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showNotes, setShowNotes] = useState<number | null>(null);
  const [pinnedTasks, setPinnedTasks] = useState<number[]>([1, 6]);
  
  // Settings state
  const [settings, setSettings] = useState({
    autoReminders: true,
    emailNotifications: true,
    slackIntegration: false,
    defaultView: 'today',
    taskSortOrder: 'priority',
    showCompletedTasks: false,
    theme: 'dark',
    workStartTime: '9:00 AM',
    workEndTime: '5:00 PM',
    reminderLeadTime: 30,
    managerReminderFrequency: 'daily',
    autoArchiveCompleted: true,
    showWeekNumbers: false,
    compactView: false,
  });

  const myTasks = [
    { id: 1, title: 'Review 3 new job applications for ICU Nurse', priority: 'high', category: 'Recruiting', time: '9:00 AM', completed: false, assignedTo: 'You', notes: 'Focus on candidates with 3+ years ICU experience', tags: ['urgent', 'hiring'], attachments: 2, estimatedTime: '45 min' },
    { id: 2, title: 'Schedule interviews for Radiology Tech candidates', priority: 'high', category: 'Recruiting', time: '10:30 AM', completed: false, assignedTo: 'You', notes: '', tags: ['interviews'], attachments: 0, estimatedTime: '30 min' },
    { id: 3, title: 'Process background check results for Emily Rodriguez', priority: 'medium', category: 'Onboarding', time: '11:00 AM', completed: false, assignedTo: 'You', notes: 'Waiting on fingerprint results', tags: ['onboarding', 'new-hire'], attachments: 1, estimatedTime: '20 min' },
    { id: 4, title: 'Update employee handbook with new PTO policy', priority: 'low', category: 'Policy', time: '2:00 PM', completed: false, assignedTo: 'You', notes: 'Sync with legal department first', tags: ['policy', 'documentation'], attachments: 3, estimatedTime: '60 min' },
    { id: 5, title: 'Prepare Q1 performance review templates', priority: 'medium', category: 'Performance', time: '3:30 PM', completed: false, assignedTo: 'You', notes: '', tags: ['performance', 'quarterly'], attachments: 0, estimatedTime: '40 min' },
    { id: 6, title: 'Follow up on 8 expiring certifications', priority: 'high', category: 'Compliance', time: '4:00 PM', completed: false, assignedTo: 'You', notes: 'BLS and ACLS certifications need renewal', tags: ['compliance', 'urgent'], attachments: 1, estimatedTime: '35 min' },
    { id: 7, title: 'Review compensation analysis for nursing staff', priority: 'medium', category: 'Compensation', time: '9:30 AM', completed: false, assignedTo: 'You', notes: '', tags: ['compensation'], attachments: 2, estimatedTime: '50 min' },
    { id: 8, title: 'Respond to 12 employee inquiries', priority: 'medium', category: 'Employee Relations', time: '1:00 PM', completed: false, assignedTo: 'You', notes: '', tags: ['support'], attachments: 0, estimatedTime: '45 min' },
  ];

  const taskTemplates = [
    { id: 't1', name: 'New Hire Onboarding Checklist', tasks: 8, category: 'Onboarding' },
    { id: 't2', name: 'Performance Review Cycle', tasks: 12, category: 'Performance' },
    { id: 't3', name: 'Monthly Compliance Audit', tasks: 6, category: 'Compliance' },
    { id: 't4', name: 'Open Enrollment Preparation', tasks: 15, category: 'Benefits' },
  ];

  const recentActivity = [
    { type: 'completed', task: 'Approved 5 time-off requests', time: '1 hour ago', user: 'You' },
    { type: 'reminder_sent', task: 'Sent reminder to Dr. Chen for performance review', time: '2 hours ago', user: 'You' },
    { type: 'created', task: 'Created new task: Schedule exit interview', time: '3 hours ago', user: 'You' },
    { type: 'updated', task: 'Updated certification deadline for Sarah Johnson', time: '4 hours ago', user: 'You' },
  ];

  const notifications = [
    { id: 'n1', title: 'Manager Review Overdue', message: 'Dr. Michael Chen has not completed performance review', priority: 'high', time: '10 min ago' },
    { id: 'n2', title: 'New Application Received', message: 'RN - ICU position has 3 new applicants', priority: 'medium', time: '25 min ago' },
    { id: 'n3', title: 'Certification Expiring', message: 'David Martinez BLS cert expires in 7 days', priority: 'high', time: '1 hour ago' },
  ];

  const managerReminders = [
    { id: 101, manager: 'Dr. Michael Chen', action: 'Complete performance review for Sarah Johnson', dueDate: '2026-01-15', overdue: false, priority: 'high', department: 'ICU' },
    { id: 102, manager: 'Dr. Lisa Wong', action: 'Approve 5 pending time-off requests', dueDate: '2026-01-08', overdue: false, priority: 'high', department: 'Nursing' },
    { id: 103, manager: 'Jennifer Park', action: 'Submit staffing forecast for Q2', dueDate: '2026-01-10', overdue: false, priority: 'medium', department: 'Facilities' },
    { id: 104, manager: 'Sarah Williams', action: 'Review and approve merit increase recommendations', dueDate: '2026-01-12', overdue: false, priority: 'high', department: 'Operations' },
    { id: 105, manager: 'James Anderson', action: 'Complete compliance training module', dueDate: '2026-01-05', overdue: true, priority: 'high', department: 'Finance' },
    { id: 106, manager: 'Dr. Maria Garcia', action: 'Update department org chart', dueDate: '2026-01-20', overdue: false, priority: 'low', department: 'Medical' },
  ];

  const upcomingDeadlines = [
    { id: 201, title: 'Q1 Performance Reviews Due', date: '2026-01-31', daysUntil: 26, type: 'Performance', affected: 87 },
    { id: 202, title: 'Open Enrollment Period Ends', date: '2026-01-15', daysUntil: 10, type: 'Benefits', affected: 247 },
    { id: 203, title: 'Compliance Training Deadline', date: '2026-01-20', daysUntil: 15, type: 'Compliance', affected: 34 },
    { id: 204, title: 'Annual I-9 Audit', date: '2026-02-01', daysUntil: 27, type: 'Compliance', affected: 247 },
    { id: 205, title: 'New Hire Orientation Session', date: '2026-01-08', daysUntil: 3, type: 'Onboarding', affected: 5 },
  ];

  const recurringTasks = [
    { id: 301, title: 'Review new applications', frequency: 'Daily', nextDue: 'Tomorrow 9:00 AM', category: 'Recruiting' },
    { id: 302, title: 'Process payroll changes', frequency: 'Weekly - Friday', nextDue: 'Friday 2:00 PM', category: 'Payroll' },
    { id: 303, title: 'Update headcount report', frequency: 'Weekly - Monday', nextDue: 'Monday 10:00 AM', category: 'Reporting' },
    { id: 304, title: 'Certification expiration check', frequency: 'Monthly - 1st', nextDue: 'Feb 1, 9:00 AM', category: 'Compliance' },
  ];

  const toggleTaskComplete = (taskId: number) => {
    setCompletedTasks(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const sendManagerReminder = (reminderId: number) => {
    alert('Reminder email sent to manager!');
  };

  const togglePin = (taskId: number) => {
    setPinnedTasks(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const filteredTasks = myTasks
    .filter(task => {
      if (filterPriority !== 'all' && task.priority !== filterPriority) return false;
      if (filterCategory !== 'all' && task.category !== filterCategory) return false;
      if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (!settings.showCompletedTasks && completedTasks.includes(task.id)) return false;
      return true;
    })
    .sort((a, b) => {
      // Pinned tasks first
      const aPin = pinnedTasks.includes(a.id) ? 0 : 1;
      const bPin = pinnedTasks.includes(b.id) ? 0 : 1;
      if (aPin !== bPin) return aPin - bPin;
      
      // Then by priority
      if (settings.taskSortOrder === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/hr" className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-100 mb-4 transition-colors">
            ← Back to HR Center
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-200 to-violet-200 mb-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(139,92,246,0.6)',
                    WebkitTextStroke: '1px rgba(139,92,246,0.3)',
                    filter: 'brightness(1.4)'
                  }}>
                HR Daily Planner
              </h1>
              <p className="text-violet-200">Your command center for HR operations & manager accountability</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button className="px-4 py-2 bg-slate-800/50 border-2 border-violet-500/30 hover:border-violet-400 text-white rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                    3
                  </span>
                </button>
              </div>
              
              {/* Settings Button */}
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-lg font-bold transition-all shadow-lg flex items-center gap-2"
              >
                <Settings className="w-5 h-5" />
                Settings
              </button>
              
              {/* Date Display */}
              <div className="text-right bg-slate-800/50 border-2 border-violet-500/30 rounded-lg px-4 py-2">
                <div className="text-sm text-violet-300 mb-1">Today's Date</div>
                <div className="text-xl font-bold text-white">Jan 5, 2026</div>
                <div className="text-xs text-violet-300">Sunday</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-4 border-2 border-blue-500/30">
            <CheckCircle className="w-8 h-8 text-blue-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">My Tasks Today</div>
            <div className="text-3xl font-bold text-white">{myTasks.length}</div>
            <div className="text-blue-400 text-xs mt-1">{completedTasks.length} completed</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl p-4 border-2 border-orange-500/30">
            <Bell className="w-8 h-8 text-orange-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Manager Reminders</div>
            <div className="text-3xl font-bold text-white">{managerReminders.length}</div>
            <div className="text-orange-400 text-xs mt-1">1 overdue</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/50 to-rose-900/50 rounded-xl p-4 border-2 border-red-500/30">
            <AlertTriangle className="w-8 h-8 text-red-400 mb-2 animate-pulse" />
            <div className="text-slate-300 text-sm mb-1">High Priority</div>
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-red-400 text-xs mt-1">Needs attention</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border-2 border-purple-500/30">
            <Calendar className="w-8 h-8 text-purple-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Upcoming Deadlines</div>
            <div className="text-3xl font-bold text-white">{upcomingDeadlines.length}</div>
            <div className="text-purple-400 text-xs mt-1">Next 30 days</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border-2 border-emerald-500/30">
            <Clock className="w-8 h-8 text-emerald-400 mb-2" />
            <div className="text-slate-300 text-sm mb-1">Recurring Tasks</div>
            <div className="text-3xl font-bold text-white">{recurringTasks.length}</div>
            <div className="text-emerald-400 text-xs mt-1">Automated reminders</div>
          </div>
        </div>

        {/* Advanced Toolbar */}
        <div className="bg-slate-800/50 rounded-xl p-4 border-2 border-violet-500/30 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search tasks, managers, or deadlines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-violet-500 outline-none"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <button
                  onClick={() => setShowFilterMenu(!showFilterMenu)}
                  className={`px-4 py-2 border-2 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                    filterPriority !== 'all' || filterCategory !== 'all'
                      ? 'bg-violet-600 border-violet-500 text-white'
                      : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Filter className="w-5 h-5" />
                  Filter
                  {(filterPriority !== 'all' || filterCategory !== 'all') && (
                    <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
                      Active
                    </span>
                  )}
                </button>
                
                {showFilterMenu && (
                  <div className="absolute top-full mt-2 left-0 bg-slate-800 border-2 border-violet-500/30 rounded-lg p-4 shadow-2xl z-50 w-72">
                    <div className="mb-4">
                      <label className="text-sm text-slate-400 mb-2 block">Priority</label>
                      <select
                        value={filterPriority}
                        onChange={(e) => setFilterPriority(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-violet-500 outline-none"
                      >
                        <option value="all">All Priorities</option>
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low">Low Priority</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Category</label>
                      <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-violet-500 outline-none"
                      >
                        <option value="all">All Categories</option>
                        <option value="Recruiting">Recruiting</option>
                        <option value="Onboarding">Onboarding</option>
                        <option value="Performance">Performance</option>
                        <option value="Compliance">Compliance</option>
                        <option value="Policy">Policy</option>
                        <option value="Compensation">Compensation</option>
                        <option value="Employee Relations">Employee Relations</option>
                      </select>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => {
                          setFilterPriority('all');
                          setFilterCategory('all');
                        }}
                        className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => setShowFilterMenu(false)}
                        className="flex-1 px-3 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-semibold"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNewTaskModal(true)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Task
              </button>
              
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Import
              </button>
              
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>

              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Sync
              </button>
            </div>
          </div>
        </div>

        {/* Task Templates Quick Access */}
        <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-xl p-4 border-2 border-violet-500/30 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Quick Start Templates
            </h3>
            <button className="text-sm text-violet-300 hover:text-violet-100">View All →</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {taskTemplates.map(template => (
              <button
                key={template.id}
                className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-violet-500 rounded-lg p-3 text-left transition-all group"
              >
                <div className="text-white font-semibold mb-1 group-hover:text-violet-300">{template.name}</div>
                <div className="text-xs text-slate-400">{template.tasks} tasks • {template.category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-lg">
          {[
            { id: 'today', label: 'Today\'s Tasks' },
            { id: 'reminders', label: 'Manager Reminders' },
            { id: 'deadlines', label: 'Upcoming Deadlines' },
            { id: 'recurring', label: 'Recurring Tasks' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                activeView === tab.id ? 'bg-violet-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Today's Tasks View */}
        {activeView === 'today' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-violet-500/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">My Tasks for Today</h2>
                <button className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Task
                </button>
              </div>
              <div className="space-y-3">
                {filteredTasks.map(task => {
                  const isCompleted = completedTasks.includes(task.id);
                  const isPinned = pinnedTasks.includes(task.id);
                  return (
                    <div
                      key={task.id}
                      className={`rounded-lg p-5 border-2 transition-all relative ${
                        isPinned ? 'ring-2 ring-yellow-500' : ''
                      } ${
                        isCompleted
                          ? 'bg-emerald-900/20 border-emerald-500/30'
                          : task.priority === 'high'
                          ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30'
                          : task.priority === 'medium'
                          ? 'bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-500/30'
                          : 'bg-slate-900/50 border-slate-700'
                      }`}
                    >
                      {isPinned && (
                        <div className="absolute top-2 right-2">
                          <Pin className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                      )}
                      
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleTaskComplete(task.id)}
                          className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            isCompleted
                              ? 'bg-emerald-600 border-emerald-600'
                              : 'border-slate-500 hover:border-violet-400'
                          }`}
                        >
                          {isCompleted && <Check className="w-4 h-4 text-white" />}
                        </button>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className={`text-lg font-semibold ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>
                              {task.title}
                            </h3>
                          </div>
                          
                          <div className="flex items-center gap-2 flex-wrap mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              task.priority === 'high' ? 'bg-red-600 text-white' :
                              task.priority === 'medium' ? 'bg-orange-600 text-white' :
                              'bg-blue-600 text-white'
                            }`}>
                              {task.priority.toUpperCase()}
                            </span>
                            <span className="px-3 py-1 bg-violet-600 text-white rounded-full text-xs font-semibold">
                              {task.category}
                            </span>
                            {task.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full text-xs flex items-center gap-1">
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {task.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              {task.estimatedTime}
                            </span>
                            {task.attachments > 0 && (
                              <span className="flex items-center gap-1">
                                <Paperclip className="w-4 h-4" />
                                {task.attachments} files
                              </span>
                            )}
                          </div>
                          
                          {task.notes && showNotes === task.id && (
                            <div className="bg-slate-800/50 rounded-lg p-3 mb-3 border border-slate-600">
                              <div className="flex items-start gap-2">
                                <MessageSquare className="w-4 h-4 text-blue-400 mt-0.5" />
                                <div className="text-sm text-slate-300">{task.notes}</div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {!isCompleted && (
                          <div className="flex flex-col gap-2">
                            <button className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-semibold">
                              Start
                            </button>
                            <div className="relative group">
                              <button className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                              <div className="hidden group-hover:block absolute right-0 mt-1 bg-slate-800 border-2 border-violet-500/30 rounded-lg shadow-2xl z-50 w-48">
                                <button
                                  onClick={() => togglePin(task.id)}
                                  className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center gap-2"
                                >
                                  <Pin className="w-4 h-4" />
                                  {isPinned ? 'Unpin' : 'Pin to Top'}
                                </button>
                                <button
                                  onClick={() => setShowNotes(showNotes === task.id ? null : task.id)}
                                  className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center gap-2"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                  {showNotes === task.id ? 'Hide Notes' : 'Show Notes'}
                                </button>
                                <button className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center gap-2">
                                  <Edit className="w-4 h-4" />
                                  Edit Task
                                </button>
                                <button className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center gap-2">
                                  <Copy className="w-4 h-4" />
                                  Duplicate
                                </button>
                                <button className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 flex items-center gap-2">
                                  <Archive className="w-4 h-4" />
                                  Archive
                                </button>
                                <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-slate-700 flex items-center gap-2">
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-5 border-2 border-blue-500/30 hover:border-blue-400 cursor-pointer transition-all group">
                <FileText className="w-10 h-10 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Review Applications</h3>
                <p className="text-sm text-blue-200">12 new applications awaiting review</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl p-5 border-2 border-orange-500/30 hover:border-orange-400 cursor-pointer transition-all group">
                <Award className="w-10 h-10 text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Performance Reviews</h3>
                <p className="text-sm text-orange-200">23 reviews pending completion</p>
              </div>
              <div className="bg-gradient-to-br from-red-900/50 to-rose-900/50 rounded-xl p-5 border-2 border-red-500/30 hover:border-red-400 cursor-pointer transition-all group">
                <Shield className="w-10 h-10 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Compliance Check</h3>
                <p className="text-sm text-red-200">8 certifications expiring soon</p>
              </div>
            </div>
          </div>
        )}

        {/* Manager Reminders View */}
        {activeView === 'reminders' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-orange-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Manager Action Reminders</h2>
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Send All Reminders
              </button>
            </div>
            <div className="space-y-4">
              {managerReminders.map(reminder => (
                <div
                  key={reminder.id}
                  className={`rounded-lg p-5 border-2 ${
                    reminder.overdue
                      ? 'bg-gradient-to-r from-red-900/40 to-orange-900/40 border-red-500/50 animate-pulse'
                      : 'bg-slate-900/50 border-slate-700 hover:border-orange-500'
                  } transition-all`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{reminder.manager}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          reminder.overdue ? 'bg-red-600 text-white animate-pulse' :
                          reminder.priority === 'high' ? 'bg-orange-600 text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {reminder.overdue ? 'OVERDUE' : reminder.priority.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold">
                          {reminder.department}
                        </span>
                      </div>
                      <div className="text-lg text-slate-200 mb-3">{reminder.action}</div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`flex items-center gap-1 ${reminder.overdue ? 'text-red-400 font-bold' : 'text-slate-400'}`}>
                          <Calendar className="w-4 h-4" />
                          Due: {reminder.dueDate}
                        </span>
                        {reminder.overdue && (
                          <span className="text-red-400 font-bold flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            ACTION REQUIRED
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <button
                        onClick={() => sendManagerReminder(reminder.id)}
                        className={`px-4 py-2 ${
                          reminder.overdue ? 'bg-red-600 hover:bg-red-500' : 'bg-orange-600 hover:bg-orange-500'
                        } text-white rounded-lg font-semibold flex items-center gap-2 text-sm`}
                      >
                        <Bell className="w-4 h-4" />
                        Send Reminder
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Deadlines View */}
        {activeView === 'deadlines' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Upcoming Deadlines (Next 30 Days)</h2>
            <div className="space-y-4">
              {upcomingDeadlines.map(deadline => (
                <div key={deadline.id} className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-5 border border-purple-500/30 hover:border-purple-400 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{deadline.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          deadline.daysUntil <= 7 ? 'bg-red-600 text-white' :
                          deadline.daysUntil <= 14 ? 'bg-orange-600 text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {deadline.daysUntil} DAYS LEFT
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-slate-300">
                          <strong className="text-purple-300">Due:</strong> {deadline.date}
                        </span>
                        <span className="text-slate-300">
                          <strong className="text-purple-300">Type:</strong> {deadline.type}
                        </span>
                        <span className="text-slate-300 flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {deadline.affected} employees affected
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recurring Tasks View */}
        {activeView === 'recurring' && (
          <div className="bg-slate-800/50 rounded-xl p-6 border-2 border-emerald-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recurring Tasks & Automation</h2>
              <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create Recurring Task
              </button>
            </div>
            <div className="space-y-4">
              {recurringTasks.map(task => (
                <div key={task.id} className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg p-5 border border-emerald-500/30 hover:border-emerald-400 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{task.title}</h3>
                        <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold">
                          {task.frequency}
                        </span>
                        <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold">
                          {task.category}
                        </span>
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="text-emerald-300 font-semibold">Next Due:</span> {task.nextDue}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-sm">
                        Edit Schedule
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm">
                        Pause
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-2 border-violet-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-violet-500/30 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-purple-400">
                  Planner Settings
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Notifications Section */}
              <div className="bg-slate-900/50 rounded-xl p-5 border border-violet-500/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-violet-400" />
                  Notifications & Alerts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Auto Reminders</label>
                      <p className="text-sm text-slate-400">Automatically send reminders for upcoming tasks</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, autoReminders: !settings.autoReminders})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.autoReminders ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.autoReminders ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Email Notifications</label>
                      <p className="text-sm text-slate-400">Receive email alerts for important updates</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, emailNotifications: !settings.emailNotifications})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.emailNotifications ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.emailNotifications ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Slack Integration</label>
                      <p className="text-sm text-slate-400">Send notifications to Slack channels</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, slackIntegration: !settings.slackIntegration})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.slackIntegration ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.slackIntegration ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Reminder Lead Time (minutes)</label>
                    <input
                      type="number"
                      value={settings.reminderLeadTime}
                      onChange={(e) => setSettings({...settings, reminderLeadTime: parseInt(e.target.value)})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Manager Reminder Frequency</label>
                    <select
                      value={settings.managerReminderFrequency}
                      onChange={(e) => setSettings({...settings, managerReminderFrequency: e.target.value})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    >
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* View Preferences */}
              <div className="bg-slate-900/50 rounded-xl p-5 border border-violet-500/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-400" />
                  View Preferences
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-white font-semibold block mb-2">Default View</label>
                    <select
                      value={settings.defaultView}
                      onChange={(e) => setSettings({...settings, defaultView: e.target.value})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    >
                      <option value="today">Today's Tasks</option>
                      <option value="reminders">Manager Reminders</option>
                      <option value="deadlines">Upcoming Deadlines</option>
                      <option value="recurring">Recurring Tasks</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Task Sort Order</label>
                    <select
                      value={settings.taskSortOrder}
                      onChange={(e) => setSettings({...settings, taskSortOrder: e.target.value})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    >
                      <option value="priority">Priority</option>
                      <option value="time">Time</option>
                      <option value="category">Category</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-semibold block mb-2">Theme</label>
                    <select
                      value={settings.theme}
                      onChange={(e) => setSettings({...settings, theme: e.target.value})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    >
                      <option value="dark">Dark (Default)</option>
                      <option value="light">Light</option>
                      <option value="auto">Auto</option>
                      <option value="midnight">Midnight Blue</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Show Completed Tasks</label>
                      <p className="text-sm text-slate-400">Display completed tasks in the list</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, showCompletedTasks: !settings.showCompletedTasks})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.showCompletedTasks ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.showCompletedTasks ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Compact View</label>
                      <p className="text-sm text-slate-400">Reduce spacing for more tasks on screen</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, compactView: !settings.compactView})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.compactView ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.compactView ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Show Week Numbers</label>
                      <p className="text-sm text-slate-400">Display ISO week numbers in calendar views</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, showWeekNumbers: !settings.showWeekNumbers})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.showWeekNumbers ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.showWeekNumbers ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Work Hours */}
              <div className="bg-slate-900/50 rounded-xl p-5 border border-violet-500/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  Work Hours
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white font-semibold block mb-2">Work Start Time</label>
                    <input
                      type="time"
                      value={settings.workStartTime}
                      onChange={(e) => setSettings({...settings, workStartTime: e.target.value})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold block mb-2">Work End Time</label>
                    <input
                      type="time"
                      value={settings.workEndTime}
                      onChange={(e) => setSettings({...settings, workEndTime: e.target.value})}
                      className="w-full bg-slate-800 border border-violet-500/30 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Automation */}
              <div className="bg-slate-900/50 rounded-xl p-5 border border-violet-500/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Automation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-semibold">Auto-Archive Completed Tasks</label>
                      <p className="text-sm text-slate-400">Automatically archive tasks after 7 days</p>
                    </div>
                    <button
                      onClick={() => setSettings({...settings, autoArchiveCompleted: !settings.autoArchiveCompleted})}
                      className={`w-14 h-7 rounded-full transition-all ${settings.autoArchiveCompleted ? 'bg-violet-600' : 'bg-slate-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.autoArchiveCompleted ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-4">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowSettings(false);
                    // Here you would save settings to database/localStorage
                    alert('Settings saved successfully!');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-violet-500/30"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

