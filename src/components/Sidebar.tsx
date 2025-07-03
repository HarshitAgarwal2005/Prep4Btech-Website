import React, { useState } from 'react';
import { Settings, Sun, Moon, Palette, User, Bell, HelpCircle, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500 text-white p-3 rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110"
      >
        <Settings className="h-5 w-5" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 shadow-2xl transform transition-transform duration-300 z-50 ${
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
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Theme Toggle */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-blue-100 dark:border-gray-600">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                  {theme === 'light' ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Theme Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Switch between light and dark</p>
                </div>
              </div>
            </div>
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

          {/* Appearance Settings */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-pink-100 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg mr-3">
                <Palette className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Appearance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Customize visual preferences</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Animations</span>
                <div className="w-12 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Sound Effects</span>
                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </div>
              </div>
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
                <div className="w-12 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">New Projects</span>
                <div className="w-12 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                </div>
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
              <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors">
                📚 User Guide
              </button>
              <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors">
                💬 Contact Support
              </button>
              <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded-lg transition-colors">
                🐛 Report Bug
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;