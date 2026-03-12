import ProdukCard from "@/app/components/Produk/ProdukCard";
import { products } from "@/app/data/produk";

export default function Produk() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Katalog Bibit</h2>

          <p className="text-black/80 text-md">
            Pilihan bibit buah yang banyak dicari dan terbukti cepat berbuah di
            lahan Indonesia.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((item, index) => (
            <ProdukCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
