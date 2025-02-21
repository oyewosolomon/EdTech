import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How does the platform integrate with existing systems?',
      answer: 'Our platform seamlessly integrates with popular LMS systems like Canvas, Blackboard, and Google Classroom through APIs.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 support via email, chat, and phone, along with a comprehensive knowledge base and training resources.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption and comply with GDPR, FERPA, and other data protection regulations.',
    },
    {
      question: 'Can I try the platform before purchasing?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to all features.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">Find answers to common questions about our platform.</p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;