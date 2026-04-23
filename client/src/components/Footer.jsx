import { motion } from 'framer-motion';

const socials = [
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'GitHub', href: '#', icon: '💻' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(108,99,255,0.03), transparent)',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="font-display font-bold text-xl gradient-text">SS</span>
            <span className="text-muted font-mono text-sm ml-2">/ Shaikh Suher</span>
          </div>

          {/* Center */}
          <p className="text-muted font-body text-sm text-center">
            © 2026 Shaikh Suher |{' '}
            <span className="text-white">Built with React & Creativity</span>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 hover:border-purple/40 transition-all duration-300"
                title={s.label}
              >
                <span className="text-base">{s.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent mb-6" />
          <p className="text-muted/40 text-xs font-mono">
            Designed & Developed by Shaikh Suher • Lazymoon Digitech
          </p>
        </div>
      </div>
    </footer>
  );
}
