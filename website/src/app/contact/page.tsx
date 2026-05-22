import { SectionTitle } from "@/components/ui/SectionTitle"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Mail, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div>
                        <SectionTitle
                            title="Let’s Build Your Digital Infrastructure."
                            subtitle="Discuss your digital transformation or infrastructure project with our expert team."
                            alignment="left"
                            className="text-gray-900"
                        />

                        <div className="flex flex-col gap-8 mt-12 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-blue-50 text-primary border border-blue-100">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">PT Integra Aplikasi Artifisial</h4>
                                    <p className="text-gray-600 leading-relaxed mt-1">
                                        Jl. Gelora IX No. 16, RT 001 RW 02<br />
                                        Kel. Gelora, Kec. Tanah Abang<br />
                                        Jakarta Pusat 10270
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Buttons Block */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 border-t border-gray-200 pt-6">
                                Connect With Us Directly
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href="https://wa.me/628126708467" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors shadow-md shadow-blue-600/20"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </a>
                                <a 
                                    href="https://www.instagram.com/integraaitech?igsh=MWZzZWVkMmg0NXg2ZA==" 
                                    className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors shadow-md shadow-blue-600/20"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Instagram
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/pt-integra-aplikasi-artifisial-388a053b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                                    className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors shadow-md shadow-blue-600/20"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <Card className="p-8 md:p-10 bg-white border border-gray-200 shadow-xl shadow-gray-200/50 rounded-3xl">
                        <form className="flex flex-col gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" className="h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Company</label>
                                    <input type="text" className="h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="Global Corp" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="john@example.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" className="h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="+62 812 3456 7890" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Inquiry Type</label>
                                <select className="h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select an option...</option>
                                    <option value="infrastructure">Infrastructure Inquiry</option>
                                    <option value="software">Software Development</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                <textarea className="h-32 rounded-lg bg-gray-50 border border-gray-200 p-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm resize-none" placeholder="Tell us about your project requirements..." />
                            </div>

                            <Button size="lg" className="h-14 mt-4 text-lg w-full bg-primary hover:bg-blue-700 text-white shadow-lg shadow-primary/20">Send Message</Button>
                        </form>
                    </Card>

                </div>
            </div>
        </div>
    )
}
