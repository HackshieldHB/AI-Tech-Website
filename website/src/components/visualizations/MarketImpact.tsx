"use client"

import * as React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/Card"
import { Activity, Zap, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const intelligenceData = [
    { year: "2024", adoption: 20 },
    { year: "2025", adoption: 35 },
    { year: "2026", adoption: 55 },
    { year: "2027", adoption: 80 },
    { year: "2028", adoption: 95 }
]

export default function MarketImpact() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <Card className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 w-max">
                    <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Enterprise Model</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-display font-medium mb-6 text-white tracking-tight">
                    Projected Infrastructure Intelligence Adoption
                </h3>
                
                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                    As legacy infrastructure faces mounting operational complexity, the telecommunications industry is rapidly transitioning toward autonomous, AI-driven asset management to guarantee optimal uptime.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-1">Compute at the Edge</h4>
                            <p className="text-sm text-gray-400">Processing IoT telemetry locally via micro data centers.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-1">Predictive Reliability</h4>
                            <p className="text-sm text-gray-400">Algorithmically neutralizing structural threats.</p>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="p-8 flex flex-col justify-center min-h-[400px]">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-display font-medium text-white">Adoption Index</h3>
                    <span className="text-sm font-medium text-gray-500">Scale 0 - 100</span>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={intelligenceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAdoption" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                            <XAxis dataKey="year" stroke="#64748B" tick={{fill: '#64748B'}} tickMargin={10} axisLine={false} tickLine={false} />
                            <YAxis stroke="#64748B" tick={{fill: '#64748B'}} tickMargin={10} axisLine={false} tickLine={false} />
                            <Tooltip
                                cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
                                contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#1E293B', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#60A5FA' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="adoption" 
                                stroke="#3B82F6" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorAdoption)" 
                                activeDot={{ r: 6, fill: '#0B0F19', stroke: '#3B82F6', strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    )
}
