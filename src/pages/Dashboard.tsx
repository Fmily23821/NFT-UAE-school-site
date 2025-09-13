import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Welcome Back!</h3>
            <p className="text-gray-600">Your dashboard is ready.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
            <p className="text-gray-600">Access your most used features.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
            <p className="text-gray-600">See what's been happening.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;