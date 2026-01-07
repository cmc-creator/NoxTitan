'use client';

import { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Target, 
  CheckCircle,
  PlayCircle,
  FileText,
  Star,
  ChevronRight,
  Filter,
  Search,
  Download
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  category: 'leadership' | 'clinical' | 'compliance' | 'technical' | 'professional';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // minutes
  modules: number;
  enrolled: number;
  rating: number;
  description: string;
  instructor: string;
  objectives: string[];
  completed?: boolean;
  progress?: number;
  featured?: boolean;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: string[];
  totalHours: number;
  enrolledUsers: number;
  completionRate: number;
}

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'leadership' | 'my-courses' | 'paths'>('leadership');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  // Leadership Development Courses for New Managers
  const courses: Course[] = [
    {
      id: '1',
      title: 'From Colleague to Manager: Making the Transition',
      category: 'leadership',
      level: 'beginner',
      duration: 90,
      modules: 6,
      enrolled: 245,
      rating: 4.8,
      description: 'Navigate the critical transition from individual contributor to manager. Learn how to establish authority while maintaining relationships with former peers.',
      instructor: 'Dr. Sarah Johnson, Leadership Coach',
      objectives: [
        'Understand the mindset shift from doer to leader',
        'Establish credibility and authority respectfully',
        'Manage former peer relationships professionally',
        'Set clear expectations and boundaries',
        'Build trust with your new team'
      ],
      featured: true,
      progress: 60
    },
    {
      id: '2',
      title: 'Essential Communication Skills for Managers',
      category: 'leadership',
      level: 'beginner',
      duration: 120,
      modules: 8,
      enrolled: 312,
      rating: 4.9,
      description: 'Master the communication skills every manager needs: active listening, giving feedback, difficult conversations, and transparent communication.',
      instructor: 'Michael Chen, Executive Coach',
      objectives: [
        'Practice active listening techniques',
        'Deliver constructive feedback effectively',
        'Navigate difficult conversations with confidence',
        'Communicate vision and expectations clearly',
        'Adapt communication style to different personalities'
      ],
      featured: true,
      progress: 30
    },
    {
      id: '3',
      title: 'Delegation Mastery: Getting Work Done Through Others',
      category: 'leadership',
      level: 'intermediate',
      duration: 75,
      modules: 5,
      enrolled: 189,
      rating: 4.7,
      description: 'Stop doing everything yourself! Learn how to delegate effectively, empower your team, and multiply your impact as a leader.',
      instructor: 'Jennifer Williams, Operations Director',
      objectives: [
        'Identify what to delegate and to whom',
        'Set clear expectations and deadlines',
        'Provide appropriate autonomy and support',
        'Follow up without micromanaging',
        'Develop team members through delegation'
      ],
      featured: true
    },
    {
      id: '4',
      title: 'Performance Management Fundamentals',
      category: 'leadership',
      level: 'beginner',
      duration: 105,
      modules: 7,
      enrolled: 276,
      rating: 4.6,
      description: 'Learn to set goals, conduct performance reviews, address underperformance, and have career development conversations.',
      instructor: 'David Martinez, HR Director',
      objectives: [
        'Set SMART goals with your team',
        'Conduct effective performance reviews',
        'Address performance issues early and fairly',
        'Create development plans for growth',
        'Document performance consistently'
      ],
      featured: true
    },
    {
      id: '5',
      title: 'Conflict Resolution for Team Leaders',
      category: 'leadership',
      level: 'intermediate',
      duration: 90,
      modules: 6,
      enrolled: 198,
      rating: 4.8,
      description: 'Handle team conflicts, mediate disputes, and create a culture of healthy disagreement and collaboration.',
      instructor: 'Dr. Lisa Thompson, Conflict Mediator',
      objectives: [
        'Recognize different types of workplace conflict',
        'Mediate disputes between team members',
        'Address passive-aggressive behavior',
        'Turn conflict into constructive dialogue',
        'Prevent escalation through early intervention'
      ],
      featured: true
    },
    {
      id: '6',
      title: 'Building High-Performing Teams',
      category: 'leadership',
      level: 'intermediate',
      duration: 120,
      modules: 8,
      enrolled: 234,
      rating: 4.9,
      description: 'Create psychological safety, foster collaboration, leverage diverse strengths, and build a team culture of excellence.',
      instructor: 'Rachel Green, Team Development Coach',
      objectives: [
        'Create psychological safety on your team',
        'Build trust and accountability',
        'Leverage individual strengths effectively',
        'Foster healthy team dynamics',
        'Celebrate wins and learn from failures'
      ]
    },
    {
      id: '7',
      title: 'Time Management for Managers',
      category: 'leadership',
      level: 'beginner',
      duration: 60,
      modules: 4,
      enrolled: 312,
      rating: 4.5,
      description: 'Balance your time between managing your team, attending meetings, doing your own work, and strategic thinking.',
      instructor: 'James Wilson, Productivity Expert',
      objectives: [
        'Prioritize manager responsibilities effectively',
        'Block time for strategic thinking',
        'Run efficient meetings that matter',
        'Say no to non-essential requests',
        'Create systems to save time'
      ]
    },
    {
      id: '8',
      title: 'Emotional Intelligence for Leaders',
      category: 'leadership',
      level: 'intermediate',
      duration: 105,
      modules: 7,
      enrolled: 267,
      rating: 4.9,
      description: 'Develop self-awareness, manage your emotions, build empathy, and create emotional connection with your team.',
      instructor: 'Dr. Patricia Anderson, Psychologist',
      objectives: [
        'Increase self-awareness of your triggers',
        'Regulate emotions under pressure',
        'Build empathy and emotional connection',
        'Read and respond to team emotions',
        'Create emotionally intelligent culture'
      ],
      featured: true
    },
    {
      id: '9',
      title: 'Giving Recognition and Motivation',
      category: 'leadership',
      level: 'beginner',
      duration: 75,
      modules: 5,
      enrolled: 298,
      rating: 4.7,
      description: 'Learn what truly motivates employees, how to give meaningful recognition, and create a culture of appreciation.',
      instructor: 'Mark Stevens, Employee Engagement Specialist',
      objectives: [
        'Understand intrinsic vs extrinsic motivation',
        'Give recognition that feels genuine',
        'Tailor motivation to individual preferences',
        'Create a culture of peer recognition',
        'Celebrate team achievements effectively'
      ]
    },
    {
      id: '10',
      title: 'Making Tough Decisions',
      category: 'leadership',
      level: 'advanced',
      duration: 90,
      modules: 6,
      enrolled: 156,
      rating: 4.8,
      description: 'Build confidence in decision-making, navigate ambiguity, make tough calls with incomplete information, and own your decisions.',
      instructor: 'Dr. Robert Chang, Strategy Consultant',
      objectives: [
        'Use frameworks for complex decisions',
        'Decide confidently with incomplete data',
        'Balance stakeholder needs and interests',
        'Communicate difficult decisions clearly',
        'Learn from decisions that didn\'t work out'
      ]
    },
    {
      id: '11',
      title: 'Change Management for Frontline Managers',
      category: 'leadership',
      level: 'intermediate',
      duration: 105,
      modules: 7,
      enrolled: 203,
      rating: 4.6,
      description: 'Lead your team through organizational changes, address resistance, and help people adapt to new ways of working.',
      instructor: 'Angela Rodriguez, Change Management Expert',
      objectives: [
        'Understand the psychology of change',
        'Address resistance and fear',
        'Communicate change effectively',
        'Support team through transition',
        'Maintain performance during change'
      ]
    },
    {
      id: '12',
      title: 'Coaching and Developing Your Team',
      category: 'leadership',
      level: 'intermediate',
      duration: 120,
      modules: 8,
      enrolled: 221,
      rating: 4.9,
      description: 'Move from solving problems to coaching others to solve them. Develop future leaders and help team members reach their potential.',
      instructor: 'Susan Miller, Leadership Development',
      objectives: [
        'Ask powerful coaching questions',
        'Resist the urge to solve every problem',
        'Create individual development plans',
        'Identify and develop future leaders',
        'Balance coaching with accountability'
      ],
      featured: true
    },
  ];

  // Learning Paths for structured development
  const learningPaths: LearningPath[] = [
    {
      id: '1',
      title: 'New Manager Essentials',
      description: 'Complete foundational training for managers new to leadership roles. Covers communication, delegation, performance management, and team building.',
      courses: ['1', '2', '3', '4', '9'],
      totalHours: 8,
      enrolledUsers: 89,
      completionRate: 67
    },
    {
      id: '2',
      title: 'Advanced Leadership Development',
      description: 'Take your leadership to the next level with advanced courses on conflict resolution, emotional intelligence, decision-making, and change management.',
      courses: ['5', '8', '10', '11', '12'],
      totalHours: 10,
      enrolledUsers: 54,
      completionRate: 48
    },
    {
      id: '3',
      title: 'People Management Mastery',
      description: 'Master the human side of management: coaching, motivation, performance management, and building high-performing teams.',
      courses: ['4', '6', '9', '12'],
      totalHours: 7.5,
      enrolledUsers: 71,
      completionRate: 62
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesTab = activeTab === 'all' || 
                      activeTab === 'my-courses' && course.progress !== undefined ||
                      course.category === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesTab && matchesSearch && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-blue-100 text-blue-700';
      case 'advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-blue-600" />
            Training & Development
          </h1>
          <p className="text-lg text-gray-600">Grow your skills with expert-led courses and structured learning paths</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-gray-900">{courses.length}</span>
            </div>
            <p className="text-gray-600">Available Courses</p>
            <p className="text-sm text-gray-500">Across all categories</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <PlayCircle className="w-8 h-8 text-green-600" />
              <span className="text-3xl font-bold text-gray-900">
                {courses.filter(c => c.progress).length}
              </span>
            </div>
            <p className="text-gray-600">In Progress</p>
            <p className="text-sm text-gray-500">Your active courses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-purple-600" />
              <span className="text-3xl font-bold text-gray-900">
                {courses.filter(c => c.completed).length}
              </span>
            </div>
            <p className="text-gray-600">Completed</p>
            <p className="text-sm text-gray-500">Certificates earned</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-amber-600" />
              <span className="text-3xl font-bold text-gray-900">
                {Math.round(courses.reduce((sum, c) => sum + c.duration, 0) / 60)}
              </span>
            </div>
            <p className="text-gray-600">Learning Hours</p>
            <p className="text-sm text-gray-500">Total content available</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as any)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'leadership' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            🚀 Leadership Development
          </button>
          <button
            onClick={() => setActiveTab('my-courses')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'my-courses' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            📚 My Courses
          </button>
          <button
            onClick={() => setActiveTab('paths')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'paths' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            🛤️ Learning Paths
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            📖 All Courses
          </button>
        </div>

        {/* Learning Paths */}
        {activeTab === 'paths' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">📚 Structured Learning Paths</h2>
              <p className="text-gray-700">
                Follow curated learning paths designed to develop specific skills systematically. 
                Complete all courses in a path to earn a completion certificate.
              </p>
            </div>

            {learningPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-2 text-gray-700">
                        <BookOpen className="w-4 h-4" />
                        {path.courses.length} courses
                      </span>
                      <span className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4" />
                        {path.totalHours} hours
                      </span>
                      <span className="flex items-center gap-2 text-gray-700">
                        <Users className="w-4 h-4" />
                        {path.enrolledUsers} enrolled
                      </span>
                      <span className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        {path.completionRate}% completion rate
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                    Start Path
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Course list in path */}
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Courses in this path:</h4>
                  {path.courses.map((courseId, index) => {
                    const course = courses.find(c => c.id === courseId);
                    if (!course) return null;
                    return (
                      <div key={courseId} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold text-sm">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{course.title}</p>
                          <p className="text-sm text-gray-600">{course.duration} minutes • {course.modules} modules</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Courses Grid */}
        {activeTab !== 'paths' && (
          <>
            {activeTab === 'leadership' && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mb-6">
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">� New Manager? Start Here!</h2>
                    <p className="text-gray-700 mb-3">
                      Congratulations on your promotion! Being promoted to manager is exciting, but it can also feel overwhelming. 
                      These courses are specifically designed to help you make a successful transition from individual contributor to leader.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      💡 Recommended: Start with "From Colleague to Manager" and "Essential Communication Skills for Managers"
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all ${
                  course.featured ? 'ring-2 ring-blue-400' : ''
                }`}>
                  {course.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
                      ⭐ Featured for New Managers
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                      {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                      {course.modules} modules
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                      {course.duration} min
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.enrolled} enrolled
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Instructor:</strong> {course.instructor}
                  </p>

                  {course.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-blue-600">{course.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                      {course.progress ? (
                        <>
                          <PlayCircle className="w-5 h-5" />
                          Continue
                        </>
                      ) : (
                        <>
                          <PlayCircle className="w-5 h-5" />
                          Start Course
                        </>
                      )}
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Objectives dropdown */}
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-700">
                      View Learning Objectives
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {course.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          </>
        )}

        {filteredCourses.length === 0 && activeTab !== 'paths' && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
