import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Star, ArrowRight } from 'lucide-react';
import '../components/Projects.css';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Your actual GitHub projects
  const projects = [
    {
      id: 9,
      title: "Harbor",
      description: "A framework for running agent evaluations and creating/using RL environments. Official harness for Terminal-Bench-2.0, supporting Docker-based agent benchmarks.",
      category: "systems",
      technologies: ["Python", "Docker", "Reinforcement Learning", "Terminal-Bench"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/harbor",
      date: "2024",
      featured: true,
      stats: { stars: 2, forks: 0 }
    },
    {
      id: 10,
      title: "Smart Airport Ride Pooling Backend",
      description: "High-performance, concurrency-safe backend for shared airport rides. Features geospatial matching (PostGIS), optimistic locking for seat booking, and dynamic pricing. Handles 100+ RPS with sub-second latency.",
      category: "web",
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "PostGIS", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/Smar-tAirport_Ride_Pooling",
      date: "2024",
      featured: true,
      stats: { stars: 1, forks: 0 }
    },
    {
      id: 11,
      title: "Drone Operations Coordinator Agent",
      description: "AI agent for coordinating drone operations. Implemented with two architectures: a React+Supabase web agent and a Python FastAPI+Streamlit backend agent.",
      category: "ml",
      technologies: ["React", "Supabase", "Python", "FastAPI", "Streamlit"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/Drone_AI_agent",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 12,
      title: "CineMatch - Movie Recommendation System",
      description: "Hybrid movie recommendation engine using Content-based (TF-IDF) and Collaborative filtering. Built with Python and Streamlit for interactive recommendations.",
      category: "ml",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/Movie_Recommendation_System",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 1,
      title: "Social Media Bot Detection with Sentiment Analysis",
      description: "Built a multimodal ML system using text, image, and behavioral analysis to detect social media bots. Used XLM-RoBERTa and ResNet-50 for sentiment extraction and fused outputs using weighted fusion model. Engineered user-level behavioral features (sentiment distribution, variance, emotional volatility, posting frequency) from fused tweet sentiments. Trained ML classifiers (Random Forest, AdaBoost, etc) achieved up to 99.44% accuracy in final bot detection.",
      category: "ml",
      technologies: ["Python", "TensorFlow", "RoBERTa", "ResNet50", "Pandas", "NumPy", "Hugging Face", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri",
      date: "2024",
      featured: true,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 2,
      title: "Agro Management System",
      description: "Developed a full-stack web application that allows farmers to manage crops, fields, loans, products and orders. Built a responsive and reusable frontend using React.js and Tailwind CSS for an improved user experience. Implemented RESTful APIs with secure JWT-based authentication and role-based access for users and admins. Designed and maintained a relational SQL database schema to ensure data consistency, integrity, and scalability.",
      category: "web",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT", "MySQL", "JSON", "TypeScript"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/Agro-Management-System",
      date: "2024",
      featured: true,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 3,
      title: "Online Delivery System",
      description: "Developed a CLI-based delivery system with OTP authentication, order management, and role-based access. Applied MVC architecture and Factory design pattern for clean, scalable code structure. Designed modular OOP classes for users, staff roles, and transaction handling with file-based storage. Integrated Python-based email alerts for OTP authentication and notifications.",
      category: "systems",
      technologies: ["C++ (OOP)", "Python", "Custom File-based Database", "MVC Architecture", "Factory Pattern"],
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri",
      date: "2024",
      featured: true,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 4,
      title: "Matrix Color Game",
      description: "Interactive web-based game built with JavaScript featuring matrix-style color matching gameplay. Implemented dynamic UI updates, game logic, and score tracking for an engaging user experience.",
      category: "web",
      technologies: ["JavaScript", "HTML", "CSS", "Game Development"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb36782c022?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/matrix-color-game",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 5,
      title: "Coupon Distribution System",
      description: "Web application for managing and distributing coupons with user-friendly interface. Built with HTML and modern web technologies for efficient coupon management and distribution.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/coupon-distribution",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 6,
      title: "CC Monolith",
      description: "Python-based monolithic application for cloud computing operations. Features comprehensive functionality for managing cloud resources and computing tasks.",
      category: "python",
      technologies: ["Python", "Cloud Computing", "System Design"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/CC_Monolith",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 7,
      title: "PES2UG22CS674 Project",
      description: "Academic project repository for PES University coursework. Contains web development projects and assignments built with HTML and modern web technologies.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/PES2UG22CS674",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 8,
      title: "Jenkins CI/CD Pipeline",
      description: "Continuous Integration and Deployment pipeline setup using Jenkins. Demonstrates DevOps practices and automated testing workflows for C++ projects.",
      category: "systems",
      technologies: ["C++", "Jenkins", "CI/CD", "DevOps", "Automation"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/PES2UG22CS674_Jenkins",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'python', label: 'Python Projects', count: projects.filter(p => p.category === 'python').length },
    { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'systems', label: 'System Programming', count: projects.filter(p => p.category === 'systems').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-text">
            <h1 className="main-title">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="header-description">
              Showcasing my academic journey through innovative projects that demonstrate
              technical skills, creativity, and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="content-wrapper">
        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Star className="star-icon" />
                  Featured
                </div>
              )}

              {project.status && (
                <div className="status-badge">
                  {project.status}
                </div>
              )}

              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-gradient"></div>

                {/* Overlay Links */}
                <div className={`image-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                  <a href={project.demoUrl} className="overlay-btn demo-btn">
                    <ExternalLink className="btn-icon" />
                  </a>
                  <a href={project.githubUrl} className="overlay-btn github-btn">
                    <Github className="btn-icon" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-meta">
                  <div className="project-date">
                    <Calendar className="meta-icon" />
                    {project.date}
                  </div>
                  <div className="project-stats">
                    <div className="stat-item">
                      <Star className="meta-icon" />
                      {project.stats.stars}
                    </div>
                    <div className="stat-item">
                      <Code className="meta-icon" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="view-project-btn">
                  View Project
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
          <a href="https://github.com/Yamanuri?tab=repositories" target="_blank" rel="noopener noreferrer" className="view-project-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            View More on GitHub
            <ArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number blue">{projects.length}</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number purple">
                {projects.reduce((sum, p) => sum + p.technologies.length, 0)}
              </div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-card">
              <div className="stat-number green">
                {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
              </div>
              <div className="stat-label">GitHub Stars</div>
            </div>
            <div className="stat-card">
              <div className="stat-number yellow">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="stat-label">Featured Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;