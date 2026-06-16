/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Lock, ShieldAlert } from "lucide-react";

export default function Hero() {
  const bgImg = "https://hosting.renderforestsites.com/25344950/1261477/media/c578f8b1a63daef7e0877f12be71d793.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-102 opacity-45 grayscale-[20%]"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        {/* Cinematic gradients for high-contrast corporate theme readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        
        {/* Professional Polish Dot Pattern and Accent Slices */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)", backgroundSize: "42px 42px" }} />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 skew-x-[-20deg] translate-x-20 mix-blend-overlay" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Left */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Trust Badge Line accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 rounded-sm text-blue-400"
              id="trust-badge"
            >
              <div className="h-[1px] w-8 bg-blue-400"></div>
              <span className="font-sans text-xs font-bold tracking-widest uppercase">
                Elite Protection Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase"
                id="hero-heading"
              >
                Securing Your Assets <br />
                <span className="text-blue-400 font-extrabold">With Unrivaled Precision</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
              id="hero-description"
            >
              Welcome to Assured Security Service Company, your trusted partner in safeguarding valuable assets. Strategically located in the heart of the real estate sector, we specialize in providing secure storage solutions for goods and services. Our expert team is committed to ensuring the highest level of protection, tailored to meet the unique needs of your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
              id="hero-ctas"
            >
              <a
                href="#services"
                className="group flex items-center space-x-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-sm transition-all shadow-lg hover:bg-slate-100 uppercase text-xs tracking-wider"
                id="hero-cta-primary"
              >
                <span>Our Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center space-x-2 bg-transparent hover:bg-white/10 border border-slate-600 hover:border-slate-300 text-white font-bold px-8 py-4 rounded-sm transition-all uppercase text-xs tracking-wider"
                id="hero-cta-secondary"
              >
                <span>Request Consultation</span>
              </a>
            </motion.div>
          </div>

          {/* Quick Stats & Security Widget - Right */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-800 p-8 rounded-sm shadow-2xl space-y-6 overflow-hidden"
              id="security-widget"
            >
              <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 text-blue-900/5 pointer-events-none">
                <ShieldCheck className="h-64 w-64" />
              </div>

              <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
                <span className="p-2.5 rounded-sm bg-blue-900/25 text-blue-400">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-sans font-bold text-white text-sm leading-tight uppercase tracking-wider">
                    Secure Facility Status
                  </h3>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold flex items-center space-x-1 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    <span>ALL SYSTEMS OPERATIONAL</span>
                  </span>
                </div>
              </div>

              {/* Verified Metrics cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/75 border border-slate-800 p-4 rounded-sm flex flex-col justify-between">
                  <span className="font-sans text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                    Coverage
                  </span>
                  <span className="font-sans text-2xl font-black text-white mt-1">
                    24/7/365
                  </span>
                  <span className="font-sans text-[10px] text-slate-400 mt-1">
                    Guaranteed monitoring
                  </span>
                </div>
                <div className="bg-slate-950/75 border border-slate-800 p-4 rounded-sm flex flex-col justify-between">
                  <span className="font-sans text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                    Protected Value
                  </span>
                  <span className="font-sans text-2xl font-black text-white mt-1">
                    $10M+
                  </span>
                  <span className="font-sans text-[10px] text-slate-400 mt-1">
                    Secured cargo & reserves
                  </span>
                </div>
              </div>

              <div className="bg-blue-950/20 border border-blue-900/30 p-4 rounded-sm flex space-x-3 items-center">
                <ShieldCheck className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  Strategically positioned to manage, escort, and store heavy-value assets. Full regulatory adherence.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
