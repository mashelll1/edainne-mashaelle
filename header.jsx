const { useState, useEffect } = React;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['About', 'Projects', 'Credentials', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Name / Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-display text-frost-100 text-xl font-light tracking-wide">
            Edainne Mashaelle
          </span>
          <span className="font-display text-azure-400 text-lg italic tracking-widest">
            Minton
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="glass-btn text-frost-200 font-body text-sm font-medium tracking-wider uppercase px-5 py-2 rounded-full"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => alert('CV download would trigger here.')}
            className="glass-btn ml-3 text-azure-400 font-body text-sm font-medium tracking-wider uppercase px-6 py-2 rounded-full"
            style={{
              background: 'rgba(14,165,233,0.18)',
              borderColor: 'rgba(56,189,248,0.5)',
            }}
          >
            ↓ Download CV
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden glass-btn p-2 rounded-lg text-frost-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="glass-btn text-frost-200 text-sm font-medium uppercase tracking-wider px-4 py-3 rounded-xl text-left"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => alert('CV download would trigger here.')}
            className="glass-btn text-azure-400 text-sm font-medium uppercase tracking-wider px-4 py-3 rounded-xl text-left"
          >
            ↓ Download CV
          </button>
        </div>
      )}
    </header>
  );
}

window.Header = Header;