import React, { useState, createContext, useContext } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle, Lock, LogOut, User, Instagram } from 'lucide-react';

// Create Developer Auth Context
const DeveloperAuthContext = createContext<{
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {}
});

export const useDeveloperAuth = () => useContext(DeveloperAuthContext);

// Developer Auth Provider Component
export const DeveloperAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('developer_authenticated') === 'true';
  });

  const login = (email: string, password: string) => {
    if (email === 'harshitagarwal25807@gmail.com' && password === '20051025') {
      setIsAuthenticated(true);
      localStorage.setItem('developer_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('developer_authenticated');
  };

  return (
    <DeveloperAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </DeveloperAuthContext.Provider>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Developer Login State
  const [developerEmail, setDeveloperEmail] = useState('');
  const [developerPassword, setDeveloperPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { isAuthenticated, login, logout } = useDeveloperAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-doubt-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Contact Form Message',
          doubt: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          userEmail: formData.email,
          userName: formData.name
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeveloperLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    // Simulate login delay for better UX
    setTimeout(() => {
      const success = login(developerEmail, developerPassword);
      
      if (success) {
        setDeveloperEmail('');
        setDeveloperPassword('');
      } else {
        setLoginError('Invalid email or password. Please try again.');
      }
      
      setIsLoggingIn(false);
    }, 1000);
  };

  const handleDeveloperLogout = () => {
    logout();
    setDeveloperEmail('');
    setDeveloperPassword('');
    setLoginError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-slate-900 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch 📞
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions, suggestions, or need help? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:harshitagarwal25807@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      prep4btech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">College</h3>
                    <p className="text-gray-600 dark:text-gray-300">JECRC Foundation, Jaipur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect with Us</h2>

              <h6 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6"> Harshit Agarwal</h6>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-blue-800 dark:text-blue-300">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/HarshitAgarwal2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
                >
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?igsh=2tpj8tcsf5l5&utm_content=epyez14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-xl transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-pink-800 dark:text-pink-300">Instagram</span>
                </a>
              </div>
<br/>
              
{/* Social Links  of hariom shivnani*/}
              
               <h5 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Hariom Shivnani</h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-blue-800 dark:text-blue-300">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/HarshitAgarwal2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
                >
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?igsh=2tpj8tcsf5l5&utm_content=epyez14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-xl transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-pink-800 dark:text-pink-300">Instagram</span>
                </a>
              </div>
            </div> 

  
            {/* Quick Help */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Need Quick Help? 🚀</h2>
              <p className="mb-6 text-blue-100">
                Don't forget about the "Ask a Doubt" feature available on every page! 
                Click the floating button to get instant help with your questions.
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm">
                  💡 Tip: Use the floating doubt button for quick questions, and this contact form for detailed inquiries or suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent! ✅</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-400 text-sm">{error}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Developer Login Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-orange-200 dark:border-orange-800">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Lock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Developer Access</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Login to enable upload functionality</p>
                </div>
              </div>

              {isAuthenticated ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Developer Authenticated ✅</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    Upload mode is now active. You can upload syllabus files and manage content.
                  </p>
                  <button
                    onClick={handleDeveloperLogout}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDeveloperLogin} className="space-y-4">
                  {loginError && (
                    <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-400 text-sm">{loginError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Developer Email
                    </label>
                    <input
                      type="email"
                      value={developerEmail}
                      onChange={(e) => setDeveloperEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter developer email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={developerPassword}
                      onChange={(e) => setDeveloperPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter password"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoggingIn ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <User className="h-5 w-5 mr-2" />
                        Login
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-white/20 dark:border-gray-700/20">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I contribute to this platform?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can contribute by sharing your notes, projects, or suggesting improvements. 
                Contact me with your ideas!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I request specific subjects or topics?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! Send me a message with your requests, and I'll do my best to add the content you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is this platform free to use?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, this platform is completely free for all students. My goal is to make education accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often is the content updated?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I regularly update the content with new notes, assignments, and projects. Check back frequently for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;