/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { UserCheck, ShieldPlus, Landmark } from "lucide-react";

export default function About() {
  const aboutImg = "https://hosting.renderforestsites.com/25344950/1261477/media/e8b2e364649d54a8ae0d63177c6179f8.jpg";

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Creative Media Split - Left */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative group rounded-sm overflow-hidden shadow-lg border border-slate-200 bg-white p-2"
              id="about-card"
            >
              <img
                src={aboutImg}
                alt="Assured security guards operation room"
                className="w-full h-[350px] sm:h-[450px] object-cover filter brightness-95 rounded-sm transition-transform duration-700 group-hover:scale-101"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent m-2 rounded-sm" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-sm shadow-md flex items-center space-x-4 border border-slate-200">
                <div className="p-3 bg-blue-900 text-white rounded-sm flex-shrink-0">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-blue-900 tracking-wider uppercase">
                    Firm Foundation
                  </h4>
                  <p className="font-sans text-xs text-slate-600 mt-0.5 leading-normal">
                    Highly respected in the private security sector.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Narrative Content - Right */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6 text-left">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-blue-900/10 border border-blue-900/20 rounded-sm py-1 px-3 text-blue-900"
                id="about-tag"
              >
                <ShieldPlus className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-sans text-[10px] tracking-wider uppercase font-bold">
                  Corporate History
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase"
                id="about-heading"
              >
                About Assured security
              </motion.h2>
              <div className="h-[2px] w-12 bg-blue-900" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-slate-600 font-sans text-base sm:text-lg leading-relaxed"
              id="about-paragraphs"
            >
              <p>
                Explore our customized security services designed to protect your assets at <strong className="text-slate-900 font-extrabold">Assured Security Service Company</strong>. From advanced lock setups and access controls to real-time asset protection, our programs prioritize safety above all else.
              </p>
              <p>
                Over the years, we have established a firm foundation and are highly respected in the private security sector. Our team is handpicked for their deep domain expertise, high level of security credentials, and unwavering focus on keeping clients protected.
              </p>
            </motion.div>

            {/* Core USP Callout box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-slate-200 p-6 rounded-sm flex items-start space-x-4 shadow-xs hover:border-blue-300 transition-colors"
              id="about-commitment"
            >
              <span className="p-3 bg-blue-50 text-blue-900 rounded-sm flex-shrink-0 mt-1 border border-blue-100">
                <UserCheck className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-sans font-extrabold text-blue-900 text-sm uppercase tracking-wide">
                  Client Satisfaction is Our Top Priority
                </h4>
                <p className="font-sans text-sm text-slate-600 mt-1 leading-relaxed">
                  We value your trust and support. Our entire framework is optimized to prevent breaches, secure valuables in real estate setups, and give leaders peace of mind.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
