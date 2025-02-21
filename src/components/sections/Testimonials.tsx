import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Director of Academic Affairs",
      institution: "Stanford University",
      image: "/api/placeholder/80/80",
      quote: "EdTech Analytics has revolutionized how we track and improve student performance. The predictive analytics have helped us identify at-risk students weeks before traditional methods would have, allowing for early intervention and support.",
      stats: {
        improvementRate: "35%",
        label: "Student Success Rate Increase"
      }
    },
    {
      name: "Prof. James Martinez",
      role: "Department Head",
      institution: "MIT",
      image: "/api/placeholder/80/80",
      quote: "The personalized learning paths have been a game-changer for our engineering department. We've seen a significant increase in student engagement and comprehension, particularly in complex theoretical subjects.",
      stats: {
        improvementRate: "40%",
        label: "Increase in Student Engagement"
      }
    },
    {
      name: "Emily Thompson",
      role: "High School Principal",
      institution: "Phillips Academy",
      image: "/api/placeholder/80/80",
      quote: "The automated assessment features have saved our teachers countless hours, allowing them to focus more on individual student needs. The insights provided have helped us adapt our curriculum in real-time.",
      stats: {
        improvementRate: "25hrs",
        label: "Weekly Time Saved per Teacher"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Leading Institutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how educators are transforming learning outcomes with our platform
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Left Column */}
                      <div className="flex-1">
                        <Quote className="h-12 w-12 text-indigo-600 mb-6" />
                        <p className="text-xl text-gray-700 italic mb-8">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-indigo-600">{testimonial.institution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="w-full md:w-72 bg-indigo-50 rounded-xl p-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-indigo-600">
                            {testimonial.stats.improvementRate}
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            {testimonial.stats.label}
                          </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="pointer-events-auto transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-indigo-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="pointer-events-auto transform translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-indigo-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-20">
          <p className="text-center text-gray-600 mb-8">
            Trusted by leading educational institutions worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="h-12 w-32 bg-gray-200 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;