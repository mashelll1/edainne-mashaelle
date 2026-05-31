function Footer() {
  return (
    <footer className="py-10 px-6 mesh-bg" style={{ borderTop: '1px solid rgba(56,189,248,0.08)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-frost-200/60 text-sm">
            Edainne Mashaelle Minton
          </span>
          <span className="text-frost-200/30 text-xs font-body mt-0.5">
            © {new Date().getFullYear()} — All rights reserved
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('CV download would trigger here.')}
            className="glass-btn text-azure-400 font-body text-xs font-medium uppercase tracking-widest px-5 py-2 rounded-full"
            style={{ background: 'rgba(14,165,233,0.12)', borderColor: 'rgba(56,189,248,0.3)' }}
          >
            ↓ Download CV
          </button>
          <span className="text-frost-200/20 font-body text-xs ml-4">
            Let's go!
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;