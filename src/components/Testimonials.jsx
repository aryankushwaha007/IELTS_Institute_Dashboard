import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      bandScore: "8.5",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      text: "The speaking practice sessions were incredibly helpful. The personalized feedback helped me improve my fluency and confidence. I achieved my target score of 8.5!",
      country: "Canada"
    },
    {
      name: "Ahmed Hassan",
      bandScore: "7.5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      text: "The mock tests were exactly like the real exam. The AI feedback system helped me identify my weak areas and improve systematically. Highly recommended!",
      country: "Egypt"
    },
    {
      name: "Priya Sharma",
      bandScore: "8.0",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      text: "The flexible batch timings were perfect for my work schedule. The instructors were patient and knowledgeable. I got my desired score in just 3 months!",
      country: "India"
    }
  ];

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say 
            about their IELTS preparation journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-primary-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Band {testimonial.bandScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">7.5</div>
              <div className="text-gray-600">Average Band Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
