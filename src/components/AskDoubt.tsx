import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Upload, CheckCircle, AlertCircle, Bot, ArrowLeft, Sparkles, BookOpen, Layers, Calendar } from 'lucide-react';
// Import your real data to populate dropdowns dynamically
import { branches, contentSubjects } from '../data/contentData';

// import {  contentSubjects as eceSubjects } from '../data/ECEcontent';
// import {  contentSubjects } from '../data/MECHcontent';
// import { contentSubjects } from '../data/CIVLcontent';

const AskDoubt: React.FC = () => {
  // --- UI State ---
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'AI' | 'EMAIL'>('AI');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  // --- Form Data State ---
  const [question, setQuestion] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState<File | null>(null);

  // --- Filtered Subjects Logic ---
  // Only show subjects that match the selected Branch and Semester
  const availableSubjects = contentSubjects.filter(sub => {
    // If branch/sem not selected, show nothing or all (your choice)
    if (!branch || !semester) return false;
    
    // Match Branch Code (e.g., 'CSE', 'ECE')
    // Note: In contentData, branch codes might be complex like 'CSE/AI/AIDS/IT'. 
    // We check if the selected branch code is included in the subject's branch string.
    const branchMatch = sub.branch.includes(branch);
    
    // Match Semester
    const semMatch = sub.semester === parseInt(semester);
    
    return branchMatch && semMatch;
  });

  const resetForm = () => {
    setQuestion('');
    setBranch('');
    setSemester('');
    setSubject('');
    setUserEmail('');
    setUserName('');
    setImage(null);
    setError(null);
    setIsSubmitted(false);
    setMode('AI');
    setAiAnswer(null);
  };

  // --- AI Handler ---
  const handleAskAI = async () => {
    if (!branch || !semester || !subject || !question) {
      setError("Please fill in all fields (Branch, Semester, Subject, Question).");
      return;
    }
    
    setIsLoadingAI(true);
    setError(null);

    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
    console.log("Supabase URL:", url);
    console.log("Supabase Key:", key ? "Key exists (Hidden)" : "MISSING KEY!");

    if (!url || !key) {
      setError("Configuration Error: Supabase keys are missing. Please check your .env file and restart the server.");
      setIsLoadingAI(false);
      return;
    }
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ask-ai`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question, 
          subject, 
          branch, 
          semester 
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get AI response');
      }
      
      setAiAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setMode('EMAIL'); // Auto-switch to email if AI fails
      // setError("AI service is currently busy. Please send your doubt to a mentor.");
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoadingAI(false);
    }
  };

  // --- Email Handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!userEmail) {
        setError("Email is required for mentor response.");
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
          subject: `${subject} (Sem ${semester} - ${branch})`,
          doubt: question,
          userEmail,
          userName,
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
      setError("Could not send email. Please try again later.");
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
                    {mode === 'AI' ? 'AI Tutor' : 'Ask a Mentor'}
                  </h2>
                  <p className="text-blue-100 text-sm">
                    {mode === 'AI' ? 'Instant answers for your syllabus' : 'Get expert help via email'}
                  </p>
                </div>
                <button onClick={() => { setIsOpen(false); resetForm(); }} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Request Sent! ✅</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Check your email soon for a response.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start mb-4">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 dark:text-red-400 text-sm">{error}</span>
                    </div>
                  )}

                  {mode === 'AI' ? (
                    // === AI MODE ===
                    <div className="space-y-4">
                      {/* Context Selectors */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Branch</label>
                          <div className="relative">
                            <Layers className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <select
                              value={branch}
                              onChange={(e) => setBranch(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select</option>
                              {branches.map(b => <option key={b.id} value={b.code}>{b.code}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Semester</label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <select
                              value={semester}
                              onChange={(e) => setSemester(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select</option>
                              {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Subject Selector (Filtered) */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                        <div className="relative">
                          <BookOpen className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            disabled={!branch || !semester}
                            className="w-full pl-9 pr-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="">
                              {(!branch || !semester) ? "Select Branch & Sem first" : "Select a Subject"}
                            </option>
                            {availableSubjects.map(sub => (
                              <option key={sub.id} value={sub.name}>{sub.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Question Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Question *</label>
                        <textarea
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
                          placeholder="What specific topic are you stuck on?"
                        />
                      </div>

                      {/* AI Answer / Action */}
                      {aiAnswer ? (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 rounded-xl animate-fade-in">
                          <h4 className="font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2 text-sm">
                            <Sparkles className="h-4 w-4 mr-2" /> AI Answer:
                          </h4>
                          <div className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                            {aiAnswer}
                          </div>
                          
                          <div className="mt-4 flex gap-2 pt-3 border-t border-blue-100 dark:border-blue-800/50">
                            <button onClick={() => { setIsOpen(false); resetForm(); }} className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-xs transition-colors">
                              Helpful!
                            </button>
                            <button onClick={() => setMode('EMAIL')} className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-3 py-2 rounded-lg text-xs transition-colors">
                              Ask Mentor
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={handleAskAI}
                          disabled={isLoadingAI}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center font-medium shadow-lg"
                        >
                          {isLoadingAI ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <><Sparkles className="h-4 w-4 mr-2" /> Ask AI Tutor</>}
                        </button>
                      )}
                    </div>
                  ) : (
                    // === EMAIL MODE ===
                    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                      <button type="button" onClick={() => setMode('AI')} className="text-sm text-blue-600 dark:text-blue-400 flex items-center hover:underline mb-2">
                        <ArrowLeft className="h-3 w-3 mr-1" /> Back to AI
                      </button>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                          placeholder="Optional"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email *</label>
                        <input
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          required
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                          placeholder="For the answer"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Screenshot (Optional)</label>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700/50 text-center">
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="file-upload" />
                          <label htmlFor="file-upload" className="cursor-pointer text-sm text-blue-600 dark:text-blue-400 hover:underline">
                            {image ? `File: ${image.name}` : "Click to upload image"}
                          </label>
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium">
                        {isSubmitting ? 'Sending...' : <><Send className="h-4 w-4 mr-2" /> Send Request</>}
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