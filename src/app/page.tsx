'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Send, Code, Palette, Server, ExternalLink, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Travel Bug',
      description: 'Independent Travel Advisor',
      url: 'https://travelbug-v1.vercel.app',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Rei Bridal',
      description: 'Luxury Bridal Boutique',
      url: 'https://reibridal-v1.vercel.app',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Sensory Play Zone',
      description: 'Kids Sensory & Messy Play Zone',
      url: 'https://sensory-play-zone.vercel.app',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description: 'Bespoke web applications built with cutting-edge technologies, optimized for performance and scalability.',
    },
    {
      icon: Palette,
      title: 'Brand Identity & UI Design',
      description: 'Strategic design systems that capture your essence and create memorable digital experiences.',
    },
    {
      icon: Server,
      title: 'Deployment & Infrastructure',
      description: 'Robust cloud infrastructure with automated CI/CD pipelines for seamless deployments.',
    },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Evolution Media Group</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-[#00bcd4] transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Projects</a>
              <a href="#services" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-[#00bcd4] transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#00bcd4]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0a0a0a] border-t border-[#222]"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-[#00bcd4] transition-colors py-2">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-[#00bcd4] transition-colors py-2">Projects</a>
              <a href="#services" className="block text-gray-300 hover:text-[#00bcd4] transition-colors py-2">Services</a>
              <a href="#contact" className="block text-gray-300 hover:text-[#00bcd4] transition-colors py-2">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00bcd4] rounded-full filter blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#26c6da] rounded-full filter blur-[128px]" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            >
              Evolution Media Group
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 mb-12 font-light"
            >
              Autonomous design, human craft.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#projects"
                className="magnetic-button px-8 py-4 bg-[#00bcd4] text-white rounded-lg font-semibold hover:bg-[#26c6da] transition-all glow-effect flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="magnetic-button px-8 py-4 border-2 border-[#00bcd4] text-[#00bcd4] rounded-lg font-semibold hover:bg-[#00bcd4] hover:text-white transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#00bcd4] rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-[#00bcd4] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">The Future of Design</h2>
              <div className="w-24 h-1 bg-[#00bcd4] mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                We stand at the precipice of a new era in digital creation. Where autonomous systems meet human intuition, where algorithms amplify creativity, where the impossible becomes inevitable.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                At Evolution Media Group, we don't just build websites—we architect digital experiences that evolve, adapt, and resonate. Our approach harnesses the precision of autonomous design systems while preserving the soul of human craftsmanship. Every pixel, every interaction, every moment is meticulously crafted to transcend the ordinary.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe the future isn't about replacing human creativity—it's about elevating it. By combining cutting-edge technology with visionary design thinking, we create digital products that don't just exist—they inspire, engage, and transform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Work</h2>
              <div className="w-24 h-1 bg-[#00bcd4] mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card-hover block bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden group"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink className="text-white/80 group-hover:text-white transition-all" size={48} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#00bcd4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h2>
              <div className="w-24 h-1 bg-[#00bcd4] mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card-hover bg-[#1a1a1a] border border-[#222] rounded-xl p-8"
                >
                  <div className="w-16 h-16 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-[#00bcd4]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Create Together</h2>
              <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6" />
              <p className="text-xl text-gray-300">Ready to evolve your digital presence? Let's talk.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00bcd4] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00bcd4] transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00bcd4] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="magnetic-button w-full px-8 py-4 bg-[#00bcd4] text-white rounded-lg font-semibold hover:bg-[#26c6da] transition-all glow-effect flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-[#222]">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p className="mb-2">
              <span className="gradient-text font-semibold">Evolution Media Group</span>
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Evolution Media Group. All rights reserved.
            </p>
            <div className="mt-4 space-x-4">
              <a href="/privacy" className="text-sm hover:text-[#00bcd4] transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-sm hover:text-[#00bcd4] transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}