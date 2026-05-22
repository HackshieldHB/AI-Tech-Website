"use client"

import * as React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
    Activity, Route, ServerCrash, AlertCircle, Zap, ShieldCheck, 
    RadioTower, Cpu, TrendingUp, TrendingDown, Network, 
    Lightbulb, MapPin, Database, Maximize2, Minimize2, 
    AlertTriangle, ShieldAlert, ChevronDown, ChevronUp, Bot, Send, User
} from "lucide-react"
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts'

// --- Static Data ---
const networkPerformanceData = [
    { time: '10:00', latency: 45, throughput: 11.2 }, { time: '10:05', latency: 48, throughput: 11.5 },
    { time: '10:10', latency: 52, throughput: 11.1 }, { time: '10:15', latency: 42, throughput: 11.8 },
    { time: '10:20', latency: 38, throughput: 12.1 }, { time: '10:25', latency: 65, throughput: 9.8 },
    { time: '10:30', latency: 45, throughput: 12.0 }, { time: '10:35', latency: 43, throughput: 12.4 },
]

const ALL_POSSIBLE_ALERTS = [
    { message: 'Unauthorized Access', severity: 'critical', location: 'Tower B12', icon: AlertCircle },
    { message: 'Latency Spike (85ms)', severity: 'warning', location: 'Edge Node E04', icon: Activity },
    { message: 'Power Fluctuation', severity: 'warning', location: 'Tower C05', icon: Zap },
    { message: 'Fiber Signal Degradation', severity: 'critical', location: 'Segment F102', icon: Route },
    { message: 'Cooling Efficiency Drop', severity: 'warning', location: 'Data Hub JKT', icon: ServerCrash },
    { message: 'Firmware Update Done', severity: 'info', location: 'Edge Node Gamma', icon: Cpu },
]

const ALL_INSIGHTS = [
    { title: "Preventive Maintenance", desc: "Preventive maintenance recommended for Tower C05. Cooling unit operating below efficiency threshold.", tag: "Action Required", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Deployment AI", desc: "Fiber rollout in Jakarta projected to reach 95% completion within 10 days, ahead of schedule.", tag: "Optimization", icon: Route, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Network Routing Analytics", desc: "Network congestion predicted during evening traffic peak; automated path rerouting initiated.", tag: "Automated", icon: Activity, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Security Anomaly", desc: "Latency anomaly detected across Edge Node cluster. Scanning for intrusion vectors.", tag: "Diagnostic", icon: ShieldCheck, color: "text-red-600", bg: "bg-red-50" },
]

const initialNodes = [
    { id: 't1', name: 'Tower A01', type: 'Telecom', x: 20, y: 30, baseUptime: 99.9, defaultStatus: 'healthy' },
    { id: 't2', name: 'Tower B12', type: 'Telecom', x: 75, y: 25, baseUptime: 99.5, defaultStatus: 'healthy' },
    { id: 't3', name: 'Tower C05', type: 'Telecom', x: 30, y: 75, baseUptime: 98.2, defaultStatus: 'healthy' },
    { id: 'e1', name: 'Edge Node E03', type: 'Edge AI', x: 45, y: 45, baseUptime: 99.8, defaultStatus: 'healthy' },
    { id: 'e2', name: 'Edge Node E07', type: 'Edge AI', x: 65, y: 65, baseUptime: 99.9, defaultStatus: 'healthy' },
    { id: 'd1', name: 'Data Hub Jakarta', type: 'Hub', x: 50, y: 55, baseUptime: 99.99, defaultStatus: 'healthy', isHub: true },
    { id: 'd2', name: 'Data Hub Surabaya', type: 'Hub', x: 85, y: 80, baseUptime: 99.95, defaultStatus: 'healthy', isHub: true },
]
const connections = [
    { from: 't1', to: 'e1' }, { from: 't2', to: 'd1' }, { from: 't3', to: 'e1' },
    { from: 'e1', to: 'd1' }, { from: 'e2', to: 'd1' }, { from: 'd1', to: 'd2' },
    { from: 'e2', to: 'd2' }, { from: 't2', to: 'e2' }
]

// Pure component wrappers for heavy charts to prevent re-render jumps
const MemoNetworkChart = React.memo(() => (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={networkPerformanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
                <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient>
                <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/><stop offset="95%" stopColor="#10b981" stopOpacity={0}/></linearGradient>
            </defs>
            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} dy={5} />
            <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} />
            <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} />
            <RechartsTooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: 'none' }} labelStyle={{ fontSize: '12px', fontWeight: 'bold' }} />
            <Area yAxisId="left" type="monotone" dataKey="latency" stroke="#3b82f6" strokeWidth={2} fill="url(#colorLatency)" isAnimationActive={false} />
            <Area yAxisId="right" type="monotone" dataKey="throughput" stroke="#10b981" strokeWidth={2} fill="url(#colorThroughput)" isAnimationActive={false} />
        </AreaChart>
    </ResponsiveContainer>
))
MemoNetworkChart.displayName = "MemoNetworkChart"

const MemoPieChart = React.memo(({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie data={data} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none" isAnimationActive={false}>
                {data.map((e, i) => <Cell key={i} fill={e.color} />)}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
))
MemoPieChart.displayName = "MemoPieChart"

export default function LiveDashboardPage() {
    // --- Layout State ---
    const [isMissionControl, setIsMissionControl] = useState(false)
    const [showAnalytics, setShowAnalytics] = useState(false)
    const [showScenarios, setShowScenarios] = useState(false)
    const [showExpandedInsights, setShowExpandedInsights] = useState(false)
    
    // --- Data State ---
    const [activeScenario, setActiveScenario] = useState<string | null>(null)
    const [scenarioTimeLeft, setScenarioTimeLeft] = useState(0)
    const [alertCounter, setAlertCounter] = useState(5)
    
    // Consolidated telemetry
    const [telemetry, setTelemetry] = useState({
        uptime: 99.81, towers: 124, fiber: 3240, nodes: 48, throughput: 1.82, alerts: 7,
        jktProg: 82, surProg: 67, bdgProg: 54, mdnProg: 41, mksProg: 29
    })
    const [liveAlerts, setLiveAlerts] = useState<any[]>([])
    const [insightIndex, setInsightIndex] = useState(0)
    const [hoveredNode, setHoveredNode] = useState<string | null>(null)

    // Chat AI State
    const [chatMessages, setChatMessages] = useState<{role: 'user'|'ai', text: string}[]>([
        { role: 'ai', text: 'AITECH Operations Assistant online. How can I help you analyze the current infrastructure?' }
    ])
    const [chatInput, setChatInput] = useState("")
    const chatEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setLiveAlerts(ALL_POSSIBLE_ALERTS.slice(0, 4).map((a, i) => ({ id: i, time: '10:3'+i, ...a })))
    }, [])

    // --- Single Master Tick (6 seconds) ---
    useEffect(() => {
        const tick = setInterval(() => {
            setTelemetry(prev => ({
                ...prev,
                uptime: Math.min(100, prev.uptime + (Math.random() > 0.5 ? 0.01 : -0.01)),
                throughput: Math.max(1.5, prev.throughput + (Math.random() > 0.5 ? 0.02 : -0.02)),
                alerts: Math.max(0, prev.alerts + (Math.random() > 0.8 ? 1 : (Math.random() > 0.5 ? -1 : 0))),
                jktProg: Math.min(100, prev.jktProg + (Math.random() > 0.6 ? 1 : 0)),
                surProg: Math.min(100, prev.surProg + (Math.random() > 0.6 ? 1 : 0)),
                bdgProg: Math.min(100, prev.bdgProg + (Math.random() > 0.6 ? 1 : 0)),
            }))

            if (!activeScenario) {
                setInsightIndex(p => (p + 1) % ALL_INSIGHTS.length)
                
                // Add random alert organically every 2 ticks (~12s)
                if (Math.random() > 0.5) {
                    const randomAlertBase = ALL_POSSIBLE_ALERTS[Math.floor(Math.random() * ALL_POSSIBLE_ALERTS.length)]
                    const now = new Date(); const tString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
                    setLiveAlerts(prev => {
                        const next = [{ id: alertCounter, time: tString, ...randomAlertBase }, ...prev]
                        return next.slice(0, 6)
                    })
                    setAlertCounter(c => c + 1)
                }
            }
        }, 6000)
        return () => clearInterval(tick)
    }, [alertCounter, activeScenario])

    // Scenario Reset Timer (1 second interval just for the UI countdown)
    useEffect(() => {
        if (!activeScenario) return
        const t = setInterval(() => setScenarioTimeLeft(p => { 
            if (p <= 1) { setActiveScenario(null); return 0 }; 
            return p - 1 
        }), 1000)
        return () => clearInterval(t)
    }, [activeScenario])

    // Chat auto-scroll
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chatMessages])

    // --- Scenario Derived Impacts ---
    const kpis = { ...telemetry }
    const nodesStatus: Record<string, string> = {}
    let activeInsightOverride = null
    initialNodes.forEach(n => nodesStatus[n.id] = n.defaultStatus)

    if (activeScenario === 'tower_failure') {
        kpis.uptime -= 1.2; kpis.towers -= 1; kpis.alerts += 2; nodesStatus['t2'] = 'offline'
        activeInsightOverride = { title: "Critical Outage", desc: "Tower B12 hardware failure. Immediate field dispatch prioritized.", tag: "Urgent Dispatch", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" }
    } else if (activeScenario === 'fiber_outage') {
        kpis.throughput -= 0.6; nodesStatus['d2'] = 'degraded'; nodesStatus['e2'] = 'offline'
        activeInsightOverride = { title: "Fiber Cut Detected", desc: "Major trunk cut near Surabaya Data Hub. Traffic heavily degraded. Auto-routing engaged.", tag: "Routing Engaged", icon: Route, color: "text-amber-600", bg: "bg-amber-50" }
    } else if (activeScenario === 'cyber_intrusion') {
        kpis.alerts += 15; nodesStatus['d1'] = 'degraded'
        activeInsightOverride = { title: "DDoS Intrusion Attempt", desc: "Volumetric DDoS surge targeting Jakarta Hub. Aegis AI firewall absorbing 94% of malicious packets.", tag: "Under Attack", icon: ShieldAlert, color: "text-red-600", bg: "bg-red-50" }
    } else if (activeScenario === 'traffic_surge') {
        kpis.throughput += 1.5; nodesStatus['t1'] = 'degraded'; nodesStatus['t3'] = 'degraded'; nodesStatus['e1'] = 'degraded'
        activeInsightOverride = { title: "Traffic Surge", desc: "Unprecedented regional traffic spike. Edge nodes automatically scaling compute thresholds.", tag: "Auto-Scaling", icon: Activity, color: "text-indigo-600", bg: "bg-indigo-50" }
    }

    const healthDist = [ 
        { name: 'Healthy', value: (activeScenario === 'tower_failure' || activeScenario === 'traffic_surge') ? 83 : 88, color: '#10b981' }, 
        { name: 'Warning', value: activeScenario === 'traffic_surge' ? 14 : 9, color: '#f59e0b' }, 
        { name: 'Offline', value: activeScenario === 'tower_failure' ? 5 : 3, color: '#ef4444' } 
    ]
    const currentInsight = activeInsightOverride || ALL_INSIGHTS[insightIndex]

    // --- Handlers ---
    const triggerScenario = (id: string, msg: string, sev: string, loc: string) => {
        setActiveScenario(id); setScenarioTimeLeft(20)
        const now = new Date(); const tString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
        setLiveAlerts(prev => [{ id: alertCounter, time: tString, message: msg, severity: sev, location: loc, icon: AlertTriangle }, ...prev].slice(0, 6))
        setAlertCounter(c => c + 1)
    }

    const handleChatSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!chatInput.trim()) return

        const userMsg = chatInput.trim()
        setChatMessages(p => [...p, { role: 'user', text: userMsg }])
        setChatInput("")

        // Simulated Context-Aware AI response
        setTimeout(() => {
            let aiText = "I found no critical anomalies."
            const lowerMsg = userMsg.toLowerCase()

            if (lowerMsg.includes('alert') || lowerMsg.includes('warning')) {
                const count = liveAlerts.length
                aiText = `There are currently ${kpis.alerts} active alerts system-wide. The most recent is "${liveAlerts[0]?.message}" at ${liveAlerts[0]?.location}.`
            } else if (lowerMsg.includes('health') || lowerMsg.includes('tower')) {
                if (activeScenario === 'tower_failure') aiText = "Urgent: Tower B12 is currently reporting OFFLINE status. Field teams are being dispatched."
                else if (activeScenario === 'traffic_surge') aiText = "Towers A01 and C05 are experiencing degraded performance due to a regional traffic surge."
                else aiText = "Overall tower health is 88%. 3% are offline for scheduled maintenance. No active anomalies detected."
            } else if (lowerMsg.includes('throughput') || lowerMsg.includes('speed')) {
                aiText = `Current network throughput is operating at ${kpis.throughput.toFixed(2)} Tbps. ${activeScenario === 'traffic_surge' ? 'This is an unprecedented surge above baselines.' : 'This is within normal operating boundaries.'}`
            } else if (lowerMsg.includes('fiber') || lowerMsg.includes('deployment')) {
                aiText = `Total fiber coverage is ${kpis.fiber} km. Jakarta deployment stands at ${kpis.jktProg}% complete.`
            } else if (lowerMsg.includes('prediction') || lowerMsg.includes('risk')) {
                if (activeScenario) aiText = `CRITICAL RISK DETECTED: ${currentInsight.desc}`
                else aiText = `${currentInsight.desc} This has been logged for the predictive dispatch system.`
            } else {
                aiText = `I am continuously monitoring the ${kpis.towers} towers and ${kpis.nodes} edge nodes. Telemetry is stable at ${kpis.uptime.toFixed(2)}% uptime.`
            }

            setChatMessages(p => [...p, { role: 'ai', text: aiText }])
        }, 800)
    }

    // --- UI Components ---
    const ExpandableSection = ({ title, isOpen, onToggle, children }: any) => (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <button onClick={onToggle} className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

    return (
        <main className={`min-h-screen transition-colors duration-500 ${isMissionControl ? 'bg-slate-50' : 'bg-gray-50/50'}`}>
            {/* Global Container: max-w-7xl mx-auto px-6 py-12 space-y-12 */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                
                {/* 1. Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-blue-100 border-blue-200">
                                <span className="flex h-2 w-2 rounded-full animate-pulse bg-blue-600" />
                                <span className="text-xs font-bold uppercase tracking-widest text-blue-800">Live Simulation</span>
                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                            {isMissionControl ? 'Infrastructure Command Center' : 'AI Infrastructure Operations Dashboard'}
                        </h1>
                        <p className="text-sm text-gray-600 max-w-2xl">Real-time monitoring and predictive intelligence across telecom infrastructure.</p>
                    </div>
                    <button onClick={() => setIsMissionControl(!isMissionControl)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-sm border text-sm ${isMissionControl ? 'bg-gray-900 text-white border-gray-800 hover:bg-gray-800' : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'}`}>
                        {isMissionControl ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        {isMissionControl ? 'Exit Mission Control' : 'Mission Control Mode'}
                    </button>
                </header>

                {/* 2. KPIs */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                    {[
                        { title: "Network Uptime", v: `${kpis.uptime.toFixed(2)}%`, icon: Activity, t: "up" },
                        { title: "Active Towers", v: kpis.towers.toString(), icon: RadioTower, t: "up" },
                        { title: "Fiber Coverage", v: `${kpis.fiber} km`, icon: Route, t: "up" },
                        { title: "Edge Nodes", v: kpis.nodes.toString(), icon: Cpu, t: "up" },
                        { title: "Throughput", v: `${kpis.throughput.toFixed(2)} Tbps`, icon: Network, t: "up" },
                        { title: "Active Alerts", v: kpis.alerts.toString(), icon: AlertCircle, t: activeScenario ? "up" : "down", alert: !!activeScenario },
                    ].map((m, i) => (
                        <div key={i} className={`bg-white rounded-xl border p-6 shadow-sm overflow-hidden flex flex-col justify-between h-[120px] transition-colors ${m.alert ? 'border-red-300 bg-red-50/10' : 'border-gray-200'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <m.icon className={`w-5 h-5 ${m.alert ? 'text-red-500' : 'text-gray-400'}`} />
                                <div className={`flex items-center text-[10px] font-bold ${m.t === 'up' && !m.alert ? 'text-emerald-600' : (m.t === 'down' ? 'text-emerald-600' : 'text-red-600')}`}>
                                    {m.t === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                </div>
                            </div>
                            <div>
                                {/* Using framer-motion keyed on value for smooth lightweight transition instead of layout shift */}
                                <motion.p key={m.v} initial={{ opacity: 0.5, y: -2 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="text-2xl font-semibold text-gray-900 leading-none mb-1">
                                    {m.v}
                                </motion.p>
                                <h3 className="text-sm text-gray-500 truncate">{m.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Analytics (Expandable) - Fixed Height inside */}
                <ExpandableSection title="Advanced Infrastructure Analytics" isOpen={showAnalytics} onToggle={() => setShowAnalytics(!showAnalytics)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Fixed height to prevent shifts: h-[320px] */}
                        <div className="flex flex-col border border-gray-100 rounded-lg p-4 bg-gray-50/30 h-[320px]">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4 shrink-0">Network Latency vs Throughput</h3>
                            <div className="flex-1 w-full min-h-0"><MemoNetworkChart /></div>
                        </div>
                        <div className="flex flex-col border border-gray-100 rounded-lg p-4 bg-gray-50/30 h-[320px] relative">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2 shrink-0">Tower Health Distribution</h3>
                            <div className="flex-1 w-full min-h-0 relative">
                                <MemoPieChart data={healthDist} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mb-4">
                                    <span className="text-3xl font-semibold text-gray-900">{healthDist[0].value}%</span>
                                    <span className="text-[10px] text-emerald-600 uppercase font-bold">Healthy</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-4 shrink-0">
                                {healthDist.map((item, i) => (
                                    <div key={i} className="text-center p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                                        <div className="w-2.5 h-2.5 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }} />
                                        <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ExpandableSection>

                {/* MISSION CONTROL WRAPPER */}
                <div className={`grid gap-12 ${isMissionControl ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
                    
                    {/* 4. Digital Twin Map (Fixed bounds) */}
                    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col ${isMissionControl ? 'lg:col-span-2 min-h-[600px]' : 'h-[500px] w-full'}`}>
                        <div className="mb-4 shrink-0">
                            <h2 className="text-lg font-semibold text-gray-900">Infrastructure Digital Twin</h2>
                            <p className="text-sm text-gray-500">Live visualization of connected telecom towers, fiber nodes, and edge AI systems.</p>
                        </div>
                        <div className="flex-1 relative w-full bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden min-h-0">
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                {connections.map((conn, idx) => {
                                    const fromNode = initialNodes.find(n => n.id === conn.from); const toNode = initialNodes.find(n => n.id === conn.to)
                                    if (!fromNode || !toNode) return null
                                    const isOffline = nodesStatus[conn.from] === 'offline' || nodesStatus[conn.to] === 'offline'
                                    return (
                                        <g key={idx}>
                                            <line x1={`${fromNode.x}%`} y1={`${fromNode.y}%`} x2={`${toNode.x}%`} y2={`${toNode.y}%`} stroke={isOffline ? '#ef4444' : '#e5e7eb'} strokeWidth="2" opacity={isOffline ? 0.3 : 1} />
                                            {!isOffline && (
                                                <circle r="3" fill={nodesStatus[conn.to] === 'degraded' ? '#f59e0b' : '#6366f1'}>
                                                    <animateMotion dur={`${2 + (idx % 3)}s`} repeatCount="indefinite"><mpath href={`#map_${idx}`}/></animateMotion>
                                                </circle>
                                            )}
                                            <path id={`map_${idx}`} d={`M ${fromNode.x * 10} ${fromNode.y * 10} L ${toNode.x * 10} ${toNode.y * 10}`} fill="none" style={{display: 'none'}} />
                                        </g>
                                    )
                                })}
                            </svg>
                            {initialNodes.map((node) => {
                                const status = nodesStatus[node.id]
                                const isHovered = hoveredNode === node.id
                                const bgStyle = status === 'healthy' ? 'bg-emerald-500 ring-emerald-100' : status === 'degraded' ? 'bg-amber-500 ring-amber-100' : 'bg-red-500 ring-red-100'
                                return (
                                    <div key={node.id} className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 z-20" style={{ left: `${node.x}%`, top: `${node.y}%` }} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}>
                                        <div className="relative group cursor-pointer inline-block">
                                            {node.isHub ? (
                                                <div className={`w-10 h-10 rounded-xl ${bgStyle} shadow-sm flex items-center justify-center hover:scale-105 transition-transform`}><Database className="w-5 h-5 text-white" /></div>
                                            ) : (
                                                <div className={`w-3.5 h-3.5 rounded-full ${bgStyle} ring-4 hover:scale-110 transition-transform mx-auto`} />
                                            )}
                                            <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border border-gray-100 shadow-sm px-2 py-0.5 rounded text-[10px] text-gray-600 transition-opacity ${isHovered ? 'opacity-0' : 'opacity-100'}`}>{node.name}</div>
                                            {isHovered && (
                                                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-44 z-50 text-left">
                                                    <h4 className="font-semibold text-gray-900 text-sm">{node.name}</h4>
                                                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-2 border-b border-gray-50 pb-2">{node.type}</p>
                                                    <div className="flex justify-between items-center mb-1"><span className="text-xs text-gray-500">Status</span><span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${status === 'healthy' ? 'bg-emerald-50 text-emerald-700' : status === 'degraded' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'}`}>{status}</span></div>
                                                    <div className="flex justify-between items-center"><span className="text-xs text-gray-500">Uptime</span><span className="text-xs font-mono text-gray-900">{(status === 'offline' ? 0 : node.baseUptime - (status === 'degraded' ? 2.5 : 0)).toFixed(2)}%</span></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* 5. Modules */}
                    <div className={`grid gap-6 ${isMissionControl ? 'grid-cols-1 lg:col-span-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col h-[380px]">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6 shrink-0">Tower Health</h2>
                            <div className="space-y-3 flex-1 overflow-visible">
                                {[{ id: 't1', n: "Tower A01" }, { id: 't2', n: "Tower B12" }, { id: 't3', n: "Tower C05" }].map((node, i) => {
                                    const status = nodesStatus[node.id] || 'healthy'; const signal = status === 'offline' ? 0 : status === 'degraded' ? 2 : 5
                                    return (
                                        <div key={i} className="flex flex-col p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-900">{node.n}</span>
                                                <span className={`text-[10px] uppercase font-bold ${status === 'healthy' ? 'text-emerald-500' : status === 'degraded' ? 'text-amber-500' : 'text-red-500'}`}>{status}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map(bar => <div key={bar} className={`w-1.5 rounded-sm transition-colors ${signal >= bar ? (status === 'healthy' ? 'bg-emerald-400' : status === 'degraded' ? 'bg-amber-400' : 'bg-red-400') : 'bg-gray-100'}`} style={{ height: `${bar * 3}px` }} />)}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col h-[380px]">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6 shrink-0">Fiber Deployment</h2>
                            <div className="space-y-4 flex-1">
                                {[ {r: "Jakarta", p: kpis.jktProg, c:"bg-indigo-500"}, {r: "Surabaya", p: kpis.surProg, c:"bg-blue-500"}, {r: "Bandung", p: kpis.bdgProg, c:"bg-emerald-500"} ].map((reg, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-end mb-1"><span className="text-sm text-gray-800">{reg.r}</span><span className="text-sm font-semibold text-gray-900">{reg.p}%</span></div>
                                        <div className="w-full bg-gray-100 rounded-full h-1"><div className={`${reg.c} h-1 rounded-full transition-all duration-1000`} style={{ width: `${reg.p}%` }} /></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col h-[380px]">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 shrink-0 flex justify-between items-center">Alerts <span className="flex h-2 w-2 rounded-full bg-red-400 animate-pulse" /></h2>
                            {/* Overflow boundary set! No layout push */}
                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                <AnimatePresence>
                                    {liveAlerts.map((alert) => (
                                        <motion.div key={alert.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="flex items-start gap-3 p-3 rounded border border-gray-50 hover:bg-gray-50 mb-2">
                                            <div className={`shrink-0 mt-0.5 ${alert.severity === 'critical' ? 'text-red-500' : alert.severity === 'warning' ? 'text-amber-500' : 'text-blue-500'}`}><alert.icon className="w-3.5 h-3.5" /></div>
                                            <div className="min-w-0">
                                                <p className="text-sm text-gray-900 leading-tight">{alert.message}</p>
                                                <p className="text-xs text-gray-400 mt-1">{alert.location}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. Insights (Expandable) */}
                <ExpandableSection title="AI Infrastructure Insights" isOpen={showExpandedInsights} onToggle={() => setShowExpandedInsights(!showExpandedInsights)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(activeInsightOverride ? [activeInsightOverride, ...ALL_INSIGHTS.slice(0,3)] : ALL_INSIGHTS).map((insight, i) => (
                            <div key={i} className={`p-4 rounded-xl border ${activeInsightOverride && i===0 ? 'border-red-200 bg-red-50/50' : 'border-gray-100 bg-gray-50/50'} flex gap-4`}>
                                <div className={`shrink-0 p-2.5 rounded-lg ${insight.bg} ${insight.color} h-fit`}><insight.icon className="w-5 h-5" /></div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-sm font-semibold text-gray-900">{insight.title}</h4>
                                        <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${insight.color === 'text-amber-600' ? 'bg-amber-100 text-amber-700' : insight.color === 'text-emerald-600' ? 'bg-emerald-100 text-emerald-700' : insight.color === 'text-red-600' ? 'bg-red-100 text-red-700' : 'bg-indigo-100 text-indigo-700'}`}>{insight.tag}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{insight.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                {/* 7. Scenarios (Expandable) */}
                <ExpandableSection title="Infrastructure Scenario Simulation" isOpen={showScenarios} onToggle={() => setShowScenarios(!showScenarios)}>
                    <div className="flex flex-col md:flex-row flex-wrap gap-3">
                        {activeScenario && <div className="w-full text-sm font-bold text-red-600 mb-2 border border-red-200 bg-red-50 p-2 rounded animate-pulse">Simulation Active: Resets in {scenarioTimeLeft}s</div>}
                        <button onClick={() => triggerScenario('tower_failure', 'Critical Tower Failure', 'critical', 'Tower B12')} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 shadow-sm disabled:opacity-50 flex items-center gap-2" disabled={!!activeScenario}><RadioTower className="w-4 h-4" /> Simulate Tower Failure</button>
                        <button onClick={() => triggerScenario('fiber_outage', 'Major Fiber Cut Detected', 'critical', 'Trunk SUR-JKT')} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 shadow-sm disabled:opacity-50 flex items-center gap-2" disabled={!!activeScenario}><Route className="w-4 h-4" /> Simulate Fiber Outage</button>
                        <button onClick={() => triggerScenario('cyber_intrusion', 'Multiple Unauthorized Access Attempts', 'critical', 'Data Hub JKT')} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 shadow-sm disabled:opacity-50 flex items-center gap-2" disabled={!!activeScenario}><ShieldAlert className="w-4 h-4" /> Simulate Cyber Intrusion</button>
                        <button onClick={() => triggerScenario('traffic_surge', 'Unprecedented Traffic Surge Detected', 'warning', 'Regional Dist.')} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 shadow-sm disabled:opacity-50 flex items-center gap-2" disabled={!!activeScenario}><Activity className="w-4 h-4" /> Simulate Traffic Surge</button>
                    </div>
                </ExpandableSection>

                {/* 8. Context-Aware AI Assistant (New) */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[450px]">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Bot className="w-5 h-5" /></div>
                        <div>
                            <h2 className="text-base font-semibold text-gray-900">Infrastructure AI Assistant</h2>
                            <p className="text-xs text-gray-500 border-l-2 border-emerald-400 pl-2 mt-0.5">Context Engine Online</p>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
                        {chatMessages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-3 max-w-full`}>
                                {msg.role === 'ai' && <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1"><Bot className="w-4 h-4" /></div>}
                                <div className={`p-4 rounded-2xl max-w-[85%] text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                                    {msg.text}
                                </div>
                                {msg.role === 'user' && <div className="shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mt-1"><User className="w-4 h-4" /></div>}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="p-4 bg-white border-t border-gray-100">
                        <form onSubmit={handleChatSubmit} className="relative flex items-center">
                            <input 
                                type="text" value={chatInput} onChange={e => setChatInput(e.target.value)}
                                placeholder="Ask about tower health, latency, alerts, or predictions..." 
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                            <button type="submit" disabled={!chatInput.trim()} className="absolute right-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    )
}
