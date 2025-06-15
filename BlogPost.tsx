
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const blogContent = {
  '1': {
    title: '10 Productivity Habits That Changed My Life',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    readTime: '8 min',
    category: 'Productivity',
    content: `
      <p>Productivity isn't about doing more things—it's about doing the right things efficiently. Over the years, I've discovered that small, consistent habits can create massive changes in how we work and live.</p>

      <h2>1. Time Blocking</h2>
      <p>Instead of keeping a simple to-do list, I started blocking specific times for different activities. This helped me:</p>
      <ul>
        <li>Reduce decision fatigue</li>
        <li>Minimize context switching</li>
        <li>Create realistic expectations for what I can accomplish</li>
      </ul>

      <h2>2. The Two-Minute Rule</h2>
      <p>If something takes less than two minutes to complete, I do it immediately rather than adding it to my task list. This prevents small tasks from accumulating into overwhelming piles.</p>

      <h2>3. Single-Tasking</h2>
      <p>Multitasking is a myth. I learned to focus on one task at a time, which dramatically improved both the quality of my work and my ability to complete tasks faster.</p>

      <h2>4. Digital Minimalism</h2>
      <p>I decluttered my digital environment by:</p>
      <ul>
        <li>Unsubscribing from unnecessary emails</li>
        <li>Organizing my desktop and files</li>
        <li>Using website blockers during focused work sessions</li>
      </ul>

      <h2>5. Morning Routine</h2>
      <p>Starting my day with a consistent routine helps me approach work with clarity and energy. My routine includes meditation, exercise, and reviewing my daily priorities.</p>

      <h2>Conclusion</h2>
      <p>These habits didn't change my life overnight, but their cumulative effect has been transformational. The key is to start small and be consistent. Pick one habit from this list and commit to it for 30 days.</p>
    `
  },
  '2': {
    title: 'Freelancing in 2025: Where to Start and What to Learn',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '12 min',
    category: 'Freelancing',
    content: `
      <p>The freelancing landscape has evolved dramatically. With remote work becoming mainstream and AI tools transforming how we work, 2025 presents unique opportunities for freelancers.</p>

      <h2>Getting Started: The Basics</h2>
      <p>Before diving into freelancing, you need to establish your foundation:</p>
      <ul>
        <li>Identify your marketable skills</li>
        <li>Create a professional online presence</li>
        <li>Build a portfolio that showcases your best work</li>
        <li>Understand basic business principles</li>
      </ul>

      <h2>In-Demand Skills for 2025</h2>
      <p>The most sought-after freelance skills include:</p>
      <ul>
        <li><strong>AI Prompt Engineering:</strong> Helping businesses leverage AI tools effectively</li>
        <li><strong>Content Creation:</strong> Video editing, social media management, copywriting</li>
        <li><strong>Digital Marketing:</strong> SEO, paid advertising, email marketing</li>
        <li><strong>Web Development:</strong> Particularly no-code/low-code solutions</li>
      </ul>

      <h2>Finding Your First Clients</h2>
      <p>Start with these strategies:</p>
      <ul>
        <li>Leverage your existing network</li>
        <li>Join freelancing platforms like Upwork and Fiverr</li>
        <li>Participate in online communities in your niche</li>
        <li>Offer free work initially to build testimonials</li>
      </ul>

      <h2>Setting Your Rates</h2>
      <p>Pricing can be challenging for new freelancers. Research market rates, consider your experience level, and don't undervalue your work. It's better to start slightly lower and increase rates as you gain experience and testimonials.</p>

      <h2>The Business Side</h2>
      <p>Freelancing is a business. You'll need to handle:</p>
      <ul>
        <li>Contracts and agreements</li>
        <li>Invoicing and payments</li>
        <li>Taxes and financial planning</li>
        <li>Time management and client communication</li>
      </ul>
    `
  },
  '3': {
    title: 'Top 5 AI Tools That Will Boost Your Career',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    readTime: '6 min',
    category: 'AI Tools',
    content: `
      <p>Artificial Intelligence is no longer just a futuristic concept—it's here, and it's transforming how we work. These five AI tools can significantly enhance your productivity and career prospects.</p>

      <h2>1. ChatGPT for Content and Communication</h2>
      <p>ChatGPT excels at:</p>
      <ul>
        <li>Writing and editing content</li>
        <li>Brainstorming ideas</li>
        <li>Explaining complex concepts</li>
        <li>Code generation and debugging</li>
      </ul>

      <h2>2. Notion AI for Knowledge Management</h2>
      <p>Notion AI helps you organize information more effectively by:</p>
      <ul>
        <li>Summarizing long documents</li>
        <li>Generating action items from meeting notes</li>
        <li>Creating structured content from messy notes</li>
      </ul>

      <h2>3. Canva AI for Design</h2>
      <p>Even if you're not a designer, Canva's AI features can help you create professional-looking:</p>
      <ul>
        <li>Social media graphics</li>
        <li>Presentations</li>
        <li>Marketing materials</li>
        <li>Brand assets</li>
      </ul>

      <h2>4. Grammarly for Writing Excellence</h2>
      <p>Grammarly's AI goes beyond spell-check to help with:</p>
      <ul>
        <li>Tone adjustment</li>
        <li>Clarity improvements</li>
        <li>Professional writing enhancement</li>
        <li>Plagiarism detection</li>
      </ul>

      <h2>5. Calendly AI for Scheduling</h2>
      <p>Streamline your professional interactions with smart scheduling that:</p>
      <ul>
        <li>Automatically finds optimal meeting times</li>
        <li>Reduces back-and-forth emails</li>
        <li>Integrates with your existing calendar</li>
        <li>Provides professional booking pages</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Don't try to master all these tools at once. Pick one that addresses your biggest pain point and spend time learning it thoroughly. As you become comfortable, gradually incorporate others into your workflow.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id as keyof typeof blogContent] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="ml-4 text-gray-500">{post.readTime} read</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg mb-12"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
