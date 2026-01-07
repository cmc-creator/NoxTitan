'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  FileText, 
  Star, 
  TrendingUp,
  AlertTriangle,
  Plus,
  Edit,
  Trash2,
  Download
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsExperience: number;
  verified: boolean;
}

interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate: string;
  certificateNumber: string;
  status: 'active' | 'expiring-soon' | 'expired';
  documentUrl?: string;
}

interface TrainingRecord {
  id: string;
  courseName: string;
  category: string;
  completedDate: string;
  instructor: string;
  hours: number;
  score?: number;
  certificateUrl?: string;
}

interface PerformanceReview {
  id: string;
  reviewDate: string;
  reviewer: string;
  overallRating: number;
  strengths: string[];
  areasForImprovement: string[];
  goals: string[];
  comments: string;
}

export default function EmployeeDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'skills' | 'certifications' | 'training' | 'performance'>('skills');

  // Mock employee data
  const employee = {
    id: params.id,
    name: 'John Doe',
    title: 'Registered Nurse',
    department: 'Nursing',
    email: 'john.doe@hospital.com',
    phone: '(555) 123-4567',
    hireDate: '2020-03-15',
    avatar: '/placeholder-avatar.jpg'
  };

  // Mock skills data
  const skills: Skill[] = [
    { id: '1', name: 'Emergency Care', level: 'expert', yearsExperience: 8, verified: true },
    { id: '2', name: 'IV Therapy', level: 'expert', yearsExperience: 8, verified: true },
    { id: '3', name: 'Cardiac Monitoring', level: 'advanced', yearsExperience: 6, verified: true },
    { id: '4', name: 'Medication Administration', level: 'expert', yearsExperience: 8, verified: true },
    { id: '5', name: 'Patient Assessment', level: 'expert', yearsExperience: 8, verified: true },
    { id: '6', name: 'Wound Care', level: 'advanced', yearsExperience: 5, verified: false },
    { id: '7', name: 'Ventilator Management', level: 'intermediate', yearsExperience: 3, verified: true },
    { id: '8', name: 'ECMO Support', level: 'beginner', yearsExperience: 1, verified: false },
  ];

  // Mock certifications
  const certifications: Certification[] = [
    {
      id: '1',
      name: 'Registered Nurse License (RN)',
      issuingOrganization: 'State Board of Nursing',
      issueDate: '2020-01-15',
      expirationDate: '2026-01-15',
      certificateNumber: 'RN-12345678',
      status: 'active',
      documentUrl: '/certs/rn-license.pdf'
    },
    {
      id: '2',
      name: 'Basic Life Support (BLS)',
      issuingOrganization: 'American Heart Association',
      issueDate: '2024-06-10',
      expirationDate: '2026-06-10',
      certificateNumber: 'BLS-987654321',
      status: 'active',
      documentUrl: '/certs/bls.pdf'
    },
    {
      id: '3',
      name: 'Advanced Cardiac Life Support (ACLS)',
      issuingOrganization: 'American Heart Association',
      issueDate: '2024-07-22',
      expirationDate: '2026-07-22',
      certificateNumber: 'ACLS-456789123',
      status: 'active',
      documentUrl: '/certs/acls.pdf'
    },
    {
      id: '4',
      name: 'Pediatric Advanced Life Support (PALS)',
      issuingOrganization: 'American Heart Association',
      issueDate: '2023-09-15',
      expirationDate: '2025-09-15',
      certificateNumber: 'PALS-789456123',
      status: 'expiring-soon',
      documentUrl: '/certs/pals.pdf'
    },
    {
      id: '5',
      name: 'Certified Emergency Nurse (CEN)',
      issuingOrganization: 'Board of Certification for Emergency Nursing',
      issueDate: '2021-11-01',
      expirationDate: '2025-11-01',
      certificateNumber: 'CEN-135792468',
      status: 'expiring-soon',
      documentUrl: '/certs/cen.pdf'
    },
  ];

  // Mock training records
  interface Training {
    id: string;
    courseName: string;
    category: string;
    completedDate: string;
    instructor: string;
    hours: number;
    score: number;
    certificateUrl: string;
  }

  const training: Training[] = [
    {
      id: '1',
      courseName: 'HIPAA Compliance Training',
      category: 'Compliance',
      completedDate: '2025-01-05',
      instructor: 'Dr. Sarah Johnson',
      hours: 4,
      score: 95,
      certificateUrl: '/training/hipaa-2025.pdf'
    },
    {
      id: '2',
      courseName: 'Infection Control & Prevention',
      category: 'Clinical',
      completedDate: '2024-11-15',
      instructor: 'Linda Martinez, RN',
      hours: 3,
      score: 98,
      certificateUrl: '/training/infection-control.pdf'
    },
    {
      id: '3',
      courseName: 'Fire Safety & Emergency Evacuation',
      category: 'Safety',
      completedDate: '2024-10-20',
      instructor: 'James Wilson',
      hours: 2,
      score: 100,
      certificateUrl: '/training/fire-safety.pdf'
    },
    {
      id: '4',
      courseName: 'Cultural Competency in Healthcare',
      category: 'Professional Development',
      completedDate: '2024-09-08',
      instructor: 'Dr. Maria Rodriguez',
      hours: 6,
      score: 92,
      certificateUrl: '/training/cultural-competency.pdf'
    },
    {
      id: '5',
      courseName: 'Advanced Cardiac Arrhythmias',
      category: 'Clinical',
      completedDate: '2024-08-12',
      instructor: 'Dr. Michael Chen',
      hours: 8,
      score: 89,
      certificateUrl: '/training/cardiac-arrhythmias.pdf'
    },
    {
      id: '6',
      courseName: 'Leadership in Nursing',
      category: 'Professional Development',
      completedDate: '2024-06-30',
      instructor: 'Janet Brown, MSN',
      hours: 12,
      score: 94,
      certificateUrl: '/training/leadership.pdf'
    },
  ];

  // Mock performance reviews
  const reviews: PerformanceReview[] = [
    {
      id: '1',
      reviewDate: '2024-12-15',
      reviewer: 'Dr. Emily Thompson, Nurse Manager',
      overallRating: 4.5,
      strengths: [
        'Excellent clinical skills and patient care',
        'Strong leadership during emergency situations',
        'Mentors junior nurses effectively',
        'Consistently maintains high patient satisfaction scores'
      ],
      areasForImprovement: [
        'Documentation could be more detailed',
        'Opportunity to lead more quality improvement initiatives'
      ],
      goals: [
        'Complete CEN recertification by November 2025',
        'Lead at least one quality improvement project',
        'Pursue CCRN certification'
      ],
      comments: 'John continues to be an outstanding member of our emergency department team. His clinical expertise and calm demeanor during high-stress situations make him invaluable to our unit.'
    },
    {
      id: '2',
      reviewDate: '2023-12-15',
      reviewer: 'Dr. Emily Thompson, Nurse Manager',
      overallRating: 4.3,
      strengths: [
        'Strong technical skills',
        'Reliable and punctual',
        'Good teamwork and collaboration',
        'Handles challenging patients well'
      ],
      areasForImprovement: [
        'Could take on more leadership responsibilities',
        'Encourage involvement in department committees'
      ],
      goals: [
        'Maintain all required certifications',
        'Participate in at least one department committee',
        'Continue professional development'
      ],
      comments: 'John demonstrates consistent high-quality performance and is well-respected by his peers. Looking forward to seeing him take on more leadership opportunities.'
    },
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-purple-500/20 text-purple-400';
      case 'advanced': return 'bg-blue-500/20 text-blue-400';
      case 'intermediate': return 'bg-green-500/20 text-green-400';
      case 'beginner': return 'bg-amber-500/20 text-amber-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCertStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'expiring-soon': return 'bg-amber-500/20 text-amber-400';
      case 'expired': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getDaysUntilExpiration = (expirationDate: string) => {
    const days = Math.floor((new Date(expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Employees
        </button>

        {/* Employee Info Card */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
              {employee.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{employee.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{employee.title}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Department</span>
                  <p className="font-semibold text-gray-900">{employee.department}</p>
                </div>
                <div>
                  <span className="text-gray-500">Email</span>
                  <p className="font-semibold text-gray-900">{employee.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Phone</span>
                  <p className="font-semibold text-gray-900">{employee.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Hire Date</span>
                  <p className="font-semibold text-gray-900">{formatDate(employee.hireDate)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-gray-900">{skills.length}</span>
            </div>
            <p className="text-gray-600">Skills</p>
            <p className="text-sm text-gray-500">{skills.filter(s => s.verified).length} verified</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-green-600" />
              <span className="text-3xl font-bold text-gray-900">{certifications.length}</span>
            </div>
            <p className="text-gray-600">Certifications</p>
            <p className="text-sm text-amber-600">{certifications.filter(c => c.status === 'expiring-soon').length} expiring soon</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <span className="text-3xl font-bold text-gray-900">{training.length}</span>
            </div>
            <p className="text-gray-600">Training Courses</p>
            <p className="text-sm text-gray-500">{training.reduce((sum, t) => sum + t.hours, 0)} total hours</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-amber-600" />
              <span className="text-3xl font-bold text-gray-900">{reviews[0]?.overallRating.toFixed(1)}</span>
            </div>
            <p className="text-gray-600">Performance Rating</p>
            <p className="text-sm text-gray-500">Last review: {formatDate(reviews[0]?.reviewDate)}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'skills' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Award className="w-5 h-5" />
            Skills & Competencies
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'certifications' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            Certifications & Licenses
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'training' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Training History
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'performance' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Performance Reviews
          </button>
        </div>

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Skills & Competencies</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add Skill
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900">{skill.name}</h3>
                        {skill.verified && <CheckCircle className="w-5 h-5 text-green-500" />}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSkillLevelColor(skill.level)}`}>
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{skill.yearsExperience} years experience</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Certifications & Licenses</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add Certification
              </button>
            </div>

            {certifications.filter(c => c.status === 'expiring-soon').length > 0 && (
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Action Required</p>
                    <p className="text-sm text-amber-700 mt-1">
                      {certifications.filter(c => c.status === 'expiring-soon').length} certification(s) expiring within 180 days. 
                      Please renew to maintain compliance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {certifications.map((cert) => {
                const daysUntilExp = getDaysUntilExpiration(cert.expirationDate);
                return (
                  <div key={cert.id} className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{cert.name}</h3>
                        <p className="text-gray-600 mb-2">{cert.issuingOrganization}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCertStatusColor(cert.status)}`}>
                          {cert.status === 'expiring-soon' ? `Expires in ${daysUntilExp} days` : 
                           cert.status === 'active' ? 'Active' : 'Expired'}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {cert.documentUrl && (
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Download className="w-4 h-4 text-gray-600" />
                          </button>
                        )}
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Certificate #</span>
                        <p className="font-semibold text-gray-900">{cert.certificateNumber}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Issue Date</span>
                        <p className="font-semibold text-gray-900">{formatDate(cert.issueDate)}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Expiration</span>
                        <p className="font-semibold text-gray-900">{formatDate(cert.expirationDate)}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Status</span>
                        <p className={`font-semibold ${cert.status === 'active' ? 'text-green-600' : cert.status === 'expiring-soon' ? 'text-amber-600' : 'text-red-600'}`}>
                          {cert.status === 'active' ? 'Valid' : cert.status === 'expiring-soon' ? 'Renewal Due' : 'Expired'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Training Tab */}
        {activeTab === 'training' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Training History</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add Training
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Course Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Completed</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Instructor</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Hours</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Score</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {training.map((course) => (
                    <tr key={course.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <span className="font-semibold text-gray-900">{course.courseName}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                          {course.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{formatDate(course.completedDate)}</td>
                      <td className="py-4 px-4 text-gray-700">{course.instructor}</td>
                      <td className="text-right py-4 px-4 font-semibold text-gray-900">{course.hours}</td>
                      <td className="text-right py-4 px-4">
                        {course.score && (
                          <span className={`font-semibold ${
                            course.score >= 90 ? 'text-green-600' : 
                            course.score >= 80 ? 'text-blue-600' : 
                            course.score >= 70 ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {course.score}%
                          </span>
                        )}
                      </td>
                      <td className="text-right py-4 px-4">
                        {course.certificateUrl && (
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Download className="w-4 h-4 text-gray-600" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr className="font-bold">
                    <td colSpan={4} className="py-4 px-4 text-gray-900">Total</td>
                    <td className="text-right py-4 px-4 text-gray-900">
                      {training.reduce((sum, t) => sum + t.hours, 0)} hrs
                    </td>
                    <td className="text-right py-4 px-4 text-gray-900">
                      {(training.reduce((sum, t) => sum + (t.score || 0), 0) / training.filter(t => t.score).length).toFixed(1)}%
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Performance Reviews</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add Review
              </button>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{formatDate(review.reviewDate)}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(review.overallRating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                          ))}
                          <span className="ml-2 font-bold text-gray-900">{review.overallRating.toFixed(1)}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">Reviewed by: {review.reviewer}</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Strengths
                      </h4>
                      <ul className="space-y-1">
                        {review.strengths.map((strength, i) => (
                          <li key={i} className="text-gray-700 text-sm">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Areas for Improvement
                      </h4>
                      <ul className="space-y-1">
                        {review.areasForImprovement.map((area, i) => (
                          <li key={i} className="text-gray-700 text-sm">• {area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Goals for Next Review Period
                    </h4>
                    <ul className="space-y-1">
                      {review.goals.map((goal, i) => (
                        <li key={i} className="text-gray-700 text-sm">• {goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comments</h4>
                    <p className="text-gray-700 text-sm">{review.comments}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
