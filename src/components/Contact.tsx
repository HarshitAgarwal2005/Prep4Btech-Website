import React, { useState, createContext, useContext } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle, Lock, LogOut, User, Instagram } from 'lucide-react';

// --- Supabase Client Setup ---
// Corrected: Removed the ESM import from CDN.
// We now assume Supabase is loaded globally and available on the `window` object,
// which is a common pattern in sandboxed or web editor environments.
const { createClient } = (window.supabase || {});

// IMPORTANT: Replace these placeholder values with your real Supabase URL and Anon Key.
const supabaseUrl = "https://zcbqcdjglcspllhqiygd.supabase.co"; // <-- REPLACE WITH YOUR SUPABASE URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjYnFjZGpnbGNzcGxsaHFpeWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjMwODIsImV4cCI6MjA3MTY5OTA4Mn0.i7iJU9hSlX0JE97lXvPUL-ZfGUQd0vNmvSATjcaR8yA'; // <-- REPLACE WITH YOUR SUPABASE ANON KEY

// Initialize the client. We add a check to ensure the library was loaded correctly.
export const supabase = createClient ? createClient(supabaseUrl, supabaseAnonKey) : null;


// --- Developer Auth Context ---
const DeveloperAuthContext = createContext({
  isAuthenticated: false,
  login: (email, password) => false,
  logout: () => {},
});

export const useDeveloperAuth = () => useContext(DeveloperAuthContext);

export const DeveloperAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('developer_authenticated') === 'true';
  });

  const login = (email, password) => {
    // In a real app, this should be a secure authentication method.
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


// --- Main Contact Component ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [developerEmail, setDeveloperEmail] = useState('');
  const [developerPassword, setDeveloperPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { isAuthenticated, login, logout } = useDeveloperAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Updated validation to check if the supabase client was successfully created.
    if (!supabase) {
        setError('Supabase client is not available. Please contact the site administrator.');
        return;
    }

    // Basic validation to prevent submission if Supabase credentials are not set
    if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
        setError('Supabase credentials are not configured. Please contact the site administrator.');
        return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Step 1: Insert data into the Supabase table
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert([{ 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
        }]);

      // If the database insert fails, throw the error to be caught below
      if (insertError) {
        throw insertError;
      }
      
      // Step 2: Call the Edge Function (optional, but good to keep)
      const response = await fetch(`${supabaseUrl}/functions/v1/send-doubt-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Contact Form Message',
          doubt: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          userEmail: formData.email,
          userName: formData.name
        })
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Failed to send notification email.');
      }
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form on success

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (err) {
      console.error("Form submission failed:", err);
      const errorMessage = err.message || 'An unknown error occurred. Please try again.';
      setError(`Submission failed: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  const handleDeveloperLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

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
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a href="mailto:prep4btech@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                      prep4btech@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">College</h3>
                    <p className="text-gray-600 dark:text-gray-300">JECRC Foundation, Jaipur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-white/20 dark:border-gray-700/20">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect with Us</h1>
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4"> Harshit Agarwal</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 <a href="https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors group">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-blue-800 dark:text-blue-300">LinkedIn</span>
                </a>
                <a href="https://github.com/HarshitAgarwal2005" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group">
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
                </a>
                <a href="https://www.instagram.com/invites/contact/?igsh=2tpj8tcsf5l5&utm_content=epyez14" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-xl transition-colors group">
                  <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-pink-800 dark:text-pink-300">Instagram</span>
                </a>
              </div>
              <br/>
               <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hariom Shivnani</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 <a href="https://www.linkedin.com/in/hariom-shivnani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors group">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-blue-800 dark:text-blue-300">LinkedIn</span>
                </a>
                <a href="https://github.com/hariom1610" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group">
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
                </a>
                <a href="https://www.instagram.com/hariomshivnani?igsh=b2NlOWQ3ZW16amVz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-xl transition-colors group">
                  <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-pink-800 dark:text-pink-300">Instagram</span>
                </a>
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
                    Thank you for reaching out. We'll get back to you as soon as possible.
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Write your message here..." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                    {isSubmitting ? (
                      <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Sending...</>
                    ) : (
                      <><Send className="h-5 w-5 mr-2" />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
            
             {/* Developer Login Section is unchanged */}
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
                  <button onClick={handleDeveloperLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto">
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Developer Email</label>
                    <input type="email" value={developerEmail} onChange={(e) => setDeveloperEmail(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter developer email"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <input type="password" value={developerPassword} onChange={(e) => setDeveloperPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter password"/>
                  </div>

                  <button type="submit" disabled={isLoggingIn} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoggingIn ? (
                      <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Logging in...</>
                    ) : (
                      <><User className="h-5 w-5 mr-2" />Login</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// To use this component, you'd wrap your app in the provider:
// <DeveloperAuthProvider>
//   <Contact />
// </DeveloperAuthProvider>
const App = () => (
  <DeveloperAuthProvider>
    <Contact />
  </DeveloperAuthProvider>
);

export default App;

