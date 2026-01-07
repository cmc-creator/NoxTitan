'use client';

import { useState, useRef } from 'react';
import { Plus, Search, Edit, Trash2, Mail, Phone, Upload, User as UserIcon, UserX, UserCheck, AlertCircle, X } from 'lucide-react';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  hourlyRate: number;
  isActive: boolean;
  avatar?: string;
  department?: string;
  color?: string;
  employmentType: 'full-time' | 'part-time' | 'prn' | 'per-diem' | 'contract';
  weeklyHourLimit: number;
  overtimeThreshold?: number;
  terminationDate?: string;
  terminationReason?: string;
  notes?: string;
}

export default function EmployeesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [employeeToDeactivate, setEmployeeToDeactivate] = useState<Employee | null>(null);
  const [deactivationReason, setDeactivationReason] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      position: 'Manager',
      hourlyRate: 25,
      isActive: true,
      department: 'Operations',
      color: '#3b82f6',
      employmentType: 'full-time',
      weeklyHourLimit: 40,
      overtimeThreshold: 40,
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 234-5678',
      position: 'Staff',
      hourlyRate: 18,
      isActive: true,
      department: 'Sales',
      color: '#10b981',
      employmentType: 'part-time',
      weeklyHourLimit: 28,
      overtimeThreshold: 28,
    },
    {
      id: '3',
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.j@example.com',
      phone: '(555) 345-6789',
      position: 'Staff',
      hourlyRate: 18,
      isActive: true,
      department: 'Support',
      color: '#8b5cf6',
      employmentType: 'prn',
      weeklyHourLimit: 20,
      overtimeThreshold: 20,
    },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && selectedEmployee) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedEmployees = employees.map(emp =>
          emp.id === selectedEmployee.id ? { ...emp, avatar: reader.result as string } : emp
        );
        setEmployees(updatedEmployees);
        setSelectedEmployee({ ...selectedEmployee, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const employmentType = formData.get('employmentType') as 'full-time' | 'part-time' | 'prn' | 'per-diem' | 'contract';
    const weeklyHourLimit = parseInt(formData.get('weeklyHourLimit') as string);
    const newEmployee: Employee = {
      id: Date.now().toString(),
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      hourlyRate: parseFloat(formData.get('hourlyRate') as string),
      isActive: true,
      department: formData.get('department') as string,
      color: formData.get('color') as string,
      employmentType,
      weeklyHourLimit,
      overtimeThreshold: weeklyHourLimit,
      avatar: selectedEmployee?.avatar,
    };
    setEmployees([...employees, newEmployee]);
    setShowAddModal(false);
    setSelectedEmployee(null);
  };

  const handleDeactivateEmployee = () => {
    if (!employeeToDeactivate) return;
    
    setEmployees(employees.map(emp => 
      emp.id === employeeToDeactivate.id 
        ? { 
            ...emp, 
            isActive: false,
            terminationDate: new Date().toISOString().split('T')[0],
            terminationReason: deactivationReason
          }
        : emp
    ));
    setShowDeactivateModal(false);
    setEmployeeToDeactivate(null);
    setDeactivationReason('');
  };

  const handleReactivateEmployee = (employee: Employee) => {
    setEmployees(employees.map(emp => 
      emp.id === employee.id 
        ? { 
            ...emp, 
            isActive: true,
            terminationDate: undefined,
            terminationReason: undefined
          }
        : emp
    ));
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = 
      emp.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'active' ? emp.isActive :
      !emp.isActive;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Employees</h2>
          <p className="text-gray-500 mt-1">Manage your team members</p>
        </div>
        
        <button 
          onClick={() => { setShowAddModal(true); setSelectedEmployee(null); }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Add Employee
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Employees</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
        <div className="mt-3 flex gap-4 text-sm">
          <span className="text-gray-600">Total: <strong>{employees.length}</strong></span>
          <span className="text-green-600">Active: <strong>{employees.filter(e => e.isActive).length}</strong></span>
          <span className="text-red-600">Inactive: <strong>{employees.filter(e => !e.isActive).length}</strong></span>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div 
            key={employee.id} 
            className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 ${!employee.isActive ? 'opacity-75 bg-gray-50' : ''}`}
            style={{ borderLeft: `4px solid ${employee.color || '#3b82f6'}` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {employee.avatar ? (
                  <img 
                    src={employee.avatar} 
                    alt={`${employee.firstName} ${employee.lastName}`}
                    className={`w-14 h-14 rounded-full object-cover border-2 ${!employee.isActive ? 'grayscale' : ''}`}
                    style={{ borderColor: employee.color || '#3b82f6' }}
                  />
                ) : (
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${!employee.isActive ? 'grayscale' : ''}`}
                    style={{ backgroundColor: employee.color || '#3b82f6' }}
                  >
                    {employee.firstName[0]}{employee.lastName[0]}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {employee.firstName} {employee.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{employee.position}</p>
                  {employee.department && (
                    <p className="text-xs text-gray-400">{employee.department}</p>
                  )}
                </div>
              </div>
              {employee.isActive ? (
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full flex items-center gap-1">
                  <UserCheck className="h-3 w-3" />
                  Active
                </span>
              ) : (
                <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full flex items-center gap-1">
                  <UserX className="h-3 w-3" />
                  Inactive
                </span>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                {employee.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                {employee.phone}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Rate:</span> ${employee.hourlyRate}/hr
              </div>
              <div className="text-sm text-gray-600 capitalize">
                <span className="font-semibold">Type:</span> {employee.employmentType} ({employee.weeklyHourLimit} hrs/week)
              </div>
              {!employee.isActive && employee.terminationDate && (
                <div className="text-sm text-red-600 pt-2 border-t border-gray-200">
                  <span className="font-semibold">Terminated:</span> {new Date(employee.terminationDate).toLocaleDateString()}
                  {employee.terminationReason && (
                    <p className="text-xs mt-1 text-gray-500">Reason: {employee.terminationReason}</p>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
              {employee.isActive ? (
                <>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button 
                    onClick={() => {
                      setEmployeeToDeactivate(employee);
                      setShowDeactivateModal(true);
                    }}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <UserX className="h-4 w-4" />
                    Deactivate
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => handleReactivateEmployee(employee)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <UserCheck className="h-4 w-4" />
                    Reactivate
                  </button>
                  <button className="flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full my-8">
            <form onSubmit={handleSaveEmployee} className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Add New Employee</h3>
                <button
                  type="button"
                  onClick={() => { setShowAddModal(false); setSelectedEmployee(null); }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col items-center mb-6">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  {selectedEmployee?.avatar ? (
                    <img 
                      src={selectedEmployee.avatar} 
                      alt="Avatar"
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <UserIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Click to upload your own photo</p>
                
                {/* Default Avatar Selector */}
                <div className="mt-4 w-full">
                  <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Or choose a default avatar:</p>
                  <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
                    {[
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
                      'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
                    ].map((avatarUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedEmployee({ ...selectedEmployee!, avatar: avatarUrl })}
                        className={`w-12 h-12 rounded-full border-2 ${selectedEmployee?.avatar === avatarUrl ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'} hover:border-blue-400 transition-all`}
                      >
                        <img src={avatarUrl} alt={`Avatar ${idx + 1}`} className="w-full h-full rounded-full" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Position *</label>
                  <input
                    type="text"
                    name="position"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Manager"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                  <input
                    type="text"
                    name="department"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Operations"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Hourly Rate *</label>
                  <input
                    type="number"
                    name="hourlyRate"
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="25.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Type *</label>
                  <select
                    name="employmentType"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    onChange={(e) => {
                      const select = e.target;
                      const weeklyHourInput = select.form?.elements.namedItem('weeklyHourLimit') as HTMLInputElement;
                      if (weeklyHourInput) {
                        const defaults: Record<string, number> = {
                          'full-time': 40,
                          'part-time': 28,
                          'prn': 20,
                          'per-diem': 16,
                          'contract': 40
                        };
                        weeklyHourInput.value = defaults[select.value]?.toString() || '40';
                      }
                    }}
                  >
                    <option value="full-time">Full-Time (40 hrs/week)</option>
                    <option value="part-time">Part-Time (28 hrs/week)</option>
                    <option value="prn">PRN / As Needed (20 hrs/week)</option>
                    <option value="per-diem">Per Diem (16 hrs/week)</option>
                    <option value="contract">Contract (Varies)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Weekly Hour Limit *</label>
                  <input
                    type="number"
                    name="weeklyHourLimit"
                    required
                    min="1"
                    max="80"
                    defaultValue="40"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="40"
                  />
                  <p className="text-xs text-gray-500 mt-1">Shifts will turn red when exceeding this limit</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Calendar Color</label>
                  <div className="flex gap-2 flex-wrap">
                    {['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#ec4899'].map((color) => (
                      <label key={color} className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          value={color}
                          defaultChecked={color === '#3b82f6'}
                          className="sr-only peer"
                        />
                        <div
                          className="w-10 h-10 rounded-lg border-2 border-gray-300 peer-checked:border-gray-900 peer-checked:scale-110 transition-all shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => { setShowAddModal(false); setSelectedEmployee(null); }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2.5 rounded-lg font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all"
                >
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Deactivate Employee Modal */}
      {showDeactivateModal && employeeToDeactivate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Deactivate Employee</h3>
                  <p className="text-sm text-gray-500">This will mark the employee as inactive</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: employeeToDeactivate.color || '#3b82f6' }}
                  >
                    {employeeToDeactivate.firstName[0]}{employeeToDeactivate.lastName[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {employeeToDeactivate.firstName} {employeeToDeactivate.lastName}
                    </p>
                    <p className="text-sm text-gray-500">{employeeToDeactivate.position}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Reason for Termination *
                </label>
                <select
                  value={deactivationReason}
                  onChange={(e) => setDeactivationReason(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 mb-3"
                  required
                >
                  <option value="">Select a reason...</option>
                  <option value="Resigned">Resigned</option>
                  <option value="Terminated - Performance">Terminated - Performance</option>
                  <option value="Terminated - Misconduct">Terminated - Misconduct</option>
                  <option value="Laid Off">Laid Off</option>
                  <option value="Contract Ended">Contract Ended</option>
                  <option value="Retired">Retired</option>
                  <option value="Other">Other</option>
                </select>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-xs text-yellow-800">
                    <strong>Note:</strong> Deactivating an employee will:
                  </p>
                  <ul className="text-xs text-yellow-700 mt-2 ml-4 list-disc space-y-1">
                    <li>Remove them from scheduling</li>
                    <li>Disable their account access</li>
                    <li>Archive their past shifts</li>
                    <li>Keep their records for compliance</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowDeactivateModal(false);
                    setEmployeeToDeactivate(null);
                    setDeactivationReason('');
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2.5 rounded-lg font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeactivateEmployee}
                  disabled={!deactivationReason}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-4 py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <UserX className="w-5 h-5" />
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tier Limit Warning */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              You have <span className="font-semibold">3 of 10</span> employees on the Free tier.
              <a href="/" className="font-medium underline ml-2">Upgrade to add more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
