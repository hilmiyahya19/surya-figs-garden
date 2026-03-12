import PemesananStep from "@/app/components/Pemesanan/PemesananStep";
import { steps } from "@/app/data/pemesanan";
import { FaArrowRight } from "react-icons/fa";

export default function Pemesanan() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          Pemesanan
        </h2>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <PemesananStep
                icon={step.icon}
                title={step.title}
                description={step.description}
              />

              {index !== steps.length - 1 && (
                <FaArrowRight className="hidden md:block text-gray-400 md:ml-6 text-4xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
