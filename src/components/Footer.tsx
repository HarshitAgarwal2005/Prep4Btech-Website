import React, { useState, useEffect } from 'react';

import emailjs from "emailjs-com"; 
import { 
  Mail, MapPin, Linkedin, Github, BookOpen, Heart, 
  ExternalLink, Calendar, Award, Sparkles, Eye, Instagram 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState(1000);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [motivationalQuote, setMotivationalQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Optional: for loading state on button
  const [error, setError] = useState(''); // Optional: for showing errors to the user

  const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "The expert in anything was once a beginner. - Helen Hayes"
  ];

  useEffect(() => {
    // ... (your existing visit count logic is fine, no changes needed here)
    const getVisitCount = () => {
      const stored = localStorage.getItem('globalVisitCount');
      return stored ? parseInt(stored, 10) : 1000;
    };
    
    const lastVisitTime = localStorage.getItem('lastVisitTime');
    const currentTime = Date.now();
    const timeDifference = currentTime - (lastVisitTime ? parseInt(lastVisitTime, 10) : 0);
    
    const isNewVisit = !lastVisitTime || timeDifference > 30 * 60 * 1000;
    
    let currentCount = getVisitCount();
    
    if (isNewVisit) {
      currentCount += 1;
      localStorage.setItem('globalVisitCount', currentCount.toString());
      localStorage.setItem('lastVisitTime', currentTime.toString());
    }
    
    setVisitCount(currentCount);
  }, []);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setIsLoading(true);
    setError('');

    // --- Task 1: Send notification email to yourself via EmailJS ---
    const emailJsPromise = emailjs.send(
      "service_email",      // ✅ Your Service ID
      "template_m60p9tg",   // ✅ Your Template ID (for notifications to you)
      { subscriber_email: email },
      "ykUUgVhuU-DLIy3IX"    // ✅ Your Public Key
    );

    // --- Task 2: Store the email in your Google Sheet via Sheet.best ---
    const sheetBestPromise = fetch("YOUR_SHEET.BEST_CONNECTION_URL_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: email, Timestamp: new Date().toISOString() }),
    });

    try {
      // Wait for both tasks to complete
      await Promise.all([emailJsPromise, sheetBestPromise]);

      // If both were successful, show the success message
      setIsSubscribed(true);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setMotivationalQuote(randomQuote);
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setMotivationalQuote('');
      }, 5000);

    } catch (err) {
      console.error("Subscription failed:", err);
      setError("Subscription failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // ... (rest of your component's JSX is mostly the same)
  // I will only show the changed JSX part for the form below

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-purple-900/50 dark:to-gray-900 text-white overflow-hidden">
      {/* ... (all your other footer content) ... */}

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated! 📚</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get notified about new study materials, assignments, and project ideas. Join our community of successful B.Tech students! 🚀
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 max-w-2xl mx-auto">
                  <div className="text-green-300 text-xl font-bold mb-4">✅ Subscribed!</div>
                  <div className="text-green-100 text-sm italic leading-relaxed">
                    "{motivationalQuote}"
                  </div>
                </div>
              ) : (
                // FIX 3: Updated form with loading and error states
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading} // Disable input while loading
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  />
                  <button  
                    type="submit"
                    disabled={isLoading} // Disable button while loading
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
              {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </div> 

      {/* ... (rest of your bottom footer) ... */}
    </footer>
  );
};
export default Footer;