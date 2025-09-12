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

// SEO Component for managing page metadata
const SEO = () => {
    // In a real app, you'd use a library like React Helmet or Next.js Head
    // to dynamically update the document head for SEO.
    // This is a placeholder to demonstrate best practices.
    if (typeof document !== 'undefined') {
        document.title = "About the Developers | Prep4Btech";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Meet the passionate developers behind Prep4Btech, Harshit Agarwal and Hariom Shivnani. Learn about their skills, achievements, and mission to empower students through technology.');
        }
    }
    return null;
};


const About: React.FC = () => {

  const developers = [
    {
      name: 'Harshit Agarwal',
      title: 'Full Stack Developer & Student', 
      // --- TODO: Add your image URL here ---
      // For best results, use a square image (e.g., 200x200 pixels).
      imageUrl: 'https://placehold.co/200x200/E9D5FF/8B5CF6?text=HA',
      // imageUrl: 'https://photos.app.goo.gl/ZnTDLn3GKb4g1mTE7',
      socials: [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/harshitagarwal2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-600' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/HarshitAgarwal2005', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/harshitagarwal2005?igsh=N3F5OTNlMWNvdXZr', color: 'hover:text-pink-600' },
        { name: 'Email', icon: Mail, url: 'mailto:harshitagarwal25807@gmail.com', color: 'hover:text-green-600' }
      ],
      stats: [
        { value: '3+', label: 'Years Coding', color: 'blue' },
        { value: '4+', label: 'Projects Built', color: 'green' }
      ],
      personalInfo: {
        branch: 'Computer Science Engineering',
        college: 'JECRC Foundation',
        location: 'Jaipur, Rajasthan, India',
        year: 'B.Tech Student (Current)'
      }
    },
    {
      name: 'Hariom Shivnani',
      title: 'Full Stack Developer & Student',
      // --- TODO: Add your image URL here ---
      imageUrl: 'https://placehold.co/200x200/D1FAE5/10B981?text=HS',
      socials: [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/hariom-shivnani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-600' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/hariom1610', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/hariomshivnani?igsh=b2NlOWQ3ZW16amVz', color: 'hover:text-pink-600' },
        { name: 'Email', icon: Mail, url: 'mailto:hariom.shivnani23@gmail.com', color: 'hover:text-green-600' }
      ],
      stats: [
        { value: '3+', label: 'Years Coding', color: 'blue' },
        { value: '2+', label: 'Projects Built', color: 'green' }
      ],
      personalInfo: {
        branch: 'Computer Science Engineering',
        college: 'JECRC Foundation',
        location: 'Jaipur, Rajasthan, India',
        year: 'B.Tech Student (Current)'
      }
    }
  ];

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
    { name: 'Full Stack Web Development', issuer: 'FreeCodeCamp', year: '2023', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Python for Data Science', issuer: 'Coursera', year: '2023', icon: Award, color: 'from-green-500 to-emerald-500' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2024', icon: Star, color: 'from-purple-500 to-pink-500' },
    { name: 'Database Management', issuer: 'Oracle', year: '2024', icon: Trophy, color: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    { title: 'Prep4Btech Platform', description: 'Built a comprehensive academic resource platform serving 1000+ students', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { title: 'Open Source Contributor', description: 'Active contributor to various open-source projects on GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
    { title: 'Academic Excellence', description: 'Maintaining high CGPA while actively developing projects', icon: GraduationCap, color: 'from-green-500 to-emerald-500' },
    { title: 'Community Impact', description: 'Helping fellow students through doubt resolution and resource sharing', icon: Heart, color: 'from-red-500 to-pink-500' }
  ];

  return (
    <>
      <SEO />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 py-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About the Developers 👨‍💻
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the passionate developers behind Prep4Btech - dedicated to empowering students through technology.
              </p>
            </header>

            <div className="space-y-16">
              {developers.map((dev) => (
                <section key={dev.name} aria-labelledby={`${dev.name.split(' ')[0]}-profile`} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-white/20 dark:border-gray-700/20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 text-center flex flex-col items-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full p-1 shadow-2xl mx-auto">
                           <img
                              src={dev.imageUrl}
                              alt={`Profile picture of ${dev.name}`}
                              className="w-full h-full object-cover rounded-full"
                              width="200"
                              height="200"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                          <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>
                      <h2 id={`${dev.name.split(' ')[0]}-profile`} className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{dev.name}</h2>
                      <p className="text-md sm:text-lg text-violet-600 dark:text-violet-400 mb-4">{dev.title}</p>
                      <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
                        {dev.socials.map((social) => (
                          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/20 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}>
                            <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </a>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                        {dev.stats.map(stat => (
                          <div key={stat.label} className={`bg-gradient-to-r ${stat.color === 'blue' ? 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20' : 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'} rounded-xl p-4`}>
                            <div className={`text-xl sm:text-2xl font-bold ${stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`}>{stat.value}</div>
                            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                          </div>
                        ))}
                      </div> 
                    </div> 
                    <div className="lg:col-span-2 space-y-8 mt-20">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                        <User className="h-6 w-6 mr-3 text-violet-600" /> Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                         <div className="flex items-center p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl"><GraduationCap className="h-6 w-6 text-violet-600 mr-3 flex-shrink-0" /><div><div className="font-semibold text-gray-900 dark:text-white">Branch</div><div className="text-gray-600 dark:text-gray-300">{dev.personalInfo.branch}</div></div></div>
                         <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl"><BookOpen className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" /><div><div className="font-semibold text-gray-900 dark:text-white">College</div><div className="text-gray-600 dark:text-gray-300">{dev.personalInfo.college}</div></div></div>
                         <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl"><MapPin className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" /><div><div className="font-semibold text-gray-900 dark:text-white">Location</div><div className="text-gray-600 dark:text-gray-300">{dev.personalInfo.location}</div></div></div>
                         <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl"><Calendar className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0" /><div><div className="font-semibold text-gray-900 dark:text-white">Year</div><div className="text-gray-600 dark:text-gray-300">{dev.personalInfo.year}</div></div></div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              <section aria-labelledby="mission-vision" className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-xl p-8 sm:p-12 text-center">
                  <h2 id="mission-vision" className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center">
                      <Target className="h-6 w-6 sm:h-7 sm:w-7 mr-3" /> Mission & Vision
                  </h2>
                  <p className="text-violet-100 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg">
                      "To democratize education by creating accessible, comprehensive, and well-organized academic resources that empower every B.Tech student to excel. We believe in the power of technology to bridge educational gaps and create opportunities for collaborative learning."
                  </p>
              </section>

              <section aria-labelledby="technical-skills" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/20">
                <h2 id="technical-skills" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                  <Code className="h-6 w-6 sm:h-7 sm:w-7 mr-3 text-blue-600" /> Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 sm:h-3">
                        <div className={`bg-gradient-to-r ${skill.color} h-2.5 sm:h-3 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="certifications" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/20">
                <h2 id="certifications" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 mr-3 text-yellow-600" /> Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
                      <div className={`bg-gradient-to-r ${cert.color} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <cert.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{cert.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{cert.issuer} - {cert.year}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="achievements" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/20">
                <h2 id="achievements" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                  <Trophy className="h-6 w-6 sm:h-7 sm:w-7 mr-3 text-purple-600" /> Key Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.title} className="flex items-start p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div className={`bg-gradient-to-r ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            <footer className="mt-16 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 mr-3" /> Let's Connect & Collaborate!
              </h2>
              <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
                We're always excited to connect with fellow developers, students, and educators. Whether you have questions, suggestions, or want to collaborate, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:prep4btech@gmail.com" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center font-semibold">
                  <Mail className="h-5 w-5 mr-2" /> Send Email
                </a>
                <a href="https://www.linkedin.com/in/harshitagarwal2005" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center font-semibold">
                  <Linkedin className="h-5 w-5 mr-2" /> Connect on LinkedIn
                </a>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
