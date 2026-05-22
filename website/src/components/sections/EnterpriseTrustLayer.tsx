"use client"

import * as React from "react"
import { BrainCircuit, Cloud, Wifi, Server, ShieldCheck } from "lucide-react"

const trustPillars = [
    { label: "Proprietary AI Models", icon: <BrainCircuit className="w-6 h-6" /> },
    { label: "Cloud-Native Infrastructure", icon: <Cloud className="w-6 h-6" /> },
    { label: "Resilient IoT Networks", icon: <Wifi className="w-6 h-6" /> },
    { label: "Zero-Latency Edge Computing", icon: <Server className="w-6 h-6" /> },
    { label: "Military-Grade Cybersecurity", icon: <ShieldCheck className="w-6 h-6" /> }
]

export default function EnterpriseTrustLayer() {
    return (
        <section className="py-20 border-y border-gray-100 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-10">
                        Built for Enterprise Infrastructure
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        {trustPillars.map((pillar, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors duration-300">
                                {pillar.icon}
                                <span className="text-sm font-medium">{pillar.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
