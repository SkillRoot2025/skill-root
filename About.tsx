
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About SkillRoot
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Growing skills, growing careers, growing futures.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To make quality knowledge and practical skills accessible for everyone. We believe that continuous learning and skill development are the keys to personal and professional success in today's rapidly evolving world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                SkillRoot was born from the idea that skills should grow like roots - deep, strong, and interconnected. Just as roots provide the foundation for a tree to flourish, the right skills provide the foundation for your career to thrive.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Group of people learning and working together"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Focus</h3>
              <p className="text-gray-600">
                We focus on skills and knowledge that you can immediately apply in your work and life.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Mindset</h3>
              <p className="text-gray-600">
                We believe in continuous learning and adapting to new challenges and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We build a supportive community where learners can share experiences and grow together.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                SkillRoot started as a simple idea: what if learning new skills could be as natural and continuous as a tree growing its roots? In a world where technology and industries evolve rapidly, the ability to learn and adapt has become more crucial than ever.
              </p>
              <p className="mb-6">
                We noticed that many talented individuals - students fresh out of college, professionals looking to switch careers, and freelancers wanting to expand their services - struggled to find practical, actionable guidance that could immediately impact their lives.
              </p>
              <p className="mb-6">
                That's when we decided to create SkillRoot - a platform that doesn't just share information, but provides practical insights, real-world examples, and actionable strategies that people can implement right away.
              </p>
              <p>
                Today, we're proud to be helping thousands of learners grow their skills and achieve their career goals. And just like roots that continue to grow deeper and stronger, we're committed to continuously expanding our content and community to serve our learners better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
