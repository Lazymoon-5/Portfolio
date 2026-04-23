import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    image: '/assets/project1.jpg',
    title: 'Portfolio Website',
    description: 'A modern, ultra-responsive personal portfolio built with React, Tailwind CSS, and Framer Motion animations.',
    tags: ['React', 'Node.js', 'Tailwind', 'Framer Motion'],
    link: '#',
    accent: '#6C63FF',
  },
  {
    image: '/assets/project2.jpg',
    title: 'Lazymoon Brand Designs',
    description: 'Complete brand identity system for Lazymoon Digitech — logos, color palettes, typography, and brand guidelines.',
    tags: ['Canva', 'Photoshop', 'Branding', 'Identity'],
    link: '#',
    accent: '#00F5A0',
  },
  {
    image: '/assets/project3.jpg',
    title: 'Social Media Campaign',
    description: 'Strategic social media campaign design for 3 startup clients — content calendar, creatives, and performance tracking.',
    tags: ['Canva', 'Marketing', 'Social Media', 'Strategy'],
    link: '#',
    accent: '#FF6CB0',
  },
  {
    image: '/assets/project4.jpg',
    title: 'UI/UX Design Concepts',
    description: 'Mobile-first UI/UX design concepts for e-commerce and SaaS apps, with wireframes and interactive prototypes.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Design'],
    link: '#',
    accent: '#FFB547',
  },
];

function ProjectCard({ project, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 group transition-all duration-500 hover:-translate-y-2"
      style={{ '--accent': project.accent }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.accent}22 0%, rgba(11,15,25,0.8) 100%)` }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="relative z-10 text-center">
            <div className="text-5xl mb-2">🖼️</div>
            <p className="text-muted/60 text-xs font-mono">project image</p>
          </div>
        </div>

        {/* Accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple group-hover:to-green group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted text-sm font-body leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>

        <a
          href={project.link}
          className="flex items-center gap-2 text-sm font-body font-medium transition-all duration-300 hover:gap-4"
          style={{ color: project.accent }}
        >
          View Project <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="section-pad relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-green text-sm tracking-widest uppercase">My Work</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted font-body mt-4 max-w-xl mx-auto">
            A showcase of creative and technical work — from brand identities to web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
