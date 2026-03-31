"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '../FooterSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brandName = "Cogni";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden flex flex-col">
      
      {/* 1. TOP CTA BAR */}
      <div className="bg-slate-900 border-b border-slate-800 relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to upgrade your space?</h3>
            <p className="text-slate-400">Get a free consultation with our smart home engineers.</p>
          </div>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-[#FF8A4C] hover:bg-[#FF7A33] text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap active:scale-95"
          >
            Get a Quote →
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 pt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-block mb-1">
              <div className="relative h-10 w-40 md:h-36 md:w-48">
                <Image 
                  src="/images/cogni-logo.png" 
                  alt="Cogni" 
                  unoptimized={true}
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="500px"
                />
              </div>
            </Link>
            <p className="text-slate-500 leading-relaxed max-w-sm text-sm font-medium mb-8">
              {footerData.brandDescription}
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-4">
               <SocialIcon type="linkedin" />
               <SocialIcon type="twitter" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <FooterColumn title="Solutions" links={footerData.solutions} />
            <FooterColumn title="Company" links={footerData.company} />
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4">
                <li className="text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                  {footerData.contact.address}
                </li>
                <li><a href={`mailto:${footerData.contact.email}`} className="text-sm text-slate-900 font-bold hover:text-[#FF8A4C] transition-colors">{footerData.contact.email}</a></li>
                <li><a href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`} className="text-sm text-slate-900 font-bold hover:text-[#FF8A4C] transition-colors">{footerData.contact.phone}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 bg-white relative z-20 px-6 lg:px-12">
        <p className="text-sm text-slate-500 font-medium">
          © {currentYear} Cogni Smart Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* 4. MASSIVE BACKGROUND TEXT */}
      <div
        className="bg-gradient-to-b from-slate-200 via-slate-100 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-8 font-black tracking-tighter pointer-events-none select-none text-center px-4 z-0 w-full"
        style={{ fontSize: 'clamp(4rem, 18vw, 15rem)' }}
      >
        {brandName.toUpperCase()}
      </div>

      {/* 5. SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="group absolute hover:border-slate-300 duration-500 shadow-[0_0px_30px_rgba(0,0,0,0.05)] bottom-16 md:bottom-20 backdrop-blur-md rounded-[2rem] bg-white/60 left-1/2 border border-slate-200 flex items-center justify-center p-2.5 -translate-x-1/2 z-30 transition-all hover:-translate-y-2"
      >
        <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-all duration-500 group-hover:from-[#FF8A4C] group-hover:to-[#FF6B1A]">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform">
            <Image
              src="/images/cogni-logo.png"
              alt="Top"
              unoptimized={true}
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </div>
      </button>

      <div className="bg-gradient-to-t from-white via-white/80 to-transparent absolute bottom-0 w-full h-32 z-10 pointer-events-none"></div>
    </footer>
  );
}

/* Helper Components */
function FooterColumn({ title, links }) {
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-sm text-slate-500 hover:text-[#FF8A4C] font-medium transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ type }) {
  // Add SVG paths for LinkedIn/Twitter here
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF8A4C] hover:text-white transition-all border border-slate-200">
      <span className="sr-only">{type}</span>
      {/* Icon SVG... */}
    </a>
  );
}