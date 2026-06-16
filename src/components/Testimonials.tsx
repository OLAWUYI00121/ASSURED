/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, MessageSquareQuote, Quote } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const bgImg = "https://static.rfstat.com/renderforest/images/website_maker_images/components/component-images/testimonial6-5.0.0.jpeg";

  const reviews: Testimonial[] = [
    {
      id: "review-sarah-holland",
      author: "Sarah Holland",
      role: "Property Owner",
      text: "Allied Barton Security Company provided exceptional service! From the initial consultation to the final implementation, I felt assured that my assets were well protected. Their team's professionalism is unmatched.",
      rating: 5,
    },
    {
      id: "review-david-watson",
      author: "David Watson",
      role: "Property Manager",
      text: "I have worked with several security companies, but Allied Barton stands out for their reliability. Their secure storage solutions gave me confidence, and their customer service was outstanding. I highly recommend them!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title layout */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-900/10 border border-blue-900/20 rounded-sm py-1 px-3 text-blue-900"
            id="testimonials-tag"
          >
            <Quote className="h-3.5 w-3.5 text-blue-600" />
            <span className="font-sans text-[10px] tracking-widest uppercase font-bold">
              Trusted Reviews
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase"
            id="testimonials-heading"
          >
            Testimonials About Us
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            className="h-[2px] bg-blue-900 mx-auto"
          />
          
          <p className="font-sans text-slate-600 text-sm sm:text-base mt-2" id="testimonials-subtitle">
            Here's what a few of our clients have to say:
          </p>
        </div>

        {/* Testimonials Review Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-sm p-8 relative flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
              id={review.id}
            >
              <div className="space-y-4 text-left">
                {/* Visual Quote Icon & Star Ratings */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-900 p-2 bg-blue-900/10 rounded-sm">
                    <MessageSquareQuote className="h-5 w-5" />
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote body */}
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center space-x-4 border-t border-slate-200 pt-6 mt-6">
                {/* Circle Avatar placeholder with Initials */}
                <div className="h-11 w-11 rounded-sm bg-blue-900 text-white flex items-center justify-center font-sans font-extrabold text-xs">
                  {review.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-slate-900 text-sm">
                    {review.author}
                  </h4>
                  <p className="font-sans text-[10px] text-blue-600 tracking-wider uppercase font-extrabold mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
