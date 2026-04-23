import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 6 + delay, ease: 'easeInOut', repeat: Infinity, delay }}
  />
);

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Orbs */}
      <FloatingOrb className="w-96 h-96 bg-purple/20 top-1/4 -left-32" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-green/10 bottom-1/4 -right-20" delay={2} />
      <FloatingOrb className="w-64 h-64 bg-purple/10 bottom-10 left-1/3" delay={4} />

      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 text-sm font-mono text-green mb-6 glass px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-green pulse-glow" />
            Available for Internships & Freelance
          </motion.span>

          <h1 className="font-display font-bold leading-tight mb-4">
            <span className="block text-5xl lg:text-7xl text-white">Lazymoon</span>
            <span className="block text-5xl lg:text-7xl gradient-text">Suher Shaikh</span>
          </h1>

          <div className="text-lg lg:text-xl text-muted font-body mb-6 h-8">
            <TypeAnimation
              sequence={[
                'Aspiring UI/UX Designer',
                2000,
                'Creative Strategist',
                2000,
                'Founder @ Lazymoon',
                2000,
                'Full Stack Learner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple font-semibold"
            />
          </div>

          <p className="text-muted font-body leading-relaxed mb-10 max-w-lg text-base">
            "I build modern digital experiences that combine{' '}
            <span className="text-white font-medium">creativity</span> &{' '}
            <span className="text-white font-medium">technology</span>."
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-3.5 rounded-full bg-purple text-white font-body font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.5)]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple to-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-body font-medium hover:border-green hover:text-green transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[
              { value: '30+', label: 'Projects Delivered' },
              { value: '2+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-2xl gradient-text">{s.value}</div>
                <div className="text-xs text-muted font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-purple/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border border-dashed border-green/20"
            />

            {/* Image container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glow-purple">
              <div
                className="w-full h-full rounded-full glass flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(0,245,160,0.1) 100%)',
                }}
              >
                {/* Profile placeholder */}
                <img
                  src="/assets/profile.jpg"
                  alt="Shaikh Suher"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-8 glass px-4 py-2 rounded-xl border border-white/10"
            >
              <div className="text-xs text-muted font-mono">Founder</div>
              <div className="text-sm font-display font-semibold gradient-text">@Lazymoon</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-6 glass px-4 py-2 rounded-xl border border-white/10"
            >
              <div className="text-xs text-muted font-mono">Based in</div>
              <div className="text-sm font-display font-semibold text-white">Dhule, MH 📍</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple to-transparent" />
      </motion.div>
    </section>
  );
}
