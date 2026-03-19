import { useNavigate } from 'react-router-dom'
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision'
import '../styles/landing.css'
import logo from '../assets/logo.png'

// SVG Filter Component for Liquid Glass
const GlassFilter = () => (
    <svg style={{ display: "none" }}>
        <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
        >
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.001 0.005"
                numOctaves="1"
                seed="17"
                result="turbulence"
            />
            <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
            <feSpecularLighting
                in="softMap"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="100"
                lightingColor="white"
                result="specLight"
            >
                <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite
                in="specLight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litImage"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale="200"
                xChannelSelector="R"
                yChannelSelector="G"
            />
        </filter>
    </svg>
)

const companyLogos = [
    { name: 'Slack', symbol: '#' },
    { name: 'GitLab', symbol: '⋄' },
    { name: 'Clockify', symbol: '◷' },
    { name: 'Loom', symbol: '✻' },
    { name: 'Zoom', symbol: 'Z' },
    { name: 'Bitbucket', symbol: '⬡' },
]

function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="landing">
            <GlassFilter />

            {/* Background decorations */}
            <div className="landing-bg">
                <div className="bg-blob bg-blob-1" />
                <div className="bg-blob bg-blob-2" />
                <div className="bg-blob bg-blob-3" />
            </div>

            {/* Navbar (Liquid Glass) */}
            <nav className="landing-nav liquid-glass">
                {/* Glass Layers */}
                <div className="glass-layer-base" />
                <div className="glass-layer-tint" />
                <div className="glass-layer-highlight" />

                {/* Content */}
                <div className="nav-content relative z-30">
                    <div className="nav-logo">
                        <img src={logo} alt="TaskPilot Logo" className="nav-logo-img" />
                    </div>
                    <div className="nav-links">
                        <div className="nav-item-dropdown">
                            <a href="#" className="nav-link">Product <span className="nav-arrow">▾</span></a>
                            <div className="dropdown-menu">
                                <div className="dropdown-grid">
                                    <div className="dropdown-column">
                                        <h4 className="dropdown-title">Features</h4>
                                        <a href="#" className="dropdown-link">
                                            <div className="dropdown-icon">📋</div>
                                            <div className="dropdown-text">
                                                <strong>Board View</strong>
                                                <span>Visualize workflow with Kanban</span>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-link">
                                            <div className="dropdown-icon">⏱️</div>
                                            <div className="dropdown-text">
                                                <strong>Timeline</strong>
                                                <span>Plan and track project schedules</span>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-link">
                                            <div className="dropdown-icon">📝</div>
                                            <div className="dropdown-text">
                                                <strong>List View</strong>
                                                <span>Organize tasks in detail</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-column">
                                        <h4 className="dropdown-title">Capabilities</h4>
                                        <a href="#" className="dropdown-link">
                                            <div className="dropdown-icon">🤖</div>
                                            <div className="dropdown-text">
                                                <strong>AI Assistant</strong>
                                                <span>Work smarter with TaskPilot AI</span>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-link">
                                            <div className="dropdown-icon">⚡</div>
                                            <div className="dropdown-text">
                                                <strong>Integrations</strong>
                                                <span>Connect with your favorite tools</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="nav-link">Solutions <span className="nav-arrow">▾</span></a>
                        <a href="#" className="nav-link">Learn <span className="nav-arrow">▾</span></a>
                        <a href="#" className="nav-link">Pricing</a>
                        <a href="#" className="nav-link">Enterprise</a>
                    </div>
                    <div className="nav-actions">
                        <button className="btn-outline nav-signin" onClick={() => navigate('/app')}>Sign In</button>
                        <button className="btn-primary" onClick={() => navigate('/app')}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero wrapped in animated beams */}
            <BackgroundBeamsWithCollision
                style={{
                    minHeight: '70vh',
                    flexDirection: 'column',
                    background: 'transparent',
                    paddingTop: '20px',
                }}
            >
                <section className="hero" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="hero-badge glass">
                        <span className="hero-badge-dot" />
                        Introducing TaskPilot 2.0
                    </div>
                    <h1 className="hero-headline">
                        Effortless Task Management<br />
                        <span className="hero-headline-accent">for Teams and Individuals</span>
                    </h1>
                    <p className="hero-subtext">
                        Effortless task management for teams and individuals, streamline<br />
                        workflows, meet deadlines, and achieve more with ease
                    </p>
                    <div className="hero-ctas">
                        <button className="btn-primary hero-cta-main" onClick={() => navigate('/app')}>
                            Get Started
                        </button>
                        <button className="btn-outline hero-cta-secondary">
                            Learn more
                        </button>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>

            {/* Company logos */}
            <section className="logos-section">
                <p className="logos-label">Used and loved by people at brilliant companies</p>
                <div className="logos-row">
                    {companyLogos.map(c => (
                        <div key={c.name} className="logo-item">
                            <span className="logo-symbol">{c.symbol}</span>
                            <span className="logo-name">{c.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default LandingPage
