// App.jsx — Main entry point
// Loads all section components and wires together the single-page portfolio

const { useEffect } = React;

// ── Inline all component scripts so Babel processes them ──────────────────────
// (In a real Vite/CRA project these would be proper ES imports)

function App() {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);