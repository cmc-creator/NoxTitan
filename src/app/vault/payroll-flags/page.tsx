'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, DollarSign, User, Package, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

interface PayrollDeduction {
 id: string;
 employee: {
 firstName: string;
 lastName: string;
 employeeId: string;
 };
 asset?: {
 name: string;
 assetTag: string;
 };
 deductionType: string;
 amount: number;
 reason: string;
 status: string;
 scheduledDate: string;
 appliedDate?: string;
 createdAt: string;
}

export default function PayrollFlagsPage() {
 const [deductions, setDeductions] = useState<PayrollDeduction[]>([]);
 const [loading, setLoading] = useState(true);
 const [filterStatus, setFilterStatus] = useState('all');

 useEffect(() => {
 fetchDeductions();
 }, []);

 async function fetchDeductions() {
 try {
 const response = await fetch('/api/payroll/deductions');
 if (response.ok) {
 const data = await response.json();
 setDeductions(data);
 }
 } catch (error) {
 console.error('Failed to fetch deductions:', error);
 } finally {
 setLoading(false);
 }
 }

 async function checkOverdueAssets() {
 setLoading(true);
 try {
 const response = await fetch('/api/assets/treasury/overdue');
 if (response.ok) {
 const data = await response.json();
 alert(`✅ Flagged ${data.flaggedCount} overdue assets for payroll deduction`);
 fetchDeductions();
 }
 } catch (error) {
 console.error('Failed to check overdue:', error);
 } finally {
 setLoading(false);
 }
 }

 async function updateStatus(id: string, status: string) {
 try {
 const response = await fetch('/api/payroll/deductions', {
 method: 'PATCH',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ deductionId: id, status }),
 });

 if (response.ok) {
 fetchDeductions();
 }
 } catch (error) {
 console.error('Failed to update status:', error);
 }
 }

 const filteredDeductions = deductions.filter(d => 
 filterStatus === 'all' || d.status === filterStatus
 );

 const stats = {
 total: deductions.length,
 pending: deductions.filter(d => d.status === 'PENDING').length,
 approved: deductions.filter(d => d.status === 'APPROVED').length,
 applied: deductions.filter(d => d.status === 'APPLIED').length,
 totalAmount: deductions.filter(d => d.status !== 'CANCELLED').reduce((sum, d) => sum + d.amount, 0),
 };

 function getStatusColor(status: string) {
 switch (status) {
 case 'PENDING': return 'bg-[rgba(201,168,76,0.06)] text-[#C9A84C] border-[rgba(201,168,76,0.22)]';
 case 'APPROVED': return 'bg-amber-600/20 text-amber-400 border-amber-500/40';
 case 'APPLIED': return 'bg-[rgba(201,168,76,0.06)] text-green-400 border-[rgba(201,168,76,0.22)]';
 case 'CANCELLED': return 'bg-[rgba(201,168,76,0.06)] text-[#9E8F75] border-[rgba(201,168,76,0.22)]';
 case 'DISPUTED': return 'bg-[rgba(201,168,76,0.06)] text-red-400 border-[rgba(201,168,76,0.22)]';
 default: return 'bg-[rgba(201,168,76,0.06)] text-[#9E8F75] border-[rgba(201,168,76,0.22)]';
 }
 }

 return (
 <div className="min-h-screen lux-app-bg p-8">
 <div className="max-w-7xl mx-auto">
 {/* Header */}
 <div className="flex items-center justify-between mb-8">
 <div>
 <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
 <AlertTriangle className="w-10 h-10 text-[#9E8F75]" />
 Payroll Deduction Flags
 </h1>
 <p className="text-[#9E8F75]">Unreturned & damaged asset deductions</p>
 </div>
 <button
 onClick={checkOverdueAssets}
 disabled={loading}
 className="px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white font-semibold rounded-lg transition-all disabled:opacity-50"
 >
 {loading ? 'Checking...' : 'Check Overdue Assets'}
 </button>
 </div>

 {/* Stats */}
 <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
 <div className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-6">
 <div className="flex items-center justify-between mb-2">
 <AlertTriangle className="w-8 h-8 text-[#9E8F75]" />
 <span className="text-3xl font-bold text-white">{stats.total}</span>
 </div>
 <p className="text-[#9E8F75] font-semibold">Total Flags</p>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded p-6">
 <div className="flex items-center justify-between mb-2">
 <Clock className="w-8 h-8 text-[#C9A84C]" />
 <span className="text-3xl font-bold text-[#C9A84C]">{stats.pending}</span>
 </div>
 <p className="text-[#F0EBE0] font-semibold">Pending</p>
 </div>

 <div className="bg-amber-600/10 border border-amber-500/40/50 rounded p-6">
 <div className="flex items-center justify-between mb-2">
 <CheckCircle className="w-8 h-8 text-amber-400" />
 <span className="text-3xl font-bold text-amber-400">{stats.approved}</span>
 </div>
 <p className="text-amber-400 font-semibold">Approved</p>
 </div>

 <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded p-6">
 <div className="flex items-center justify-between mb-2">
 <DollarSign className="w-8 h-8 text-green-400" />
 <span className="text-3xl font-bold text-green-400">{stats.applied}</span>
 </div>
 <p className="text-[#F0EBE0] font-semibold">Applied</p>
 </div>

 <div className="bg-amber-500/10 border border-amber-500/40/50 rounded p-6">
 <div className="flex items-center justify-between mb-2">
 <DollarSign className="w-8 h-8 text-amber-400" />
 <span className="text-3xl font-bold text-amber-400">
 ${(stats.totalAmount / 1000).toFixed(1)}K
 </span>
 </div>
 <p className="text-[#C9A84C] font-semibold">Total Amount</p>
 </div>
 </div>

 {/* Filter */}
 <div className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-4 mb-6">
 <select
 value={filterStatus}
 onChange={(e) => setFilterStatus(e.target.value)}
 className="px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white focus:outline-none focus:border-amber-500/40"
 >
 <option value="all">All Status</option>
 <option value="PENDING">Pending</option>
 <option value="APPROVED">Approved</option>
 <option value="APPLIED">Applied</option>
 <option value="CANCELLED">Cancelled</option>
 <option value="DISPUTED">Disputed</option>
 </select>
 </div>

 {/* Deductions List */}
 <div className="space-y-4">
 {filteredDeductions.map((deduction) => (
 <div key={deduction.id} className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-6">
 <div className="flex items-start justify-between mb-4">
 <div className="flex items-start gap-4 flex-1">
 <div className="w-12 h-12 bg-[rgba(201,168,76,0.06)] rounded-full flex items-center justify-center flex-shrink-0">
 <AlertTriangle className="w-6 h-6 text-[#9E8F75]" />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="text-lg font-bold text-white">
 {deduction.employee.firstName} {deduction.employee.lastName}
 </h3>
 <span className={`px-3 py-1 border rounded-lg text-xs font-semibold ${getStatusColor(deduction.status)}`}>
 {deduction.status}
 </span>
 </div>

 <div className="grid grid-cols-2 gap-4 mb-3">
 <div className="flex items-center gap-2 text-[#9E8F75]">
 <User className="w-4 h-4 text-[#9E8F75]" />
 <span className="text-sm">{deduction.employee.employeeId}</span>
 </div>
 {deduction.asset && (
 <div className="flex items-center gap-2 text-[#9E8F75]">
 <Package className="w-4 h-4 text-[#9E8F75]" />
 <span className="text-sm">{deduction.asset.name} ({deduction.asset.assetTag})</span>
 </div>
 )}
 </div>

 <p className="text-[#9E8F75] mb-3">{deduction.reason}</p>

 <div className="flex items-center gap-4 text-sm">
 <div className="flex items-center gap-2">
 <Calendar className="w-4 h-4 text-[#9E8F75]" />
 <span className="text-[#9E8F75]">
 Scheduled: {new Date(deduction.scheduledDate).toLocaleDateString()}
 </span>
 </div>
 {deduction.appliedDate && (
 <div className="flex items-center gap-2">
 <CheckCircle className="w-4 h-4 text-green-400" />
 <span className="text-green-400">
 Applied: {new Date(deduction.appliedDate).toLocaleDateString()}
 </span>
 </div>
 )}
 </div>
 </div>
 </div>

 <div className="text-right">
 <div className="text-2xl font-bold text-red-400 mb-4">
 -${deduction.amount.toLocaleString()}
 </div>

 {deduction.status === 'PENDING' && (
 <div className="flex flex-col gap-2">
 <button
 onClick={() => updateStatus(deduction.id, 'APPROVED')}
 className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors"
 >
 Approve
 </button>
 <button
 onClick={() => updateStatus(deduction.id, 'CANCELLED')}
 className="px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white text-sm font-semibold rounded-lg transition-colors"
 >
 Cancel
 </button>
 </div>
 )}

 {deduction.status === 'APPROVED' && (
 <button
 onClick={() => updateStatus(deduction.id, 'APPLIED')}
 className="px-4 py-2 bg-green-500 hover:bg-green-500 text-white text-sm font-semibold rounded-lg transition-colors"
 >
 Mark Applied
 </button>
 )}
 </div>
 </div>
 </div>
 ))}

 {filteredDeductions.length === 0 && (
 <div className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-12 text-center">
 <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
 <h3 className="text-xl font-bold text-white mb-2">All Clear!</h3>
 <p className="text-[#9E8F75]">No payroll deductions at this time.</p>
 </div>
 )}
 </div>
 </div>
 </div>
 );
}


