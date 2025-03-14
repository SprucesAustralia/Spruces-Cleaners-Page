import React, { useState } from 'react';
import Link from 'next/link';
import { 
  UserIcon, 
  AcademicCapIcon, 
  BriefcaseIcon,
  ClipboardCheckIcon,
  PencilAltIcon,
  TrashIcon,
  ViewGridIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/outline';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'cleaners':
        return <CleanersTab />;
      case 'jobs':
        return <JobsTab />;
      case 'applications':
        return <ApplicationsTab />;
      case 'courses':
        return <CoursesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold text-primary">
            Spruces Cleaners
          </Link>
          <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>
        </div>
        <nav className="mt-6">
          <SidebarLink 
            icon={<ViewGridIcon className="w-5 h-5" />}
            title="Overview"
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <SidebarLink 
            icon={<UserGroupIcon className="w-5 h-5" />}
            title="Cleaners"
            active={activeTab === 'cleaners'}
            onClick={() => setActiveTab('cleaners')}
          />
          <SidebarLink 
            icon={<BriefcaseIcon className="w-5 h-5" />}
            title="Jobs"
            active={activeTab === 'jobs'}
            onClick={() => setActiveTab('jobs')}
          />
          <SidebarLink 
            icon={<ClipboardCheckIcon className="w-5 h-5" />}
            title="Applications"
            active={activeTab === 'applications'}
            onClick={() => setActiveTab('applications')}
          />
          <SidebarLink 
            icon={<AcademicCapIcon className="w-5 h-5" />}
            title="Training Courses"
            active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')}
          />
          <div className="px-6 py-4">
            <hr className="border-gray-200" />
          </div>
          <SidebarLink 
            icon={<UserIcon className="w-5 h-5" />}
            title="My Profile"
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
          <div className="px-6 py-4">
            <button className="w-full px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold text-primary">
            Spruces Cleaners
          </Link>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto p-2 bg-gray-50">
          <TabButton 
            title="Overview"
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <TabButton 
            title="Cleaners"
            active={activeTab === 'cleaners'}
            onClick={() => setActiveTab('cleaners')}
          />
          <TabButton 
            title="Jobs"
            active={activeTab === 'jobs'}
            onClick={() => setActiveTab('jobs')}
          />
          <TabButton 
            title="Applications"
            active={activeTab === 'applications'}
            onClick={() => setActiveTab('applications')}
          />
          <TabButton 
            title="Courses"
            active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 md:pt-0 pt-24">
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

// Sidebar Link Component
function SidebarLink({ icon, title, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-full px-6 py-3 text-left ${
        active ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{title}</span>
    </button>
  );
}

// Mobile Tab Button Component
function TabButton({ title, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 text-sm whitespace-nowrap rounded-lg mr-2 ${
        active ? 'bg-primary text-white' : 'bg-white text-gray-600'
      }`}
    >
      {title}
    </button>
  );
}

// Overview Tab
function OverviewTab() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Cleaners"
          value="124"
          icon={<UserGroupIcon className="w-8 h-8 text-blue-500" />}
          change="+12% from last month"
          positive={true}
        />
        <StatCard 
          title="Active Jobs"
          value="38"
          icon={<BriefcaseIcon className="w-8 h-8 text-green-500" />}
          change="+5% from last month"
          positive={true}
        />
        <StatCard 
          title="New Applications"
          value="57"
          icon={<ClipboardCheckIcon className="w-8 h-8 text-yellow-500" />}
          change="+18% from last month"
          positive={true}
        />
        <StatCard 
          title="Course Enrollments"
          value="89"
          icon={<AcademicCapIcon className="w-8 h-8 text-purple-500" />}
          change="+24% from last month"
          positive={true}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Cleaner</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Job</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">Sarah Johnson</td>
                  <td className="py-3 text-sm">Office Cleaning - Sydney CBD</td>
                  <td className="py-3 text-sm">14 Mar 2025</td>
                  <td className="py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">Michael Chen</td>
                  <td className="py-3 text-sm">School Cleaning - Melbourne</td>
                  <td className="py-3 text-sm">13 Mar 2025</td>
                  <td className="py-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">Emma Wilson</td>
                  <td className="py-3 text-sm">Childcare Cleaning - Brisbane</td>
                  <td className="py-3 text-sm">12 Mar 2025</td>
                  <td className="py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Rejected</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">David Thompson</td>
                  <td className="py-3 text-sm">Post Construction - Perth</td>
                  <td className="py-3 text-sm">11 Mar 2025</td>
                  <td className="py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link href="/admin/applications" className="text-primary hover:underline text-sm">
              View all applications →
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Course Completions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Cleaner</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Course</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Completion Date</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">John Smith</td>
                  <td className="py-3 text-sm">Office Cleaning</td>
                  <td className="py-3 text-sm">14 Mar 2025</td>
                  <td className="py-3 text-sm">95%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">Lisa Brown</td>
                  <td className="py-3 text-sm">Childcare Cleaning</td>
                  <td className="py-3 text-sm">13 Mar 2025</td>
                  <td className="py-3 text-sm">88%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">Robert Davis</td>
                  <td className="py-3 text-sm">Post Construction</td>
                  <td className="py-3 text-sm">12 Mar 2025</td>
                  <td className="py-3 text-sm">92%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 text-sm">Jennifer Lee</td>
                  <td className="py-3 text-sm">School Cleaning</td>
                  <td className="py-3 text-sm">11 Mar 2025</td>
                  <td className="py-3 text-sm">90%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link href="/admin/courses/completions" className="text-primary hover:underline text-sm">
              View all completions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, icon, change, positive }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-gray-50">
          {icon}
        </div>
      </div>
      <div className={`mt-4 text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </div>
    </div>
  );
}

// Cleaners Tab
function CleanersTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCleaner, setSelectedCleaner] = useState(null);
  
  // Mock data for cleaners
  const cleaners = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '0412 345 678', location: 'Sydney, NSW', abn: '12345678901', completedCourses: ['Office Cleaning', 'Childcare Cleaning'], appliedJobs: ['Office Cleaning - Sydney CBD', 'Childcare Cleaning - Parramatta'] },
    { id: 2, name: 'Michael Chen', email: 'michael.c@example.com', phone: '0423 456 789', location: 'Melbourne, VIC', abn: '23456789012', completedCourses: ['School Cleaning', 'Post Construction Cleaning'], appliedJobs: ['School Cleaning - Melbourne', 'Office Cleaning - Melbourne CBD'] },
    { id: 3, name: 'Emma Wilson', email: 'emma.w@example.com', phone: '0434 567 890', location: 'Brisbane, QLD', abn: '34567890123', completedCourses: ['Childcare Cleaning', 'Customer Service Cleaning'], appliedJobs: ['Childcare Cleaning - Brisbane', 'Office Cleaning - Brisbane CBD'] },
    { id: 4, name: 'David Thompson', email: 'david.t@example.com', phone: '0445 678 901', location: 'Perth, WA', abn: '45678901234', completedCourses: ['Post Construction Cleaning'], appliedJobs: ['Post Construction - Perth', 'School Cleaning - Perth'] },
    { id: 5, name: 'Lisa Brown', email: 'lisa.b@example.com', phone: '0456 789 012', location: 'Adelaide, SA', abn: '56789012345', completedCourses: ['Office Cleaning', 'School Cleaning'], appliedJobs: ['Office Cleaning - Adelaide', 'School Cleaning - Adelaide'] },
  ];
  
  const filteredCleaners = cleaners.filter(cleaner => 
    cleaner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cleaner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cleaner.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Cleaners Management</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cleaners by name, email, or location..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-3 top-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Phone</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Location</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ABN</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCleaners.map(cleaner => (
                <tr key={cleaner.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{cleaner.name}</td>
                  <td className="py-3 px-4 text-sm">{cleaner.email}</td>
                  <td className="py-3 px-4 text-sm">{cleaner.phone}</td>
                  <td className="py-3 px-4 text-sm">{cleaner.location}</td>
                  <td className="py-3 px-4 text-sm">{cleaner.abn}</td>
                  <td className="py-3 px-4 text-sm">
                    <button 
                      onClick={() => setSelectedCleaner(cleaner)}
                      className="text-primary hover:underline mr-3"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedCleaner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">{selectedCleaner.name}</h2>
                <button 
                  onClick={() => setSelectedCleaner(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{selectedCleaner.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>{selectedCleaner.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{selectedCleaner.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ABN</p>
                  <p>{selectedCleaner.abn}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Completed Training Courses</h3>
                {selectedCleaner.completedCourses.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {selectedCleaner.completedCourses.map((course, index) => (
                      <li key={index} className="mb-1">{course}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No courses completed yet.</p>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Applied Jobs</h3>
                {selectedCleaner.appliedJobs.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {selectedCleaner.appliedJobs.map((job, index) => (
                      <li key={index} className="mb-1">{job}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No job applications yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Jobs Tab
function JobsTab() {
  const [jobs, setJobs] = useState([
    { 
      id: 1, 
      project: 'Office Cleaning', 
      dates: '20 Mar - 25 Mar 2025', 
      location: 'Sydney CBD', 
      category: 'Office', 
      cleaners: 3, 
      payPerCleaner: '$28/hr', 
      hoursPerDay: 4,
      status: 'Active'
    },
    { 
      id: 2, 
      project: 'School Cleaning', 
      dates: '22 Mar - 28 Mar 2025', 
      location: 'Melbourne', 
      category: 'School', 
      cleaners: 5, 
      payPerCleaner: '$30/hr', 
      hoursPerDay: 6,
      status: 'Active'
    },
    { 
      id: 3, 
      project: 'Childcare Cleaning', 
      dates: '25 Mar - 30 Mar 2025', 
      location: 'Brisbane', 
      category: 'Childcare', 
      cleaners: 2, 
      payPerCleaner: '$32/hr', 
      hoursPerDay: 3,
      status: 'Pending'
    },
    { 
      id: 4, 
      project: 'Post Construction', 
      dates: '01 Apr - 10 Apr 2025', 
      location: 'Perth', 
      category: 'Construction', 
      cleaners: 8, 
      payPerCleaner: '$35/hr', 
      hoursPerDay: 8,
      status: 'Pending'
    },
  ]);
  
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  
  const [newJob, setNewJob] = useState({
    project: '',
    dates: '',
    location: '',
    category: '',
    cleaners: '',
    payPerCleaner: '',
    hoursPerDay: '',
    status: 'Pending'
  });
  
  const handleAddJob = () => {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
    setNewJob({
      project: '',
      dates: '',
      location: '',
      category: '',
      cleaners: '',
      payPerCleaner: '',
      hoursPerDay: '',
      status: 'Pending'
    });
    setIsAddingJob(false);
  };
  
  const handleUpdateJob = () => {
    setJobs(jobs.map(job => job.id === editingJob.id ? editingJob : job));
    setEditingJob(null);
  };
  
  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Jobs Management</h1>
        <button 
          onClick={() => setIsAddingJob(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Job
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Project</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Dates</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Location</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Category</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Cleaners</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Pay per Cleaner</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Hours per Day</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{job.project}</td>
                  <td className="py-3 px-4 text-sm">{job.dates}</td>
                  <td className="py-3 px-4 text-sm">{job.location}</td>
                  <td className="py-3 px-4 text-sm">{job.category}</td>
                  <td className="py-3 px-4 text-sm">{job.cleaners}</td>
                  <td className="py-3 px-4 text-sm">{job.payPerCleaner}</td>
                  <td className="py-3 px-4 text-sm">{job.hoursPerDay}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <button 
                      onClick={() => setEditingJob({ ...job })}
                      className="text-blue-500 hover:text-blue-700 mr-3"
                    >
                      <PencilAltIcon className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleDeleteJob(job.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Add Job Modal */}
      {isAddingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">Add New Job</h2>
                <button 
                  onClick={() => setIsAddingJob(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.project}
                    onChange={(e) => setNewJob({ ...newJob, project: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.dates}
                    onChange={(e) => setNewJob({ ...newJob, dates: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.category}
                    onChange={(e) => setNewJob({ ...newJob, category: e.target.value })}
                  >
                    <option value="">Select Category</option>
                    <option value="Office">Office</option>
                    <option value="School">School</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Construction">Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cleaners Required</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.cleaners}
                    onChange={(e) => setNewJob({ ...newJob, cleaners: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pay per Cleaner</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.payPerCleaner}
                    onChange={(e) => setNewJob({ ...newJob, payPerCleaner: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hours per Day</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.hoursPerDay}
                    onChange={(e) => setNewJob({ ...newJob, hoursPerDay: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newJob.status}
                    onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Active">Active</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setIsAddingJob(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg mr-2 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddJob}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  Add Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Job Modal */}
      {editingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">Edit Job</h2>
                <button 
                  onClick={() => setEditingJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.project}
                    onChange={(e) => setEditingJob({ ...editingJob, project: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.dates}
                    onChange={(e) => setEditingJob({ ...editingJob, dates: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.location}
                    onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.category}
                    onChange={(e) => setEditingJob({ ...editingJob, category: e.target.value })}
                  >
                    <option value="Office">Office</option>
                    <option value="School">School</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Construction">Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cleaners Required</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.cleaners}
                    onChange={(e) => setEditingJob({ ...editingJob, cleaners: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pay per Cleaner</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.payPerCleaner}
                    onChange={(e) => setEditingJob({ ...editingJob, payPerCleaner: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hours per Day</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.hoursPerDay}
                    onChange={(e) => setEditingJob({ ...editingJob, hoursPerDay: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={editingJob.status}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value })}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Active">Active</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setEditingJob(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg mr-2 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateJob}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  Update Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Applications Tab
function ApplicationsTab() {
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      cleaner: 'Sarah Johnson', 
      job: 'Office Cleaning - Sydney CBD', 
      date: '14 Mar 2025', 
      status: 'Pending',
      cleanerDetails: {
        email: 'sarah.j@example.com',
        phone: '0412 345 678',
        location: 'Sydney, NSW',
        completedCourses: ['Office Cleaning', 'Childcare Cleaning']
      }
    },
    { 
      id: 2, 
      cleaner: 'Michael Chen', 
      job: 'School Cleaning - Melbourne', 
      date: '13 Mar 2025', 
      status: 'Approved',
      cleanerDetails: {
        email: 'michael.c@example.com',
        phone: '0423 456 789',
        location: 'Melbourne, VIC',
        completedCourses: ['School Cleaning', 'Post Construction Cleaning']
      }
    },
    { 
      id: 3, 
      cleaner: 'Emma Wilson', 
      job: 'Childcare Cleaning - Brisbane', 
      date: '12 Mar 2025', 
      status: 'Rejected',
      cleanerDetails: {
        email: 'emma.w@example.com',
        phone: '0434 567 890',
        location: 'Brisbane, QLD',
        completedCourses: ['Childcare Cleaning', 'Customer Service Cleaning']
      }
    },
    { 
      id: 4, 
      cleaner: 'David Thompson', 
      job: 'Post Construction - Perth', 
      date: '11 Mar 2025', 
      status: 'Pending',
      cleanerDetails: {
        email: 'david.t@example.com',
        phone: '0445 678 901',
        location: 'Perth, WA',
        completedCourses: ['Post Construction Cleaning']
      }
    },
  ]);
  
  const [selectedApplication, setSelectedApplication] = useState(null);
  
  const handleUpdateStatus = (id, newStatus) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
    setSelectedApplication(null);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Applications</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Cleaner</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Job</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Application Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(application => (
                <tr key={application.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{application.cleaner}</td>
                  <td className="py-3 px-4 text-sm">{application.job}</td>
                  <td className="py-3 px-4 text-sm">{application.date}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      application.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                      application.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <button 
                      onClick={() => setSelectedApplication(application)}
                      className="text-primary hover:underline"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">Application Details</h2>
                <button 
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Cleaner</p>
                  <p className="font-medium">{selectedApplication.cleaner}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{selectedApplication.cleanerDetails.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>{selectedApplication.cleanerDetails.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{selectedApplication.cleanerDetails.location}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500">Job</p>
                <p className="font-medium">{selectedApplication.job}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500">Completed Training Courses</p>
                {selectedApplication.cleanerDetails.completedCourses.length > 0 ? (
                  <ul className="list-disc pl-5 mt-2">
                    {selectedApplication.cleanerDetails.completedCourses.map((course, index) => (
                      <li key={index} className="mb-1">{course}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 mt-2">No courses completed yet.</p>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500">Current Status</p>
                <p className={`font-medium ${
                  selectedApplication.status === 'Approved' ? 'text-green-600' : 
                  selectedApplication.status === 'Rejected' ? 'text-red-600' : 
                  'text-yellow-600'
                }`}>
                  {selectedApplication.status}
                </p>
              </div>
              
              <div className="flex justify-end">
                {selectedApplication.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleUpdateStatus(selectedApplication.id, 'Rejected')}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mr-2"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(selectedApplication.id, 'Approved')}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Approve
                    </button>
                  </>
                )}
                {selectedApplication.status === 'Approved' && (
                  <button
                    onClick={() => handleUpdateStatus(selectedApplication.id, 'Rejected')}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Change to Rejected
                  </button>
                )}
                {selectedApplication.status === 'Rejected' && (
                  <button
                    onClick={() => handleUpdateStatus(selectedApplication.id, 'Approved')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Change to Approved
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Courses Tab
function CoursesTab() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Post Construction Cleaning Training Course',
      description: 'Learn specialized techniques for cleaning newly constructed or renovated buildings.',
      category: 'Construction',
      sections: [
        {
          title: 'Introduction to Post Construction Cleaning',
          questions: [
            { question: 'What is post construction cleaning?', answer: 'Post construction cleaning is the thorough cleaning of a building after construction or renovation work has been completed.' },
            { question: 'Why is post construction cleaning important?', answer: 'It removes construction debris, dust, and hazardous materials to make the space safe and ready for occupancy.' },
            { question: 'What are the stages of post construction cleaning?', answer: 'Rough clean (debris removal), initial clean (dust and marks), and final clean (detailed cleaning).' }
          ]
        },
        {
          title: 'Safety Procedures',
          questions: [
            { question: 'What personal protective equipment (PPE) should be worn?', answer: 'Gloves, safety glasses, dust masks, and appropriate footwear.' },
            { question: 'How to handle construction dust safely?', answer: 'Use HEPA vacuums, wet cleaning methods, and proper ventilation.' },
            { question: 'What hazardous materials might be encountered?', answer: 'Silica dust, chemical residues, sharp objects, and potentially harmful adhesives or sealants.' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Office Cleaning Training Course',
      description: 'Master the skills needed for efficient and thorough office cleaning services.',
      category: 'Office',
      sections: [
        {
          title: 'Office Cleaning Basics',
          questions: [
            { question: 'What areas require daily cleaning in an office?', answer: 'Reception areas, workstations, meeting rooms, kitchens, and bathrooms.' },
            { question: 'What is the recommended cleaning sequence?', answer: 'Top to bottom, clean to dirty, and working in a systematic pattern (clockwise or counterclockwise).' },
            { question: 'What are the key differences between day and night cleaning?', answer: 'Day cleaning requires working around staff with minimal disruption, while night cleaning allows for more thorough cleaning of unoccupied spaces.' }
          ]
        },
        {
          title: 'Specialized Office Equipment Cleaning',
          questions: [
            { question: 'How to safely clean electronic equipment?', answer: 'Use appropriate electronics cleaners, microfiber cloths, and never spray liquids directly onto devices.' },
            { question: 'What is the proper way to clean office chairs and furniture?', answer: 'Vacuum fabric surfaces, use appropriate cleaners for different materials (leather, fabric, vinyl), and spot clean stains.' },
            { question: 'How to maintain carpet and hard floors in office environments?', answer: 'Regular vacuuming for carpets, spot cleaning spills immediately, and using appropriate floor cleaners for different floor types.' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Childcare Cleaning Training Course',
      description: 'Learn about the special requirements and standards for cleaning childcare facilities.',
      category: 'Childcare',
      sections: [
        {
          title: 'Childcare Cleaning Standards',
          questions: [
            { question: 'What are the regulatory requirements for childcare facility cleaning?', answer: 'Compliance with health department regulations, childcare licensing requirements, and infection control standards.' },
            { question: 'How often should toys and play equipment be sanitized?', answer: 'Mouthed toys should be sanitized daily, while other toys should be cleaned weekly or when visibly soiled.' },
            { question: 'What areas require special attention in childcare settings?', answer: 'Diaper changing areas, sleeping areas, food preparation areas, and high-touch surfaces.' }
          ]
        },
        {
          title: 'Safe Cleaning Products for Childcare',
          questions: [
            { question: 'What types of cleaning products are safe for use in childcare environments?', answer: 'Non-toxic, fragrance-free, and eco-friendly products that are effective against common pathogens.' },
            { question: 'How to properly dilute and use sanitizers and disinfectants?', answer: 'Follow manufacturer instructions for dilution ratios, contact time, and application methods.' },
            { question: 'What is the difference between cleaning, sanitizing, and disinfecting?', answer: 'Cleaning removes dirt and some germs, sanitizing reduces germs to safe levels, and disinfecting kills most germs on surfaces.' }
          ]
        }
      ]
    }
  ]);
  
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
  
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    category: '',
    sections: [
      {
        title: '',
        questions: [
          { question: '', answer: '' },
          { question: '', answer: '' },
          { question: '', answer: '' }
        ]
      }
    ]
  });
  
  const handleAddCourse = () => {
    setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
    setNewCourse({
      title: '',
      description: '',
      category: '',
      sections: [
        {
          title: '',
          questions: [
            { question: '', answer: '' },
            { question: '', answer: '' },
            { question: '', answer: '' }
          ]
        }
      ]
    });
    setIsAddingCourse(false);
  };
  
  const handleUpdateCourse = () => {
    setCourses(courses.map(course => course.id === selectedCourse.id ? selectedCourse : course));
    setSelectedCourse(null);
    setIsEditingCourse(false);
  };
  
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };
  
  const addSection = () => {
    if (isAddingCourse) {
      setNewCourse({
        ...newCourse,
        sections: [
          ...newCourse.sections,
          {
            title: '',
            questions: [
              { question: '', answer: '' },
              { question: '', answer: '' },
              { question: '', answer: '' }
            ]
          }
        ]
      });
    } else if (isEditingCourse) {
      setSelectedCourse({
        ...selectedCourse,
        sections: [
          ...selectedCourse.sections,
          {
            title: '',
            questions: [
              { question: '', answer: '' },
              { question: '', answer: '' },
              { question: '', answer: '' }
            ]
          }
        ]
      });
    }
  };
  
  const updateNewCourseSection = (sectionIndex, field, value) => {
    const updatedSections = [...newCourse.sections];
    updatedSections[sectionIndex] = { ...updatedSections[sectionIndex], [field]: value };
    setNewCourse({ ...newCourse, sections: updatedSections });
  };
  
  const updateNewCourseQuestion = (sectionIndex, questionIndex, field, value) => {
    const updatedSections = [...newCourse.sections];
    const updatedQuestions = [...updatedSections[sectionIndex].questions];
    updatedQuestions[questionIndex] = { ...updatedQuestions[questionIndex], [field]: value };
    updatedSections[sectionIndex] = { ...updatedSections[sectionIndex], questions: updatedQuestions };
    setNewCourse({ ...newCourse, sections: updatedSections });
  };
  
  const updateSelectedCourseSection = (sectionIndex, field, value) => {
    const updatedSections = [...selectedCourse.sections];
    updatedSections[sectionIndex] = { ...updatedSections[sectionIndex], [field]: value };
    setSelectedCourse({ ...selectedCourse, sections: updatedSections });
  };
  
  const updateSelectedCourseQuestion = (sectionIndex, questionIndex, field, value) => {
    const updatedSections = [...selectedCourse.sections];
    const updatedQuestions = [...updatedSections[sectionIndex].questions];
    updatedQuestions[questionIndex] = { ...updatedQuestions[questionIndex], [field]: value };
    updatedSections[sectionIndex] = { ...updatedSections[sectionIndex], questions: updatedQuestions };
    setSelectedCourse({ ...selectedCourse, sections: updatedSections });
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Training Courses</h1>
        <button 
          onClick={() => setIsAddingCourse(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Course
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center mb-4">
                <span className="px-2 py-1 bg-primary-light text-primary rounded-full text-xs">
                  {course.category}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {course.sections.length} sections
                </span>
              </div>
              <div className="flex justify-between">
                <button 
                  onClick={() => {
                    setSelectedCourse(course);
                    setIsEditingCourse(false);
                  }}
                  className="text-primary hover:underline flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div>
                  <button 
                    onClick={() => {
                      setSelectedCourse(course);
                      setIsEditingCourse(true);
                    }}
                    className="text-blue-500 hover:text-blue-700 mr-3"
                  >
                    <PencilAltIcon className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDeleteCourse(course.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View Course Modal */}
      {selectedCourse && !isEditingCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600">{selectedCourse.description}</p>
                <div className="mt-2">
                  <span className="px-2 py-1 bg-primary-light text-primary rounded-full text-xs">
                    {selectedCourse.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-8">
                {selectedCourse.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Section {sectionIndex + 1}: {section.title}</h3>
                    <div className="space-y-4">
                      {section.questions.map((q, questionIndex) => (
                        <div key={questionIndex} className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium mb-2">Q: {q.question}</p>
                          <p className="text-gray-600">A: {q.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-8">
                <button
                  onClick={() => {
                    setIsEditingCourse(true);
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
                >
                  <PencilAltIcon className="w-5 h-5 mr-2" />
                  Edit Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Course Modal */}
      {isAddingCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">Add New Course</h2>
                <button 
                  onClick={() => setIsAddingCourse(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    rows="3"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={newCourse.category}
                    onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                  >
                    <option value="">Select Category</option>
                    <option value="Office">Office</option>
                    <option value="School">School</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Construction">Construction</option>
                    <option value="Customer Service">Customer Service</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Course Sections</h3>
                
                {newCourse.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border p-4 rounded-lg mb-6">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        value={section.title}
                        onChange={(e) => updateNewCourseSection(sectionIndex, 'title', e.target.value)}
                      />
                    </div>
                    
                    <h4 className="text-md font-medium mb-2">Questions (3 per section)</h4>
                    {section.questions.map((q, questionIndex) => (
                      <div key={questionIndex} className="border-t pt-4 mt-4">
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Question {questionIndex + 1}</label>
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            value={q.question}
                            onChange={(e) => updateNewCourseQuestion(sectionIndex, questionIndex, 'question', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                          <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            rows="2"
                            value={q.answer}
                            onChange={(e) => updateNewCourseQuestion(sectionIndex, questionIndex, 'answer', e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                
                <button
                  onClick={addSection}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Another Section
                </button>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setIsAddingCourse(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg mr-2 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCourse}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Course Modal */}
      {selectedCourse && isEditingCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">Edit Course</h2>
                <button 
                  onClick={() => {
                    setSelectedCourse(null);
                    setIsEditingCourse(false);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={selectedCourse.title}
                    onChange={(e) => setSelectedCourse({ ...selectedCourse, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    rows="3"
                    value={selectedCourse.description}
                    onChange={(e) => setSelectedCourse({ ...selectedCourse, description: e.target.value })}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={selectedCourse.category}
                    onChange={(e) => setSelectedCourse({ ...selectedCourse, category: e.target.value })}
                  >
                    <option value="Office">Office</option>
                    <option value="School">School</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Construction">Construction</option>
                    <option value="Customer Service">Customer Service</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Course Sections</h3>
                
                {selectedCourse.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border p-4 rounded-lg mb-6">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        value={section.title}
                        onChange={(e) => updateSelectedCourseSection(sectionIndex, 'title', e.target.value)}
                      />
                    </div>
                    
                    <h4 className="text-md font-medium mb-2">Questions (3 per section)</h4>
                    {section.questions.map((q, questionIndex) => (
                      <div key={questionIndex} className="border-t pt-4 mt-4">
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Question {questionIndex + 1}</label>
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            value={q.question}
                            onChange={(e) => updateSelectedCourseQuestion(sectionIndex, questionIndex, 'question', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                          <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            rows="2"
                            value={q.answer}
                            onChange={(e) => updateSelectedCourseQuestion(sectionIndex, questionIndex, 'answer', e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                
                <button
                  onClick={addSection}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Another Section
                </button>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    setIsEditingCourse(false);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg mr-2 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateCourse}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  Update Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
