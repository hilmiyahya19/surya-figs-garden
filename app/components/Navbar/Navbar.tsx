"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Produk", href: "#produk" },
    { name: "Pemesanan", href: "#pemesanan" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo-SFG.png"
              alt="Surya Figs Garden"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-pointer text-black hover:text-hijauSFG transition font-medium text-md"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right empty */}
          <div className="hidden md:block w-[80px]" />

          {/* Mobile button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col items-center py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-black hover:text-hijauSFG font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
