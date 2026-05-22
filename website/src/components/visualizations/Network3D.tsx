"use client"

import * as React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line, Sphere, Box } from "@react-three/drei"
import * as THREE from "three"

// ---------------------------------------------------------------------------
// Deterministic seeded pseudo-random — identical on server and client.
// Avoids Math.random() at module scope which causes hydration mismatches.
// ---------------------------------------------------------------------------
function seededRandom(seed: number) {
    let s = seed
    return () => {
        s = (s * 1664525 + 1013904223) & 0xffffffff
        return (s >>> 0) / 0xffffffff
    }
}

const CORE_NODE = new THREE.Vector3(0, 4, 0)
const NODE_COUNT = 15

// Generate nodes with deterministic positions
function buildNodes() {
    const rand = seededRandom(42)
    return Array.from({ length: NODE_COUNT }, (_, i) => {
        const angle = (i / NODE_COUNT) * Math.PI * 2
        const radius = rand() * 8 + 6
        return {
            id: i,
            position: new THREE.Vector3(
                Math.cos(angle) * radius,
                rand() * 3 + 1,
                Math.sin(angle) * radius
            ),
            type: rand() > 0.5 ? "tower" : "edge",
        }
    })
}

function buildConnections(nodes: ReturnType<typeof buildNodes>) {
    const rand = seededRandom(99)
    const conns: [THREE.Vector3, THREE.Vector3][] = []
    nodes.forEach((node) => {
        conns.push([CORE_NODE, node.position])
    })
    for (let i = 0; i < NODE_COUNT; i++) {
        if (rand() > 0.6) {
            const target = Math.floor(rand() * NODE_COUNT)
            if (i !== target) {
                conns.push([nodes[i].position, nodes[target].position])
            }
        }
    }
    return conns
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ParticleStream({
    start,
    end,
    delay,
}: {
    start: THREE.Vector3
    end: THREE.Vector3
    delay: number
}) {
    const ref = React.useRef<THREE.Mesh>(null)
    const path = React.useMemo(() => new THREE.LineCurve3(start, end), [start, end])

    useFrame((state) => {
        if (ref.current) {
            const t = ((state.clock.getElapsedTime() * 0.3) + delay) % 1
            const point = path.getPoint(t)
            ref.current.position.copy(point)
            ref.current.position.y += Math.sin(t * Math.PI) * 2
        }
    })

    return (
        <Sphere ref={ref} args={[0.1, 16, 16]}>
            <meshBasicMaterial color="#1D4ED8" toneMapped={false} />
        </Sphere>
    )
}

function DataParticles({ connections }: { connections: [THREE.Vector3, THREE.Vector3][] }) {
    return (
        <group>
            {connections.map((c, i) => (
                <ParticleStream
                    key={`particle-${i}`}
                    start={c[0]}
                    end={c[1]}
                    delay={i * 0.2}
                />
            ))}
        </group>
    )
}

function NetworkScene() {
    const groupRef = React.useRef<THREE.Group>(null)
    const nodes = React.useMemo(() => buildNodes(), [])
    const connections = React.useMemo(() => buildConnections(nodes), [nodes])

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            {/* Grid base */}
            <gridHelper args={[40, 40, "#E5E7EB", "#F8FAFC"]} position={[0, -0.1, 0]} />

            {/* Central Cloud AI Core */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group position={CORE_NODE}>
                    <Sphere args={[1.5, 32, 32]}>
                        <meshStandardMaterial color="#1D4ED8" wireframe opacity={0.3} transparent />
                    </Sphere>
                    <Sphere args={[0.8, 32, 32]}>
                        <meshBasicMaterial color="#2563EB" toneMapped={false} />
                    </Sphere>
                    <pointLight color="#2563EB" intensity={5} distance={20} />
                </group>
            </Float>

            {/* Distributed Nodes */}
            {nodes.map((node) => (
                <group key={`node-${node.id}`} position={node.position}>
                    {node.type === "tower" ? (
                        <>
                            <mesh position={[0, node.position.y / -2, 0]}>
                                <cylinderGeometry args={[0.05, 0.2, node.position.y, 8]} />
                                <meshStandardMaterial color="#94A3B8" opacity={0.8} transparent />
                            </mesh>
                            <Sphere args={[0.2, 16, 16]} position={[0, 0, 0]}>
                                <meshBasicMaterial color="#60A5FA" toneMapped={false} />
                            </Sphere>
                        </>
                    ) : (
                        <Box args={[0.6, 0.6, 0.6]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#3B82F6" wireframe />
                        </Box>
                    )}
                </group>
            ))}

            {/* Connecting Lines */}
            {connections.map((conn, i) => {
                const midPoint = new THREE.Vector3()
                    .addVectors(conn[0], conn[1])
                    .multiplyScalar(0.5)
                midPoint.y += 2
                const curve = new THREE.QuadraticBezierCurve3(conn[0], midPoint, conn[1])
                const points = curve.getPoints(20)
                return (
                    <Line
                        key={`line-${i}`}
                        points={points}
                        color="#93C5FD"
                        opacity={0.4}
                        transparent
                        lineWidth={1.5}
                    />
                )
            })}

            <DataParticles connections={connections} />
        </group>
    )
}

export default function Network3D() {
    return (
        <div className="w-full h-full min-h-[600px] absolute inset-0 -z-10 pointer-events-none opacity-70">
            <Canvas camera={{ position: [0, 10, 25], fov: 45 }}>
                <fog attach="fog" args={["#FFFFFF", 15, 35]} />
                <ambientLight intensity={0.8} color="#FFFFFF" />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />
                <NetworkScene />
            </Canvas>
        </div>
    )
}
