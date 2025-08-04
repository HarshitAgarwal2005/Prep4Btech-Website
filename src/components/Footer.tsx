import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  BookOpen,
  Heart,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Sparkles,
  Eye,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState(1000);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [motivationalQuote, setMotivationalQuote] = useState('');

  const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "The expert in anything was once a beginner. - Helen Hayes"
  ];

  useEffect(() => {
    // Get initial visit count
    const currentCount = parseInt(localStorage.getItem('userVisitCount') || '1000', 10);
    setVisitCount(currentCount);

    // Listen for visit count updates
    const handleVisitUpdate = (event: CustomEvent) => {
      setVisitCount(event.detail);
    };

    window.addEventListener('userVisitUpdate', handleVisitUpdate as EventListener);

    return () => {
      window.removeEventListener('userVisitUpdate', handleVisitUpdate as EventListener);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setMotivationalQuote(randomQuote);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setMotivationalQuote('');
      }, 5000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Year', path: '/year' },
    { name: 'RTU Syllabus', path: '/rtu-syllabus' },
    { name: 'Content', path: '/assignments' },
    { name: 'Books', path: '/books' },
    { name: 'Projects', path: '/projects' },
    { name: 'PYQ Papers', path: '/pyq-papers' }
  ];

  const resources = [
    { name: 'Study Materials', path: '/subjects' },
    { name: 'Previous Papers', path: '/pyq-papers' },
    { name: 'Project Ideas', path: '/projects' },
    { name: 'Reference Books', path: '/books' },
    { name: 'Ask Doubts', path: '/' },
    { name: 'Community', path: '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/HarshitAgarwal2005', 
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      bg: 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/invites/contact/?igsh=2tpj8tcsf5l5&utm_content=epyez14', 
      color: 'hover:text-pink-600',
      bg: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-purple-900/50 dark:to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-3 rounded-xl shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Prep4Btech
                  </h3>
                  <p className="text-sm text-gray-300">by Team</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering B.Tech students with comprehensive academic resources, 
                chapter-wise notes, assignments, and innovative project ideas for academic excellence.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-2">
                    <Eye className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-2xl font-bold text-white">{visitCount.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-400">Site Visits</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-2xl font-bold text-white">500+</span>
                  </div>
                  <p className="text-xs text-gray-400">Resources</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></div>
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      to={resource.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                Contact Info
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg mt-1">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:harshitagarwal25807@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      harshitagarwal25807@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300 text-sm">
                      JECRC Foundation<br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg mt-1">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Available</p>
                    <p className="text-gray-300 text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat - Sun: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Stay Updated! 📚</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get notified about new study materials, assignments, and project ideas. 
                  Join our community of successful B.Tech students! 🚀
                </p>
                
                {isSubscribed ? (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 max-w-2xl mx-auto">
                    <div className="text-green-300 text-xl font-bold mb-4">✅ Subscribed!</div>
                    <div className="text-green-100 text-sm italic leading-relaxed">
                      "{motivationalQuote}"
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    />
                    <button 
                      type="submit"
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>© {currentYear} Prep4Btech. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>by Team</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="text-center text-xs text-gray-400">
                <p>🎓 Dedicated to empowering B.Tech students across India</p>
                <p className="mt-1">
                  Built with React, TypeScript, and Tailwind CSS • 
                  <span className="text-violet-400"> Hosted with ❤️</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;