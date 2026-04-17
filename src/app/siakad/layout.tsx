import React from "react";
import SiakadLayout from "@/components/siakad/SiakadLayout";

export const metadata = {
  title: "SIAKAD - Universitas Merdeka Malang",
  description: "Sistem Informasi Akademik",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiakadLayout>{children}</SiakadLayout>;
}
