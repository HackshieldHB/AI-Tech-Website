import { SectionTitle } from "@/components/ui/SectionTitle"
import { CheckCircle2, Target, Eye, ShieldCheck, Zap, LineChart } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                        Transforming Infrastructure into <span className="text-primary">Intelligent Ecosystems.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Our journey began as specialists in physical infrastructure and evolved into a digital transformation partner connecting ground-level operations with cloud intelligence.
                    </p>
                </div>

                {/* Vision & Core Values Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Vision */}
                    <div className="bg-blue-50/50 p-10 rounded-2xl border border-blue-100 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <Eye className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-display font-bold text-gray-900">Our Vision</h2>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed italic">
                            "To become a leading AIoT software solution developer redefining industrial efficiency through artificial intelligence and integrated digital connectivity."
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-primary" />
                            Core Values
                        </h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-primary"><Zap className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Innovation</h4>
                                    <p className="text-gray-600">Transform ideas into intelligent solutions.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-primary"><LineChart className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Strategy</h4>
                                    <p className="text-gray-600">Ensure technology aligns with long-term business goals.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-primary"><ShieldCheck className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Quality & Safety (QHSE)</h4>
                                    <p className="text-gray-600">Safety in Field, Security in Data.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-white border border-gray-200 shadow-xl shadow-gray-200/50 rounded-3xl p-10 md:p-14">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-10 text-center">
                        Our Mission
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Develop Intelligent Platforms</h3>
                                <p className="text-gray-600">Build secure and scalable enterprise AIoT platforms.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Democratize AI & IoT</h3>
                                <p className="text-gray-600">Deliver modular plug-and-play solutions.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrate Edge to Cloud</h3>
                                <p className="text-gray-600">Connect sensors, edge computing, and cloud analytics.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Drive Digital Transformation</h3>
                                <p className="text-gray-600">Enable organizations to shift from manual operations to intelligent automation.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
