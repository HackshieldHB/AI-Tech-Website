"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ExternalLink, Activity, ServerCrash, Route } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <SectionTitle
                        title="Operations Center UI"
                        subtitle="Preview the AI Platform Operations Dashboard. This mock interface links to our fully functional Streamlit prototype showcasing predictive ML telemetry."
                        alignment="left"
                        className="mb-0"
                    />
                    <Button size="lg" className="gap-3 group whitespace-nowrap" asChild>
                        <Link href="/live-dashboard">
                            Open Live AI Dashboard
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mock Widget 1 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Card className="p-6 h-full border-blue-200 bg-white shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Tower Health</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Global Network</p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <span className="text-gray-600 font-medium">Total Towers</span>
                                    <span className="text-gray-900 font-mono font-bold text-lg">12,450</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <span className="text-gray-600 font-medium">Critical Alerts</span>
                                    <span className="text-red-500 font-mono font-bold text-lg">24</span>
                                </div>
                                <div className="flex justify-between items-center pb-1">
                                    <span className="text-gray-600 font-medium">Maintenance Sch.</span>
                                    <span className="text-amber-500 font-mono font-bold text-lg">142</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Mock Widget 2 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <Card className="p-6 h-full border-emerald-200 bg-white shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                    <Route className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Fiber Deployment</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Active Projects</p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '68%' }} />
                                </div>
                                <div className="flex justify-between text-xs font-semibold">
                                    <span className="text-gray-500">Progress</span>
                                    <span className="text-emerald-600">68%</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3 mt-6">
                                    <span className="text-gray-600 font-medium">Route Length</span>
                                    <span className="text-gray-900 font-mono font-bold text-lg">4,200 km</span>
                                </div>
                                <div className="flex justify-between items-center pb-1">
                                    <span className="text-gray-600 font-medium">Active Techs</span>
                                    <span className="text-gray-900 font-mono font-bold text-lg">342</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Mock Widget 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Card className="p-6 h-full border-red-200 bg-white shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                                    <ServerCrash className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Security & Alerts</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Edge Vision AI</p>
                                </div>
                            </div>
                            <div className="space-y-3 mt-6">
                                <div className="bg-red-50/50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1 animate-pulse shrink-0" />
                                    <div>
                                        <h5 className="text-sm font-bold text-gray-900 mb-0.5">Intrusion Detected</h5>
                                        <p className="text-xs text-gray-600">Tower Node Alpha-04 (CCTV Cam 2)</p>
                                    </div>
                                </div>
                                <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="text-sm font-bold text-gray-900 mb-0.5">Battery Voltage Drop</h5>
                                        <p className="text-xs text-gray-600">Site Beta-92. Predictive Maint: 4hrs</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="text-sm font-bold text-gray-900 mb-0.5">Drone Scan Complete</h5>
                                        <p className="text-xs text-gray-600">No structural rust detected at Site Gamma.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
