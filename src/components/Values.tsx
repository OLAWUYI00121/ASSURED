/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ClipboardCheck, Sparkles, HelpCircle, Shield, ArrowRight } from "lucide-react";

export default function Values() {
  const bgImg = "https://hosting.renderforestsites.com/25344950/1261477/media/d92a49ffcf0f44f3f5c04d8ad2d76da4.jpg";
  const [activeTab, setActiveTab] = useState<"collect" | "use">("collect");

  const commitments = [
    { title: "Superior Training", desc: "The delivery of superior security services training for our team members." },
    { title: "Management Concepts", desc: "The application of up-to-date security team management concepts." },
    { title: "Process Improvement", desc: "The constant improvement of our processes and services." },
    { title: "Management Continuity", desc: "Consistent continuity in our middle and senior management ranks." },
  ];

  return (
    <section id="values" className="relative py-20 lg:py-28 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Values & Commitments - Left */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-blue-900/10 border border-blue-900/20 rounded-sm py-1 px-3 text-blue-900" id="values-tag">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-sans text-[10px] tracking-wider uppercase font-bold">
                  Corporate Ethos
                </span>
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase" id="values-heading">
                Our Values
              </h2>
              <div className="h-[2px] w-12 bg-blue-900" />
            </div>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              We value honesty, integrity, customer focus, creative criticism, and efficient professional actions. We respect highly motivated people and team spirit. We positively support safety, security, society, and the law. Guided by these values, we provide superior rewards to all productive Assured Security associates.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="font-sans font-extrabold text-slate-900 text-sm uppercase tracking-wider">
                Our Client Commitments:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {commitments.map((com, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-white rounded-sm border border-slate-200 shadow-sm space-y-2 hover:border-blue-300 hover:shadow-md transition-all"
                    id={`commitment-item-${index}`}
                  >
                    <span className="inline-block px-2.5 py-1 bg-blue-900/10 text-blue-900 border border-blue-900/25 rounded-sm font-sans text-xs font-bold leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-blue-900 uppercase tracking-wide">
                      {com.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {com.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Policy Drawer Card - Right */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white rounded-sm p-8 shadow-xl border border-slate-800 relative overflow-hidden"
              id="assurance-policy-card"
            >
              {/* Background Accent Lines */}
              <div className="absolute -bottom-8 -left-8 text-blue-900/10 pointer-events-none">
                <Shield className="h-44 w-44" />
              </div>

              <div className="border-b border-slate-800 pb-5 mb-6 text-left">
                <span className="font-sans text-[10px] text-blue-400 tracking-widest font-bold uppercase block mb-1">
                  Information Statement
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl text-white tracking-wide uppercase" id="policy-card-title">
                  Assured Security Services
                </h3>
                <p className="font-sans text-[10px] text-slate-400 mt-1 uppercase">
                  Last update: January 17, 2024
                </p>
              </div>

              {/* Custom Action Tab Switchers */}
              <div className="grid grid-cols-2 gap-2 bg-slate-950/60 p-1.5 rounded-sm mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab("collect")}
                  className={`py-2 rounded-sm font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "collect" 
                      ? "bg-blue-900 text-white shadow-md font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  id="tab-btn-collect"
                >
                  1. Collected Info
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("use")}
                  className={`py-2 rounded-sm font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "use" 
                      ? "bg-blue-900 text-white shadow-md font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  id="tab-btn-use"
                >
                  2. Processing / Uses
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="min-h-[220px] flex flex-col justify-between">
                <div>
                  {activeTab === "collect" ? (
                    <motion.div
                      key="collect"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4 text-left"
                    >
                      <h4 className="font-sans font-bold text-sm text-blue-400 flex items-center space-x-2 uppercase tracking-wide">
                        <HelpCircle className="h-4.5 w-4.5 text-blue-400 flex-shrink-0" />
                        <span>What information do we collect?</span>
                      </h4>
                      <p className="font-sans text-sm text-slate-300 leading-relaxed text-left">
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. The personal information we collect may include names, phone numbers, email addresses, mailing addresses, and other similar information.
                      </p>
                      <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-sm">
                        <p className="font-sans text-xs text-blue-400 italic">
                          * All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="use"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4 text-left"
                    >
                      <h4 className="font-sans font-bold text-sm text-blue-400 flex items-center space-x-2 uppercase tracking-wide">
                        <ClipboardCheck className="h-4.5 w-4.5 text-blue-400 flex-shrink-0" />
                        <span>How do we use your information?</span>
                      </h4>
                      <p className="font-sans text-sm text-slate-300 leading-relaxed text-left">
                        We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or with user consent. We use the details we collect or receive:
                      </p>
                      <ul className="grid grid-cols-1 gap-2 pl-2">
                        <li className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckIcon />
                          <span>To contact you regarding asset protective custody needs.</span>
                        </li>
                        <li className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckIcon />
                          <span>To administer tailored lock, guard and monitoring layouts.</span>
                        </li>
                        <li className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckIcon />
                          <span>To guarantee secure transport coordination limits.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-800 mt-6 text-left">
                  <a
                    href="#contact"
                    className="font-sans text-xs text-blue-400 hover:text-white font-bold tracking-widest flex items-center justify-between uppercase transition-colors"
                    id="policy-cta"
                  >
                    <span>Connect securely</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="text-blue-400 flex-shrink-0 mt-0.5">
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </span>
  );
}
