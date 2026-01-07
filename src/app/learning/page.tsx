'use client';

import { useState } from 'react';
import { BookOpen, Award, Video, FileText, CheckCircle, Clock, Star, Download, PlayCircle, TrendingUp } from 'lucide-react';

export default function LearningHubPage() {
  const [activeTab, setActiveTab] = useState<'courses' | 'certifications' | 'resources'>('courses');

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--page-bg)', color: 'var(--body-text)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
            📚 Learning Hub
          </h1>
          <p className="text-lg opacity-80">
            Grow your skills, earn certifications, and advance your career
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--today-highlight)' }}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>12</div>
                <div className="text-sm opacity-70">Courses In Progress</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>8</div>
                <div className="text-sm opacity-70">Completed</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-500">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>5</div>
                <div className="text-sm opacity-70">Certificates Earned</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl shadow-lg" style={{ background: 'var(--card-bg)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--header-text)' }}>87%</div>
                <div className="text-sm opacity-70">Team Progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'courses' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'courses' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'courses' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <BookOpen className="h-5 w-5" />
            Courses
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'certifications' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'certifications' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'certifications' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <Award className="h-5 w-5" />
            Certifications
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'resources' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              background: activeTab === 'resources' ? 'var(--primary-btn)' : 'var(--card-bg)',
              color: activeTab === 'resources' ? '#ffffff' : 'var(--body-text)',
            }}
          >
            <FileText className="h-5 w-5" />
            Resources
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'courses' && <CoursesSection />}
          {activeTab === 'certifications' && <CertificationsSection />}
          {activeTab === 'resources' && <ResourcesSection />}
        </div>
      </div>
    </div>
  );
}

function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: 'Leadership Fundamentals',
      category: 'Management',
      duration: '4 hours',
      modules: 8,
      progress: 65,
      rating: 4.8,
      students: 1234,
      level: 'Beginner',
      certificate: true,
      thumbnail: '�',
      description: 'Master the basics of effective team leadership',
    },
    {
      id: 2,
      title: 'Customer Service Excellence',
      category: 'Customer Service',
      duration: '3 hours',
      modules: 6,
      progress: 100,
      rating: 4.9,
      students: 2156,
      level: 'Beginner',
      certificate: true,
      thumbnail: '🤝',
      description: 'Deliver exceptional customer experiences',
    },
    {
      id: 3,
      title: 'Time Management Mastery',
      category: 'Productivity',
      duration: '2.5 hours',
      modules: 5,
      progress: 30,
      rating: 4.7,
      students: 987,
      level: 'Intermediate',
      certificate: true,
      thumbnail: '⏰',
      description: 'Maximize productivity and work-life balance',
    },
    {
      id: 4,
      title: 'Conflict Resolution Skills',
      category: 'Communication',
      duration: '3.5 hours',
      modules: 7,
      progress: 0,
      rating: 4.9,
      students: 1543,
      level: 'Intermediate',
      certificate: true,
      thumbnail: '🤲',
      description: 'Navigate workplace conflicts with confidence',
    },
    {
      id: 5,
      title: 'Advanced Scheduling Strategies',
      category: 'Operations',
      duration: '5 hours',
      modules: 10,
      progress: 45,
      rating: 4.8,
      students: 678,
      level: 'Advanced',
      certificate: true,
      thumbnail: '📅',
      description: 'Optimize workforce scheduling for maximum efficiency',
    },
    {
      id: 6,
      title: 'Team Building & Motivation',
      category: 'Management',
      duration: '4 hours',
      modules: 8,
      progress: 0,
      rating: 4.9,
      students: 1876,
      level: 'Intermediate',
      certificate: true,
      thumbnail: '🎯',
      description: 'Create high-performing, engaged teams',
    },
  ];

  return (
    <div>
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          📖 Professional Development Courses
        </h2>
        <p className="opacity-80">
          Expert-led courses designed for workplace success. Complete courses to earn certificates!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            style={{ background: 'var(--card-bg)' }}
          >
            {/* Thumbnail */}
            <div className="h-40 flex items-center justify-center text-7xl" style={{ background: 'var(--calendar-bg)' }}>
              {course.thumbnail}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'var(--today-highlight)', color: '#fff' }}>
                  {course.category}
                </span>
                <span className="text-xs px-2 py-1 rounded-full opacity-70" style={{ background: 'var(--border-color)' }}>
                  {course.level}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--header-text)' }}>
                {course.title}
              </h3>
              <p className="text-sm opacity-80 mb-3">{course.description}</p>

              <div className="flex items-center gap-4 text-xs opacity-70 mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {course.modules} modules
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-xs opacity-60">({course.students} students)</span>
              </div>

              {/* Progress Bar */}
              {course.progress > 0 && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${course.progress}%`, background: 'var(--today-highlight)' }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                className="w-full py-2 px-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                style={{ background: course.progress > 0 ? 'var(--secondary-btn)' : 'var(--primary-btn)' }}
              >
                {course.progress === 100 ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    View Certificate
                  </>
                ) : course.progress > 0 ? (
                  <>
                    <PlayCircle className="h-4 w-4" />
                    Continue Learning
                  </>
                ) : (
                  <>
                    <PlayCircle className="h-4 w-4" />
                    Start Course
                  </>
                )}
              </button>

              {course.certificate && (
                <div className="mt-2 text-xs text-center opacity-70 flex items-center justify-center gap-1">
                  <Award className="h-3 w-3" />
                  Certificate upon completion
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificationsSection() {
  const earnedCertificates = [
    {
      title: 'Customer Service Excellence',
      issueDate: 'Dec 15, 2025',
      credentialId: 'CSE-2025-8847',
      skills: ['Communication', 'Problem Solving', 'Empathy'],
      verified: true,
    },
    {
      title: 'Leadership Fundamentals',
      issueDate: 'Nov 22, 2025',
      credentialId: 'LF-2025-7612',
      skills: ['Team Management', 'Decision Making', 'Coaching'],
      verified: true,
    },
    {
      title: 'Workplace Safety',
      issueDate: 'Oct 10, 2025',
      credentialId: 'WS-2025-5439',
      skills: ['Safety Protocols', 'Risk Assessment', 'Compliance'],
      verified: true,
    },
  ];

  const availableCertifications = [
    {
      title: 'Advanced Manager Certification',
      requirements: '3 management courses + assessment',
      duration: '12 hours',
      recognition: 'Industry Recognized',
      icon: '🎓',
    },
    {
      title: 'HR Professional Certificate',
      requirements: '5 HR courses + capstone project',
      duration: '20 hours',
      recognition: 'SHRM Aligned',
      icon: '👥',
    },
    {
      title: 'Operations Excellence',
      requirements: '4 operations courses + exam',
      duration: '15 hours',
      recognition: 'Industry Standard',
      icon: '⚙️',
    },
  ];

  return (
    <div>
      {/* Earned Certificates */}
      <div className="mb-8">
        <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
            🏆 Your Certifications
          </h2>
          <p className="opacity-80">
            Share your verified achievements on LinkedIn and your resume
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {earnedCertificates.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg border-2"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--today-highlight)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--today-highlight)' }}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--header-text)' }}>
                      {cert.title}
                    </h3>
                    <p className="text-sm opacity-70">Issued: {cert.issueDate}</p>
                  </div>
                </div>
                {cert.verified && (
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="text-sm opacity-70 mb-2">Credential ID: {cert.credentialId}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: 'var(--calendar-bg)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  className="flex-1 py-2 px-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                  style={{ background: 'var(--primary-btn)' }}
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
                <button
                  className="flex-1 py-2 px-4 rounded-lg font-semibold"
                  style={{ background: 'var(--secondary-btn)', color: '#fff' }}
                >
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Certifications */}
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          🎯 Professional Certifications
        </h2>
        <p className="opacity-80">
          Earn industry-recognized credentials to advance your career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableCertifications.map((cert, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: 'var(--card-bg)' }}
          >
            <div className="text-6xl mb-4 text-center">{cert.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center" style={{ color: 'var(--header-text)' }}>
              {cert.title}
            </h3>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--today-highlight)' }} />
                <span>{cert.requirements}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--today-highlight)' }} />
                <span>{cert.duration}</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--today-highlight)' }} />
                <span>{cert.recognition}</span>
              </div>
            </div>
            <button
              className="w-full py-2 px-4 rounded-lg font-semibold text-white"
              style={{ background: 'var(--primary-btn)' }}
            >
              Start Path
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourcesSection() {
  const resourceCategories = [
    {
      title: 'Video Tutorials',
      icon: <Video className="h-6 w-6" />,
      count: 45,
      items: [
        'Effective 1-on-1 Meetings',
        'Giving Constructive Feedback',
        'Managing Remote Teams',
        'Conflict Resolution Techniques',
      ],
    },
    {
      title: 'Templates & Tools',
      icon: <FileText className="h-6 w-6" />,
      count: 32,
      items: [
        'Performance Review Template',
        'Shift Schedule Template',
        'Employee Onboarding Checklist',
        'Team Meeting Agenda',
      ],
    },
    {
      title: 'E-Books & Guides',
      icon: <BookOpen className="h-6 w-6" />,
      count: 18,
      items: [
        'The Modern Manager\'s Handbook',
        'Customer Service Playbook',
        'Employee Retention Strategies',
        'Workplace Communication Guide',
      ],
    },
  ];

  return (
    <div>
      <div className="mb-6 p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--header-text)' }}>
          📚 Learning Resources
        </h2>
        <p className="opacity-80">
          Free downloadable resources to support your professional development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {resourceCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg"
            style={{ background: 'var(--card-bg)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--today-highlight)' }}>
                {category.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--header-text)' }}>
                  {category.title}
                </h3>
                <p className="text-sm opacity-70">{category.count} resources</p>
              </div>
            </div>
            <div className="space-y-2">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                  style={{ background: 'var(--calendar-bg)' }}
                >
                  <span className="text-sm">{item}</span>
                  <Download className="h-4 w-4 opacity-50" />
                </div>
              ))}
            </div>
            <button
              className="w-full mt-4 py-2 px-4 rounded-lg font-semibold text-white"
              style={{ background: 'var(--primary-btn)' }}
            >
              View All
            </button>
          </div>
        ))}
      </div>

      {/* Knowledge Base */}
      <div className="p-6 rounded-xl" style={{ background: 'var(--card-bg)' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--header-text)' }}>
          💡 Knowledge Base
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'How to create effective shift schedules',
            'Managing employee availability',
            'Handling time-off requests',
            'Optimizing labor costs',
            'Improving team communication',
            'Best practices for employee retention',
          ].map((article, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg hover:shadow-md transition-all cursor-pointer flex items-center gap-3"
              style={{ background: 'var(--calendar-bg)' }}
            >
              <BookOpen className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--today-highlight)' }} />
              <span className="text-sm">{article}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
