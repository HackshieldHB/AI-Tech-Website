"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import Logo from "@/components/ui/Logo"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Platform & Technology", href: "/platform" },
    { name: "Industries", href: "/industries" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "About", href: "/about" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-200 py-4 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Logo size="md" showName={true} />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-secondary-light tracking-wide",
                                        pathname === link.href ? "text-secondary-light" : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4">
                        <Button variant="default" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-lg">
                    <ul className="flex flex-col gap-4 px-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block text-lg font-medium py-2 text-foreground hover:text-secondary-light"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 flex flex-col gap-3">
                            <Button variant="default" className="w-full" asChild>
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
