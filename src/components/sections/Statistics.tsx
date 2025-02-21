import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const performanceData = [
    { month: 'Jan', baseline: 70, improved: 91 },
    { month: 'Feb', baseline: 72, improved: 93 },
    { month: 'Mar', baseline: 71, improved: 92 },
    { month: 'Apr', baseline: 73, improved: 95 },
    { month: 'May', baseline: 70, improved: 94 },
    { month: 'Jun', baseline: 74, improved: 96 },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Proven Results in Numbers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how our platform transforms educational outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Active Students', value: '1M+', suffix: '', color: 'bg-blue-500' },
              { label: 'Performance Boost', value: '30', suffix: '%', color: 'bg-green-500' },
              { label: 'Daily Assessments', value: '50K', suffix: '+', color: 'bg-purple-500' },
              { label: 'Teacher Time Saved', value: '25', suffix: 'hrs/week', color: 'bg-indigo-500' }
            ].map((stat) => (
              <div
                key={stat.label}
                className={`transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className={`w-12 h-1 ${stat.color} rounded mb-4`} />
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="ml-1 text-xl text-gray-600">{stat.suffix}</div>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance comparison chart */}
          <div className="h-80 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Student Performance Comparison
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="baseline" 
                  stroke="#94a3b8" 
                  name="Baseline Performance"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="improved" 
                  stroke="#6366f1" 
                  name="With EdTech Analytics"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;