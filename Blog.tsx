
import React from 'react';
import Navigation from '@/components/Navigation';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: '1',
    title: '10 Productivity Habits That Changed My Life',
    description: 'Discover the daily routines and mindset shifts that can transform your productivity and help you achieve more while working less. From time-blocking to the power of saying no.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    readTime: '8 min',
    category: 'Productivity'
  },
  {
    id: '2',
    title: 'Freelancing in 2025: Where to Start and What to Learn',
    description: 'A comprehensive guide to starting your freelancing journey, including essential skills, platforms to use, and strategies for success in the modern gig economy.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '12 min',
    category: 'Freelancing'
  },
  {
    id: '3',
    title: 'Top 5 AI Tools That Will Boost Your Career',
    description: 'Explore the most powerful AI tools that professionals are using to enhance their work, increase efficiency, and stay competitive in their respective fields.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    readTime: '6 min',
    category: 'AI Tools'
  },
  {
    id: '4',
    title: 'Building Your Personal Brand Online',
    description: 'Learn how to create a strong online presence that attracts opportunities and establishes you as an expert in your field through social media and content.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '10 min',
    category: 'Career'
  },
  {
    id: '5',
    title: 'The Future of Remote Work: Skills You Need',
    description: 'Prepare for the evolving workplace by developing the technical and soft skills essential for remote work success in the post-pandemic world.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '7 min',
    category: 'Skills'
  },
  {
    id: '6',
    title: 'Mastering Digital Marketing on a Budget',
    description: 'Effective strategies and free tools to promote your business or personal brand without breaking the bank. Learn organic growth techniques.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '9 min',
    category: 'Marketing'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical insights, tips, and strategies to help you grow your skills and advance your career.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
