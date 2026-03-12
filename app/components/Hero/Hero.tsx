import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black text-center md:text-left">
            Bibit Tanaman Buah Unggul untuk{" "}
            <span className="text-hijauSFG">Kebun & Sawah</span> Anda
          </h1>

          {/* Description */}
          <p className="mt-6 text-abuSFG text-lg text-center md:text-left">
            Dapatkan bibit buah kualitas premium yang siap tanam dan adaptif di
            iklim tropis Indonesia. Hasil maksimal, perawatan mudah.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap sm:flex-nowrap">
            {/* Button Produk */}
            <Link
              href="#produk"
              className="flex items-center justify-center h-[48px] px-6
  bg-hijauSFG text-white rounded-xl shadow-md
  font-semibold transition-all duration-300
  hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]"
            >
              Lihat Tanaman
            </Link>

            {/* Button Whatsapp */}
            <Link
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              className="flex items-center justify-center gap-2 h-[48px] px-6
  border-2 border-abuSFG bg-gray-50 text-hijauSFG
  rounded-xl shadow-md font-semibold
  transition-all duration-300
  hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]"
            >
              <FaWhatsapp className="text-hijauWA text-2xl" />
              Chat WhatsApp
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-xl aspect-video relative rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/kebun.jpg"
              alt="Bibit tanaman buah"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
