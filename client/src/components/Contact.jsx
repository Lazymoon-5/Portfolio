import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+91 9168533107', href: 'tel:+919168533107' },
  { icon: '✉️', label: 'Email', value: 'shaikhsuher@gmail.com', href: 'mailto:shaikhsuher@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Dhule, Maharashtra', href: null },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-green text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted font-body mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple/20 flex items-center justify-center text-xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted font-mono uppercase tracking-wide">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-white font-body text-sm hover:text-purple transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white font-body text-sm">{info.value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <div className="text-xs text-muted font-mono uppercase tracking-wide mb-4">Find me on</div>
              <div className="flex gap-3">
                {[
                  { label: 'IN', href: '#', color: '#0A66C2' },
                  { label: 'IG', href: '#', color: '#E1306C' },
                  { label: 'GH', href: '#', color: '#6e40c9' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-xs font-mono text-muted hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-purple/60 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-purple/60 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-purple/60 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple to-green text-white font-display font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green text-sm font-body py-2"
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm font-body py-2"
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
