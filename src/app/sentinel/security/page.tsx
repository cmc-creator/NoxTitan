'use client';

import { useState, useEffect } from 'react';
import { Camera, Lock, AlertTriangle, Activity, Video, DoorOpen, DoorClosed, Shield, Eye, Radio } from 'lucide-react';

interface SecurityStats {
  camerasOnline: number;
  camerasTotal: number;
  doorsOnline: number;
  doorsTotal: number;
  activeAlerts: number;
  todayEvents: number;
}

interface Camera {
  id: string;
  name: string;
  location: string;
  status: string;
  isRecording: boolean;
  cameraType: string;
  resolution?: string;
  lastOnline?: string;
}

interface Door {
  id: string;
  name: string;
  location: string;
  status: string;
  isLocked: boolean;
  doorType: string;
  lastAccess?: string;
}

interface Alert {
  id: string;
  alertType: string;
  severity: string;
  title: string;
  description: string;
  timestamp: string;
  status: string;
}

export default function SecurityPage() {
  const [stats, setStats] = useState<SecurityStats>({
    camerasOnline: 0,
    camerasTotal: 0,
    doorsOnline: 0,
    doorsTotal: 0,
    activeAlerts: 0,
    todayEvents: 0,
  });
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [doors, setDoors] = useState<Door[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [activeTab, setActiveTab] = useState<'cameras' | 'doors' | 'alerts'>('cameras');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000); // Refresh every 15 seconds
    return () => clearInterval(interval);
  }, []);

  async function fetchData() {
    try {
      const [statsRes, camerasRes, doorsRes, alertsRes] = await Promise.all([
        fetch('/api/security/stats'),
        fetch('/api/security/cameras'),
        fetch('/api/security/doors'),
        fetch('/api/security/alerts?status=ACTIVE'),
      ]);

      if (statsRes.ok) setStats(await statsRes.json());
      if (camerasRes.ok) setCameras(await camerasRes.json());
      if (doorsRes.ok) setDoors(await doorsRes.json());
      if (alertsRes.ok) setAlerts(await alertsRes.json());
    } catch (error) {
      console.error('Failed to fetch security data:', error);
    } finally {
      setLoading(false);
    }
  }

  function getStatusColor(status: string) {
    switch (status) {
      case 'ONLINE': return 'text-[#C9A84C] 400 bg-[#C9A84C]/20 border-[rgba(201,168,76,0.22)] 500';
      case 'OFFLINE': return 'text-[#9E8F75] 400 bg-[#110F0B] 500/20 border-[rgba(201,168,76,0.22)] 500';
      case 'MAINTENANCE': return 'text-[#C9A84C] bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)]';
      case 'ERROR': return 'text-[#9E8F75] 400 bg-[#110F0B] 500/20 border-[rgba(201,168,76,0.22)] 500';
      case 'OPEN': return 'text-[#9E8F75] bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)]';
      case 'CLOSED': return 'text-[#C9A84C] 400 bg-[#C9A84C]/20 border-[rgba(201,168,76,0.22)] 500';
      case 'ALARM': return 'text-[#9E8F75] 400 bg-[#110F0B] 500/20 border-[rgba(201,168,76,0.22)] 500';
      default: return 'text-[#9E8F75] bg-[rgba(201,168,76,0.06)] border-[rgba(201,168,76,0.22)]';
    }
  }

  function getSeverityColor(severity: string) {
    switch (severity) {
      case 'CRITICAL': return 'bg-[#110F0B] 600 text-white';
      case 'HIGH': return 'bg-[rgba(201,168,76,0.12)] text-white';
      case 'MEDIUM': return 'bg-[rgba(201,168,76,0.12)] text-white';
      case 'LOW': return 'bg-amber-600 text-white';
      case 'INFO': return 'bg-[rgba(201,168,76,0.08)] text-white';
      default: return 'bg-[rgba(201,168,76,0.08)] text-white';
    }
  }

  return (
    <div className="min-h-screen bg-[#070604] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Shield className="w-10 h-10 text-amber-400" />
              Security Operations Center
            </h1>
            <p className="text-[#9E8F75]">Camera feeds, access control, and security monitoring</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.href = '/sentinel/security/cameras/add'}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Add Camera
            </button>
            <button
              onClick={() => window.location.href = '/sentinel/security/doors/add'}
              className="px-6 py-3 bg-[#C9A84C] hover:bg-[#110F0B] text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Lock className="w-5 h-5" />
              Add Door
            </button>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <div className="bg-[#110F0B] from-REMOVED-500/20 to-green-600/20 border border-[rgba(201,168,76,0.22)] 500/50 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <Camera className="w-8 h-8 text-[#C9A84C] 400" />
              <div className="text-right">
                <span className="text-3xl font-bold text-[#C9A84C] 400">{stats.camerasOnline}</span>
                <span className="text-[#9E8F75]">/{stats.camerasTotal}</span>
              </div>
            </div>
            <p className="text-[#C9A84C] 300 font-semibold flex items-center gap-2">
              <Radio className="w-3 h-3" />
              Cameras Online
            </p>
          </div>

          <div className="bg-amber-600/10 border border-amber-500/40/50 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <Lock className="w-8 h-8 text-amber-400" />
              <div className="text-right">
                <span className="text-3xl font-bold text-amber-400">{stats.doorsOnline}</span>
                <span className="text-[#9E8F75]">/{stats.doorsTotal}</span>
              </div>
            </div>
            <p className="text-amber-400 font-semibold">Doors Online</p>
          </div>

          <div className="bg-[#110F0B] 500/10 border border-[rgba(201,168,76,0.22)] 500/50 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-[#9E8F75] 400" />
              <span className="text-4xl font-bold text-[#9E8F75] 400">{stats.activeAlerts}</span>
            </div>
            <p className="text-[#9E8F75] 300 font-semibold">Active Alerts</p>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/40/50 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-amber-400" />
              <span className="text-4xl font-bold text-amber-400">{stats.todayEvents}</span>
            </div>
            <p className="text-[#C9A84C] font-semibold">Today's Events</p>
          </div>

          <div className="col-span-2 bg-[rgba(201,168,76,0.06)] border border-amber-500/40/50 rounded p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-amber-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">System Status</h3>
                  <p className="text-sm text-[#9E8F75]">All systems operational</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-[#110F0B] 400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[rgba(201,168,76,0.06)]/50 backdrop-blur border border-[rgba(201,168,76,0.22)] rounded overflow-hidden mb-6">
          <div className="flex border-b border-[rgba(201,168,76,0.22)]">
            <button
              onClick={() => setActiveTab('cameras')}
              className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'cameras'
                  ? 'bg-amber-600 text-white'
                  : 'text-[#9E8F75] hover:text-white hover:bg-[rgba(201,168,76,0.06)]/50'
              }`}
            >
              <Camera className="w-5 h-5" />
              Cameras ({cameras.length})
            </button>
            <button
              onClick={() => setActiveTab('doors')}
              className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'doors'
                  ? 'bg-[#C9A84C] text-white'
                  : 'text-[#9E8F75] hover:text-white hover:bg-[rgba(201,168,76,0.06)]/50'
              }`}
            >
              <Lock className="w-5 h-5" />
              Doors ({doors.length})
            </button>
            <button
              onClick={() => setActiveTab('alerts')}
              className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'alerts'
                  ? 'bg-[#110F0B] 600 text-white'
                  : 'text-[#9E8F75] hover:text-white hover:bg-[rgba(201,168,76,0.06)]/50'
              }`}
            >
              <AlertTriangle className="w-5 h-5" />
              Alerts ({alerts.length})
            </button>
          </div>

          {/* Cameras Tab */}
          {activeTab === 'cameras' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cameras.map((camera) => (
                  <div
                    key={camera.id}
                    className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-4 hover:border-[rgba(201,168,76,0.45)]/50 transition-all cursor-pointer"
                    onClick={() => window.location.href = `/sentinel/security/cameras/${camera.id}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          camera.status === 'ONLINE' ? 'bg-[#C9A84C]/20' : 'bg-[#110F0B] 500/20'
                        }`}>
                          {camera.isRecording ? (
                            <Video className={`w-6 h-6 ${camera.status === 'ONLINE' ? 'text-[#C9A84C] 400' : 'text-[#9E8F75] 400'}`} />
                          ) : (
                            <Camera className="w-6 h-6 text-[#9E8F75]" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{camera.name}</h3>
                          <p className="text-sm text-[#9E8F75]">{camera.location}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 border rounded text-xs font-semibold ${getStatusColor(camera.status)}`}>
                        {camera.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#9E8F75]">{camera.cameraType}</span>
                      <span className="text-[#9E8F75] font-mono">{camera.resolution || 'N/A'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Doors Tab */}
          {activeTab === 'doors' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doors.map((door) => (
                  <div
                    key={door.id}
                    className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-4 hover:border-[rgba(201,168,76,0.22)] 500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          door.status === 'CLOSED' ? 'bg-[#C9A84C]/20' : 'bg-[rgba(201,168,76,0.06)]'
                        }`}>
                          {door.status === 'CLOSED' ? (
                            <DoorClosed className="w-6 h-6 text-[#C9A84C] 400" />
                          ) : (
                            <DoorOpen className="w-6 h-6 text-[#9E8F75]" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-white flex items-center gap-2">
                            {door.name}
                            {door.isLocked && <Lock className="w-4 h-4 text-amber-400" />}
                          </h3>
                          <p className="text-sm text-[#9E8F75]">{door.location}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 border rounded text-xs font-semibold ${getStatusColor(door.status)}`}>
                        {door.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#9E8F75]">{door.doorType}</span>
                      <button className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded transition-colors">
                        View Logs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="p-6">
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="bg-[rgba(201,168,76,0.06)]/50 border border-[rgba(201,168,76,0.22)] rounded p-4 hover:border-[rgba(201,168,76,0.22)] 500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#110F0B] 500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-[#9E8F75] 400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-white">{alert.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>
                          <span className="text-sm text-[#9E8F75]">
                            {new Date(alert.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-[#9E8F75] mb-3">{alert.description}</p>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded transition-colors">
                            Acknowledge
                          </button>
                          <button className="px-4 py-2 bg-[#C9A84C] hover:bg-[#110F0B] text-white text-sm font-semibold rounded transition-colors">
                            Resolve
                          </button>
                          <button className="px-4 py-2 bg-[rgba(201,168,76,0.04)] hover:bg-[rgba(201,168,76,0.08)] text-white text-sm font-semibold rounded transition-colors">
                            False Alarm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


