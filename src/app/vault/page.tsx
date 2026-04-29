'use client';

import { useState, useEffect } from 'react';
import { Package, Plus, Search, Filter, Barcode, MapPin, User, Calendar, TrendingUp, AlertCircle, CheckCircle, DollarSign, FileSignature } from 'lucide-react';

interface Asset {
  id: string;
  assetTag: string;
  name: string;
  description?: string;
  category: {
    name: string;
    icon?: string;
  };
  serialNumber?: string;
  manufacturer?: string;
  model?: string;
  status: string;
  condition: string;
  location?: string;
  assignedTo?: {
    firstName: string;
    lastName: string;
  };
  purchasePrice?: number;
  currentValue?: number;
  purchaseDate?: string;
}

export default function AssetVaultPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchAssets();
    fetchCategories();
  }, []);

  async function fetchAssets() {
    try {
      const response = await fetch('/api/assets');
      if (response.ok) {
        const data = await response.json();
        setAssets(data);
      }
    } catch (error) {
      console.error('Failed to fetch assets:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const response = await fetch('/api/assets/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  }

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.assetTag.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.serialNumber?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || asset.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || asset.category.name === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const stats = {
    total: assets.length,
    available: assets.filter(a => a.status === 'AVAILABLE').length,
    assigned: assets.filter(a => a.status === 'ASSIGNED').length,
    maintenance: assets.filter(a => a.status === 'IN_MAINTENANCE').length,
    totalValue: assets.reduce((sum, a) => sum + (a.currentValue || 0), 0),
  };

  function getStatusColor(status: string) {
    switch (status) {
      case 'AVAILABLE': return 'bg-[rgba(201,168,76,0.06)] text-green-400 border-[rgba(201,168,76,0.22)]';
      case 'ASSIGNED': return 'bg-amber-600/20 text-amber-400 border-amber-500/40';
      case 'IN_MAINTENANCE': return 'bg-[rgba(201,168,76,0.06)] text-[#9E8F75] border-[rgba(201,168,76,0.22)]';
      case 'RETIRED': return 'bg-[rgba(201,168,76,0.06)] text-[#9E8F75] border-[rgba(201,168,76,0.22)]';
      case 'LOST': return 'bg-[rgba(201,168,76,0.06)] text-red-400 border-[rgba(201,168,76,0.22)]';
      case 'DAMAGED': return 'bg-[rgba(201,168,76,0.06)] text-red-400 border-[rgba(201,168,76,0.22)]';
      default: return 'bg-[rgba(201,168,76,0.06)] text-[#9E8F75] border-[rgba(201,168,76,0.22)]';
    }
  }

  function getConditionColor(condition: string) {
    switch (condition) {
      case 'EXCELLENT': return 'text-green-400';
      case 'GOOD': return 'text-amber-400';
      case 'FAIR': return 'text-[#C9A84C]';
      case 'POOR': return 'text-[#9E8F75]';
      case 'DAMAGED': return 'text-red-400';
      default: return 'text-[#9E8F75]';
    }
  }

  return (
    <div className="min-h-screen lux-app-bg p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Package className="w-10 h-10 text-amber-400" />
              Asset Vault
            </h1>
            <p className="text-[#9E8F75]">Inventory & equipment management</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.href = '/vault/payroll-flags'}
              className="px-6 py-3 bg-[rgba(201,168,76,0.12)] hover:bg-[rgba(201,168,76,0.12)] text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <AlertCircle className="w-5 h-5" />
              Payroll Flags
            </button>
            <button
              onClick={() => window.location.href = '/vault/treasury'}
              className="px-6 py-3 bg-green-500 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <FileSignature className="w-5 h-5" />
              Treasury Checkout
            </button>
            <button
              onClick={() => window.location.href = '/vault/categories'}
              className="px-6 py-3 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white font-semibold rounded-lg transition-colors"
            >
              Manage Categories
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.22)] border border-[rgba(201,168,76,0.45)] text-white font-semibold rounded-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Asset
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-amber-400" />
              <span className="text-3xl font-bold text-white">{stats.total}</span>
            </div>
            <p className="text-[#9E8F75] font-semibold">Total Assets</p>
          </div>

          <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-green-400">{stats.available}</span>
            </div>
            <p className="text-[#F0EBE0] font-semibold">Available</p>
          </div>

          <div className="bg-amber-600/10 border border-amber-500/40/50 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <User className="w-8 h-8 text-amber-400" />
              <span className="text-3xl font-bold text-amber-400">{stats.assigned}</span>
            </div>
            <p className="text-amber-400 font-semibold">Assigned</p>
          </div>

          <div className="bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.22)] rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-[#9E8F75]" />
              <span className="text-3xl font-bold text-[#9E8F75]">{stats.maintenance}</span>
            </div>
            <p className="text-[#9E8F75] font-semibold">Maintenance</p>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/40/50 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-amber-400" />
              <span className="text-3xl font-bold text-amber-400">
                ${(stats.totalValue / 1000).toFixed(0)}K
              </span>
            </div>
            <p className="text-[#C9A84C] font-semibold">Total Value</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E8F75]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, asset tag, or serial number..."
                className="w-full pl-11 pr-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-amber-500/40"
              />
            </div>
            <Filter className="w-5 h-5 text-[#9E8F75]" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white text-sm focus:outline-none focus:border-amber-500/40"
            >
              <option value="all">All Status</option>
              <option value="AVAILABLE">Available</option>
              <option value="ASSIGNED">Assigned</option>
              <option value="IN_MAINTENANCE">In Maintenance</option>
              <option value="RETIRED">Retired</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.22)] rounded-lg text-white text-sm focus:outline-none focus:border-amber-500/40"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500/40 mx-auto mb-4"></div>
              <p className="text-[#9E8F75]">Loading assets...</p>
            </div>
          ) : filteredAssets.length === 0 ? (
            <div className="col-span-full bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-12 text-center">
              <Package className="w-16 h-16 text-[#9E8F75] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Assets Found</h3>
              <p className="text-[#9E8F75] mb-6">Add your first asset to get started!</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Add First Asset
              </button>
            </div>
          ) : (
            filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => window.location.href = `/vault/assets/${asset.id}`}
                className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded p-6 hover:border-[rgba(201,168,76,0.45)]/50 transition-all cursor-pointer group"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{asset.category.icon || '📦'}</span>
                    <span className="text-sm text-[#9E8F75]">{asset.category.name}</span>
                  </div>
                  <span className={`px-2 py-1 border rounded-lg text-xs font-semibold ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </div>

                {/* Asset Info */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {asset.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Barcode className="w-4 h-4 text-[#9E8F75]" />
                  <span className="text-sm text-[#9E8F75]">{asset.assetTag}</span>
                </div>

                {asset.description && (
                  <p className="text-sm text-[#9E8F75] mb-3 line-clamp-2">{asset.description}</p>
                )}

                {/* Details */}
                <div className="space-y-2 mb-4">
                  {asset.manufacturer && (
                    <div className="text-sm text-[#9E8F75]">
                      <span className="text-[#9E8F75]">Make/Model:</span> {asset.manufacturer} {asset.model}
                    </div>
                  )}
                  {asset.serialNumber && (
                    <div className="text-sm text-[#9E8F75]">
                      <span className="text-[#9E8F75]">S/N:</span> {asset.serialNumber}
                    </div>
                  )}
                  {asset.location && (
                    <div className="flex items-center gap-2 text-sm text-[#9E8F75]">
                      <MapPin className="w-4 h-4 text-[#9E8F75]" />
                      <span>{asset.location}</span>
                    </div>
                  )}
                </div>

                {/* Assignment Status */}
                {asset.assignedTo && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-amber-600/10 border border-amber-500/40/30 rounded-lg mb-3">
                    <User className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-amber-400">
                      {asset.assignedTo.firstName} {asset.assignedTo.lastName}
                    </span>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[rgba(201,168,76,0.22)]">
                  <div>
                    <div className={`text-sm font-semibold ${getConditionColor(asset.condition)}`}>
                      {asset.condition}
                    </div>
                  </div>
                  {asset.currentValue && (
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        ${asset.currentValue.toLocaleString()}
                      </div>
                      <div className="text-xs text-[#9E8F75]">Current Value</div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


