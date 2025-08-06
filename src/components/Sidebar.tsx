import React, { useState, useEffect, useCallback } from 'react';
import { Settings, Sun, Moon, User, Bell, HelpCircle, X, Volume2, VolumeX, Zap, History } from 'lucide-react';

// Navigation history management hook
const useNavigationHistory = () => {
  const [history, setHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');

  const addToHistory = useCallback((path, title = '') => {
    if (path === currentPath) return;
    
    setHistory(prev => {
      const newHistory = prev.filter(item => item.path !== path);
      newHistory.unshift({
        path,
        title: title || path.replace('/', '').replace('-', ' ') || 'Home',
        timestamp: Date.now()
      });
      return newHistory.slice(0, 50); // Keep only last 50 entries
    });
    
    setCurrentPath(path);
  }, [currentPath]);

  const getLastVisited = useCallback(() => {
    return history.find(item => item.path !== currentPath) || null;
  }, [history, currentPath]);

  return { addToHistory, getLastVisited, currentPath };
};

// Theme context (simplified for Bolt.new compatibility)
const useTheme = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return { theme, toggleTheme };
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [projectNotificationsEnabled, setProjectNotificationsEnabled] = useState(true);
  
  const { theme, toggleTheme } = useTheme();
  const { addToHistory, getLastVisited, currentPath } = useNavigationHistory();

  // Simulate page navigation tracking
  useEffect(() => {
    // Track initial page
    addToHistory(window.location.pathname || '/', document.title);
    
    // For demo purposes, simulate some navigation history
    setTimeout(() => addToHistory('/dashboard', 'Dashboard'), 1000);
    setTimeout(() => addToHistory('/projects', 'Projects'), 2000);
    setTimeout(() => addToHistory('/assignments', 'Assignments'), 3000);
  }, [addToHistory]);

  const handleLastVisitedClick = () => {
    const lastVisited = getLastVisited();
    if (lastVisited) {
      // In a real app, use your router navigation
      // For demo, we'll simulate navigation
      addToHistory(lastVisited.path, lastVisited.title);
      console.log('Navigating to:', lastVisited.path);
      
      // In real app: navigate(lastVisited.path) or window.location.href = lastVisited.path
    }
    setIsOpen(false);
  };

  const handleAnimationToggle = () => {
    setAnimationsEnabled(!animationsEnabled);
    document.documentElement.style.setProperty(
      '--animation-duration', 
      !animationsEnabled ? '0.3s' : '0s'
    );
  };

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      // Create a simple beep sound
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        console.log('Audio not supported');
      }
    }
  };

  const ToggleSwitch = ({ enabled, onToggle, color }) => (
    <button
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
        enabled ? `bg-gradient-to-r ${color}` : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${
          enabled ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      />
    </button>
  );

  const lastVisited = getLastVisited();

  return (
    <div className="relative">
      {/* Demo Navigation Buttons */}
      <div className="fixed top-4 right-4 flex gap-2 z-30">
        <button 
          onClick={() => addToHistory('/home', 'Home')}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
        >
          Home
        </button>
        <button 
          onClick={() => addToHistory('/about', 'About')}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm"
        >
          About
        </button>
        <button 
          onClick={() => addToHistory('/contact', 'Contact')}
          className="px-3 py-1 bg-purple-500 text-white rounded text-sm"
        >
          Contact
        </button>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500 text-white p-3 rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110"
        aria-label="Open settings"
      >
        <Settings className="h-5 w-5" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } min-h-screen`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-500 dark:via-purple-500 dark:to-pink-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Settings</h2>
              <p className="text-violet-100 text-sm">Customize your experience</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close settings"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>



          {/* Theme & Appearance Combined */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-blue-100 dark:border-gray-600">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                {theme === 'light' ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Theme & Appearance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Customize visual preferences</p>
              </div>
            </div>
            
            {/* Theme Toggle */}
            <div className="mb-6">
              <button
                onClick={toggleTheme}
                className={`w-full p-3 rounded-xl font-medium transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}
              >
                {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
              </button>
            </div>

            {/* Appearance Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Animations</span>
                </div>
                <ToggleSwitch 
                  enabled={animationsEnabled} 
                  onToggle={handleAnimationToggle}
                  color="from-blue-500 to-purple-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {soundEnabled ? <Volume2 className="h-4 w-4 text-green-600 mr-2" /> : <VolumeX className="h-4 w-4 text-gray-400 mr-2" />}
                  <span className="text-sm text-gray-700 dark:text-gray-300">Sound Effects</span>
                </div>
                <ToggleSwitch 
                  enabled={soundEnabled} 
                  onToggle={handleSoundToggle}
                  color="from-green-500 to-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-green-100 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg mr-3">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Profile</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Harshit Agarwal</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p><span className="font-medium">Branch:</span> CSE</p>
              <p><span className="font-medium">College:</span> JECRC Foundation</p>
              <p><span className="font-medium">Year:</span> B.Tech Student</p>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-orange-100 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg mr-3">
                <Bell className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Manage your alerts</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">New Assignments</span>
                <ToggleSwitch 
                  enabled={notificationsEnabled} 
                  onToggle={() => setNotificationsEnabled(!notificationsEnabled)}
                  color="from-green-500 to-emerald-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">New Projects</span>
                <ToggleSwitch 
                  enabled={projectNotificationsEnabled} 
                  onToggle={() => setProjectNotificationsEnabled(!projectNotificationsEnabled)}
                  color="from-blue-500 to-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Help */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-indigo-100 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-2 rounded-lg mr-3">
                <HelpCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Help & Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Get assistance</p>
              </div>
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => addToHistory('/help', 'User Guide')}
                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors"
              >
                📚 User Guide
              </button>
              <button 
                onClick={() => addToHistory('/contact', 'Contact Support')}
                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors"
              >
                💬 Contact Support
              </button>
              <button 
                onClick={() => addToHistory('/bug-report', 'Report Bug')}
                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors"
              >
                🐛 Report Bug
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Last Visited Content - Moved to top for prominence */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-purple-100 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                <History className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Quick Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Return to last visited content</p>
              </div>
            </div>
            <button
              onClick={handleLastVisitedClick}
              disabled={!lastVisited}
              className={`w-full py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center font-medium ${
                lastVisited
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              <History className="h-4 w-4 mr-2" />
              {lastVisited ? `Go to ${lastVisited.title}` : 'No Previous Page'}
            </button>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {lastVisited 
                  ? `Last visited: ${lastVisited.title} (${lastVisited.path})`
                  : 'Visit other pages to enable quick access'
                }
              </p>
            </div>
          </div>
  );
};

export default Sidebar;