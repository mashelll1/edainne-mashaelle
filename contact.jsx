function Contact() {
  const contacts = [
    { icon: '✉', label: 'Email', value: 'edainne.minton@email.com', href: 'mailto:edainne.minton@email.com' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/edainne-minton', href: 'https://linkedin.com' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/edainne-minton', href: 'https://github.com' },
    { icon: '📸', label: 'Behance', value: 'behance.net/edainneminton', href: 'https://behance.net' },
    { icon: '📞', label: 'Phone', value: '+63 912 345 6789', href: 'tel:+639123456789' },
    { icon: '📍', label: 'Location', value: 'Quezon City, Philippines', href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'rgba(4,15,46,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 scroll-reveal">
          <p className="text-azure-400 font-body text-sm uppercase tracking-[0.3em] mb-3">Get In Touch</p>
          <h2 className="font-display text-frost-100 text-5xl font-light mb-4">Contact</h2>
          <div className="glow-line h-px w-32" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Tagline + form */}
          <div className="scroll-reveal">
            <p className="font-display italic text-frost-200/70 text-2xl leading-relaxed mb-8 max-w-sm">
              "Let's build something beautiful together."
            </p>
            <p className="font-body text-frost-200/50 text-base leading-relaxed mb-10 max-w-sm">
              Whether you have a project in mind, a collaboration idea, or just want to say hi —
              my inbox is always open. I'll get back to you within 24 hours.
            </p>

            {/* Message Form */}
            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="font-display text-frost-100 text-xl font-light mb-1">Send a Message</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border rounded-xl px-4 py-3 text-frost-200 font-body text-sm placeholder:text-frost-200/30 outline-none focus:border-azure-400 transition-colors"
                style={{ borderColor: 'rgba(56,189,248,0.2)' }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border rounded-xl px-4 py-3 text-frost-200 font-body text-sm placeholder:text-frost-200/30 outline-none focus:border-azure-400 transition-colors"
                style={{ borderColor: 'rgba(56,189,248,0.2)' }}
              />
              <textarea
                rows={4}
                placeholder="Your Message..."
                className="w-full bg-transparent border rounded-xl px-4 py-3 text-frost-200 font-body text-sm placeholder:text-frost-200/30 outline-none focus:border-azure-400 transition-colors resize-none"
                style={{ borderColor: 'rgba(56,189,248,0.2)' }}
              />
              <button
                className="glass-btn text-azure-400 font-body text-sm font-medium uppercase tracking-widest px-6 py-3 rounded-xl self-start"
                style={{ background: 'rgba(14,165,233,0.15)', borderColor: 'rgba(56,189,248,0.4)' }}
              >
                Send Message →
              </button>
            </div>
          </div>

          {/* Right — Contact cards */}
          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: '0.2s' }}>
            {contacts.map((c) => (
              <div key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="glass rounded-2xl p-5 flex items-start gap-4 group block transition-all duration-300 hover:border-azure-400/50"
                    style={{ border: '1px solid rgba(56,189,248,0.15)', textDecoration: 'none' }}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-azure-400 text-xs font-body uppercase tracking-wider mb-1">{c.label}</p>
                      <p className="text-frost-200/70 text-sm font-body group-hover:text-frost-100 transition-colors">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="glass rounded-2xl p-5 flex items-start gap-4"
                    style={{ border: '1px solid rgba(56,189,248,0.15)' }}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-azure-400 text-xs font-body uppercase tracking-wider mb-1">{c.label}</p>
                      <p className="text-frost-200/70 text-sm font-body">{c.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;