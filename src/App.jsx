import './App.css'

const principles = [
  {
    id: 'confidencialidad',
    number: '1',
    name: 'Confidencialidad',
    question: '¿Quién puede verlo?',
    description:
      'La información solo está al alcance de las personas autorizadas. Es como guardar tus documentos personales en un lugar seguro.',
    examples: ['Contraseñas seguras', 'Acceso solo para quien lo necesita'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="9" y="21" width="30" height="22" rx="6" />
        <path d="M16 21v-7a8 8 0 0 1 16 0v7M24 30v5" />
        <circle cx="24" cy="29" r="1.5" />
      </svg>
    ),
  },
  {
    id: 'integridad',
    number: '2',
    name: 'Integridad',
    question: '¿Sigue siendo correcto?',
    description:
      'La información se mantiene completa y sin cambios no autorizados. Así puedes confiar en que un dato sigue siendo el verdadero.',
    examples: ['Historial de cambios', 'Revisar antes de compartir'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 5 39 11v11c0 10-6.5 16.5-15 21-8.5-4.5-15-11-15-21V11l15-6Z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    ),
  },
  {
    id: 'disponibilidad',
    number: '3',
    name: 'Disponibilidad',
    question: '¿Puedo acceder cuando lo necesito?',
    description:
      'La información y los sistemas están listos cuando hacen falta. Como tener una copia de la llave por si pierdes la original.',
    examples: ['Copias de seguridad', 'Equipos y sistemas al día'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="25" r="17" />
        <path d="M24 15v11l7 4M17 5h14" />
      </svg>
    ),
  },
]

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Tríada, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>en claro</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#principios">Los 3 principios</a>
          <a href="#ejemplo">Un ejemplo</a>
          <a className="nav-cta" href="#habitos">
            ¿Cómo aplicarlos? <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              SEGURIDAD DE LA INFORMACIÓN · GUÍA RÁPIDA
            </p>
            <h1 id="page-title">
              Tus datos,
              <br />
              <span>bien cuidados.</span>
            </h1>
            <p className="hero-description">
              La seguridad de la información no es solo cosa de expertos. Se
              entiende con tres ideas sencillas que protegen tus datos todos los
              días.
            </p>
            <a className="primary-link" href="#principios">
              Conoce la tríada <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✳</span>
              <span>
                Piensa en tu información como algo valioso: quieres que esté
                <strong> protegida, correcta y a mano.</strong>
              </span>
            </div>
          </div>

          <div className="diagram" aria-label="Diagrama triangular de los tres pilares de la seguridad de la información">
            <svg className="triangle-lines" viewBox="0 0 400 340" aria-hidden="true">
              <defs>
                <linearGradient id="triangle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="52%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
              <path d="M200 28 25 314h350L200 28Z" />
            </svg>
            <div className="diagram-center" aria-label="Información protegida">
              <svg className="center-shield" viewBox="0 0 48 48" fill="none" role="img" aria-label="Escudo">
                <path d="M24 4 40 10v12c0 10-6.5 17-16 22C14.5 39 8 32 8 22V10l16-6Z" />
                <path d="m17 24 5 5 10-11" />
              </svg>
            </div>
            <div className="diagram-label label-confidentiality">
              <span className="mini-icon lock-mini" aria-hidden="true">⌑</span>
              <span>Confidencialidad</span>
            </div>
            <div className="diagram-label label-integrity">
              <span className="mini-icon check-mini" aria-hidden="true">✓</span>
              <span>Integridad</span>
            </div>
            <div className="diagram-label label-availability">
              <span className="mini-icon clock-mini" aria-hidden="true">↻</span>
              <span>Disponibilidad</span>
            </div>
            <span className="diagram-caption">LA TRÍADA DE SEGURIDAD</span>
          </div>
        </section>

        <section className="principles-section section-wrap" id="principios" aria-labelledby="principles-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">TRES IDEAS, UN OBJETIVO</p>
              <h2 id="principles-title">La tríada, sin tecnicismos.</h2>
            </div>
            <p className="section-intro">
              Cada principio responde a una pregunta muy simple sobre tus
              datos.
            </p>
          </div>

          <div className="principle-grid">
            {principles.map((principle) => (
              <article
                className={`principle-card card-${principle.id}`}
                key={principle.id}
              >
                <div className="card-topline">
                  <span className="card-number">{principle.number}</span>
                  <span className="card-icon">{principle.icon}</span>
                </div>
                <p className="card-question">{principle.question}</p>
                <h3>{principle.name}</h3>
                <p className="card-description">{principle.description}</p>
                <div className="example-list">
                  {principle.examples.map((example) => (
                    <span className="example-chip" key={example}>
                      <span aria-hidden="true">✓</span> {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="scenario-section section-wrap" id="ejemplo" aria-labelledby="scenario-title">
          <div className="scenario-copy">
            <p className="eyebrow section-eyebrow">EN LA VIDA REAL</p>
            <h2 id="scenario-title">
              Imagina tu
              <br />
              <span>informe médico.</span>
            </h2>
            <p>
              Es información personal y necesita las tres protecciones a la
              vez. Mira cómo funciona:
            </p>
          </div>
          <div className="scenario-list">
            <div className="scenario-item">
              <span className="scenario-icon scenario-lock" aria-hidden="true">1</span>
              <div>
                <h3>Confidencialidad</h3>
                <p>Solo tú y tu equipo médico pueden consultarlo.</p>
              </div>
              <span className="scenario-check" aria-label="Protegido">✓</span>
            </div>
            <div className="scenario-item">
              <span className="scenario-icon scenario-integrity" aria-hidden="true">2</span>
              <div>
                <h3>Integridad</h3>
                <p>Nadie cambia los resultados sin permiso.</p>
              </div>
              <span className="scenario-check" aria-label="Protegido">✓</span>
            </div>
            <div className="scenario-item">
              <span className="scenario-icon scenario-availability" aria-hidden="true">3</span>
              <div>
                <h3>Disponibilidad</h3>
                <p>Tu médico puede verlo durante la consulta.</p>
              </div>
              <span className="scenario-check" aria-label="Protegido">✓</span>
            </div>
            <div className="scenario-takeaway">
              <span aria-hidden="true">✳</span>
              Si falla uno, la información no está completamente protegida.
            </div>
          </div>
        </section>

        <section className="habits-section" id="habitos" aria-labelledby="habits-title">
          <div className="habits-inner">
            <div className="habits-heading">
              <p className="eyebrow">PEQUEÑAS ACCIONES, GRAN DIFERENCIA</p>
              <h2 id="habits-title">Tres hábitos para empezar hoy.</h2>
            </div>
            <div className="habit-grid">
              <div className="habit">
                <span className="habit-number">1</span>
                <p>Usa contraseñas distintas y no las compartas.</p>
              </div>
              <div className="habit">
                <span className="habit-number">2</span>
                <p>Revisa los datos antes de enviarlos o modificarlos.</p>
              </div>
              <div className="habit">
                <span className="habit-number">3</span>
                <p>Guarda una copia de tus archivos importantes.</p>
              </div>
            </div>
            <div className="memory-line">
              <span>EN RESUMEN</span>
              <p>
                <strong>Confidencialidad</strong> protege el acceso
                <i> · </i>
                <strong>Integridad</strong> cuida que esté correcto
                <i> · </i>
                <strong>Disponibilidad</strong> lo mantiene a mano
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>en claro</span>
        </a>
        <p>Entender la seguridad también es parte de protegerte.</p>
        <a className="back-top" href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  )
}

export default App
