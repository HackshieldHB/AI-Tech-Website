"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import Logo from "@/components/ui/Logo"
import { motion, AnimatePresence } from "framer-motion"

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
    const [scrolled, setScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-[0_2px_20px_rgba(0,0,0,0.07)] py-3"
                    : "bg-white border-b border-gray-200 shadow-sm py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <Logo size="md" showName={true} />
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <li key={link.name} className="relative">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative px-3 py-2 rounded-lg text-sm font-medium transition-colors tracking-wide",
                                            isActive
                                                ? "text-blue-600"
                                                : "text-muted-foreground hover:text-blue-600 hover:bg-blue-50"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navActiveUnderline"
                                                className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="flex items-center gap-4">
                        <Button variant="default" asChild className="shadow-blue-200 shadow-md hover:shadow-blue-300 transition-shadow">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {mobileMenuOpen ? (
                            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <X className="w-6 h-6" />
                            </motion.span>
                        ) : (
                            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <Menu className="w-6 h-6" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white/97 backdrop-blur-md border-b border-gray-200 shadow-lg"
                    >
                        <ul className="flex flex-col gap-1 px-4 pt-2 pb-4">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center text-base font-medium py-2.5 px-3 rounded-lg transition-colors",
                                            pathname === link.href
                                                ? "text-blue-600 bg-blue-50"
                                                : "text-foreground hover:text-blue-600 hover:bg-blue-50"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                className="pt-3"
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <Button variant="default" className="w-full" asChild>
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                                </Button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
