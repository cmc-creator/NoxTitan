'use client';

import { useState, useEffect } from 'react';
import { Check, X, Clock } from 'lucide-react';

interface TimeOffRequest {
  id: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
}

export default function TimeOffPage() {
  const [requests, setRequests] = useState<TimeOffRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/time-off')
      .then(r => r.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) {
          setRequests(data.map(r => ({
            id: r.id,
            employeeName: r.employee
              ? `${r.employee.firstName} ${r.employee.lastName}`
              : 'Unknown',
            startDate: r.startDate,
            endDate: r.endDate,
            reason: r.reason || '',
            status: r.status as 'PENDING' | 'APPROVED' | 'REJECTED',
            submittedAt: r.createdAt ? r.createdAt.split('T')[0] : '',
          })));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAction = async (id: string, status: 'APPROVED' | 'REJECTED') => {
    const res = await fetch(`/api/time-off/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-[rgba(201,168,76,0.04)] text-[#5A5040]';
      case 'APPROVED':
        return 'bg-[rgba(201,168,76,0.04)] text-green-400';
      case 'REJECTED':
        return 'bg-[rgba(201,168,76,0.04)] text-red-400';
      default:
        return 'bg-[rgba(201,168,76,0.06)] text-[#9E8F75]';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="h-4 w-4" />;
      case 'APPROVED':
        return <Check className="h-4 w-4" />;
      case 'REJECTED':
        return <X className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p style={{ color: '#9E8F75' }}>Loading requests...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#9E8F75]">Time Off Requests</h2>
        <p className="text-[#9E8F75] mt-1">Review and manage employee time-off requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="lux-card rounded p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#9E8F75]">Pending</p>
              <p className="text-3xl font-bold text-[#5A5040] mt-2">{requests.filter(r => r.status === 'PENDING').length}</p>
            </div>
            <div className="bg-[rgba(201,168,76,0.04)] p-3 rounded-lg">
              <Clock className="h-6 w-6 text-[#5A5040]" />
            </div>
          </div>
        </div>

        <div className="lux-card rounded p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#9E8F75]">Approved</p>
              <p className="text-3xl font-bold text-green-400 mt-2">{requests.filter(r => r.status === 'APPROVED').length}</p>
            </div>
            <div className="bg-[rgba(201,168,76,0.04)] p-3 rounded-lg">
              <Check className="h-6 w-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="lux-card rounded p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#9E8F75]">Total</p>
              <p className="text-3xl font-bold text-amber-400 mt-2">{requests.length}</p>
            </div>
            <div className="bg-[rgba(201,168,76,0.04)] p-3 rounded-lg">
              <Clock className="h-6 w-6 text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="lux-card rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stone-800">
            <thead className="bg-[#110F0B]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  Days
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#9E8F75] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#110F0B] divide-y divide-stone-800">
              {requests.map((request) => {
                const days = Math.ceil(
                  (new Date(request.endDate).getTime() - new Date(request.startDate).getTime()) / (1000 * 60 * 60 * 24)
                ) + 1;

                return (
                  <tr key={request.id} className="hover:bg-[#110F0B]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                          {request.employeeName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-[#9E8F75]">{request.employeeName}</div>
                          <div className="text-xs text-[#9E8F75]">Submitted {request.submittedAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#9E8F75]">
                      {new Date(request.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#9E8F75]">
                      {new Date(request.endDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#9E8F75]">
                      {days} {days === 1 ? 'day' : 'days'}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#9E8F75]">
                      {request.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {getStatusIcon(request.status)}
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {request.status === 'PENDING' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction(request.id, 'APPROVED')}
                            className="text-green-400 hover:text-green-300"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(request.id, 'REJECTED')}
                            className="text-red-400 hover:text-red-300"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade Notice for Free Tier */}
      <div className="bg-amber-900/20 border-l-4 border-[rgba(201,168,76,0.22)] p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-[#E8C060]">
              Time-off request management is a <span className="font-semibold">Gold tier feature</span>.
              <a href="/" className="font-medium underline ml-2">Upgrade now</a> to enable this functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



