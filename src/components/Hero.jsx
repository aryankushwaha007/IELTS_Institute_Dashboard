import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-primary-100 pt-20">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Achieve Your
                <span className="text-primary-600 block">Desired IELTS</span>
                Band Score
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Join thousands of successful students who achieved their target band scores 
                with our comprehensive IELTS preparation program. Expert guidance, 
                personalized feedback, and proven strategies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4 animate-bounce-slow">
                Get Started Today
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">7.5</div>
                <div className="text-sm text-gray-600">Avg Band Score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Banner Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying for IELTS"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Live Classes</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">AI Feedback</span>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-primary-200 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
