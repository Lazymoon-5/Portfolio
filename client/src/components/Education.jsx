import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const education = [
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'S.S.V.P.S Polytechnic, Dhule',
    score: '90.71%',
    year: '1st Year',
    icon: '🏛️',
    color: '#6C63FF',
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'Canossa Convent High School',
    score: '91.20%',
    year: '2022',
    icon: '🎓',
    color: '#00F5A0',
  },
];

export default function Education() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="section-pad relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-green text-sm tracking-widest uppercase">Academic Background</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${edu.color}22` }}
                >
                  {edu.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl text-white">{edu.degree}</h3>
                  <p className="text-muted font-body text-sm mt-1">{edu.institution}</p>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-display font-bold text-2xl" style={{ color: edu.color }}>
                    {edu.score}
                  </div>
                  <div className="text-xs text-muted font-mono mt-1">{edu.year}</div>
                </div>
              </div>

              {/* Progress-style score bar */}
              <div className="mt-5 h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: edu.score } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${edu.color}66, ${edu.color})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 glass rounded-2xl p-6 border border-white/5 text-center"
        >
          <div className="text-3xl mb-3">🏆</div>
          <p className="font-display font-semibold text-lg text-white">Consistent Academic Excellence</p>
          <p className="text-muted font-body text-sm mt-2">
            Maintained above <span className="text-green font-semibold">90%</span> across all academic milestones
          </p>
        </motion.div>
      </div>
    </section>
  );
}
