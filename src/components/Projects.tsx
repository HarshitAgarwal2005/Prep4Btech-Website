import React, { useState } from 'react';
import { Code, ExternalLink, Github, Download, FileText, Lightbulb, Trophy, Clock } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProjects = projects.filter(project => {
    const yearMatch = selectedYear ? project.year === selectedYear : true;
    const typeMatch = selectedType ? project.type === selectedType : true;
    const searchMatch = searchQuery 
      ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return yearMatch && typeMatch && searchMatch;
  });

  const getTypeColor = (type: string) => {
    return type === 'major' 
      ? 'bg-purple-100 text-purple-800' 
      : 'bg-blue-100 text-blue-800';
  };

  const getTypeIcon = (type: string) => {
    return type === 'major' ? Trophy : Lightbulb;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-cyan-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore innovative project ideas with complete documentation, source code, and implementation guides
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/20 dark:border-gray-700/20">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Filter Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Year</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedYear === null
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All Years
                </button>
                {[1, 2, 3, 4].map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedYear === year
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Year {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Type</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === null
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All Types
                </button>
                {['mini', 'major'].map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                      selectedType === type
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type} Projects
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Projects</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid - Centered Layout */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => {
                  const TypeIcon = getTypeIcon(project.type);
                  return (
                    <div key={project.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20 dark:border-gray-700/20">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mr-3">
                              <TypeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                                {project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Year {project.year}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2">
                          <div className="flex space-x-2">
                            {project.githubUrl && (
                              <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </button>
                            )}
                            {project.demoUrl && (
                              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </button>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            {project.reportUrl && (
                              <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-sm">
                                <FileText className="h-4 w-4 mr-1" />
                                Report
                              </button>
                            )}
                            {project.pptUrl && (
                              <button className="flex-1 bg-orange-600 text-white py-2 px-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center text-sm">
                                <Download className="h-4 w-4 mr-1" />
                                PPT
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-12 text-center border border-white/20 dark:border-gray-700/20">
                <Code className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Projects Found</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your filters or check back later for new projects.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Project Categories */}
        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mini Projects</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{projects.filter(p => p.type === 'mini').length} Projects</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Major Projects</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{projects.filter(p => p.type === 'major').length} Projects</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{projects.filter(p => p.githubUrl).length} Projects</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Demos</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{projects.filter(p => p.demoUrl).length} Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;