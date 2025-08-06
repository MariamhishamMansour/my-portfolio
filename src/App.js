import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Settings, Users, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Allegiancetek",
      period: "December 2023 — Present",
      location: "Beirut",
      projects: [
        {
          name: "Digital Survey Management Platform",
          description: "Led development of large-scale survey system handling 60,000+ occupants with real-time capabilities.",
          achievements: [
            "Built real-time survey response system with multi-channel data collection",
            "Implemented role-based authentication and comprehensive notification system (SMS/Email)",
            "Created modern Angular UI with data visualization and XML export functionality"
          ]
        },
        {
          name: "Manufacturing Operations Management System",
          description: "Developed production tracking system for postal services with real-time monitoring.",
          achievements: [
            "Built real-time notifications using SignalR and barcode/QR scanning system",
            "Implemented multi-layered authentication (JWT, session-based, PIN) and audit logging",
            "Created PWA with offline capabilities and scalable RESTful APIs"
          ]
        },
        {
          name: "Legacy System Modernization & High-Volume SMS Platform",
          description: "Replaced 20-year-old VB system with modern Python solution handling thousands of SMS.",
          achievements: [
            "Migrated complex legacy functionality to scalable Python/Flask architecture",
            "Deployed on Linux servers with reliable data integration protocols",
            "Built reliable SMS gateway handling thousands of concurrent messages"
          ]
        }
      ]
    },
    {
      title: "Front End Developer",
      company: "Salem Group",
      period: "July 2023 — December 2023",
      location: "Beirut",
      projects: [
        {
          name: "Customer Dashboard Platform",
          description: "Developed comprehensive React-based customer dashboard enabling seamless booking and reservation experiences.",
          achievements: [
            "Implemented core front-end architecture including routing, state management, API integration",
            "Built dynamic real-time features (reviews, updates) with responsive design",
            "Collaborated on multiple design-focused projects delivering optimized JavaScript functionality"
          ]
        }
      ]
    }
  ];

  const skills = {
    Frontend: ["Angular", "React", "TypeScript", "JavaScript", "HTML/CSS", "PrimeNG", "Angular Material", "Bootstrap"],
    Backend: ["Python (Flask)", "ASP.NET Core 8", "C#", "RESTful APIs"],
    Databases: ["MySQL", "Entity Framework Core", "SQL"],
    DevOps: ["Docker", "Git", "Linux Server Administration", "Postman"],
    Integrations: ["SendGrid", "SMS APIs", "JWT Authentication", "External API Integration"],
    Soft: ["Team Leadership", "Client Relationship Management", "International Collaboration", "Problem-Solving"]
  };

  const projects = [
    {
      title: "Digital Survey Management Platform",
      description: "Large-scale survey system handling 60,000+ users with real-time capabilities, role-based authentication, and comprehensive notification systems.",
      tech: ["Angular", "Python", "Flask", "MySQL", "SignalR"],
      features: ["Real-time data processing", "Multi-channel data collection", "XML export functionality"]
    },
    {
      title: "Manufacturing Operations Management",
      description: "Production tracking system for postal services with real-time monitoring, barcode scanning, and PWA capabilities.",
      tech: ["Angular", "ASP.NET Core", "SignalR", "PWA"],
      features: ["Real-time notifications", "Offline capabilities", "Barcode/QR scanning"]
    },
    {
      title: "High-Volume SMS Platform",
      description: "Modern Python solution replacing 20-year-old legacy system, handling thousands of concurrent SMS messages.",
      tech: ["Python", "Flask", "Linux", "SMS APIs"],
      features: ["Legacy system migration", "Concurrent message handling", "Reliable data integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mariam Mansour
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Mariam Mansour
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full-Stack Software Engineer
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Results-driven developer with 2 years of experience leading high-impact projects and managing international clients. 
              Specialized in modernizing legacy systems and delivering applications serving 60,000+ users.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} className="text-purple-400" />
              Beirut, Lebanon
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={20} className="text-purple-400" />
              mariammansour.dev@gmail.com
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={20} className="text-purple-400" />
              76764933
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full-Stack Developer with expertise in modern web technologies and a proven track record 
                of delivering scalable solutions. My experience spans from building real-time applications serving thousands 
                of users to modernizing legacy systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in Angular, React, Python (Flask), and ASP.NET Core, with strong experience in team leadership 
                and international client management. I enjoy solving complex problems and translating business requirements 
                into robust technical solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">60K+</h3>
                <p className="text-gray-300">Users Served</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">2+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">10+</h3>
                <p className="text-gray-300">Projects Delivered</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">3</h3>
                <p className="text-gray-300">Tech Stacks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {exp.projects.map((project, projIndex) => (
                    <div key={projIndex} className="border-l-2 border-purple-400 pl-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{project.name}</h4>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  {category === 'Frontend' && <Code className="text-purple-400 mr-2" size={24} />}
                  {category === 'Backend' && <Server className="text-purple-400 mr-2" size={24} />}
                  {category === 'Databases' && <Database className="text-purple-400 mr-2" size={24} />}
                  {category === 'DevOps' && <Settings className="text-purple-400 mr-2" size={24} />}
                  {category === 'Integrations' && <Globe className="text-purple-400 mr-2" size={24} />}
                  {category === 'Soft' && <Users className="text-purple-400 mr-2" size={24} />}
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featIndex) => (
                      <li key={featIndex} className="text-gray-400 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">mariammansour.dev@gmail.com</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <Phone className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">76764933</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">Beirut, Lebanon</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:mariammansour.dev@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="#"
              className="border border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mariam Mansour. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;