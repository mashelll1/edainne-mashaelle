function About() {
  return (
    <section
      id="about"
      className="min-h-screen mesh-bg flex items-center pt-24 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Decorative top line */}
        <div className="glow-line h-px w-40 mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="scroll-reveal">
            <p className="text-azure-400 font-body text-sm uppercase tracking-[0.3em] mb-4">
              Hello, I'm
            </p>
            <h1 className="font-display text-frost-100 leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Edainne
            </h1>
            <h1 className="font-display italic text-azure-400 leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Mashaelle
            </h1>
            <h1 className="font-display text-frost-200 leading-none mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Minton
            </h1>

            <div className="glow-line h-px w-24 mb-8" />

            <p className="font-body text-frost-200/70 text-lg leading-relaxed mb-4 max-w-md">
              A passionate creative professional with a flair for design and technology.
              I craft digital experiences that are both beautiful and functional — turning
              ideas into elegant realities.
            </p>
            <p className="font-body text-frost-200/50 text-base leading-relaxed max-w-md">
              Currently based in the Philippines, I specialize in UI/UX design and
              frontend development. I believe great work happens at the intersection of
              art, code, and human connection.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {['UI/UX Design', 'Frontend Dev', 'Branding', 'Photography'].map(tag => (
                <span
                  key={tag}
                  className="glass text-azure-400 text-xs font-body font-medium uppercase tracking-widest px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Avatar placeholder + decorative */}
          <div className="scroll-reveal flex justify-center items-center relative" style={{ transitionDelay: '0.2s' }}>
            {/* Outer ring glow */}
            <div className="absolute w-80 h-80 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)' }}
            />
            {/* Avatar frame */}
            <div
              className="relative w-72 h-72 rounded-full glass flex items-center justify-center overflow-hidden"
              style={{ border: '2px solid rgba(56,189,248,0.3)' }}
            >
              {/* Placeholder avatar */}
              <div className="flex flex-col items-center justify-center gap-3 opacity-40">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="30" r="16" fill="rgba(56,189,248,0.6)" />
                  <ellipse cx="40" cy="68" rx="26" ry="16" fill="rgba(56,189,248,0.4)" />
                </svg>
                <span className="text-frost-200 text-xs font-body tracking-wider">Upload Photo</span>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 text-center">
              <p className="font-display text-azure-400 text-3xl font-light">3+</p>
              <p className="font-body text-frost-200/60 text-xs uppercase tracking-wider mt-0.5">Years Exp.</p>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3 text-center">
              <p className="font-display text-azure-400 text-3xl font-light">20+</p>
              <p className="font-body text-frost-200/60 text-xs uppercase tracking-wider mt-0.5">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;