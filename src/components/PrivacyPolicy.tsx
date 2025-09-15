import React, { useEffect } from 'react';
import { Shield, User, Database, Share2, Lock, Edit, BookOpen, ExternalLink, Bell, FileText, Mail, Building } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  // Scrolls to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const policySections = [
    {
      icon: Shield,
      title: '1. Introduction',
      content: 'This Privacy Policy explains how prep4btech.netlify.app ("we," "us," or "our") collects, uses, and protects your personal information when you use our educational support website.'
    },
    {
      icon: User,
      title: '2. Information We Collect',
      subSections: [
        { title: '2.1 Information You Provide', points: ['Contact details when you reach out to us', 'Account information if you create an account', 'Submitted content like notes or questions you share', 'Feedback and communication with us'] },
        { title: '2.2 Automatically Collected Information', points: ['Website usage data (pages visited, time spent)', 'Device information (browser type, operating system)', 'IP address and general location data', 'Technical data for website functionality'] },
        { title: '2.3 Cookies and Tracking', points: ['We may use essential cookies for website functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can control cookie settings through your browser preferences.'] }
      ]
    },
    {
      icon: Database,
      title: '3. How We Use Your Information',
      subSections: [
        { title: '3.1 Primary Uses', points: ['Provide educational resources and website functionality', 'Improve our service based on usage patterns', 'Communicate about updates or respond to inquiries', 'Maintain security and prevent misuse'] },
        { title: '3.2 Educational Purpose Focus', points: ['All data usage supports our mission of providing academic resources to RTU Kota students. We do not use your information for unrelated commercial purposes.'] }
      ]
    },
    {
      icon: Share2,
      title: '4. Information Sharing and Disclosure',
      subSections: [
        { title: '4.1 We Do NOT Sell Your Data', points: ['We never sell, rent, or trade your personal information to third parties for marketing purposes.'] },
        { title: '4.2 Limited Sharing Scenarios', points: ['Required by law or legal process', 'Protecting our rights or preventing harm', 'Service providers who help us operate the website (with strict privacy agreements)', 'Academic institutions if relevant for educational purposes and with your consent'] },
        { title: '4.3 Academic Content Sharing', points: ['Study materials you contribute may be shared with other students for educational purposes, but we remove personal identifying information.'] }
      ]
    },
    {
      icon: Lock,
      title: '5. Data Storage and Security',
      subSections: [
        { title: '5.1 Security Measures', points: ['Secure data transmission (HTTPS encryption)', 'Access controls limiting who can view your information', 'Regular security updates and monitoring', 'Data backup procedures to prevent loss'] },
        { title: '5.2 Data Location', points: ['Your data may be stored on secure servers in India or internationally with reputable hosting providers who meet our security standards, in compliance with applicable Indian data protection laws.'] },
        { title: '5.3 Retention Periods', points: ['Account data: Kept while your account is active plus 1 year', 'Usage analytics: Anonymized after 2 years', 'Communication records: 3 years for reference', 'Academic contributions: May be retained longer for educational value'] }
      ]
    },
    {
      icon: Edit,
      title: '6. Your Rights and Choices',
      subSections: [
        { title: '6.1 Access and Control', points: ['Access your personal information we hold', 'Correct inaccurate or incomplete data', 'Delete your account and associated data', 'Object to certain processing activities', 'Data portability in standard formats where applicable'] },
        { title: '6.2 Communication Preferences', points: ['Opt out of promotional communications', 'Choose notification settings', 'Update your contact preferences'] },
        { title: '6.3 Cookie Controls', points: ['Adjust browser settings to refuse cookies', 'Use private/incognito browsing modes', 'Clear existing cookies from your device'] }
      ]
    },
    {
      icon: BookOpen,
      title: '7. Special Considerations for Students',
      subSections: [
        { title: '7.1 Student Privacy', points: ["Understanding that our users are primarily students, we minimize data collection to what's necessary for educational support, avoid sharing academic performance or personal study information, and respect the educational nature of your website usage."] },
        { title: '7.2 Minor Users', points: ["If users under 18 access our service, we encourage parental awareness of online activities. We do not knowingly collect unnecessary personal information from minors. Parents can contact us about their child's data."] }
      ]
    },
    {
      icon: ExternalLink,
      title: '8. Third-Party Services',
      content: 'Our website may link to RTU Kota official sites, academic resources, or other educational platforms. These external sites have their own privacy policies. We may also embed educational content (videos, calendars) from reputable providers, which may collect their own usage data according to their policies.'
    },
    {
      icon: Bell,
      title: '9. Changes to Privacy Policy',
      content: 'We will notify users of significant privacy policy changes via email (if you have an account) or a website notice. By continuing to use our service after updates, you accept the revised terms.'
    },
    {
        icon: Building,
        title: '10. Compliance and Legal Framework',
        content: 'We comply with the Information Technology Act, 2000 and related rules, Personal Data Protection considerations, and other applicable Indian laws. For users outside India, we operate under Indian law.'
    },
    {
      icon: Mail,
      title: '11. Contact Us About Privacy',
      subSections: [
        { title: '11.1 Privacy Questions', points: ['For privacy-related inquiries, please email: [Your-Email-Here@example.com] with the subject line "Privacy Policy". We aim to respond within 5 business days.'] },
        { title: '11.2 Data Requests', points: ['To exercise your rights (access, correction, deletion), send a detailed request to our contact email with identity verification. We will respond within 30 days as required by law.'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Animated Background Elements (Consistent with Home page) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last Updated: September 16, 2025
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {policySections.map((section, index) => (
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

export default PrivacyPolicy;