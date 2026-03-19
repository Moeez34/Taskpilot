import '../styles/sidebar.css'
import logo from '../assets/logo.png'

const navItems = [
    { icon: '🏠', label: 'Home', active: false },
    { icon: '📥', label: 'Inbox', badge: 3, active: false },
    { icon: '📄', label: 'Document', active: false },
    { icon: '🗺️', label: 'Roadmaps', active: false },
]

const projects = [
    { name: 'Nagpur Company', active: false },
    { name: 'Product Backlog', active: true },
    { name: 'Design Sprint', active: false },
    { name: 'Weekly Execution', active: false },
    { name: 'Bug Tracking', active: false },
    { name: 'Breakout Smart', active: false },
    { name: 'Lakoranta', active: false },
    { name: 'Anna Market', active: false },
]

const favorites = [
    { name: 'Design Sprint' },
    { name: 'Bug Tracking' },
]

function Sidebar() {
    return (
        <aside className="sidebar glass">
            {/* Logo */}
            <div className="sidebar-logo">
                <img src={logo} alt="TaskPilot Logo" className="sidebar-logo-img" />
            </div>

            {/* Search */}
            <div className="sidebar-search">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search..." className="search-input" />
                <span className="search-shortcut">⌘K</span>
            </div>

            {/* Main Nav */}
            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <button key={item.label} className={`sidebar-nav-item ${item.active ? 'active' : ''}`}>
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                        {item.badge && <span className="nav-badge">{item.badge}</span>}
                    </button>
                ))}
            </nav>

            {/* Projects */}
            <div className="sidebar-section">
                <div className="sidebar-section-header">
                    <span>PROJECTS</span>
                    <button className="section-add">+</button>
                </div>
                {projects.map(p => (
                    <button key={p.name} className={`sidebar-project-item ${p.active ? 'active' : ''}`}>
                        <span className="project-dot" />
                        <span className="project-name">{p.name}</span>
                    </button>
                ))}
            </div>

            {/* Favorites */}
            <div className="sidebar-section">
                <div className="sidebar-section-header">
                    <span>FAVORITES</span>
                </div>
                {favorites.map(f => (
                    <button key={f.name} className="sidebar-project-item">
                        <span className="project-dot fav" />
                        <span className="project-name">{f.name}</span>
                    </button>
                ))}
            </div>

            {/* Bottom */}
            <div className="sidebar-bottom">
                <button className="sidebar-nav-item">
                    <span className="nav-icon">⚙️</span>
                    <span className="nav-label">Settings</span>
                </button>
                <div className="sidebar-profile">
                    <div className="profile-avatar">JD</div>
                    <div className="profile-info">
                        <span className="profile-name">Jane Doe</span>
                        <div className="profile-progress-bar">
                            <div className="profile-progress-fill" style={{ width: '72%' }} />
                        </div>
                        <span className="profile-progress-label">72%</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
