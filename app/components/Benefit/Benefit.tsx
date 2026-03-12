import BenefitCard from "@/app/components/Benefit/BenefitCard";
import { benefits } from "@/app/data/benefit";

export default function Benefit() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Mengapa Memilih Kami?
          </h2>

          <p className="text-black/80 text-md">
            Kami mengedepankan kualitas dan kepuasan pelanggan dengan
            menyediakan bibit buah pilihan terbaik.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((item, index) => (
            <BenefitCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
