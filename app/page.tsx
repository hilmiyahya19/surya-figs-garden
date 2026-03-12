import Hero from "@/app/components/Hero/Hero";
import Benefit from "@/app/components/Benefit/Benefit";
import Produk from "@/app/components/Produk/Produk";
import Pemesanan from "@/app/components/Pemesanan/Pemesanan";
import Footer from "@/app/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <section id="beranda">
        <Hero />
      </section>

      <section id="benefit">
        <Benefit />
      </section>

      <section id="produk">
        <Produk />
      </section>

      <section id="pemesanan">
        <Pemesanan />
      </section>

      <section id="kontak">
        <Footer />
      </section>
    </>
  );
}
