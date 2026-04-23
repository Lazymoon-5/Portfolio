import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    icon: '🎨',
    title: 'Design Skills',
    color: '#6C63FF',
    skills: [
      { name: 'Canva', level: 95 },
      { name: 'Photoshop (Basics)', level: 60 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Branding & Identity', level: 85 },
    ],
  },
  {
    icon: '💻',
    title: 'Development Skills',
    color: '#00F5A0',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'React JS', level: 70 },
      { name: 'Node JS', level: 60 },
    ],
  },
  {
    icon: '🎬',
    title: 'Creative Skills',
    color: '#FF6CB0',
    skills: [
      { name: 'Video Editing (CapCut)', level: 88 },
      { name: 'Filmora', level: 80 },
      { name: 'VN Editor', level: 85 },
      { name: 'Social Media Mgmt', level: 90 },
    ],
  },
  {
    icon: '🧠',
    title: 'Soft Skills',
    color: '#FFB547',
    skills: [
      { name: 'Client Communication', level: 92 },
      { name: 'Creative Problem Solving', level: 88 },
      { name: 'Team Leadership', level: 80 },
      { name: 'Project Management', level: 78 },
    ],
  },
];

function SkillBar({ name, level, color, isVisible, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-body text-white/80">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="section-pad relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-green text-sm tracking-widest uppercase">What I Do</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.15 }}
              className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              style={{ '--cat-color': cat.color }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}22` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-lg" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  isVisible={isVisible}
                  delay={0.4 + ci * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
