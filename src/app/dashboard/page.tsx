import UnifiedDashboard from '@/components/UnifiedDashboard';

export default function DashboardPage() {
  return <UnifiedDashboard />;
}

// OLD DASHBOARD CODE (kept for reference, can be removed)
/*
import { Users, Calendar, Clock, TrendingUp } from 'lucide-react';
import WeatherWidget from '@/components/WeatherWidget';

export default function DashboardPageOld() {
  const stats = [
    {
      name: 'Total Employees',
      value: '8',
      icon: Users,
      color: 'bg-purple-700',
      change: '+2 this month',
    },
    {
      name: 'Scheduled Shifts',
      value: '45',
      icon: Calendar,
      color: 'bg-purple-600',
      change: 'This week',
    },
    {
      name: 'Time Off Requests',
      value: '3',
      icon: Clock,
      color: 'bg-yellow-500',
      change: 'Pending approval',
    },
    {
      name: 'Hours This Week',
      value: '320',
      icon: TrendingUp,
      color: 'bg-purple-500',
      change: '+12% from last week',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-black via-purple-950 to-black border-4 border-purple-600/50 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 tracking-wide drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] uppercase">⚡ Command Center</h2>
        <p className="text-purple-400 mt-2 text-xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">Business Management. Forged for Titans.</p>
        <p className="text-purple-400 mt-1 text-sm">Unleash powerful scheduling, analytics, and team collaboration. Compete with the giants.</p>
        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200 text-purple-700 text-sm font-medium shadow-sm">
          <span role="img" aria-label="dad joke">🦸‍♂️</span> Welcome back, Titan! Remember: If you can schedule a meeting with 8 people, you can probably solve world peace. Or at least get coffee.
          <br />
          <span className="italic text-xs text-purple-500">Dad joke of the day: Why did the employee bring a ladder to work? Because they heard the job was up-and-coming!</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <WeatherWidget />
      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Shift assigned', employee: 'John Doe', time: '2 hours ago' },
              { action: 'Time off approved', employee: 'Jane Smith', time: '4 hours ago' },
              { action: 'New employee added', employee: 'Mike Johnson', time: '1 day ago' },
              { action: 'Shift swap requested', employee: 'Sarah Williams', time: '2 days ago' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.employee}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-left flex items-center">
              <Calendar className="h-5 w-5 mr-3" />
              Create New Shift
            </button>
            <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors text-left flex items-center">
              <Users className="h-5 w-5 mr-3" />
              Add Employee
            </button>
            <button className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 transition-colors text-left flex items-center">
              <Clock className="h-5 w-5 mr-3" />
              Review Time Off Requests
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule Preview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">This Week&apos;s Schedule</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Today
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tomorrow
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Hours
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Manager
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  9:00 AM - 5:00 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  9:00 AM - 5:00 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  40 hrs
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Jane Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Staff
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10:00 AM - 6:00 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Off
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  32 hrs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
*/
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
