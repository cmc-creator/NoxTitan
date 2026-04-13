'use client';

import React, { useState } from 'react';
import {
  BarChart, TrendingUp, Users, Star, ThumbsUp, ThumbsDown,
  AlertCircle, CheckCircle, Clock, Download, Filter, Calendar
} from 'lucide-react';

interface SurveyData {
  type: string;
  name: string;
  responses: number;
  avgScore: number;
  trend: 'up' | 'down' | 'stable';
  sentiment: { positive: number; neutral: number; negative: number };
}

export default function SurveyAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30');
  const [selectedType, setSelectedType] = useState('all');

  const surveys: SurveyData[] = [
    {
      type: 'PATIENT_SATISFACTION',
      name: 'Patient Satisfaction Survey',
      responses: 234,
      avgScore: 4.6,
      trend: 'up',
      sentiment: { positive: 82, neutral: 14, negative: 4 },
    },
    {
      type: 'EMPLOYEE_ENGAGEMENT',
      name: 'Employee Engagement Survey',
      responses: 156,
      avgScore: 4.2,
      trend: 'stable',
      sentiment: { positive: 68, neutral: 24, negative: 8 },
    },
    {
      type: 'CULTURE_OF_SAFETY',
      name: 'Culture of Safety Survey',
      responses: 189,
      avgScore: 4.8,
      trend: 'up',
      sentiment: { positive: 91, neutral: 7, negative: 2 },
    },
    {
      type: 'TRAINING_EVALUATION',
      name: 'Training Feedback',
      responses: 98,
      avgScore: 4.4,
      trend: 'up',
      sentiment: { positive: 76, neutral: 18, negative: 6 },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold text-stone-200 mb-2">Survey Analytics</h1>
            <p className="text-xl text-stone-500">Real-time insights from all your surveys</p>
          </div>
          <div className="flex gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last year</option>
            </select>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg hover:from-stone-900 hover:to-pink-700 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-stone-950 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-stone-500">Total Responses</span>
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-stone-200">
              {surveys.reduce((sum, s) => sum + s.responses, 0)}
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
              <TrendingUp className="w-4 h-4" />
              <span>+23% vs last month</span>
            </div>
          </div>

          <div className="bg-stone-950 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-stone-500">Average Score</span>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-4xl font-bold text-stone-200">
              {(surveys.reduce((sum, s) => sum + s.avgScore, 0) / surveys.length).toFixed(1)}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="bg-stone-950 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-stone-500">Positive Sentiment</span>
              <ThumbsUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-stone-200">
              {Math.round(surveys.reduce((sum, s) => sum + s.sentiment.positive, 0) / surveys.length)}%
            </div>
            <div className="text-sm text-stone-500 mt-1">Across all surveys</div>
          </div>

          <div className="bg-stone-950 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-stone-500">Active Surveys</span>
              <CheckCircle className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-stone-200">{surveys.length}</div>
            <div className="text-sm text-stone-500 mt-1">Currently collecting</div>
          </div>
        </div>

        {/* Survey Breakdown */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {surveys.map((survey, index) => (
            <div key={index} className="bg-stone-950 rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-200 mb-2">{survey.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {survey.responses} responses
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-amber-700 rounded-full">
                      {survey.type.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-3xl font-bold text-stone-200">{survey.avgScore}</span>
                  </div>
                  {survey.trend === 'up' && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>Improving</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Sentiment Breakdown */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-stone-500 mb-2">
                  <span>Sentiment Analysis</span>
                  <span>{survey.sentiment.positive + survey.sentiment.neutral + survey.sentiment.negative}%</span>
                </div>
                <div className="flex h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500"
                    style={{ width: `${survey.sentiment.positive}%` }}
                  />
                  <div
                    className="bg-yellow-500"
                    style={{ width: `${survey.sentiment.neutral}%` }}
                  />
                  <div
                    className="bg-red-500"
                    style={{ width: `${survey.sentiment.negative}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-green-600" />
                    <span className="text-stone-500">{survey.sentiment.positive}% Positive</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-stone-500">{survey.sentiment.neutral}% Neutral</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsDown className="w-4 h-4 text-red-600" />
                    <span className="text-stone-500">{survey.sentiment.negative}% Negative</span>
                  </div>
                </div>
              </div>

              {/* Common Themes */}
              <div className="pt-6 border-t">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Feedback Themes</h4>
                <div className="flex flex-wrap gap-2">
                  {survey.type === 'PATIENT_SATISFACTION' && (
                    <>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Wait times improved</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Staff friendliness</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Parking issues</span>
                    </>
                  )}
                  {survey.type === 'EMPLOYEE_ENGAGEMENT' && (
                    <>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Work-life balance</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Communication</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Benefits package</span>
                    </>
                  )}
                  {survey.type === 'CULTURE_OF_SAFETY' && (
                    <>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Reporting process</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Leadership support</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Training quality</span>
                    </>
                  )}
                  {survey.type === 'TRAINING_EVALUATION' && (
                    <>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Content quality</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Trainer expertise</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Duration too long</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Items */}
        <div className="bg-stone-950 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-stone-200 mb-6">Recommended Actions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-stone-200 mb-1">Parking Concerns Trending</h4>
                <p className="text-stone-500 text-sm mb-2">
                  Patient satisfaction surveys show increasing complaints about parking availability. Consider adding valet service or expanded lot.
                </p>
                <button className="text-sm text-red-600 font-medium hover:underline">
                  View details →
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-stone-200 mb-1">Follow-up on Employee Communication</h4>
                <p className="text-stone-500 text-sm mb-2">
                  Employee engagement scores indicate communication could improve. Schedule town hall or implement weekly updates.
                </p>
                <button className="text-sm text-yellow-600 font-medium hover:underline">
                  Create action plan →
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-stone-200 mb-1">Safety Culture Exceeding Goals</h4>
                <p className="text-stone-500 text-sm mb-2">
                  Culture of Safety scores are 91% positive - well above industry benchmark of 75%. Consider sharing best practices with other departments.
                </p>
                <button className="text-sm text-green-600 font-medium hover:underline">
                  Share success story →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



