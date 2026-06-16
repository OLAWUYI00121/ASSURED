/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, ChevronUp, Mail, Phone, CalendarRange } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-section" className="bg-slate-900 border-t border-slate-800 text-white pt-16 pb-8 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-900 p-2.5 rounded-sm">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-white uppercase">
                ASSURED SECURITY
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-sm leading-relaxed">
              Your trusted partner in safeguarding high-value goods, corporate reserves, and personal assets. Strategically aligned in the real estate sector.
            </p>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase text-blue-400 tracking-widest">
              Protective Focus
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-sans uppercase tracking-wider">
              <li>Asset Protection plans</li>
              <li>24/7 Threat monitoring</li>
              <li>Dual-auth secure storage</li>
              <li>VIP personal escorts</li>
            </ul>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase text-blue-400 tracking-widest">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-sans">
              <li className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <span>inc.assuredss@outlook.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <span>615-422-5084</span>
              </li>
              <li className="flex items-center space-x-2">
                <CalendarRange className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <span>Operating 24/7/365</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-2 text-center sm:text-left">
            <p className="font-sans text-[11px] text-slate-400">
              © {currentYear} Assured Security Service Company. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] text-slate-500 max-w-xl leading-relaxed">
              Disclaimer: This website functions as a premium, high-contrast, fully functional replacement copy matching the textual specifications of the original Renderforest asset registry. It is not affiliated with nor managed by Renderforest.
            </p>
          </div>

          {/* Action scroll top */}
          <button
            type="button"
            onClick={handleScrollTop}
            className="p-3 bg-slate-950/60 border border-slate-800 text-blue-400 hover:text-white rounded-sm hover:-translate-y-1 transition-all cursor-pointer shadow-md"
            id="scroll-to-top-btn"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
