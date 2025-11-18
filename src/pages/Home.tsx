import { IconBolt, IconBrandChrome, IconDatabasePlus, IconDeviceIpadHorizontal, IconPlug, IconUsers } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      title: 'User Management',
      description: 'View and manage user data with advanced filtering and search capabilities',
      icon: <IconUsers size={36}/>,
    },
    {
      title: 'Data Tables',
      description: 'Interactive tables with sorting, pagination, and real-time search',
      icon: <IconDatabasePlus size={36}/>,
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with JSONPlaceholder API for demo data',
      icon: <IconPlug size={36}/>,
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works on all devices',
      icon: <IconDeviceIpadHorizontal size={36}/>,
    },
  ];

  const stats = [
    { label: 'Total Users', value: '10', icon: <IconUsers/> },
    { label: 'API Endpoints', value: '1', icon: <IconBrandChrome/> },
    { label: 'Response Time', value: '<100ms', icon: <IconBolt/> },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard App</h1>
        <p className="text-lg text-primary-100 mb-6">
        A Dashboard to view user list fetched from a public API.
        </p>
        <Link
          to="/data"
          className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
        >
          View User List
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className="text-4xl text-primary-600">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl text-primary-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack Used</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Axios'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
