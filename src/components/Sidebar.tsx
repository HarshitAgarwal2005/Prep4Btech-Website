import React, { useState } from 'react';
import { Settings, Sun, Moon, Palette, User, Bell, HelpCircle, X, Volume2, VolumeX, Zap, Eye } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [projectNotificationsEnabled, setProjectNotificationsEnabled] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const handleAnimationToggle = () => {
    setAnimationsEnabled(!animationsEnabled);
    // Apply animation settings to document
    if (!animationsEnabled) {
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    }
  };

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
    // Play a test sound when enabled
    if (!soundEnabled) {
      // Create a simple beep sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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
    }
  };

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleProjectNotificationToggle = () => {
    setProjectNotificationsEnabled(!projectNotificationsEnabled);
  };

  const ToggleSwitch: React.FC<{ 
    enabled: boolean; 
    onToggle: () => void; 
    color: string;
  }> = ({ enabled, onToggle, color }) => (
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

  return (
    <>
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
      }`}>
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

        {/* Content */}
        <div className="p-6 space-y-6">
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
                  onToggle={handleNotificationToggle}
                  color="from-green-500 to-emerald-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">New Projects</span>
                <ToggleSwitch 
                  enabled={projectNotificationsEnabled} 
                  onToggle={handleProjectNotificationToggle}
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
                onClick={() => window.open('/help', '_blank')}
                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors"
              >
                📚 User Guide
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors"
              >
                💬 Contact Support
              </button>
              <button 
                onClick={() => window.open('mailto:harshitagarwal25807@gmail.com', '_blank')}
                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors"
              >
                🐛 Report Bug
              </button>
            </div>
          </div>

          {/* Statistics */}
          {/* <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-purple-100 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                <Eye className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Your Activity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Usage statistics</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/50 dark:bg-gray-600/50 rounded-lg p-3">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">12</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Pages Visited</div>
              </div>
              <div className="bg-white/50 dark:bg-gray-600/50 rounded-lg p-3">
                <div className="text-lg font-bold text-pink-600 dark:text-pink-400">5</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Downloads</div>
              </div>
            </div>
          </div>*/}
        </div> 
      </div>
    </>
  ); 
};

export default Sidebar;