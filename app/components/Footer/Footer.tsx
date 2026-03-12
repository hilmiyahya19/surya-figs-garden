import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* LEFT */}
          <div>
            {/* Logo */}
            <Image
              src="/images/logo-SFG.png"
              alt="Surya Figs Garden"
              width={180}
              height={60}
              className="mb-4"
            />

            {/* Description */}
            <p className="text-hitamCerah text-md">
              Surya Figs Garden menyediakan bibit tanaman buah unggul terpercaya
              untuk kebutuhan perorangan maupun korporasi.
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <p className="font-bold text-black mb-4 text-lg">Hubungi Kami</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Image
                  src="/images/icon-location.png"
                  alt="alamat"
                  width={20}
                  height={20}
                />
                <p className="text-hitamCerah text-md">
                  Jl. Kebun Raya No. 123, Kediri, Jawa Timur, Indonesia
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/images/icon-wa.png"
                  alt="phone"
                  width={20}
                  height={20}
                />
                <p className="text-hitamCerah text-md">+62 812 3456 789</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="font-bold text-black mb-4 text-lg">Jam Operasional</p>

            <div className="space-y-2">
              <p className="text-hitamCerah text-md">Senin - Sabtu: 08.00 - 17.00</p>

              <p className="text-hitamCerah text-md">
                Minggu: <span className="text-[#EF4444]">Tutup</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-center text-hitamCerah text-md">
            © 2026 SuryaFigsGarden. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
