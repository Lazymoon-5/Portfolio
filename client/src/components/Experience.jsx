import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: 'Founder & Creative Head',
    company: 'Lazymoon Digitech',
    period: '2024 – Present',
    type: 'Full Time',
    color: '#6C63FF',
    points: [
      'Built and managed a creative studio from the ground up',
      'Delivered 30+ client projects in branding, design, and marketing',
      'Handled client communication and creative direction',
      'Developed brand identities for startups and businesses',
    ],
  },
  {
    role: 'Graphic Designer & Instructor',
    company: 'Boston Computers, Dhule',
    period: '2023 – 2024',
    type: 'Part-Time',
    color: '#00F5A0',
    points: [
      'Taught Canva, CCC, and AI basics to students',
      'Designed creative graphics and promotional videos',
      'Managed student interactions and course schedules',
      'Built engaging educational content for digital tools',
    ],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="section-pad relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-green text-sm tracking-widest uppercase">Work History</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start md:items-center`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-bg transform md:-translate-x-1.5 mt-2 md:mt-0 z-10"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-lg text-white">{exp.role}</h3>
                        <p className="font-body text-muted text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-full"
                          style={{ background: `${exp.color}22`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-muted font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-2 text-sm text-muted font-body">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: exp.color }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internship Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(0,245,160,0.3), rgba(108,99,255,0.3))',
              padding: '1px',
            }}>
              <div className="absolute inset-px rounded-2xl" style={{ background: '#0B0F19' }} />
            </div>

            <div className="relative glass rounded-2xl p-8 border border-green/30"
              style={{ boxShadow: '0 0 40px rgba(0,245,160,0.15)' }}>
              <div className="flex flex-wrap items-start gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green pulse-glow" />
                    <span className="text-xs font-mono text-green tracking-widest uppercase">Upcoming Opportunity</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-1">Full Stack Python Intern</h3>
                  <p className="text-muted font-body">Siddesh Technology, Pune</p>
                </div>

                <div className="ml-auto flex flex-col items-end gap-2">
                  <span className="glass px-4 py-2 rounded-full border border-green/30 text-green text-sm font-mono pulse-glow">
                    3 Months
                  </span>
                  <span className="text-xs text-muted font-mono">Duration</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Python', 'Full Stack', 'Web Development', 'Internship'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
