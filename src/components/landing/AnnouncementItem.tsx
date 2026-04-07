'use client';

import React from 'react';
import { Bookmark, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnnouncementItemProps {
  date: string;
  title: string;
  tag?: string;
  delay?: number;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ date, title, tag = 'LLDIKTI VII', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 bg-white border-b border-gray-100 hover:bg-[#FFD700]/10 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col shrink-0">
        <div className="flex items-center gap-2 text-[#001D4A] font-black text-sm mb-1">
          <Calendar className="w-4 h-4 text-[#F57C00]" />
          <span>{date}</span>
        </div>
        <span className="inline-block px-2 py-0.5 bg-[#FFD700] text-[#001D4A] text-[10px] font-black uppercase rounded tracking-wider w-fit">
          {tag}
        </span>
      </div>
      
      <div className="flex-1">
        <h4 className="text-[#001D4A] font-black group-hover:text-[#F57C00] transition-colors line-clamp-2 md:line-clamp-none">
          {title}
        </h4>
      </div>

      <div className="shrink-0 flex items-center justify-end">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-[#001D4A] transition-all duration-300">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementItem;
