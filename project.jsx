const { useState } = React;

const PROJECTS = [
  {
    id: 1,
    title: 'Azure — Brand Identity',
    category: 'Branding / Visual Design',
    year: '2024',
    description:
      'A full brand identity system for a tech startup, spanning logo design, color systems, typography, motion guidelines, and a comprehensive brand book. The visual language evokes clarity, precision, and forward momentum.',
    tech: ['Figma', 'Illustrator', 'After Effects'],
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
  },
  {
    id: 2,
    title: 'Luminary — Web App',
    category: 'UI/UX / Frontend Development',
    year: '2024',
    description:
      'Designed and developed an end-to-end project management web application. Key focus areas were intuitive navigation, real-time collaboration, and accessibility. Delivered a design system with 80+ reusable components.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'Framer'],
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&q=80',
    ],
  },
  {
    id: 3,
    title: 'Serene — Mobile App',
    category: 'Mobile UI / Interaction Design',
    year: '2023',
    description:
      'A wellness app designed for mindfulness and daily habit tracking. Emphasised calm visual rhythm, micro-interactions that delight, and personalization flows. The result is an experience that feels both gentle and motivating.',
    tech: ['Figma', 'Protopie', 'Swift (handoff)'],
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    ],
  },
  {
    id: 4,
    title: 'Prism — Photography Portfolio',
    category: 'Web Design / Photography',
    year: '2023',
    description:
      'A portfolio site for a conceptual photographer featuring full-bleed imagery, cinematic transitions, and a custom light-table gallery mode. Built with performance in mind — sub-2s load times on all major connections.',
    tech: ['HTML/CSS', 'GSAP', 'Cloudinary'],
    images: [
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
      'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?w=600&q=80',
    ],
  },
];

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="project-card glass rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
    >
      {/* Image preview */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(2,8,24,0.85) 0%, transparent 60%)' }}
        />
        <div className="absolute top-3 right-3">
          <span className="glass text-azure-400 text-xs font-body uppercase tracking-widest px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="glass rounded-full px-5 py-2 text-frost-100 text-sm font-body font-medium">
            View Project →
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="p-6">
        <p className="text-azure-400 text-xs font-body uppercase tracking-widest mb-1">
          {project.category}
        </p>
        <h3 className="font-display text-frost-100 text-2xl font-light mb-3">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-frost-200/50 text-xs font-body">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(2,8,24,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="glass rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-auto"
        style={{ border: '1px solid rgba(56,189,248,0.2)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left — Description */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <p className="text-azure-400 text-xs font-body uppercase tracking-[0.25em] mb-2">
                {project.category}
              </p>
              <h2 className="font-display text-frost-100 text-4xl font-light mb-1">
                {project.title}
              </h2>
              <p className="text-frost-200/40 text-sm font-body mb-6">{project.year}</p>
              <div className="glow-line h-px w-20 mb-6" />
              <p className="text-frost-200/70 font-body text-base leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="glass text-azure-400 text-xs font-body uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button className="glass-btn text-frost-200 text-sm font-body px-5 py-2.5 rounded-xl">
                Live Preview →
              </button>
              <button
                onClick={onClose}
                className="glass-btn text-frost-200/60 text-sm font-body px-5 py-2.5 rounded-xl"
              >
                Close ✕
              </button>
            </div>
          </div>

          {/* Right — Image Carousel */}
          <div className="md:w-1/2 p-4 flex flex-col gap-3">
            {/* Main image */}
            <div
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: '280px' }}
              onClick={() => setImgIndex((imgIndex + 1) % project.images.length)}
            >
              <img
                key={imgIndex}
                src={project.images[imgIndex]}
                alt=""
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-end pr-5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(to right, transparent, rgba(2,8,24,0.5))' }}>
                <div className="glass rounded-full w-10 h-10 flex items-center justify-center text-frost-100 text-lg">
                  ›
                </div>
              </div>
              {/* Page indicator */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    onClick={e => { e.stopPropagation(); setImgIndex(i); }}
                    className="rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: i === imgIndex ? '20px' : '6px',
                      height: '6px',
                      background: i === imgIndex ? 'rgba(56,189,248,0.9)' : 'rgba(56,189,248,0.3)',
                    }}
                  />
                ))}
              </div>
              <div className="absolute top-3 right-3 glass rounded-lg px-2 py-1 text-frost-200/60 text-xs font-body">
                {imgIndex + 1} / {project.images.length} — hover to flip →
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    height: '80px',
                    border: i === imgIndex ? '2px solid rgba(56,189,248,0.7)' : '2px solid transparent',
                    opacity: i === imgIndex ? 1 : 0.5,
                  }}
                  onClick={() => setImgIndex(i)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'rgba(4,15,46,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 scroll-reveal">
          <p className="text-azure-400 font-body text-sm uppercase tracking-[0.3em] mb-3">Selected Work</p>
          <h2 className="font-display text-frost-100 text-5xl font-light mb-4">Projects</h2>
          <div className="glow-line h-px w-32" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <ProjectCard project={p} onClick={setActiveProject} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

window.Projects = Projects;