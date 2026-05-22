import { SectionTitle } from "@/components/ui/SectionTitle"
import { Layers, Activity, TowerControl, HardHat, ShieldCheck, Route } from "lucide-react"

const solutions = [
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "FSM Digital Twin",
        core: "Integrates digital twin technology, AR visualization, and IoT data to unify field service management.",
        value: "Enhances operational efficiency by streamlining technician workflows and providing real-time asset visibility.",
        href: null,
    },
    {
        icon: <Activity className="w-8 h-8 text-primary" />,
        title: "AI Nexus",
        core: "Combines distributed IoT sensor networks with AI-driven analytics for comprehensive infrastructure monitoring.",
        value: "Reduces downtime and maintenance costs by proactively predicting and mitigating equipment failures.",
        href: null,
    },
    {
        icon: <TowerControl className="w-8 h-8 text-primary" />,
        title: "TowerSense",
        core: "Evaluates structural health, security threats, and power systems in real time using LoRaWAN edge computing.",
        value: "Ensures continuous operational continuity and robust security for critical telecommunications infrastructure.",
        href: null,
    },
    {
        icon: <HardHat className="w-8 h-8 text-primary" />,
        title: "Smart Construct",
        core: "Provides geo-tagged project monitoring, digital QC checklists, and AI-based structural simulations for construction management.",
        value: "Optimizes project lifecycles and ensures strict quality control through predictive, data-driven insights.",
        href: null,
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "InfraGuard",
        core: "Deploys AI-driven construction monitoring integrated with micro edge data center operations for telecom infrastructure.",
        value: "Secures vital infrastructure assets and accelerates the deployment of next-generation network architectures.",
        href: null,
    },
    {
        icon: <Route className="w-8 h-8 text-primary" />,
        title: "Permatrax",
        core: "Delivers end-to-end FTTH network tracking with real-time crew positioning, geospatial coverage visualization, and rollout progress dashboards.",
        value: "Accelerates fiber deployment timelines and maximizes field workforce productivity through intelligent route management.",
        href: "https://permatrax.tech",
    },
]

export default function SolutionsPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Comprehensive <span className="text-primary">AIoT Software Ecosystem</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        PT. Integra Aplikasi Artifisial builds enterprise-grade digital platforms designed to modernize industrial operations through AI, IoT, and scalable cloud architecture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {solutions.map((sol, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200 group flex flex-col h-full">
                            <div className="mb-6 p-4 rounded-2xl bg-blue-50 inline-block w-min group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white text-primary">
                                {sol.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">{sol.title}</h3>
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Core Component</h4>
                                <p className="text-gray-600 leading-relaxed">{sol.core}</p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Business Value</h4>
                                <p className="text-gray-800 font-medium">{sol.value}</p>
                            </div>
                            {sol.href && (
                                <a
                                    href={sol.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    Visit permatrax.tech
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
