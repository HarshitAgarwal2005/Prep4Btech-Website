import React, { useEffect } from 'react';
import { FileText, BookMarked, Users, Copyright, AlertTriangle, XCircle, UserCircle, Wrench, Gavel, Mail } from 'lucide-react';

const TermsOfService: React.FC = () => {
  // Scrolls to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const termsSections = [
    {
      icon: FileText,
      title: '1. Introduction and Acceptance',
      content: 'Welcome to prep4btech.netlify.app ("we," "us," or "our"). By accessing or using our website, you ("user" or "you") agree to be bound by these Terms of Service ("Terms"). Our website is designed to support RTU Kota students by providing academic resources. If you disagree with any part of these terms, please do not use our service.',
    },
    {
      icon: BookMarked,
      title: '2. Description of Service',
      subSections: [
        { title: '2.1 Educational Resources', points: ['Study notes and educational materials', 'Previous year question papers (PYQs)', 'Syllabus information', 'Academic resources for RTU Kota students'] },
        { title: '2.2 Nature of Service', points: ['This is an educational support platform designed to assist students. We do not guarantee academic success, exam results, or the accuracy of all materials provided.'] }
      ]
    },
    {
      icon: Users,
      title: '3. User Responsibilities and Acceptable Use',
      subSections: [
        { title: '3.1 Appropriate Use', points: ['Personal educational purposes', 'Academic preparation and study', 'Non-commercial educational activities'] },
        { title: '3.2 Prohibited Activities', points: ['Commercial redistribution of materials without permission', 'Plagiarism or academic dishonesty', 'Copyright infringement', 'Uploading malicious content or spam', 'Attempting to hack or disrupt our service'] },
        { title: '3.3 Student Responsibility', points: ['You are responsible for verifying the accuracy of academic information and using materials as study aids, not as official content.'] }
      ]
    },
    {
      icon: Copyright,
      title: '4. Intellectual Property and Content Ownership',
      subSections: [
        { title: '4.1 Our Content', points: ['Original content created by us is our intellectual property. You may use it for personal study but not redistribute it commercially.'] },
        { title: '4.2 Third-Party Academic Materials', points: ['PYQs and syllabi may be sourced from RTU Kota. We respect intellectual property rights and remove content upon valid requests.'] },
        { title: '4.3 User-Contributed Content', points: ['If you submit materials, you grant us a license to display them on our platform and confirm you have the right to share such content.'] }
      ]
    },
    {
      icon: AlertTriangle,
      title: '5. Disclaimers and Limitations',
      subSections: [
        { title: '5.1 Educational Disclaimer', points: ['Materials are for study purposes only. We do not guarantee accuracy and are not affiliated with RTU Kota. Official information should always be verified with RTU Kota directly.'] },
        { title: '5.2 No Academic Guarantees', points: ['Using our materials does not guarantee exam success. Students are responsible for their own academic performance.'] }
      ]
    },
    {
      icon: XCircle,
      title: '6. Limitation of Liability',
      content: 'To the fullest extent permitted by law, we provide the service "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service or for academic outcomes based on our materials.',
    },
    {
      icon: UserCircle,
      title: '7. Account Usage (If Applicable)',
      content: 'If we implement user accounts, you are responsible for maintaining account security, providing accurate registration information, and notifying us immediately of unauthorized access. One account per person for personal use only.',
    },
    {
      icon: Wrench,
      title: '8. Service Modifications',
      content: 'We reserve the right to modify or discontinue services, update content, and change these Terms with reasonable notice. We may also remove content that violates these Terms.',
    },
    {
      icon: Gavel,
      title: '9. Governing Law and Dispute Resolution',
      content: 'These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Kota, Rajasthan, or as otherwise required by Indian law.',
    },

    {
      icon: Mail,
      title: '10. Contact Information',
      content: 'For questions about these Terms, please email us at prep4btech@gmail.com. We aim to respond within 48 hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last Updated: September 16, 2025
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {termsSections.map((section, index) => (
            <div key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <section.icon className="h-7 w-7 mr-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                {section.title}
              </h2>
              {section.content && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.content}</p>
              )}
              {section.subSections && (
                <div className="space-y-6">
                  {section.subSections.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{sub.title}</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {sub.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;