"use client"

import * as React from "react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/Card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const financialData = [
    { year: "2024", arr: 2.1, ebitda: -0.5 },
    { year: "2025", arr: 5.4, ebitda: 0.8 },
    { year: "2026", arr: 14.2, ebitda: 3.5 },
    { year: "2027", arr: 32.5, ebitda: 11.2 },
    { year: "2028", arr: 68.0, ebitda: 28.5 },
]

export default function InvestorsPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <SectionTitle
                    title="Investor Relations"
                    subtitle="AI Tech is capturing a profound market opportunity by digitizing the $200B+ legacy telecom infrastructure servicing market."
                    alignment="left"
                />

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <Card className="p-8 border-secondary/30 bg-secondary/5">
                        <h4 className="text-sm font-bold text-secondary-light uppercase tracking-wider mb-2">Total Addressable Market</h4>
                        <div className="text-5xl font-display font-bold text-white mb-2">$240B</div>
                        <p className="text-sm text-muted-foreground">Global telecom infrastructure OPEX and CAPEX software market.</p>
                    </Card>

                    <Card className="p-8 border-primary-light/30 bg-primary-light/5">
                        <h4 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-2">Target Gross Margin</h4>
                        <div className="text-5xl font-display font-bold text-white mb-2">82%</div>
                        <p className="text-sm text-muted-foreground">High-margin enterprise SaaS revenue model.</p>
                    </Card>

                    <Card className="p-8 border-accent-light/30 bg-accent-light/5">
                        <h4 className="text-sm font-bold text-accent-light uppercase tracking-wider mb-2">Net Retention Rate</h4>
                        <div className="text-5xl font-display font-bold text-white mb-2">135%</div>
                        <p className="text-sm text-muted-foreground">Driven by land-and-expand module adoption.</p>
                    </Card>
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-display font-bold text-white mb-8">5-Year ARR Projection ($M)</h3>
                    <Card className="p-8 h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={financialData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                                <XAxis dataKey="year" stroke="#64748B" />
                                <YAxis stroke="#64748B" />
                                <Tooltip
                                    cursor={{ fill: '#1E293B', opacity: 0.4 }}
                                    contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#1E293B', borderRadius: '8px' }}
                                />
                                <Bar dataKey="arr" name="Annual Recurring Revenue" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="ebitda" name="EBITDA" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </div>
            </div>
        </div>
    )
}
