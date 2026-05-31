const { useState } = React;

const CREDENTIALS = [
  {
    id: 1,
    title: 'Google UX Design Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    type: 'Certification',
    // placeholder image — user should replace src with their actual certificate image
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
  },
  {
    id: 2,
    title: 'Meta Frontend Developer',
    issuer: 'Meta / Coursera',
    year: '2024',
    type: 'Certification',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    id: 3,
    title: 'Bachelor of Fine Arts',
    issuer: 'University of the Philippines',
    year: '2022',
    type: 'Degree',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
  {
    id: 4,
    title: 'Adobe Certified Professional',
    issuer: 'Adobe',
    year: '2023',
    type: 'Certification',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  },
  {
    id: 5,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    type: 'Certification',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    id: 6,
    title: 'Excellence in Design Award',
    issuer: 'Philippine Design Week',
    year: '2023',
    type: 'Award',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
  },
];

function CredentialCard({ cred, onClick }) {
  return (
    <div
      className="credential-card glass rounded-2xl overflow-hidden cursor-pointer group transition-all duration-400 hover:shadow-lg"
      style={{ boxShadow: 'none', transition: 'all 0.4s ease' }}
      onClick={() => onClick(cred)}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 50px rgba(14,165,233,0.15)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={cred.image}
          alt={cred.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div
          className="credential-overlay absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300"
          style={{ background: 'rgba(2,8,24,0.75)', backdropFilter: 'blur(4px)' }}
        >
          <div className="glass rounded-xl px-5 py-2.5 text-frost-100 text-sm font-body font-medium mb-1">
            🔍 View Certificate
          </div>
          <p className="text-frost-200/60 text-xs font-body mt-2">Click to expand</p>
        </div>
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span
            className="glass text-azure-400 text-xs font-body uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              background: cred.type === 'Award'
                ? 'rgba(245,158,11,0.15)'
                : 'rgba(14,165,233,0.12)',
              borderColor: cred.type === 'Award'
                ? 'rgba(245,158,11,0.3)'
                : 'rgba(56,189,248,0.25)',
              color: cred.type === 'Award' ? '#fbbf24' : undefined,
            }}
          >
            {cred.type}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-5">
        <p className="text-azure-400 text-xs font-body uppercase tracking-wider mb-1">{cred.issuer}</p>
        <h3 className="font-display text-frost-100 text-xl font-light leading-tight">{cred.title}</h3>
        <p className="text-frost-200/40 text-xs font-body mt-2">{cred.year}</p>
      </div>
    </div>
  );
}

function CredentialLightbox({ cred, onClose }) {
  if (!cred) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(2,8,24,0.9)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <div
        className="glass rounded-3xl max-w-2xl w-full overflow-hidden"
        style={{ border: '1px solid rgba(56,189,248,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Full image */}
        <div className="relative">
          <img
            src={cred.image}
            alt={cred.title}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 glass-btn w-9 h-9 rounded-full flex items-center justify-center text-frost-200 font-body text-sm"
          >
            ✕
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: 'linear-gradient(to top, rgba(2,8,24,1), transparent)' }}
          />
        </div>
        {/* Details */}
        <div className="px-8 pb-8 -mt-4 relative z-10">
          <span
            className="inline-block glass text-xs font-body uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ color: cred.type === 'Award' ? '#fbbf24' : '#38bdf8' }}
          >
            {cred.type}
          </span>
          <h2 className="font-display text-frost-100 text-3xl font-light mb-1">{cred.title}</h2>
          <p className="text-azure-400 font-body text-sm mb-1">{cred.issuer}</p>
          <p className="text-frost-200/40 text-sm font-body">{cred.year}</p>
          <div className="glow-line h-px w-24 my-5" />
          <p className="text-frost-200/60 text-sm font-body leading-relaxed mb-6">
            This credential validates expertise and dedication to professional excellence. Click "Close" or press outside to dismiss.
          </p>
          <div className="flex gap-3">
            <button className="glass-btn text-frost-200 text-sm font-body px-5 py-2.5 rounded-xl">
              ↓ Download Copy
            </button>
            <button onClick={onClose} className="glass-btn text-frost-200/60 text-sm font-body px-5 py-2.5 rounded-xl">
              Close ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Credentials() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="credentials" className="py-24 px-6 mesh-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 scroll-reveal">
          <p className="text-azure-400 font-body text-sm uppercase tracking-[0.3em] mb-3">Qualifications</p>
          <h2 className="font-display text-frost-100 text-5xl font-light mb-4">Credentials</h2>
          <div className="glow-line h-px w-32 mb-4" />
          <p className="text-frost-200/50 font-body text-base max-w-md">
            Click any card to view the full certificate or credential document.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CREDENTIALS.map((c, i) => (
            <div key={c.id} className="scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <CredentialCard cred={c} onClick={setSelected} />
            </div>
          ))}
        </div>
      </div>

      <CredentialLightbox cred={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

window.Credentials = Credentials;