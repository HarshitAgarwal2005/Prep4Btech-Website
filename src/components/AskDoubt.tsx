import React, { useState } from 'react';
import { MessageCircle, X, Send, Upload, CheckCircle, AlertCircle, Bot, ArrowLeft, Sparkles } from 'lucide-react';
import { branches, contentSubjects } from '../data/contentData';

const AskDoubt: React.FC = () => {
  // --- 1. NEW STATE VARIABLES ---
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'AI' | 'EMAIL'>('AI'); // 'AI' is the default start
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  // Existing state
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
    setMode('AI'); // Reset to AI mode
    setAiAnswer(null);
  };

  // --- 2. NEW AI HANDLER ---
  const handleAskAI = async () => {
    if (!doubt || !subject) {
      setError("Please select a subject and ask your question.");
      return;
    }
    
    setIsLoadingAI(true);
    setError(null);

    try {
      // Call your Edge Function (ensure you deployed 'ask-ai' first!)
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ask-ai`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: doubt, subject })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'AI Error');
      
      setAiAnswer(data.answer);
    } catch (err) {
      console.error(err);
      // Fallback automatically if AI fails
      setMode('EMAIL');
      setError("AI is currently unavailable. Switched to manual support.");
    } finally {
      setIsLoadingAI(false);
    }
  };

  // Existing Email Handler
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

      if (!response.ok) throw new Error('Server error');

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        resetForm();
      }, 3000);

    } catch (err) {
      setError("Could not submit doubt. Please check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
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
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold flex items-center">
                    {mode === 'AI' ? <Bot className="mr-2 h-6 w-6" /> : <MessageCircle className="mr-2 h-6 w-6" />}
                    {mode === 'AI' ? 'AI Assistant' : 'Ask a Mentor'}
                  </h2>
                  <p className="text-blue-100 text-sm">
                    {mode === 'AI' ? 'Get instant answers powered by AI' : 'Get expert help via email'}
                  </p>
                </div>
                <button
                  onClick={() => { setIsOpen(false); resetForm(); }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto">
              {isSubmitted ? (
                // Success View
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
                // --- 3. THIS IS WHERE YOUR SNIPPET LOGIC GOES ---
                <>
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start mb-4">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 dark:text-red-400 text-sm">{error}</span>
                    </div>
                  )}

                  {mode === 'AI' ? (
                    // === AI MODE UI ===
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Question *</label>
                        <textarea
                          value={doubt}
                          onChange={(e) => setDoubt(e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
                          placeholder="Describe your doubt..."
                        />
                      </div>

                      {aiAnswer && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 rounded-xl animate-fade-in">
                          <h4 className="font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Sparkles className="h-4 w-4 mr-2" /> AI Suggestion:
                          </h4>
                          <div className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
                            {aiAnswer}
                          </div>
                          
                          <div className="mt-4 flex gap-3 pt-3 border-t border-blue-100 dark:border-blue-800/50">
                            <button 
                              onClick={() => { setIsOpen(false); resetForm(); }}
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                            >
                              Helpful, Thanks!
                            </button>
                            <button 
                              onClick={() => setMode('EMAIL')}
                              className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-3 py-2 rounded-lg text-sm transition-colors"
                            >
                              Ask Human Mentor
                            </button>
                          </div>
                        </div>
                      )}

                      {!aiAnswer && (
                        <button
                          onClick={handleAskAI}
                          disabled={isLoadingAI}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center font-medium shadow-lg"
                        >
                          {isLoadingAI ? (
                            <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>Thinking...</>
                          ) : (
                            <><Sparkles className="h-4 w-4 mr-2" />Get Instant Answer</>
                          )}
                        </button>
                      )}
                    </div>
                  ) : (
                    // === EMAIL FALLBACK MODE (Your Existing Form) ===
                    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                      <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <button type="button" onClick={() => setMode('AI')} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
                          <ArrowLeft className="h-4 w-4 mr-1" /> Back to AI
                        </button>
                      </div>

                      {/* We don't need Subject/Doubt again as they are preserved in state */}
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name (Optional)</label>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                        <input
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          required
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                          placeholder="your.email@example.com"
                        />
                        <p className="text-xs text-gray-500 mt-1">We'll send the answer here.</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachment (Optional)</label>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50">
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                          <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
                            <Upload className="h-8 w-8 mb-2" />
                            <span className="text-sm">{image ? `✓ ${image.name}` : 'Click to upload'}</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-all flex items-center justify-center font-medium"
                      >
                        {isSubmitting ? 'Sending...' : <><Send className="h-4 w-4 mr-2" />Send to Mentor</>}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskDoubt;