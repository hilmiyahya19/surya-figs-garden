"use client";

import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", to: "beranda" },
    { name: "Produk", to: "produk" },
    { name: "Pemesanan", to: "pemesanan" },
    { name: "Kontak", to: "kontak" },
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
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-green-600"
                className="cursor-pointer text-black hover:text-green-600 transition font-medium text-md"
              >
                {item.name}
              </Link>
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
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-green-600"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-black hover:text-green-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
