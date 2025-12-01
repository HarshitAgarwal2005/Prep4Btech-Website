import React, { useState } from 'react';
import { MessageCircle, X, Send, Upload, CheckCircle, AlertCircle } from 'lucide-react';

const AskDoubt: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [doubt, setDoubt] = useState('');
  const [subject, setSubject] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subjects = [
    'Programming Fundamentals', 'Data Structures', 'Algorithms', 'Database Systems',
    'Computer Networks', 'Operating Systems', 'Software Engineering', 'Web Development',
    'Machine Learning', 'Engineering Mathematics', 'Engineering Physics',
    'Engineering Chemistry', 'Communication Skills', 'Human Values', 'Other'
  ];

  const resetForm = () => {
    setDoubt('');
    setSubject('');
    setUserEmail('');
    setUserName('');
    setImage(null);
    setError(null);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!subject || !doubt || !userEmail) {
        setError("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
    }

    try {
      let imageData: string | ArrayBuffer | null = null;
      if (image) {
        imageData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-doubt-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          doubt,
          userEmail,
          userName: userName || undefined,
          image: imageData
        })
      });

      if (!response.ok) {
        let serverError = 'An error occurred on the server.';
        try {
            const errorResult = await response.json();
            serverError = errorResult.error || `Server responded with status: ${response.status}`;
        } catch (e) {
            serverError = response.statusText || `Server responded with status: ${response.status}`;
        }
        throw new Error(serverError);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        resetForm();
      }, 3000);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      if (errorMessage.toLowerCase().includes('failed to fetch')) {
        setError("Could not connect to the server. Please check your internet connection.");
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size must be less than 5MB.');
        return;
      }
      setImage(file);
      setError(null);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 group"
        aria-label="Open doubt form"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          {/* Main Modal Container - Added dark mode background */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Ask a Doubt 🤔</h2>
                  <p className="text-blue-100 text-sm">Get help with your questions</p>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    resetForm();
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Doubt Submitted! ✅</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Your question has been sent. You'll get a response via email soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 dark:text-red-400 text-sm">{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                     <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Provide your email to receive a direct response.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    >
                      <option value="" className="text-gray-500">Select a subject</option>
                      {subjects.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Question *
                    </label>
                    <textarea
                      value={doubt}
                      onChange={(e) => setDoubt(e.target.value)}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="Describe your doubt in detail..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Upload Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Upload className="h-8 w-8 mb-2" />
                        <span className="text-sm text-center">
                          {image ? (
                            <span className="text-green-600 dark:text-green-400 font-medium">✓ {image.name}</span>
                          ) : (
                            'Click to upload (Max 5MB)'
                          )}
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Doubt
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Footer Tip */}
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 text-center border-t border-gray-200 dark:border-gray-700 shrink-0">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 Tip: Be specific with your question for a better answer!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskDoubt;