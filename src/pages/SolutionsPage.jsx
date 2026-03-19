import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from '../components/ui/BackgroundBeamsWithCollision';
import logo from '../assets/logo.png';
import '../styles/landing.css';
import '../styles/solutions.css';

export default function SolutionsPage() {
    const navigate = useNavigate();

    return (
        <div className="landing">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="bg-blob bg-blob-1" />
                <div className="bg-blob bg-blob-2" />
                <div className="bg-blob bg-blob-3" />
            </div>

            {/* Reused Navbar */}
            <nav className="landing-nav liquid-glass">
                <div className="glass-layer-base" />
                <div className="glass-layer-tint" />
                <div className="glass-layer-highlight" />

                <div className="nav-content relative z-30">
                    <div className="nav-logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
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
                        <a href="/solutions" className="nav-link" style={{ color: 'var(--brand)' }}>Solutions</a>
                        <a href="#" className="nav-link">Learn</a>
                        <a href="#" className="nav-link">Pricing</a>
                        <a href="#" className="nav-link">Enterprise</a>
                    </div>
                    <div className="nav-actions">
                        <button className="btn-outline nav-signin" onClick={() => navigate('/app')}>Sign In</button>
                        <button className="btn-primary" onClick={() => navigate('/app')}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Typography Hero */}
            <BackgroundBeamsWithCollision
                style={{
                    minHeight: '75vh',
                    flexDirection: 'column',
                    background: 'transparent',
                    paddingTop: '60px',
                }}
            >
                <div className="solutions-hero z-10 relative">
                    <h1 className="solutions-headline">
                        Clean UI. Clear UX. Better management.
                    </h1>
                    <h2 className="solutions-subheadline">
                        We deliver <span className="serif-italic">design</span> with
                    </h2>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
