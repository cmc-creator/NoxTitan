'use client';

import { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, TrendingDown, AlertTriangle, Users, Clock, Target, Award, Shield, Brain } from 'lucide-react';
import FeatureGate from '@/components/FeatureGate';

interface Prophecy {
  id: string;
  prophecyType: string;
  severity: string;
  title: string;
  prediction: string;
  confidence: number;
  targetEmployee?: { firstName: string; lastName: string };
  targetDepartment?: string;
  impactDate?: string;
  dataPoints: unknown;
  recommendations: string[];
  status: string;
}

interface RiskScore {
  id: string;
  employee: { firstName: string; lastName: string };
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

function severityBorderColor(severity: string) {
  switch (severity) {
    case 'CRITICAL': return 'rgba(195,95,95,0.6)';
    case 'HIGH':     return 'rgba(195,95,95,0.36)';
    case 'MEDIUM':   return 'rgba(201,168,76,0.32)';
    default:         return 'rgba(201,168,76,0.20)';
  }
}

function getProphecyIcon(type: string) {
  switch (type) {
    case 'FLIGHT_RISK':        return <TrendingDown style={{ width: 22, height: 22 }} />;
    case 'BURNOUT':            return <AlertTriangle style={{ width: 22, height: 22 }} />;
    case 'OVERTIME_VIOLATION': return <Clock style={{ width: 22, height: 22 }} />;
    case 'STAFFING_SHORTAGE':  return <Users style={{ width: 22, height: 22 }} />;
    case 'PERFORMANCE_DECLINE':return <TrendingDown style={{ width: 22, height: 22 }} />;
    case 'COMPLIANCE_RISK':    return <Shield style={{ width: 22, height: 22 }} />;
    default:                   return <Sparkles style={{ width: 22, height: 22 }} />;
  }
}

function OraclePage() {
  const [prophecies, setProphecies] = useState<Prophecy[]>([]);
  const [topRisks,   setTopRisks]   = useState<RiskScore[]>([]);
  const [insights,   setInsights]   = useState<Insight[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [analyzing,  setAnalyzing]  = useState(false);

  useEffect(() => { fetchProphecies(); }, []);

  async function fetchProphecies() {
    try {
      const [propheciesRes, risksRes, insightsRes] = await Promise.all([
        fetch('/api/oracle/prophecies'),
        fetch('/api/oracle/risks/top'),
        fetch('/api/oracle/insights'),
      ]);
      if (propheciesRes.ok) setProphecies(await propheciesRes.json());
      if (risksRes.ok)      setTopRisks(await risksRes.json());
      if (insightsRes.ok)   setInsights(await insightsRes.json());
    } catch (error) {
      console.error('Failed to fetch prophecies:', error);
    } finally {
      setLoading(false);
    }
  }

  async function runAnalysis() {
    setAnalyzing(true);
    try {
      const response = await fetch('/api/oracle/analyze', { method: 'POST' });
      if (response.ok) {
        await fetchProphecies();
        alert('Oracle analysis complete — new prophecies revealed.');
      }
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setAnalyzing(false);
    }
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#070604' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '12px' }}>
            <div style={{ width: 52, height: 52, background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.35)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles style={{ width: 26, height: 26, color: '#C9A84C' }} />
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.06em' }}>
              The Oracle
            </h1>
          </div>
          <p style={{ color: '#9E8F75', fontSize: '0.9rem', marginBottom: '24px', letterSpacing: '0.04em' }}>
            Predictive AI Analytics — See the Future Before It Happens
          </p>
          <button
            onClick={runAnalysis}
            disabled={analyzing}
            style={{
              background: analyzing ? 'rgba(201,168,76,0.06)' : 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.45)',
              borderRadius: '4px',
              color: analyzing ? '#9E8F75' : '#E8C060',
              padding: '11px 28px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: analyzing ? 'not-allowed' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.04em',
            }}
          >
            <Brain style={{ width: 16, height: 16 }} />
            {analyzing ? 'Consulting the Oracle...' : 'Run New Analysis'}
          </button>
        </div>

        {/* Active Prophecies */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <AlertTriangle style={{ width: 20, height: 20, color: 'rgba(195,95,95,0.9)' }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#F0EBE0' }}>Active Prophecies</h2>
          </div>

          {loading ? (
            <div style={{ padding: '48px', textAlign: 'center', background: '#110F0B', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px' }}>
              <p style={{ color: '#9E8F75' }}>Consulting the oracle...</p>
            </div>
          ) : prophecies.length === 0 ? (
            <div style={{ padding: '56px', textAlign: 'center', background: '#110F0B', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px' }}>
              <Sparkles style={{ width: 44, height: 44, color: '#5A5040', margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#F0EBE0', marginBottom: '8px' }}>The Oracle Awaits</h3>
              <p style={{ color: '#9E8F75', fontSize: '0.88rem' }}>Run an analysis to reveal prophecies</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {prophecies.map((prophecy) => (
                <div
                  key={prophecy.id}
                  style={{
                    background: '#110F0B',
                    border: `1px solid ${severityBorderColor(prophecy.severity)}`,
                    borderRadius: '4px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: 40, height: 40, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', flexShrink: 0 }}>
                        {getProphecyIcon(prophecy.prophecyType)}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#F0EBE0', marginBottom: '3px' }}>{prophecy.title}</h3>
                        <span style={{ fontSize: '0.72rem', color: '#9E8F75', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          {prophecy.prophecyType.replace(/_/g, ' ')}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: '#E8C060', lineHeight: 1 }}>{Math.round(prophecy.confidence)}%</div>
                      <div style={{ fontSize: '0.72rem', color: '#5A5040' }}>Confidence</div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px', padding: '12px 16px', marginBottom: '14px' }}>
                    <p style={{ color: '#F0EBE0', fontSize: '0.88rem', fontStyle: 'italic', lineHeight: 1.6 }}>&quot;{prophecy.prediction}&quot;</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                    {prophecy.targetEmployee && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <Users style={{ width: 13, height: 13, color: '#5A5040' }} />
                        <span style={{ fontSize: '0.82rem', color: '#9E8F75' }}>
                          {prophecy.targetEmployee.firstName} {prophecy.targetEmployee.lastName}
                        </span>
                      </div>
                    )}
                    {prophecy.targetDepartment && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <Target style={{ width: 13, height: 13, color: '#5A5040' }} />
                        <span style={{ fontSize: '0.82rem', color: '#9E8F75' }}>{prophecy.targetDepartment}</span>
                      </div>
                    )}
                    {prophecy.impactDate && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <Clock style={{ width: 13, height: 13, color: '#5A5040' }} />
                        <span style={{ fontSize: '0.82rem', color: '#9E8F75' }}>
                          Predicted: {new Date(prophecy.impactDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '12px' }}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 600, color: '#5A5040', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Recommended Actions</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {prophecy.recommendations.map((rec, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#9E8F75' }}>
                          <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '1px' }}>✦</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Highest Risk Employees */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <TrendingDown style={{ width: 20, height: 20, color: '#C9A84C' }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#F0EBE0' }}>Highest Risk Employees</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {topRisks.map((risk) => (
              <div
                key={risk.id}
                style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '4px', padding: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontWeight: 700, color: '#F0EBE0', marginBottom: '4px' }}>
                      {risk.employee.firstName} {risk.employee.lastName}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(195,95,95,0.85)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {risk.riskType.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.7rem', fontWeight: 700, color: 'rgba(195,95,95,0.9)', lineHeight: 1 }}>{Math.round(risk.score)}%</div>
                    <div style={{ fontSize: '0.7rem', color: '#5A5040' }}>Risk</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.10)', borderRadius: '4px', marginBottom: '12px' }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                    background: risk.trend === 'INCREASING' ? 'rgba(195,95,95,0.9)' : risk.trend === 'DECREASING' ? '#4ade80' : '#C9A84C',
                  }} />
                  <span style={{ fontSize: '0.8rem', color: '#9E8F75', fontWeight: 500 }}>{risk.trend}</span>
                </div>

                <div>
                  <p style={{ fontSize: '0.7rem', color: '#5A5040', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Factors</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {risk.factors.slice(0, 3).map((factor, idx) => (
                      <li key={idx} style={{ fontSize: '0.8rem', color: '#9E8F75' }}>• {factor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {topRisks.length === 0 && !loading && (
              <div className="col-span-3" style={{ padding: '40px', textAlign: 'center', background: '#110F0B', border: '1px solid rgba(201,168,76,0.14)', borderRadius: '4px' }}>
                <p style={{ color: '#9E8F75', fontSize: '0.88rem' }}>No risk data available — run an analysis first</p>
              </div>
            )}
          </div>
        </div>

        {/* Predictive Insights */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Award style={{ width: 20, height: 20, color: '#C9A84C' }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#F0EBE0' }}>Predictive Insights</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {insights.map((insight) => (
              <div
                key={insight.id}
                style={{ background: '#110F0B', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px', padding: '20px 24px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 700, color: '#F0EBE0' }}>{insight.title}</h3>
                      <span style={{
                        padding: '2px 8px',
                        background: insight.impact === 'CRITICAL' ? 'rgba(195,95,95,0.15)' : 'rgba(201,168,76,0.10)',
                        border: `1px solid ${insight.impact === 'CRITICAL' ? 'rgba(195,95,95,0.35)' : 'rgba(201,168,76,0.28)'}`,
                        borderRadius: '2px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: insight.impact === 'CRITICAL' ? 'rgba(195,95,95,0.9)' : '#C9A84C',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase' as const,
                      }}>
                        {insight.impact}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#5A5040' }}>{insight.timeframe}</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#9E8F75', marginBottom: '12px', lineHeight: 1.6 }}>{insight.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 700, color: '#C9A84C' }}>{Math.round(insight.likelihood)}%</span>
                        <span style={{ fontSize: '0.78rem', color: '#5A5040' }}>Likelihood</span>
                      </div>
                      {insight.affectedCount && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Users style={{ width: 13, height: 13, color: '#5A5040' }} />
                          <span style={{ fontSize: '0.78rem', color: '#5A5040' }}>{insight.affectedCount} affected</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {insight.actionRequired && (
                    <button style={{ flexShrink: 0, background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.35)', borderRadius: '4px', color: '#C9A84C', padding: '9px 18px', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' as const }}>
                      Take Action
                    </button>
                  )}
                </div>
              </div>
            ))}
            {insights.length === 0 && !loading && (
              <div style={{ padding: '40px', textAlign: 'center', background: '#110F0B', border: '1px solid rgba(201,168,76,0.14)', borderRadius: '4px' }}>
                <p style={{ color: '#9E8F75', fontSize: '0.88rem' }}>No insights yet — run an analysis to generate predictions</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function OraclePageWrapper() {
  return (
    <FeatureGate feature="oracleAI" featureName="Oracle Predictive AI">
      <OraclePage />
    </FeatureGate>
  );
}
