'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { name: string; href: string; }

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  accent?: string; // optional colored keyword in title
}

export default function PageHeader({ title, subtitle, breadcrumbs, accent }: PageHeaderProps) {
  const parts = accent ? title.split(accent) : [title];

  return (
    <section className="relative pt-40 pb-24 bg-[#001D4A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap"
          >
            <Link href="/" className="hover:text-[#FFD700] transition-colors font-medium">Beranda</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-4 h-4 text-white/20" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#FFD700] font-bold">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#FFD700] transition-colors font-medium">{crumb.name}</Link>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-tight tracking-tight max-w-4xl"
        >
          {accent ? (
            <>
              {parts[0]}
              <span className="text-[#FFD700] italic">{accent}</span>
              {parts[1]}
            </>
          ) : title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-xl text-white/70 font-medium max-w-2xl leading-relaxed border-l-4 border-[#FFD700] pl-6"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
