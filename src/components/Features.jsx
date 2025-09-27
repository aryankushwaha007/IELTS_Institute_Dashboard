import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Speaking Practice",
      description: "One-on-one speaking sessions with native English speakers and detailed feedback on pronunciation, fluency, and coherence.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Mock Tests",
      description: "Comprehensive practice tests that simulate real IELTS conditions with instant scoring and detailed performance analysis.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Band Score Predictor",
      description: "Advanced AI technology that predicts your band score based on practice tests and provides personalized improvement recommendations.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Batches",
      description: "Choose from morning, evening, or weekend batches that fit your schedule. Online and offline options available.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="courses" className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our IELTS Program?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines expert instruction, cutting-edge technology, 
            and personalized feedback to help you achieve your target band score.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 text-center group hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${feature.color} mx-auto mt-4 transition-all duration-300 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your IELTS Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our community of successful IELTS candidates and get access to 
            expert guidance, comprehensive materials, and personalized support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
