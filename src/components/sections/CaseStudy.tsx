import React from 'react';
import { BookOpen, GraduationCap, TrendingUp } from 'lucide-react';

interface CaseStudy {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  result: string;
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      icon: BookOpen,
      title: 'Improved Literacy Rates',
      description: 'A high school district increased literacy rates by 25% using our analytics platform.',
      result: '25% Improvement',
    },
    {
      icon: GraduationCap,
      title: 'Higher Graduation Rates',
      description: 'A university saw a 15% increase in graduation rates after implementing personalized learning paths.',
      result: '15% Increase',
    },
    {
      icon: TrendingUp,
      title: 'Boosted Test Scores',
      description: 'A middle school improved standardized test scores by 30% with predictive analytics.',
      result: '30% Boost',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">See how institutions are transforming education with our platform.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                <study.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
              <p className="mt-4 text-gray-600">{study.description}</p>
              <div className="mt-6 text-indigo-600 font-semibold">{study.result}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;