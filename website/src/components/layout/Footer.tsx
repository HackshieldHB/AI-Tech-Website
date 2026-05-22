import Link from "next/link"
import { Instagram, Linkedin, MessageCircle } from "lucide-react"
import Logo from "@/components/ui/Logo" // Using MessageCircle for WhatsApp

export default function Footer() {
    const currentYear = 2026

    return (
        <footer className="bg-white py-16 border-t border-gray-200 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo size="md" showName={true} />
                        </Link>
                        <div className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            <p className="font-semibold text-gray-800 mb-1">PT Integra Aplikasi Artifisial</p>
                            <p>Jl. Gelora IX No. 16, RT 001 RW 02</p>
                            <p>Kel. Gelora, Kec. Tanah Abang</p>
                            <p>Jakarta Pusat 10270</p>
                            <p className="mt-2 text-primary font-medium hover:text-primary-dark transition-colors">
                                <a href="tel:+628126708467">+62 812 670 8467</a>
                            </p>
                            <p className="mt-1 text-primary font-medium hover:text-primary-dark transition-colors">
                                <a href="mailto:info@aitech-ilt.co.id">info@aitech-ilt.co.id</a>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="https://wa.me/628126708467" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors text-primary border border-blue-100 hover:border-blue-200">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/integraaitech?igsh=MWZzZWVkMmg0NXg2ZA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors text-primary border border-blue-100 hover:border-blue-200">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/in/pt-integra-aplikasi-artifisial-388a053b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors text-primary border border-blue-100 hover:border-blue-200">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-semibold mb-6">Solutions</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-600">
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">FSM Digital Twin</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">AI Nexus</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">TowerSense</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">Smart Construct</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">InfraGuard</Link></li>
                            <li><a href="https://permatrax.tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Permatrax <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-semibold mb-6">Company</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/platform" className="hover:text-primary transition-colors">Platform & Technology</Link></li>
                            <li><Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-semibold mb-6">Legal</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-600">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-end gap-4">
                    <p className="text-sm text-gray-500">
                        © 2026 Integra Aplikasi Artifisial. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
