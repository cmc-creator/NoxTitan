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
      case 'AVAILABLE': return 'bg-green-500/20 text-green-400 border-green-500';
      case 'ASSIGNED': return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'IN_MAINTENANCE': return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'RETIRED': return 'bg-slate-500/20 text-slate-400 border-slate-500';
      case 'LOST': return 'bg-red-500/20 text-red-400 border-red-500';
      case 'DAMAGED': return 'bg-red-500/20 text-red-400 border-red-500';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500';
    }
  }

  function getConditionColor(condition: string) {
    switch (condition) {
      case 'EXCELLENT': return 'text-green-400';
      case 'GOOD': return 'text-blue-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-orange-400';
      case 'DAMAGED': return 'text-red-400';
      default: return 'text-slate-400';
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Package className="w-10 h-10 text-purple-400" />
              Asset Vault
            </h1>
            <p className="text-slate-400">Inventory & equipment management</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.href = '/vault/payroll-flags'}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <AlertCircle className="w-5 h-5" />
              Payroll Flags
            </button>
            <button
              onClick={() => window.location.href = '/vault/treasury'}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <FileSignature className="w-5 h-5" />
              Treasury Checkout
            </button>
            <button
              onClick={() => window.location.href = '/vault/categories'}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
            >
              Manage Categories
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Asset
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-white">{stats.total}</span>
            </div>
            <p className="text-slate-300 font-semibold">Total Assets</p>
          </div>

          <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-green-400">{stats.available}</span>
            </div>
            <p className="text-green-300 font-semibold">Available</p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <User className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-blue-400">{stats.assigned}</span>
            </div>
            <p className="text-blue-300 font-semibold">Assigned</p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-bold text-orange-400">{stats.maintenance}</span>
            </div>
            <p className="text-orange-300 font-semibold">Maintenance</p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold text-purple-400">
                ${(stats.totalValue / 1000).toFixed(0)}K
              </span>
            </div>
            <p className="text-purple-300 font-semibold">Total Value</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, asset tag, or serial number..."
                className="w-full pl-11 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <Filter className="w-5 h-5 text-slate-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
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
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
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
            <div className="col-span-full bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading assets...</p>
            </div>
          ) : filteredAssets.length === 0 ? (
            <div className="col-span-full bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-12 text-center">
              <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Assets Found</h3>
              <p className="text-slate-400 mb-6">Add your first asset to get started!</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Add First Asset
              </button>
            </div>
          ) : (
            filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => window.location.href = `/vault/assets/${asset.id}`}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer group"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{asset.category.icon || '📦'}</span>
                    <span className="text-sm text-slate-400">{asset.category.name}</span>
                  </div>
                  <span className={`px-2 py-1 border rounded-lg text-xs font-semibold ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </div>

                {/* Asset Info */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {asset.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Barcode className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-400">{asset.assetTag}</span>
                </div>

                {asset.description && (
                  <p className="text-sm text-slate-400 mb-3 line-clamp-2">{asset.description}</p>
                )}

                {/* Details */}
                <div className="space-y-2 mb-4">
                  {asset.manufacturer && (
                    <div className="text-sm text-slate-300">
                      <span className="text-slate-500">Make/Model:</span> {asset.manufacturer} {asset.model}
                    </div>
                  )}
                  {asset.serialNumber && (
                    <div className="text-sm text-slate-300">
                      <span className="text-slate-500">S/N:</span> {asset.serialNumber}
                    </div>
                  )}
                  {asset.location && (
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{asset.location}</span>
                    </div>
                  )}
                </div>

                {/* Assignment Status */}
                {asset.assignedTo && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg mb-3">
                    <User className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-300">
                      {asset.assignedTo.firstName} {asset.assignedTo.lastName}
                    </span>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-700">
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
                      <div className="text-xs text-slate-500">Current Value</div>
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
