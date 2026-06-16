/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, ShieldAlert } from "lucide-react";
import { InquiryFormInput } from "../types";

export default function Contact() {
  const [form, setForm] = useState<InquiryFormInput>({
    name: "",
    email: "",
    phone: "",
    service: "Asset Protection",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [ticketNum, setTicketNum] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate encryption and secure dispatch transmission
    setTimeout(() => {
      const randomTicket = "AS-" + Math.floor(100000 + Math.random() * 90000);
      setTicketNum(randomTicket);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Asset Protection",
        message: "",
      });
    }, 1800);
  };

  const contactOptions = [
    {
      title: "Email",
      value: "inc.assuredss@outlook.com",
      href: "mailto:inc.assuredss@outlook.com",
      icon: Mail,
      desc: "Instant digital secure route",
    },
    {
      title: "Phone",
      value: "615-422-5084",
      href: "tel:615-422-5084",
      icon: Phone,
      desc: "Emergency dispatcher trunk link",
    },
    {
      title: "Address",
      value: "Assured Security Services Inc. P.O Box 672 Dacula, GA 30019 United States",
      href: "https://maps.google.com/?q=Dacula,+GA+30019",
      icon: MapPin,
      desc: "Physical corporate registry box",
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coordinates Details - Left */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-blue-900/10 border border-blue-900/20 rounded-sm py-1 px-3 text-blue-900" id="contact-tag">
                <ShieldAlert className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-sans text-[10px] tracking-wider uppercase font-bold">
                  Connection Route
                </span>
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase" id="contact-heading">
                Contact Us
              </h2>
              <div className="h-[2px] w-12 bg-blue-900" />
            </div>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              We welcome your inquiries and feedback. Reach out to us today! Let us understand your protective limits and deploy the ultimate safeguarding coverage.
            </p>

            <div className="space-y-6 pt-4">
              {contactOptions.map((opt, index) => {
                const IconComp = opt.icon;
                return (
                  <motion.a
                    key={index}
                    href={opt.href}
                    target={opt.title === "Address" ? "_blank" : undefined}
                    rel={opt.title === "Address" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-5 bg-white border border-slate-200 hover:border-blue-300 rounded-sm shadow-sm hover:shadow-md transition-all group pointer-events-auto"
                    id={`contact-opt-${opt.title.toLowerCase()}`}
                  >
                    <span className="p-3 bg-blue-900/10 text-blue-900 group-hover:bg-blue-900 group-hover:text-white rounded-sm transition-colors">
                      <IconComp className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-sans font-extrabold text-[10px] text-slate-500 uppercase tracking-wider">
                        {opt.title}
                      </h4>
                      <p className="font-sans font-bold text-sm sm:text-base text-slate-900 mt-1 group-hover:text-blue-900 transition-colors leading-snug break-all sm:break-normal">
                        {opt.value}
                      </p>
                      <span className="font-sans text-[11px] text-slate-500 block mt-1">
                        {opt.desc}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Secure Interactive Dispatch Form - Right */}
          <div className="lg:col-span-7">
            <div className="relative bg-slate-900 text-white rounded-sm p-8 shadow-2xl border border-slate-800 overflow-hidden" id="inquiry-portal">
              
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.div
                    key="dispatch-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-800 pb-4 text-left">
                      <h3 className="font-sans font-black text-xl uppercase tracking-wider text-white">
                        Secure Dispatch Inquiry
                      </h3>
                      <p className="font-sans text-[10px] text-slate-400 mt-1 uppercase">
                        Transmit your safeguarding specifications directly to senior management.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left" id="secure-contact-form">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-sans text-[10px] tracking-wider uppercase text-blue-400 block font-bold">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Robert Vance"
                            className="w-full bg-slate-950/70 border border-slate-800 rounded-sm px-4 py-3 font-sans text-sm focus:border-blue-400 focus:outline-none transition-colors placeholder:text-slate-700 text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-sans text-[10px] tracking-wider uppercase text-blue-400 block font-bold">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="e.g. robert@vancecold.com"
                            className="w-full bg-slate-950/70 border border-slate-800 rounded-sm px-4 py-3 font-sans text-sm focus:border-blue-400 focus:outline-none transition-colors placeholder:text-slate-700 text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-sans text-[10px] tracking-wider uppercase text-blue-400 block font-bold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="e.g. 555-0199"
                            className="w-full bg-slate-950/70 border border-slate-800 rounded-sm px-4 py-3 font-sans text-sm focus:border-blue-400 focus:outline-none transition-colors placeholder:text-slate-700 text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-sans text-[10px] tracking-wider uppercase text-blue-400 block font-bold">
                            Classification *
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full bg-slate-950/70 border border-slate-800 rounded-sm px-4 py-3 font-sans text-sm focus:border-blue-400 focus:outline-none transition-colors text-white"
                          >
                            <option value="Asset Protection" className="bg-slate-950 text-white">Asset protection</option>
                            <option value="24/7 Monitoring" className="bg-slate-950 text-white">24/7 monitoring</option>
                            <option value="Secure Storage" className="bg-slate-950 text-white">Secure storage solutions</option>
                            <option value="Security Escort" className="bg-slate-950 text-white">Security escorts</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-sans text-[10px] tracking-wider uppercase text-blue-400 block font-bold">
                          Safeguard Requirements *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe the goods, valuables, or location criteria requiring protection..."
                          className="w-full bg-slate-950/70 border border-slate-800 rounded-sm px-4 py-3 font-sans text-sm focus:border-blue-400 focus:outline-none transition-colors placeholder:text-slate-700 text-white resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-4 rounded-sm text-xs font-sans leading-relaxed">
                          Please complete all required fields marked with * before submitting.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className={`w-full font-sans font-bold uppercase tracking-wider py-4 px-6 rounded-sm transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer ${
                          status === "submitting"
                            ? "bg-blue-900/50 text-slate-300 cursor-not-allowed"
                            : "bg-blue-900 hover:bg-blue-800 text-white"
                        }`}
                        id="submit-form-btn"
                      >
                        {status === "submitting" ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Encrypting Dispatch...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 text-white" />
                            <span>Transmit Specifications</span>
                          </>
                        )}
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dispatch-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center space-y-6"
                    id="success-message"
                  >
                    <div className="inline-block p-4 bg-blue-900/20 border border-blue-900/30 rounded-full text-blue-400 animate-pulse">
                      <CheckCircle className="h-12 w-12" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-sans font-black text-white text-2xl uppercase tracking-wider">
                        Transmission Complete
                      </h4>
                      <p className="font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Security specifications have been successfully encrypted and dispatched to the Senior Management Desk. An advisor will contact you within 2 hours.
                      </p>
                    </div>

                    {/* Reference Ticket info */}
                    <div className="bg-slate-950/50 border border-slate-800 py-4 px-6 rounded-sm inline-block">
                      <span className="font-sans text-[10px] text-blue-400 uppercase tracking-widest block font-bold">
                        Secure Route Ticket Identifier
                      </span>
                      <span className="font-sans text-xl font-bold text-white tracking-widest mt-1 block">
                        {ticketNum}
                      </span>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="font-sans text-xs text-blue-400 hover:text-white font-bold tracking-widest uppercase border border-slate-800 px-6 py-2.5 rounded-sm bg-slate-950/50 hover:bg-slate-950 transition-all text-center cursor-pointer"
                        id="back-to-form-btn"
                      >
                        Reset Terminal Link
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
