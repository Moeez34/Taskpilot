import { useState } from 'react'
import Sidebar from '../components/sidebar'
import Topbar from '../components/Topbar'
import BoardView from '../components/BoardView'
import TimelineView from '../components/TimelineView'
import ListView from '../components/ListView'
import '../styles/sidebar.css'
import '../styles/dashboard.css'

// SVG Filter Component for Liquid Glass
const GlassFilter = () => (
    <svg style={{ display: "none" }}>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
            <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
            <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
                <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
            <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
    </svg>
)

function AppLayout() {
    const [activeView, setActiveView] = useState('Board')

    return (
        <div className="app-shell">
            <GlassFilter />
            <Sidebar />
            <div className="app-main">
                <Topbar activeView={activeView} setActiveView={setActiveView} />
                <main className="dashboard-content">
                    {activeView === 'Board' && <BoardView />}
                    {activeView === 'Timeline' && <TimelineView />}
                    {activeView === 'List' && <ListView />}
                    {activeView === 'Table' && <ListView />}
                </main>
            </div>
        </div>
    )
}

export default AppLayout
