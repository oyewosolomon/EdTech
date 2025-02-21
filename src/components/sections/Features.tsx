import React from 'react';
import { PieChart, Users, Brain, LineChart, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: PieChart,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights into student performance with intuitive visualizations and actionable metrics.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning Paths',
      description: 'Personalized learning journeys adapted to each student\'s pace and learning style.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: LineChart,
      title: 'Predictive Performance Metrics',
      description: 'Forecast student outcomes and identify intervention opportunities early.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Collaborative Learning Tools',
      description: 'Enable peer-to-peer learning and teacher-student interaction in real-time.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Zap,
      title: 'Automated Assessments',
      description: 'Save time with intelligent grading and immediate feedback systems.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Secure Data Management',
      description: 'Enterprise-grade security ensuring student data privacy and compliance.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Modern Education
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to transform the learning experience
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-6`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;