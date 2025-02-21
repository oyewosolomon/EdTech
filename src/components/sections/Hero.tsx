import React from 'react';
import { ChevronRight, BarChart2, Brain, Target } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                <span className="block">Transform Education with</span>
                <span className="block text-indigo-600 mt-2">Predictive Analytics</span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Empower 1M+ students with AI-driven insights, personalized learning paths, and automated assessments. Proven to improve student outcomes by 30%.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'Students Tracked', value: '1M+' },
                  { label: 'Performance Improvement', value: '30%' },
                  { label: 'Learning Paths Created', value: '500K+' }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right content - Features grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: BarChart2,
                    title: 'Predictive Analytics',
                    desc: 'AI-powered insights for student success'
                  },
                  {
                    icon: Brain,
                    title: 'Personalized Learning',
                    desc: 'Adaptive paths for every student'
                  },
                  {
                    icon: Target,
                    title: 'Automated Assessment',
                    desc: 'Smart evaluation systems'
                  }
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                      index === 2 ? 'col-span-2 sm:col-span-1' : ''
                    }`}
                  >
                    <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;