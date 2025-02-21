import React from 'react';

const integrations = [
  { name: 'Google Classroom', logo: 'https://logo.clearbit.com/classroom.google.com' },
  { name: 'Microsoft Teams', logo: 'https://logo.clearbit.com/teams.microsoft.com' },
  { name: 'Canvas', logo: 'https://logo.clearbit.com/instructure.com' },
  { name: 'Blackboard', logo: 'https://logo.clearbit.com/blackboard.com' },
  { name: 'Zoom', logo: 'https://logo.clearbit.com/zoom.us' },
  { name: 'Moodle', logo: 'https://logo.clearbit.com/moodle.org' },
];


const Partners: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Seamless Integrations</h2>
          <p className="mt-4 text-xl text-gray-600">Compatible with the tools you already use.</p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <img src={integration.logo} alt={integration.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;