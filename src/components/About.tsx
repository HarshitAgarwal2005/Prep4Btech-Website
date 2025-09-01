import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Code, 
  Award, 
  Github, 
  Linkedin, 
  Instagram,
  Mail,
  Calendar,
  Star,
  Zap,
  Heart,
  BookOpen,
  Trophy,
  Target,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-indigo-600' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 96, color: 'from-yellow-500 to-orange-500' },
    { name: 'Java', level: 82, color: 'from-red-500 to-pink-500' },
    { name: 'Database Design', level: 84, color: 'from-purple-500 to-violet-500' },
    { name: 'UI/UX Design', level: 84, color: 'from-pink-500 to-rose-500' },
    { name: 'Machine Learning', level: 76, color: 'from-indigo-500 to-purple-500' }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      year: '2023',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Python for Data Science',
      issuer: 'Coursera',
      year: '2023',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2024',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Database Management',
      issuer: 'Oracle',
      year: '2024',
      icon: Trophy,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    {
      title: 'Prep4Btech Platform',
      description: 'Built a comprehensive academic resource platform serving 1000+ students',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to various open-source projects on GitHub',
      icon: Github,
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Academic Excellence',
      description: 'Maintaining high CGPA while actively developing projects',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community Impact',
      description: 'Helping fellow students through doubt resolution and resource sharing',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      followers: '500+'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/HarshitAgarwal2005',
      color: 'hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50',
      followers: '200+'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/invites/contact/?igsh=2tpj8tcsf5l5&utm_content=epyez14',
      color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20',
      followers: '1K+'
     },
     {
      name: 'LinkedIn',
      icon: Linkedin,
      url1: 'https://www.linkedin.com/in/hariom-shivnani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      followers: '500+'
    }
    
      //  ,
    //  {
    //   name: 'Email',
    //   icon: Email,
    //   url: 'mailto:harshitagarwal25807@gmail.com',
    //   color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20',
    //   followers: '1K+'
    // }
  ]; 
const socialLink = [
   {
      name: 'LinkedIn',
      icon: Linkedin,
      url1: 'https://www.linkedin.com/in/hariom-shivnani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      followers: '500+'
    },
    {
      name: 'GitHub',
      icon: Github,
      url1: 'https://github.com/hariom1610',
      color: 'hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50',
      followers: '200+'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url1: 'https://www.instagram.com/hariomshivnani?igsh=b2NlOWQ3ZW16amVz',
      color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20',
      followers: '1K+'
     }
  ]; 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About the Developer 👨‍💻
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the passionate developer behind Prep4Btech - dedicated to empowering students through technology
            </p>
          </div>

          {/* Main Profile Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-white/20 dark:border-gray-700/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image and Basic Info */}
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl mx-auto">
                    <User className="h-24 w-24 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Harshit Agarwal</h2>
                <p className="text-lg text-violet-600 dark:text-violet-400 mb-4">Full Stack Developer & Student</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/20 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                      title={`${social.name} - ${social.followers} followers`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Coding</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">4+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Built</div>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="lg:col-span-2 space-y-8 mt-20">
                {/* Personal Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <User className="h-6 w-6 mr-3 text-violet-600" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-violet-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Branch</div>
                        <div className="text-gray-600 dark:text-gray-300">Computer Science Engineering</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                      <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">College</div>
                        <div className="text-gray-600 dark:text-gray-300">JECRC Foundation</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                      <MapPin className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                        <div className="text-gray-600 dark:text-gray-300">Jaipur, Rajasthan, India</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                      <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Year</div>
                        <div className="text-gray-600 dark:text-gray-300">B.Tech Student (Current)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission Statement */}
               {/*  <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    Mission & Vision
                  </h3>
                  <p className="text-violet-100 leading-relaxed">
                    "To democratize education by creating accessible, comprehensive, and well-organized academic resources 
                    that empower every B.Tech student to excel in their studies. I believe in the power of technology 
                    to bridge educational gaps and create opportunities for collaborative learning."
                  </p>
                </div>          
 */}</div>
              </div>
            </div>


 {/* hariom  bio section */}
 <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-white/20 dark:border-gray-700/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image and Basic Info */}
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl mx-auto">
                    <User className="h-24 w-24 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Hariom shivnani</h2>
                <p className="text-lg text-violet-600 dark:text-violet-400 mb-4">Full Stack Developer & Student</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/20 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                      title={`${social.name} - ${social.followers} followers`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Coding</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Built</div>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="lg:col-span-2 space-y-8 mt-20">
                {/* Personal Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <User className="h-6 w-6 mr-3 text-violet-600" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-violet-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Branch</div>
                        <div className="text-gray-600 dark:text-gray-300">Computer Science Engineering</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                      <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">College</div>
                        <div className="text-gray-600 dark:text-gray-300">JECRC Foundation</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                      <MapPin className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                        <div className="text-gray-600 dark:text-gray-300">Jaipur, Rajasthan, India</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                      <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Year</div>
                        <div className="text-gray-600 dark:text-gray-300">B.Tech Student (Current)</div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>

           {/* Mission Statement */}
                <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-2xl p-6 mb-12">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    Mission & Vision
                  </h3>
                  <p className="text-violet-100 leading-relaxed">
                    "To democratize education by creating accessible, comprehensive, and well-organized academic resources 
                    that empower every B.Tech student to excel in their studies. I believe in the power of technology 
                    to bridge educational gaps and create opportunities for collaborative learning."
                  </p>
                </div>
          {/* Skills Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
              <Code className="h-6 w-6 mr-3 text-blue-600" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
              <Award className="h-6 w-6 mr-3 text-yellow-600" />
              Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
              <Trophy className="h-6 w-6 mr-3 text-purple-600" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className={`bg-gradient-to-r ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 mr-3" />
              Let's Connect & Collaborate!
            </h3>
            <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers, students, and educators. 
              Whether you have questions, suggestions, or want to collaborate on projects, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:harshitagarwal25807@gmail.com"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;