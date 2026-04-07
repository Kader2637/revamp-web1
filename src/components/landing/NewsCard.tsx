'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Eye, ArrowRight, Share2 } from 'lucide-react';
import Link from 'next/link';

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: string;
  views: string;
  delay?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, category, title, date, author, views, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-[#FFD700] text-[#001D4A] text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[12px] text-gray-400 font-bold mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#F57C00]" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-[#F57C00]" />
            {author}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#F57C00]" />
            {views}
          </div>
        </div>

        <h3 className="text-xl font-black text-[#001D4A] leading-tight mb-6 group-hover:text-[#F57C00] transition-colors line-clamp-3">
          {title}
        </h3>

        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <Link href="/berita/view" className="inline-flex items-center text-sm font-black text-[#001D4A] tracking-wide uppercase group-hover:text-[#F57C00] transition-all duration-300">
            Baca Selengkapnya
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1" />
          </Link>
          <button className="p-2 text-gray-400 hover:text-[#F57C00] transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
