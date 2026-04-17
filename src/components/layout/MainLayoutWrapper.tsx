"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import VirtualTour from "@/components/features/VirtualTour";
import Footer from "@/components/Footer";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSiakad = pathname?.startsWith("/siakad");

  if (isSiakad) {
    // Return children directly (without global Navbar and Footer)
    // We will handle the Siakad layout in `src/app/siakad/layout.tsx`
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <VirtualTour />
      <Footer />
    </>
  );
}
