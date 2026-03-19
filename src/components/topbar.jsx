import '../styles/dashboard.css'
import logo from '../assets/logo.png'

const views = ['Timeline', 'Board', 'List']

const avatars = ['JD', 'AK', 'SM', 'RB']

function Topbar({ activeView, setActiveView }) {
    return (
        <div className="topbar-wrapper">
            {/* Floating view switcher pill */}
            <div className="view-switcher glass">
                {views.map(v => (
                    <button
                        key={v}
                        className={`view-btn ${activeView === v ? 'active' : ''}`}
                        onClick={() => setActiveView(v)}
                    >
                        <span className="view-icon">
                            {v === 'Timeline' ? '📅' : v === 'Board' ? '⊞' : '≡'}
                        </span>
                        {v}
                    </button>
                ))}
            </div>

            {/* Main topbar */}
            <header className="topbar liquid-glass">
                {/* Glass Layers */}
                <div className="glass-layer-base" />
                <div className="glass-layer-tint" />
                <div className="glass-layer-highlight" />

                <div className="topbar-content relative z-30">
                    <div className="topbar-left">
                        <img src={logo} alt="TaskPilot Logo" className="topbar-logo-img" />
                        <div className="topbar-breadcrumb">
                            <span className="breadcrumb-parent">Nagpur Company</span>
                            <span className="breadcrumb-sep">›</span>
                            <span className="breadcrumb-current">Product Backlog</span>
                            <button className="breadcrumb-edit">✎</button>
                        </div>
                    </div>

                    <div className="topbar-right">
                        {/* Sub-nav tabs */}
                        <div className="topbar-tabs">
                            {['Board', 'Timeline', 'List', 'Table'].map(t => (
                                <button
                                    key={t}
                                    className={`topbar-tab ${activeView === t ? 'active' : ''}`}
                                    onClick={() => setActiveView(t)}
                                >
                                    {t}
                                </button>
                            ))}
                            <button className="topbar-tab filter-btn">⊿ Filter</button>
                        </div>

                        <div className="topbar-actions">
                            {/* Avatars */}
                            <div className="avatar-stack">
                                {avatars.map((a, i) => (
                                    <div key={i} className="avatar" style={{ zIndex: avatars.length - i }}>
                                        {a}
                                    </div>
                                ))}
                            </div>
                            <button className="btn-outline topbar-invite-btn">Invite</button>
                            <button className="btn-accent">+ Add Task</button>
                        </div>

                        {/* Search & Month picker */}
                        <div className="topbar-extras">
                            <div className="topbar-search glass-dark">
                                <span>🔍</span>
                                <input type="text" placeholder="Search tasks..." />
                            </div>
                            <button className="topbar-month-btn glass">
                                December <span>▾</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Topbar
