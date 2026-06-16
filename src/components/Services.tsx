/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Eye, Database, Navigation, Lock, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "../types";

export default function Services() {
  const bgImg = "https://hosting.renderforestsites.com/25344950/1261477/media/163d1e931e674f49ea0e8080e07d380d.jpg";

  const services: (ServiceItem & { icon: any; list: string[] })[] = [
    {
      id: "asset-protection",
      title: "Asset protection",
      description: "Benefit from our tailored asset protection plans that ensure the safety of your goods while optimizing security measures.",
      badge: "High-value focus",
      iconName: "ShieldCheck",
      icon: ShieldCheck,
      list: [
        "Tailored custom protection protocols",
        "Risk mitigation & threat planning",
        "Physical asset access checks",
        "Asset compliance & alignment"
      ]
    },
    {
      id: "monitoring-247",
      title: "24/7 monitoring",
      description: "Experience peace of mind with our round-the-clock monitoring services, designed to detect and respond to any security threats swiftly.",
      badge: "Non-stop",
      iconName: "Eye",
      icon: Eye,
      list: [
        "Advanced visual analytics",
        "Rapid alarm dispatcher",
        "Continuous perimeter feedback",
        "Immediate emergency trigger"
      ]
    },
    {
      id: "secure-storage",
      title: "Secure storage solutions",
      description: "Utilize our state-of-the-art facilities for secure storage, combining advanced technology with robust security protocols.",
      badge: "Maximum Security",
      iconName: "Database",
      icon: Database,
      list: [
        "Reinforced facility architecture",
        "Biometric multi-factor logs",
        "Climate and environmental gates",
        "Vigilant dual-auth locking"
      ]
    },
    {
      id: "escorts-escort",
      title: "Security escorts",
      description: "Bank transactions - special events - close personal protections.",
      badge: "VIP escort",
      iconName: "Navigation",
      icon: Navigation,
      list: [
        "Secure bank transit details",
        "High-profile special events safety",
        "Tactical close personal protection",
        "Discreet or high-visibility operations"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-white overflow-hidden text-slate-900 border-b border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with brand context */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-900/10 border border-blue-900/20 rounded-sm py-1 px-3 text-blue-900"
            id="services-tag"
          >
            <Lock className="h-3.5 w-3.5 text-blue-600" />
            <span className="font-sans text-[10px] tracking-widest uppercase font-bold">
              Core Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase"
            id="services-heading"
          >
            Services Offered
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            className="h-[2px] bg-blue-900 mx-auto"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed"
            id="services-subheading"
          >
            Explore our state-of-the-art secure plans crafted specifically for protective continuity, transportation, and safe custody of heavy-worth goods.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-sm p-8 transition-all hover:bg-white hover:shadow-lg flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Card top banner badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-slate-200/60 text-slate-700 border border-slate-200 font-sans text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <span className="text-blue-900 p-3 bg-blue-900/10 rounded-sm block transition-all group-hover:bg-blue-900 group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-blue-900 tracking-wide uppercase mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 border-t border-slate-200 pt-6 mt-2">
                    {service.list.map((item, idy) => (
                      <li key={idy} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="font-sans leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between pointer-events-auto">
                  <a
                    href="#contact"
                    className="font-sans text-xs text-blue-900 hover:text-blue-800 hover:underline font-bold tracking-widest flex items-center space-x-1.5 uppercase transition-colors"
                    id={`service-btn-${service.id}`}
                  >
                    <span>Details</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
