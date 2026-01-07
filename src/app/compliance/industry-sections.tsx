// Industry-specific compliance sections for TeamPulse
import { Shield, AlertTriangle, CheckCircle, Clock, FileText, ExternalLink } from 'lucide-react';

export function OSHASection({ oshaView, setOshaView }: { oshaView: 'general' | 'recordkeeping' | 'training', setOshaView: (view: 'general' | 'recordkeeping' | 'training') => void }) {
  return (
    <div>
      {/* OSHA Sub-tabs */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setOshaView('general')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            oshaView === 'general' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: oshaView === 'general' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: oshaView === 'general' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          General Requirements
        </button>
        <button
          onClick={() => setOshaView('recordkeeping')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            oshaView === 'recordkeeping' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: oshaView === 'recordkeeping' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: oshaView === 'recordkeeping' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Recordkeeping
        </button>
        <button
          onClick={() => setOshaView('training')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            oshaView === 'training' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
          }`}
          style={{
            background: oshaView === 'training' ? 'var(--primary-btn)' : 'var(--card-bg)',
            color: oshaView === 'training' ? '#ffffff' : 'var(--body-text)',
          }}
        >
          Training Requirements
        </button>
      </div>

      {oshaView === 'general' && <OSHAGeneralSection />}
      {oshaView === 'recordkeeping' && <OSHARecordkeepingSection />}
      {oshaView === 'training' && <OSHATrainingSection />}
    </div>
  );
}

function OSHAGeneralSection() {
  const oshaRequirements = [
    {
      standard: '29 CFR 1910.132',
      title: 'Personal Protective Equipment (PPE)',
      status: 'compliant',
      details: 'PPE assessment completed, equipment provided and documented',
      lastInspection: 'Dec 15, 2025',
      nextDue: 'Mar 15, 2026'
    },
    {
      standard: '29 CFR 1910.134',
      title: 'Respiratory Protection',
      status: 'compliant',
      details: 'Written program in place, fit testing current for all employees',
      lastInspection: 'Nov 20, 2025',
      nextDue: 'Nov 20, 2026'
    },
    {
      standard: '29 CFR 1910.147',
      title: 'Lockout/Tagout (LOTO)',
      status: 'warning',
      details: 'Annual retraining due for 3 employees within 30 days',
      lastInspection: 'Jan 15, 2025',
      nextDue: 'Jan 31, 2026'
    },
    {
      standard: '29 CFR 1910.157',
      title: 'Portable Fire Extinguishers',
      status: 'compliant',
      details: 'Monthly inspections current, annual maintenance completed',
      lastInspection: 'Dec 28, 2025',
      nextDue: 'Jan 28, 2026'
    },
    {
      standard: '29 CFR 1910.178',
      title: 'Powered Industrial Trucks (Forklifts)',
      status: 'non-compliant',
      details: '2 operators need recertification - expired Dec 2025',
      lastInspection: 'Dec 1, 2025',
      nextDue: 'Overdue'
    },
    {
      standard: '29 CFR 1910.1200',
      title: 'Hazard Communication (HazCom)',
      status: 'compliant',
      details: 'SDS library updated, employee training current',
      lastInspection: 'Dec 10, 2025',
      nextDue: 'Dec 10, 2026'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-orange-500" style={{ background: 'var(--card-bg)' }}>
        <div className="flex items-start gap-4">
          <Shield className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
              OSHA Compliance Tracker
            </h3>
            <p className="opacity-80 mb-4">
              Occupational Safety and Health Administration (OSHA) regulations ensure workplace safety. 
              Violations can result in citations ranging from $15,625 per violation (serious) to $156,259 per violation (willful/repeated).
            </p>
            <div className="flex items-center gap-2 text-sm bg-orange-500/10 text-orange-500 p-3 rounded-lg">
              <AlertTriangle className="h-4 w-4 flex-shrink-0" />
              <span className="font-semibold">
                Current compliance rate: 83% - 1 non-compliant item requires immediate action
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* OSHA Standards Compliance */}
      <div className="grid grid-cols-1 gap-4">
        {oshaRequirements.map((req, index) => (
          <div 
            key={index}
            className={`p-6 rounded-xl shadow-lg border-l-4 ${
              req.status === 'compliant' 
                ? 'border-green-500' 
                : req.status === 'warning'
                ? 'border-yellow-500'
                : 'border-red-500'
            }`}
            style={{ background: 'var(--card-bg)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono bg-gray-500/20 px-3 py-1 rounded">{req.standard}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    req.status === 'compliant' 
                      ? 'bg-green-500 text-white' 
                      : req.status === 'warning'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {req.status === 'compliant' ? '✓ COMPLIANT' : req.status === 'warning' ? '⚠ WARNING' : '✗ NON-COMPLIANT'}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>{req.title}</h4>
                <p className="opacity-80 mb-3">{req.details}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="opacity-70 mb-1">Last Inspection</div>
                <div className="font-semibold">{req.lastInspection}</div>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="opacity-70 mb-1">Next Due</div>
                <div className={`font-semibold ${req.nextDue === 'Overdue' ? 'text-red-500' : ''}`}>
                  {req.nextDue}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* OSHA Resources */}
      <div className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          🔗 OSHA Resources
        </h3>
        <div className="space-y-3">
          <a
            href="https://www.osha.gov/laws-regs/regulations/standardnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-all"
            style={{ background: 'var(--calendar-bg)' }}
          >
            <ExternalLink className="h-5 w-5" style={{ color: 'var(--today-highlight)' }} />
            <div>
              <div className="font-semibold">OSHA Regulations (Standards - 29 CFR)</div>
              <div className="text-sm opacity-70">Complete list of OSHA standards by part number</div>
            </div>
          </a>
          <a
            href="https://www.osha.gov/small-business"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-all"
            style={{ background: 'var(--calendar-bg)' }}
          >
            <ExternalLink className="h-5 w-5" style={{ color: 'var(--today-highlight)' }} />
            <div>
              <div className="font-semibold">Small Business Resources</div>
              <div className="text-sm opacity-70">Compliance assistance for small businesses</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function OSHARecordkeepingSection() {
  const recordkeepingItems = [
    {
      form: 'OSHA Form 300',
      title: 'Log of Work-Related Injuries and Illnesses',
      status: 'current',
      entries: 12,
      lastUpdated: 'Dec 28, 2025',
      dueDate: 'Update within 7 days of incident'
    },
    {
      form: 'OSHA Form 300A',
      title: 'Summary of Work-Related Injuries and Illnesses',
      status: 'due-soon',
      entries: 1,
      lastUpdated: 'Jan 31, 2025',
      dueDate: 'Post by Feb 1, 2026'
    },
    {
      form: 'OSHA Form 301',
      title: 'Injury and Illness Incident Report',
      status: 'current',
      entries: 12,
      lastUpdated: 'Dec 28, 2025',
      dueDate: 'Complete within 7 days of incident'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Recordkeeping Overview */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-blue-500" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          📋 OSHA Recordkeeping Requirements (29 CFR 1904)
        </h3>
        <p className="opacity-80 mb-4">
          Employers with 11 or more employees must keep records of work-related injuries and illnesses. 
          Records must be maintained for 5 years and posted annually from February 1 - April 30.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500">
            <div className="text-3xl font-bold text-green-500 mb-1">12</div>
            <div className="text-sm">Total Recordable Cases (2025)</div>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500">
            <div className="text-3xl font-bold text-blue-500 mb-1">3.2</div>
            <div className="text-sm">DART Rate (Days Away, Restricted, or Transfer)</div>
          </div>
          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500">
            <div className="text-3xl font-bold text-yellow-500 mb-1">8.5</div>
            <div className="text-sm">Total Case Incident Rate (TCIR)</div>
          </div>
        </div>
      </div>

      {/* OSHA Forms Status */}
      <div className="space-y-4">
        {recordkeepingItems.map((item, index) => (
          <div key={index} className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono bg-blue-500/20 text-blue-500 px-3 py-1 rounded font-bold">{item.form}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'current' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                  }`}>
                    {item.status === 'current' ? '✓ CURRENT' : '⚠ ACTION NEEDED'}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>{item.title}</h4>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="opacity-70 mb-1">Entries (2025)</div>
                <div className="font-semibold">{item.entries}</div>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="opacity-70 mb-1">Last Updated</div>
                <div className="font-semibold">{item.lastUpdated}</div>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                <div className="opacity-70 mb-1">Due Date</div>
                <div className="font-semibold">{item.dueDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-yellow-500" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4 text-yellow-500">⚡ Upcoming Deadlines</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Complete and certify Form 300A by February 1, 2026</div>
              <div className="text-sm opacity-70">Annual summary must be posted in conspicuous location until April 30</div>
            </div>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
            <FileText className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Electronic submission (if required)</div>
              <div className="text-sm opacity-70">Establishments with 250+ employees must submit Form 300A electronically by March 2, 2026</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function OSHATrainingSection() {
  const trainingRequirements = [
    { topic: 'Hazard Communication (HazCom)', frequency: 'Initial + Annual', employees: 45, compliant: 45, lastCompleted: 'Oct 2025' },
    { topic: 'Bloodborne Pathogens', frequency: 'Annual', employees: 12, compliant: 11, lastCompleted: 'Nov 2025' },
    { topic: 'Lockout/Tagout (LOTO)', frequency: 'Initial + Annual', employees: 18, compliant: 15, lastCompleted: 'Jan 2025' },
    { topic: 'Personal Protective Equipment (PPE)', frequency: 'Initial + As Needed', employees: 45, compliant: 45, lastCompleted: 'Dec 2025' },
    { topic: 'Emergency Action Plan', frequency: 'Initial + Changes', employees: 45, compliant: 43, lastCompleted: 'Sep 2025' },
    { topic: 'Fire Extinguisher Use', frequency: 'Annual', employees: 45, compliant: 45, lastCompleted: 'Nov 2025' },
    { topic: 'Forklift Operation', frequency: '3 Years', employees: 8, compliant: 6, lastCompleted: 'Dec 2022' },
    { topic: 'Respiratory Protection', frequency: 'Annual', employees: 5, compliant: 5, lastCompleted: 'Nov 2025' },
  ];

  return (
    <div className="space-y-6">
      {/* Training Overview */}
      <div className="p-6 rounded-xl shadow-lg border-l-4 border-purple-500" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          🎓 OSHA Training Requirements
        </h3>
        <p className="opacity-80 mb-4">
          OSHA requires employers to train workers on workplace hazards and how to protect themselves. 
          Training must be provided in a language and vocabulary workers understand.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500">
            <div className="text-3xl font-bold text-purple-500 mb-1">89%</div>
            <div className="text-sm">Overall Training Compliance</div>
          </div>
          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500">
            <div className="text-3xl font-bold text-yellow-500 mb-1">14</div>
            <div className="text-sm">Employees Need Retraining</div>
          </div>
        </div>
      </div>

      {/* Training Requirements Table */}
      <div className="space-y-4">
        {trainingRequirements.map((training, index) => {
          const complianceRate = (training.compliant / training.employees) * 100;
          return (
            <div key={index} className="p-6 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>{training.topic}</h4>
                  <div className="text-sm opacity-70">Required Frequency: {training.frequency}</div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  complianceRate === 100 ? 'bg-green-500 text-white' : 
                  complianceRate >= 90 ? 'bg-yellow-500 text-white' : 
                  'bg-red-500 text-white'
                }`}>
                  {training.compliant}/{training.employees} Trained
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                  <div className="opacity-70 text-sm mb-1">Last Completed</div>
                  <div className="font-semibold">{training.lastCompleted}</div>
                </div>
                <div className="p-3 rounded-lg" style={{ background: 'var(--calendar-bg)' }}>
                  <div className="opacity-70 text-sm mb-1">Compliance Rate</div>
                  <div className="font-semibold">{complianceRate.toFixed(0)}%</div>
                </div>
              </div>
              {complianceRate < 100 && (
                <div className="bg-yellow-500/10 border border-yellow-500 p-3 rounded-lg text-sm">
                  <span className="font-semibold text-yellow-500">⚠ Action Needed:</span> {training.employees - training.compliant} employee(s) require training
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ConstructionSection() {
  // Construction compliance will be imported
  return <div>Construction section - see separate file</div>;
}

export function FoodServiceSection() {
  // Food service compliance will be imported
  return <div>Food service section - see separate file</div>;
}

export function RetailSection() {
  // Retail compliance will be imported
  return <div>Retail section - see separate file</div>;
}
