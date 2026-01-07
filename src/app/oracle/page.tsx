'use client';

import { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, TrendingDown, AlertTriangle, Users, Clock, Target, Award, Shield, Brain } from 'lucide-react';

interface Prophecy {
  id: string;
  prophecyType: string;
  severity: string;
  title: string;
  prediction: string;
  confidence: number;
  targetEmployee?: {
    firstName: string;
    lastName: string;
  };
  targetDepartment?: string;
  impactDate?: string;
  dataPoints: any;
  recommendations: string[];
  status: string;
}

interface RiskScore {
  id: string;
  employee: {
    firstName: string;
    lastName: string;
  };
  riskType: string;
  score: number;
  factors: string[];
  trend: string;
}

interface Insight {
  id: string;
  insightType: string;
  title: string;
  description: string;
  impact: string;
  likelihood: number;
  affectedCount?: number;
  timeframe: string;
  actionRequired: boolean;
}

export default function OraclePage() {
  const [prophecies, setProphecies] = useState<Prophecy[]>([]);
  const [topRisks, setTopRisks] = useState<RiskScore[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    fetchProphecies();
  }, []);

  async function fetchProphecies() {
    try {
      const [propheciesRes, risksRes, insightsRes] = await Promise.all([
        fetch('/api/oracle/prophecies'),
        fetch('/api/oracle/risks/top'),
        fetch('/api/oracle/insights'),
      ]);

      if (propheciesRes.ok) setProphecies(await propheciesRes.json());
      if (risksRes.ok) setTopRisks(await risksRes.json());
      if (insightsRes.ok) setInsights(await insightsRes.json());
    } catch (error) {
      console.error('Failed to fetch prophecies:', error);
    } finally {
      setLoading(false);
    }
  }

  async function runAnalysis() {
    setAnalyzing(true);
    try {
      const response = await fetch('/api/oracle/analyze', {
        method: 'POST',
      });

      if (response.ok) {
        await fetchProphecies();
        alert('🔮 Oracle analysis complete! New prophecies revealed.');
      }
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setAnalyzing(false);
    }
  }

  function getSeverityColor(severity: string) {
    switch (severity) {
      case 'CRITICAL': return 'from-red-600 to-pink-600 border-red-500';
      case 'HIGH': return 'from-orange-600 to-red-600 border-orange-500';
      case 'MEDIUM': return 'from-yellow-600 to-orange-600 border-yellow-500';
      case 'LOW': return 'from-blue-600 to-purple-600 border-blue-500';
      default: return 'from-slate-600 to-slate-700 border-slate-500';
    }
  }

  function getProphecyIcon(type: string) {
    switch (type) {
      case 'FLIGHT_RISK': return <TrendingDown className="w-8 h-8" />;
      case 'BURNOUT': return <AlertTriangle className="w-8 h-8" />;
      case 'OVERTIME_VIOLATION': return <Clock className="w-8 h-8" />;
      case 'STAFFING_SHORTAGE': return <Users className="w-8 h-8" />;
      case 'PERFORMANCE_DECLINE': return <TrendingDown className="w-8 h-8" />;
      case 'COMPLIANCE_RISK': return <Shield className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Mystical Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-50 animate-pulse"></div>
            <Sparkles className="w-20 h-20 text-purple-300 relative animate-pulse" />
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-4">
            The Oracle
          </h1>
          <p className="text-xl text-purple-200 mb-6">Predictive AI Analytics • See The Future Before It Happens</p>
          <button
            onClick={runAnalysis}
            disabled={analyzing}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
          >
            <Brain className="w-6 h-6" />
            {analyzing ? 'Consulting the Oracle...' : 'Run New Analysis'}
          </button>
        </div>

        {/* Critical Prophecies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Active Prophecies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prophecies.map((prophecy) => (
              <div
                key={prophecy.id}
                className={`relative rounded-2xl p-6 border-2 bg-gradient-to-br ${getSeverityColor(prophecy.severity)} transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                {/* Mystical glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse rounded-2xl"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
                        {getProphecyIcon(prophecy.prophecyType)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{prophecy.title}</h3>
                        <span className="text-sm text-white/80 font-semibold">
                          {prophecy.prophecyType.replace(/_/g, ' ')}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{Math.round(prophecy.confidence)}%</div>
                      <div className="text-xs text-white/80">Confidence</div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 mb-4 backdrop-blur">
                    <p className="text-lg text-white font-medium italic">
                      "{prophecy.prediction}"
                    </p>
                  </div>

                  {prophecy.targetEmployee && (
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-white/80" />
                      <span className="text-white/90">
                        Target: {prophecy.targetEmployee.firstName} {prophecy.targetEmployee.lastName}
                      </span>
                    </div>
                  )}

                  {prophecy.targetDepartment && (
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-white/80" />
                      <span className="text-white/90">Department: {prophecy.targetDepartment}</span>
                    </div>
                  )}

                  {prophecy.impactDate && (
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-white/80" />
                      <span className="text-white/90">
                        Predicted: {new Date(prophecy.impactDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-sm font-bold text-white/90 mb-2">Recommended Actions:</h4>
                    <ul className="space-y-1">
                      {prophecy.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm text-white/80 flex items-start gap-2">
                          <span className="text-yellow-300">✦</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {prophecies.length === 0 && !loading && (
              <div className="col-span-2 text-center py-12 bg-slate-800/50 rounded-2xl border border-slate-700">
                <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">The Oracle Awaits</h3>
                <p className="text-slate-400 mb-6">Run an analysis to reveal prophecies</p>
              </div>
            )}
          </div>
        </div>

        {/* High Risk Employees */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingDown className="w-8 h-8 text-orange-400" />
            Highest Risk Employees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRisks.map((risk) => (
              <div
                key={risk.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500/50 rounded-xl p-6 hover:border-orange-500 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {risk.employee.firstName} {risk.employee.lastName}
                    </h3>
                    <span className="text-sm text-orange-400 font-semibold">
                      {risk.riskType.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-400">{Math.round(risk.score)}%</div>
                    <div className="text-xs text-slate-400">Risk Score</div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${
                      risk.trend === 'INCREASING' ? 'bg-red-500 animate-pulse' :
                      risk.trend === 'DECREASING' ? 'bg-green-500' :
                      'bg-yellow-500'
                    }`}></div>
                    <span className="text-sm text-white font-semibold">{risk.trend}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 mb-2">Contributing Factors:</h4>
                  <ul className="space-y-1">
                    {risk.factors.slice(0, 3).map((factor, idx) => (
                      <li key={idx} className="text-xs text-slate-300">• {factor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Insights */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-400" />
            Predictive Insights
          </h2>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{insight.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        insight.impact === 'CRITICAL' ? 'bg-red-600 text-white' :
                        insight.impact === 'HIGH' ? 'bg-orange-600 text-white' :
                        insight.impact === 'MEDIUM' ? 'bg-yellow-600 text-white' :
                        'bg-blue-600 text-white'
                      }`}>
                        {insight.impact}
                      </span>
                      <span className="text-sm text-slate-400">{insight.timeframe}</span>
                    </div>
                    <p className="text-slate-300 mb-3">{insight.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="text-purple-400 font-bold">{Math.round(insight.likelihood)}%</div>
                        <span className="text-slate-400">Likelihood</span>
                      </div>
                      {insight.affectedCount && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{insight.affectedCount} affected</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {insight.actionRequired && (
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                      Take Action
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
