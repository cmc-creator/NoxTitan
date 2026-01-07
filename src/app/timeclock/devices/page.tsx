'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Wifi, WifiOff, MapPin, Settings, CheckCircle, XCircle } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  brand: string;
  model?: string;
  location?: string;
  ipAddress?: string;
  isActive: boolean;
  lastSync?: string;
  requirePhoto: boolean;
  requireBiometric: boolean;
  latitude?: number;
  longitude?: number;
  geofenceRadius?: number;
}

export default function TimeClockDevicesPage() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingDevice, setEditingDevice] = useState<Device | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    model: '',
    location: '',
    ipAddress: '',
    latitude: '',
    longitude: '',
    geofenceRadius: '100',
    requirePhoto: false,
    requireBiometric: false,
  });

  useEffect(() => {
    fetchDevices();
  }, []);

  async function fetchDevices() {
    try {
      const response = await fetch('/api/timeclock/devices');
      if (response.ok) {
        const data = await response.json();
        setDevices(data);
      }
    } catch (error) {
      console.error('Failed to fetch devices:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const payload = {
      ...formData,
      latitude: formData.latitude ? parseFloat(formData.latitude) : undefined,
      longitude: formData.longitude ? parseFloat(formData.longitude) : undefined,
      geofenceRadius: parseFloat(formData.geofenceRadius),
    };

    try {
      const response = await fetch('/api/timeclock/devices', {
        method: editingDevice ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingDevice ? { id: editingDevice.id, ...payload } : payload),
      });

      if (response.ok) {
        fetchDevices();
        setShowModal(false);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save device:', error);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to remove this device?')) return;

    try {
      const response = await fetch(`/api/timeclock/devices?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchDevices();
      }
    } catch (error) {
      console.error('Failed to delete device:', error);
    }
  }

  function resetForm() {
    setFormData({
      name: '',
      brand: '',
      model: '',
      location: '',
      ipAddress: '',
      latitude: '',
      longitude: '',
      geofenceRadius: '100',
      requirePhoto: false,
      requireBiometric: false,
    });
    setEditingDevice(null);
  }

  function openEditModal(device: Device) {
    setEditingDevice(device);
    setFormData({
      name: device.name,
      brand: device.brand,
      model: device.model || '',
      location: device.location || '',
      ipAddress: device.ipAddress || '',
      latitude: device.latitude?.toString() || '',
      longitude: device.longitude?.toString() || '',
      geofenceRadius: device.geofenceRadius?.toString() || '100',
      requirePhoto: device.requirePhoto,
      requireBiometric: device.requireBiometric,
    });
    setShowModal(true);
  }

  const supportedBrands = [
    'Kronos/UKG', 'ADP', 'Lathem', 'Acroprint', 'Icon Time Systems',
    'Pyramid', 'Amano', 'uAttend', 'ZKTeco', 'TimeTrex',
    'Deputy', 'TSheets/QuickBooks Time', 'When I Work', 'Buddy Punch', 'Homebase'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Time Clock Devices</h1>
            <p className="text-slate-400">Manage your time clock hardware</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Add Device
          </button>
        </div>

        {/* Devices Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-slate-400 mt-4">Loading devices...</p>
          </div>
        ) : devices.length === 0 ? (
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-12 text-center">
            <Wifi className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Devices Registered</h3>
            <p className="text-slate-400 mb-6">Add your first time clock to get started</p>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Add Your First Device
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device) => (
              <div
                key={device.id}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                {/* Device Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{device.name}</h3>
                    <p className="text-sm text-slate-400">{device.brand}</p>
                    {device.model && (
                      <p className="text-xs text-slate-500">{device.model}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {device.isActive ? (
                      <Wifi className="w-5 h-5 text-green-400" />
                    ) : (
                      <WifiOff className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>

                {/* Device Info */}
                <div className="space-y-2 mb-4">
                  {device.location && (
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{device.location}</span>
                    </div>
                  )}
                  {device.ipAddress && (
                    <div className="text-sm text-slate-400">
                      IP: {device.ipAddress}
                    </div>
                  )}
                  {device.lastSync && (
                    <div className="text-xs text-slate-500">
                      Last sync: {new Date(device.lastSync).toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {device.requirePhoto && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      📸 Photo
                    </span>
                  )}
                  {device.requireBiometric && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      👆 Biometric
                    </span>
                  )}
                  {device.latitude && device.longitude && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                      📍 Geofence
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(device)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(device.id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingDevice ? 'Edit Device' : 'Add New Device'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Device Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Device Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Front Desk Clock"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Brand *
                  </label>
                  <select
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select a brand...</option>
                    {supportedBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Model & Location */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Model
                    </label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      placeholder="Model number"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      IP Address
                    </label>
                    <input
                      type="text"
                      value={formData.ipAddress}
                      onChange={(e) => setFormData({ ...formData, ipAddress: e.target.value })}
                      placeholder="192.168.1.100"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Physical Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Building A - Main Entrance"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Geofencing */}
                <div className="p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-3">Geofencing (Optional)</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Latitude</label>
                      <input
                        type="number"
                        step="any"
                        value={formData.latitude}
                        onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                        placeholder="37.7749"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Longitude</label>
                      <input
                        type="number"
                        step="any"
                        value={formData.longitude}
                        onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                        placeholder="-122.4194"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">Radius (m)</label>
                      <input
                        type="number"
                        value={formData.geofenceRadius}
                        onChange={(e) => setFormData({ ...formData, geofenceRadius: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Options */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requirePhoto}
                      onChange={(e) => setFormData({ ...formData, requirePhoto: e.target.checked })}
                      className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-blue-500"
                    />
                    <span className="text-slate-300">Require photo verification</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requireBiometric}
                      onChange={(e) => setFormData({ ...formData, requireBiometric: e.target.checked })}
                      className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-blue-500"
                    />
                    <span className="text-slate-300">Require biometric authentication</span>
                  </label>
                </div>

                {/* Buttons */}
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
                    {editingDevice ? 'Update Device' : 'Add Device'}
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
