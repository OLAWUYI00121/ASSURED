/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Shield, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Values", href: "#values" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-200 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-3 group" id="logo-link">
            <div className="w-10 h-10 bg-blue-900 flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-extrabold text-xl tracking-tight text-blue-900 uppercase leading-none">
                ASSURED
              </span>
              <span className="font-sans text-[10px] tracking-widest text-slate-500 uppercase leading-none mt-1">
                Security Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs font-bold tracking-wider text-slate-600 hover:text-blue-900 transition-colors relative py-2 uppercase group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Fast Call Action */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:615-422-5084"
              className="flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white font-bold tracking-wider px-6 py-2.5 rounded-sm text-xs transition-all shadow-md uppercase"
              id="cta-nav-call"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>615-422-5084</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-900 p-2 rounded-md focus:outline-none"
              id="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-lg overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-all uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:615-422-5084"
                  className="flex items-center justify-center space-x-2 w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-sm text-xs uppercase tracking-wider transition-colors"
                  id="cta-mob-call"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call 615-422-5084</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
