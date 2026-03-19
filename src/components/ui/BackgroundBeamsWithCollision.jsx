import { cn } from '../../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'

const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7 },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, tall: true },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, medium: true },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, small: true },
]

export const BackgroundBeamsWithCollision = ({ children, style, className }) => {
    const containerRef = useRef(null)
    const parentRef = useRef(null)

    return (
        <div
            ref={parentRef}
            className={cn('beams-container', className)}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                overflow: 'hidden',
                ...style,
            }}
        >
            {beams.map((beam) => (
                <CollisionMechanism
                    key={beam.initialX + '-beam'}
                    beamOptions={beam}
                    containerRef={containerRef}
                    parentRef={parentRef}
                />
            ))}

            {children}

            {/* Bottom collision floor */}
            <div
                ref={containerRef}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    pointerEvents: 'none',
                    background: 'transparent',
                    boxShadow:
                        '0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04)',
                }}
            />
        </div>
    )
}

const CollisionMechanism = React.forwardRef(
    ({ parentRef, containerRef, beamOptions = {} }, ref) => {
        const beamRef = useRef(null)
        const [collision, setCollision] = useState({ detected: false, coordinates: null })
        const [beamKey, setBeamKey] = useState(0)
        const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false)

        // Beam height based on options
        const beamHeight = beamOptions.tall ? 80 : beamOptions.medium ? 48 : beamOptions.small ? 24 : 56

        useEffect(() => {
            const checkCollision = () => {
                if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
                    const beamRect = beamRef.current.getBoundingClientRect()
                    const containerRect = containerRef.current.getBoundingClientRect()
                    const parentRect = parentRef.current.getBoundingClientRect()

                    if (beamRect.bottom >= containerRect.top) {
                        const relativeX = beamRect.left - parentRect.left + beamRect.width / 2
                        const relativeY = beamRect.bottom - parentRect.top

                        setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } })
                        setCycleCollisionDetected(true)
                    }
                }
            }

            const interval = setInterval(checkCollision, 50)
            return () => clearInterval(interval)
        }, [cycleCollisionDetected, containerRef])

        useEffect(() => {
            if (collision.detected && collision.coordinates) {
                setTimeout(() => {
                    setCollision({ detected: false, coordinates: null })
                    setCycleCollisionDetected(false)
                }, 2000)
                setTimeout(() => setBeamKey((k) => k + 1), 2000)
            }
        }, [collision])

        return (
            <>
                <motion.div
                    key={beamKey}
                    ref={beamRef}
                    animate="animate"
                    initial={{
                        translateY: beamOptions.initialY ?? '-200px',
                        translateX: beamOptions.initialX ?? 0,
                        rotate: beamOptions.rotate ?? 0,
                    }}
                    variants={{
                        animate: {
                            translateY: beamOptions.translateY ?? '1800px',
                            translateX: beamOptions.translateX ?? 0,
                            rotate: beamOptions.rotate ?? 0,
                        },
                    }}
                    transition={{
                        duration: beamOptions.duration ?? 8,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                        delay: beamOptions.delay ?? 0,
                        repeatDelay: beamOptions.repeatDelay ?? 0,
                    }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 80,
                        margin: 'auto',
                        height: beamHeight,
                        width: 1,
                        borderRadius: 9999,
                        background: 'linear-gradient(to top, #6366f1, #a855f7, transparent)',
                        opacity: 0.7,
                    }}
                />
                <AnimatePresence>
                    {collision.detected && collision.coordinates && (
                        <Explosion
                            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                            style={{
                                left: `${collision.coordinates.x}px`,
                                top: `${collision.coordinates.y}px`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    )}
                </AnimatePresence>
            </>
        )
    }
)

CollisionMechanism.displayName = 'CollisionMechanism'

const Explosion = ({ style, ...props }) => {
    const spans = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
    }))

    return (
        <div
            {...props}
            style={{
                position: 'absolute',
                zIndex: 50,
                height: 8,
                width: 8,
                ...style,
            }}
        >
            {/* Horizontal glow flash */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '-40px',
                    right: '-40px',
                    margin: 'auto',
                    height: 8,
                    width: 40,
                    borderRadius: 9999,
                    background: 'linear-gradient(to right, transparent, #6366f1, transparent)',
                    filter: 'blur(4px)',
                }}
            />
            {/* Particles */}
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
                    transition={{ duration: Math.random() * 1.5 + 0.5, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        height: 4,
                        width: 4,
                        borderRadius: 9999,
                        background: 'linear-gradient(to bottom, #6366f1, #a855f7)',
                    }}
                />
            ))}
        </div>
    )
}
