'use client';

import { useState, useEffect } from 'react';
import { Calendar, CheckSquare, Plus, Filter, Clock, AlertCircle, TrendingUp, Users, Bell } from 'lucide-react';

interface HRTask {
  id: string;
  title: string;
  description?: string;
  type: string;
  priority: string;
  status: string;
  dueDate: string;
  completedAt?: string;
  relatedEmployee?: {
    firstName: string;
    lastName: string;
  };
  manager?: {
    firstName: string;
    lastName: string;
  };
}

export default function HRPlannerPage() {
  const [tasks, setTasks] = useState<HRTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'CHECK_IN',
    priority: 'MEDIUM',
    dueDate: new Date().toISOString().split('T')[0],
    relatedEmployeeId: '',
  });
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    fetchTasks();
    fetchEmployees();
  }, []);

  async function fetchTasks() {
    try {
      const response = await fetch('/api/hr/tasks');
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchEmployees() {
    try {
      const response = await fetch('/api/employees');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    }
  }

  async function handleCreateTask(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch('/api/hr/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchTasks();
        setShowModal(false);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  }

  async function completeTask(taskId: string) {
    try {
      const response = await fetch('/api/hr/tasks', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId, status: 'COMPLETED' }),
      });

      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Failed to complete task:', error);
    }
  }

  function resetForm() {
    setFormData({
      title: '',
      description: '',
      type: 'CHECK_IN',
      priority: 'MEDIUM',
      dueDate: new Date().toISOString().split('T')[0],
      relatedEmployeeId: '',
    });
  }

  const filteredTasks = tasks.filter(task => {
    if (filterType !== 'all' && task.type !== filterType) return false;
    if (filterStatus !== 'all' && task.status !== filterStatus) return false;
    return true;
  });

  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'PENDING').length,
    overdue: tasks.filter(t => t.status === 'OVERDUE').length,
    completed: tasks.filter(t => t.status === 'COMPLETED').length,
  };

  function getPriorityColor(priority: string) {
    switch (priority) {
      case 'URGENT': return 'text-red-400 bg-red-500/20 border-red-500';
      case 'HIGH': return 'text-orange-400 bg-orange-500/20 border-orange-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
      case 'LOW': return 'text-blue-400 bg-blue-500/20 border-blue-500';
      default: return 'text-slate-400 bg-slate-500/20 border-slate-500';
    }
  }

  function getTaskTypeIcon(type: string) {
    switch (type) {
      case 'CHECK_IN': return '👥';
      case 'SURVEY': return '📋';
      case 'REVIEW': return '⭐';
      case 'ONBOARDING': return '🎯';
      case 'TRAINING': return '📚';
      case 'COMPLIANCE': return '⚖️';
      default: return '📌';
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">HR Planner</h1>
            <p className="text-slate-400">Manage check-ins, surveys, and HR tasks</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Task
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckSquare className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-white">{stats.total}</span>
            </div>
            <p className="text-slate-300 font-semibold">Total Tasks</p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold text-yellow-400">{stats.pending}</span>
            </div>
            <p className="text-yellow-300 font-semibold">Pending</p>
          </div>

          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-red-400" />
              <span className="text-3xl font-bold text-red-400">{stats.overdue}</span>
            </div>
            <p className="text-red-300 font-semibold">Overdue</p>
          </div>

          <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-green-400">{stats.completed}</span>
            </div>
            <p className="text-green-300 font-semibold">Completed</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-slate-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="CHECK_IN">Check-Ins</option>
              <option value="SURVEY">Surveys</option>
              <option value="REVIEW">Reviews</option>
              <option value="ONBOARDING">Onboarding</option>
              <option value="TRAINING">Training</option>
              <option value="COMPLIANCE">Compliance</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
              <option value="OVERDUE">Overdue</option>
            </select>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {loading ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading tasks...</p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <CheckSquare className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Tasks Found</h3>
              <p className="text-slate-400 mb-6">Create your first HR task to get started!</p>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Create Task
              </button>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`bg-slate-800/50 backdrop-blur border rounded-xl p-6 hover:border-blue-500/50 transition-colors ${
                  task.status === 'OVERDUE' ? 'border-red-500/50' : 'border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-3xl">{getTaskTypeIcon(task.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{task.title}</h3>
                        <span className={`px-2 py-1 border rounded-lg text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      {task.description && (
                        <p className="text-slate-400 text-sm mb-3">{task.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm">
                        {task.relatedEmployee && (
                          <div className="flex items-center gap-2 text-slate-300">
                            <Users className="w-4 h-4" />
                            <span>{task.relatedEmployee.firstName} {task.relatedEmployee.lastName}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          task.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' :
                          task.status === 'OVERDUE' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  {task.status !== 'COMPLETED' && (
                    <button
                      onClick={() => completeTask(task.id)}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Create Task Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full">
              <h2 className="text-2xl font-bold text-white mb-6">Create HR Task</h2>

              <form onSubmit={handleCreateTask} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Task Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Schedule 30-day check-in with John"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Additional details about this task..."
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Task Type *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="CHECK_IN">Manager Check-In</option>
                      <option value="SURVEY">Employee Survey</option>
                      <option value="REVIEW">Performance Review</option>
                      <option value="ONBOARDING">Onboarding</option>
                      <option value="TRAINING">Training</option>
                      <option value="COMPLIANCE">Compliance</option>
                      <option value="CUSTOM">Custom Task</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Priority *
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="LOW">Low</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HIGH">High</option>
                      <option value="URGENT">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Due Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Related Employee
                    </label>
                    <select
                      value={formData.relatedEmployeeId}
                      onChange={(e) => setFormData({ ...formData, relatedEmployeeId: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">None</option>
                      {employees.map((emp) => (
                        <option key={emp.id} value={emp.id}>
                          {emp.firstName} {emp.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
