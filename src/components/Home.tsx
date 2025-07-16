import React, { useEffect } from 'react';
import { BookOpen, Users, Award, FileText, Lightbulb, MessageCircle, Sparkles, Star, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: 'Chapter-wise Notes',
      description: 'Well-organized notes for every subject, structured chapter by chapter for easy learning.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      link: '/subjects'
    },
    {
      icon: FileText,
      title: 'Assignments & Solutions',
      description: 'Access past assignments with detailed solutions to enhance your understanding.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      link: '/assignments'
    },
    {
      icon: Award,
      title: 'Project Ideas',
      description: 'Discover innovative project ideas with complete documentation and source code.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      link: '/projects'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Connect with fellow students and share knowledge in a supportive environment.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      link: '/'
    },
    {
      icon: Lightbulb,
      title: 'Ask Doubts',
      description: 'Get your doubts cleared instantly with our interactive doubt resolution system.',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      link: '/'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Join a thriving community of learners helping each other succeed.',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      link: '/'
    }
  ];

  const handleFeatureClick = (link: string) => {
    navigate(link);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 animate-pulse">
                  <span className="text-white text-4xl font-bold">HA</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white dark:border-gray-900 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
                </div>
                <div className="absolute top-2 left-2">
                  <Star className="h-6 w-6 text-pink-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                StudyHub
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Your comprehensive academic resource platform ✨
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto mb-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center justify-center">
                <Zap className="h-6 w-6 mr-2 text-yellow-500" />
                About the Developer
              </h2>
              <div className="text-left space-y-3">
                <p className="flex items-center"><span className="font-semibold text-violet-600 dark:text-violet-400">👨‍💻 Name:</span> <span className="ml-2">Harshit Agarwal</span></p>
                <p className="flex items-center"><span className="font-semibold text-purple-600 dark:text-purple-400">🎓 Branch:</span> <span className="ml-2">Computer Science and Engineering (CSE)</span></p>
                <p className="flex items-center"><span className="font-semibold text-pink-600 dark:text-pink-400">🏫 College:</span> <span className="ml-2">JECRC Foundation</span></p>
                <p className="text-gray-600 dark:text-gray-300 mt-6 p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl border border-violet-200 dark:border-violet-700/30">
                  <span className="text-2xl mr-2">💡</span>
                  "Passionate about helping fellow B.Tech students succeed by providing easy access to 
                  well-organized academic resources, chapter-wise notes, assignments, previous year papers, 
                  and innovative project ideas."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-3xl p-8 max-w-4xl mx-auto mb-16 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/80 via-purple-600/80 to-pink-600/80 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 mr-3 text-yellow-300 animate-spin" />
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-violet-100">
                  To create a centralized platform where B.Tech students can easily access high-quality 
                  academic resources, collaborate with peers, and excel in their studies. We believe in 
                  making education accessible, organized, and engaging for everyone. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive resources designed to support your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(feature.link)}
                className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 group hover:scale-105 backdrop-blur-sm cursor-pointer`}
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Navigate 🧭
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's how each section can help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { num: '1', title: 'Year Section', desc: 'Browse subjects organized by academic year and semester (Sem 1-8)', color: 'from-blue-500 to-cyan-500', emoji: '📚' },
                { num: '2', title: 'Subjects Section', desc: 'Access chapter-wise notes, reference materials, and sample questions', color: 'from-purple-500 to-pink-500', emoji: '📖' },
                { num: '3', title: 'Assignments', desc: 'Download assignments with solutions, filterable by year and subject', color: 'from-green-500 to-emerald-500', emoji: '📝' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`bg-gradient-to-r ${item.color} rounded-full p-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{item.num}</span>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 flex-1 shadow-lg border border-white/20 dark:border-gray-700/20">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="mr-2">{item.emoji}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                { num: '4', title: 'Books', desc: 'Find recommended textbooks and reference materials for each subject', color: 'from-orange-500 to-red-500', emoji: '📚' },
                { num: '5', title: 'Projects', desc: 'Explore mini and major project ideas with complete documentation', color: 'from-pink-500 to-rose-500', emoji: '🚀' },
                { num: '6', title: 'Ask Doubts', desc: 'Get instant help with the floating doubt button on every page', color: 'from-indigo-500 to-purple-500', emoji: '❓' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`bg-gradient-to-r ${item.color} rounded-full p-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{item.num}</span>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 flex-1 shadow-lg border border-white/20 dark:border-gray-700/20">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="mr-2">{item.emoji}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;