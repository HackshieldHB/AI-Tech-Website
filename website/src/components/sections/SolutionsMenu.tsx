"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layers, Activity, TowerControl, HardHat, ShieldCheck, Route, ChevronRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const modules = [
    {
        id: "fsm",
        title: "FSM Digital Twin",
        icon: <Layers className="w-6 h-6" />,
        color: "from-blue-600 to-blue-400",
        core: "Field service management platform bridging physical assets with digital twin visualization and AR.",
        value: "Increase first-time fix rate and accelerate technical decision making."
    },
    {
        id: "ainexus",
        title: "AI Nexus",
        icon: <Activity className="w-6 h-6" />,
        color: "from-blue-600 to-blue-400",
        core: "AI-driven utility asset management platform integrating distributed infrastructure monitoring.",
        value: "Predict failures before service disruption occurs."
    },
    {
        id: "towersense",
        title: "TowerSense",
        icon: <TowerControl className="w-6 h-6" />,
        color: "from-blue-600 to-blue-400",
        core: "AIoT smart tower monitoring using LoRaWAN sensors and edge computing.",
        value: "Detect structural anomalies and optimize energy usage."
    },
    {
        id: "smartconstruct",
        title: "Smart Construct",
        icon: <HardHat className="w-6 h-6" />,
        color: "from-blue-600 to-blue-400",
        core: "AI-powered construction lifecycle management.",
        value: "Improve project transparency with geo-tagged verification."
    },
    {
        id: "infraguard",
        title: "InfraGuard",
        icon: <ShieldCheck className="w-6 h-6" />,
        color: "from-blue-600 to-blue-400",
        core: "Infrastructure monitoring platform supporting micro edge data centers.",
        value: "Enable secure low-latency connectivity for telecom ecosystems."
    },
    {
        id: "permatrax",
        title: "Permatrax",
        icon: <Route className="w-6 h-6" />,
        color: "from-blue-600 to-blue-400",
        core: "End-to-end FTTH network tracking with real-time crew positioning, geospatial coverage visualization, and rollout progress dashboards.",
        value: "Accelerate fiber deployment timelines and maximize field workforce productivity through intelligent route management.",
        href: "https://permatrax.tech",
    }
]

export default function SolutionsMenu() {
    const [activeModule, setActiveModule] = React.useState<string>("fsm")

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Comprehensive AIoT Software Ecosystem
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        PT. Integra Aplikasi Artifisial builds enterprise-grade digital platforms designed to modernize industrial operations through AI, IoT, and scalable cloud architecture.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 mt-16 max-w-6xl mx-auto">
                    {/* Menu Column */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {modules.map((m) => {
                            const isActive = activeModule === m.id
                            return (
                                <button
                                    key={m.id}
                                    onClick={() => setActiveModule(m.id)}
                                    className={cn(
                                        "flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden group",
                                        isActive
                                            ? "bg-blue-50 border-blue-200 shadow-md text-primary"
                                            : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-bg"
                                            className={`absolute inset-0 bg-gradient-to-r ${m.color} opacity-[0.03] pointer-events-none`}
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={cn(
                                            "p-3 rounded-xl transition-colors",
                                            isActive ? `bg-gradient-to-br ${m.color} text-white` : "bg-gray-100 group-hover:bg-gray-200 text-gray-500"
                                        )}>
                                            {m.icon}
                                        </div>
                                        <span className="text-xl font-display font-semibold tracking-wide">{m.title}</span>
                                    </div>
                                    <ChevronRight className={cn(
                                        "w-5 h-5 transition-transform duration-300 relative z-10",
                                        isActive ? "translate-x-1 opacity-100 text-primary" : "opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:-translate-x-2"
                                    )} />
                                </button>
                            )
                        })}
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-7">
                        <div className="relative h-full min-h-[400px] w-full bg-white border border-gray-200 rounded-3xl overflow-hidden p-8 flex flex-col justify-center shadow-xl shadow-gray-200/50">
                            <AnimatePresence mode="wait">
                                {modules.map(
                                    (m) =>
                                        activeModule === m.id && (
                                            <motion.div
                                                key={m.id}
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex flex-col h-full"
                                            >
                                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white mb-8 shadow-md`}>
                                                    {React.cloneElement(m.icon as React.ReactElement, { className: "w-10 h-10" })}
                                                </div>
                                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
                                                    {m.title}
                                                </h3>
                                                
                                                <div className="space-y-6">
                                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Core Component</h4>
                                                        <p className="text-gray-700 leading-relaxed">{m.core}</p>
                                                    </div>

                                                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                                                            <Zap className="w-4 h-4" /> Business Value
                                                        </h4>
                                                        <p className="text-gray-800 font-medium">{m.value}</p>
                                                    </div>

                                                    {"href" in m && m.href && (
                                                        <a
                                                            href={m.href as string}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                                                        >
                                                            Visit {m.title} Site
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
