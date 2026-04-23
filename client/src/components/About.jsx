import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: '🎨', label: 'Creative Director' },
  { icon: '💻', label: 'Web Developer' },
  { icon: '🎬', label: 'Video Editor' },
  { icon: '📱', label: 'Social Media' },
  { icon: '🚀', label: 'Startup Founder' },
  { icon: '🎓', label: 'CS Student' },
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative border box */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-purple/30 rounded-2xl" />
              <div className="glass rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,245,160,0.08) 100%)',
                  }}
                />
                <img
                  src="/assets/profile.jpg"
                  alt="Shaikh Suher"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl">🧑‍💻</span>
                  </div>
                  <p className="font-mono text-muted text-sm">Add profile.jpg</p>
                </div>
              </div>

              {/* Highlight chips */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass rounded-xl p-3 text-center hover:border-purple/40 transition-all duration-300 group cursor-default border border-white/5"
                  >
                    <div className="text-xl mb-1">{h.icon}</div>
                    <div className="text-xs text-muted group-hover:text-white transition-colors font-body">{h.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="font-mono text-green text-sm tracking-widest uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-6"
            >
              Who I <span className="gradient-text">Am</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted font-body leading-relaxed text-lg mb-6"
            >
              Creative and motivated Computer Engineering student with hands-on experience in{' '}
              <span className="text-white">graphic design</span>,{' '}
              <span className="text-white">video editing</span>, and{' '}
              <span className="text-white">digital marketing</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted font-body leading-relaxed text-lg mb-8"
            >
              Founder of{' '}
              <span className="text-purple font-semibold">LAZYMOON</span>, delivering impactful designs
              for startups and businesses. Passionate about combining creativity and technology to build
              meaningful digital experiences.
            </motion.p>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              {[
                { label: '📍 Location', value: 'Dhule, Maharashtra' },
                { label: '🎓 Education', value: 'Diploma in Computer Engineering' },
                { label: '💼 Role', value: 'Founder @ Lazymoon Digitech' },
                { label: '📧 Email', value: 'shaikhsuher@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 glass px-4 py-3 rounded-xl border border-white/5">
                  <span className="text-muted text-sm font-mono w-32 shrink-0">{item.label}</span>
                  <span className="text-white font-body text-sm">{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-2 text-green font-body font-medium hover:gap-4 transition-all duration-300"
            >
              Let's work together <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
