/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-container" className="min-h-screen bg-brand-charcoal text-white selection:bg-brand-gold/30 selection:text-brand-gold-light antialiased overflow-x-hidden">
      {/* Premium Header/Navigation bar */}
      <Navbar />

      <main id="main-content-layout">
        {/* Dynamic Parallax Hero landing block */}
        <Hero />

        {/* Detailed split description content */}
        <About />

        {/* Structured double column services block */}
        <Services />

        {/* Interactive Values tabber & policy disclosures */}
        <Values />

        {/* Client rating reviews section */}
        <Testimonials />

        {/* Dynamic secure inquiry form & contact guides */}
        <Contact />
      </main>

      {/* Footer attribution and quick return anchor */}
      <Footer />
    </div>
  );
}
