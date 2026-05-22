"use client"

import { motion } from "framer-motion"

// Deterministic node positions (seeded) — no Math.random() to avoid hydration mismatch
const NODES = [
    { id: 0,  x: 50,  y: 50,  r: 6, core: true  },
    { id: 1,  x: 20,  y: 20,  r: 4, core: false },
    { id: 2,  x: 80,  y: 15,  r: 3, core: false },
    { id: 3,  x: 15,  y: 65,  r: 4, core: false },
    { id: 4,  x: 85,  y: 60,  r: 3, core: false },
    { id: 5,  x: 35,  y: 85,  r: 4, core: false },
    { id: 6,  x: 70,  y: 82,  r: 3, core: false },
    { id: 7,  x: 10,  y: 40,  r: 3, core: false },
    { id: 8,  x: 90,  y: 35,  r: 4, core: false },
    { id: 9,  x: 55,  y: 10,  r: 3, core: false },
    { id: 10, x: 30,  y: 50,  r: 3, core: false },
    { id: 11, x: 70,  y: 40,  r: 3, core: false },
    { id: 12, x: 50,  y: 75,  r: 4, core: false },
    { id: 13, x: 25,  y: 30,  r: 2, core: false },
    { id: 14, x: 75,  y: 70,  r: 2, core: false },
]

// Edges from each satellite to core (id=0) + a few cross-links
const EDGES = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12],
    [1, 13], [2, 8], [3, 10], [4, 11], [5, 12], [6, 14],
    [9, 2], [13, 7], [10, 1],
]

// Each node gets a slightly different float animation
const floatVariants = (i: number) => ({
    animate: {
        y: [0, (i % 2 === 0 ? -8 : 8), 0],
        x: [0, (i % 3 === 0 ? 4 : -4), 0],
        transition: {
            duration: 4 + (i * 0.37) % 3,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: (i * 0.29) % 2,
        },
    },
})

export default function NetworkBackground() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full"
            >
                <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%"  stopColor="#3b82f6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%"  stopColor="#60a5fa" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Edges */}
                {EDGES.map(([a, b], i) => {
                    const na = NODES[a], nb = NODES[b]
                    return (
                        <motion.line
                            key={`edge-${i}`}
                            x1={na.x} y1={na.y}
                            x2={nb.x} y2={nb.y}
                            stroke="#3b82f6"
                            strokeWidth="0.15"
                            strokeOpacity="0.25"
                            animate={{ strokeOpacity: [0.1, 0.35, 0.1] }}
                            transition={{
                                duration: 3 + (i * 0.41) % 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: (i * 0.17) % 1.5,
                            }}
                        />
                    )
                })}

                {/* Nodes */}
                {NODES.map((node) => (
                    <motion.g
                        key={`node-${node.id}`}
                        {...floatVariants(node.id)}
                    >
                        {/* Glow halo */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.r * 2.5}
                            fill={node.core ? "url(#coreGlow)" : "url(#nodeGlow)"}
                            opacity={0.3}
                        />
                        {/* Core circle */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.r}
                            fill={node.core ? "#60a5fa" : "#3b82f6"}
                            opacity={node.core ? 0.9 : 0.6}
                            animate={{ r: [node.r, node.r * 1.15, node.r] }}
                            transition={{
                                duration: 2.5 + (node.id * 0.3) % 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: (node.id * 0.22) % 1,
                            }}
                        />
                    </motion.g>
                ))}
            </svg>
        </div>
    )
}
