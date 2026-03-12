import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

type ProdukCardProps = {
  image: string;
  name: string;
  price: string;
  description: string;
};

export default function ProdukCard({
  image,
  name,
  price,
  description,
}: ProdukCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-bold text-black text-xl">{name}</p>

        <p className="font-bold text-hijauSFG mt-1 text-xl">{price}</p>

        <p className="text-hitamCerah mt-2 mb-4 text-md">{description}</p>

        {/* Button */}
        <Link
          href="https://wa.me/62XXXXXXXXXX"
          target="_blank"
          className="mt-auto flex items-center justify-center gap-2 bg-hijauSFG text-white rounded-xl py-2.5 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]"
        >
          <FaWhatsapp className="text-white text-2xl" />
          Tanya via WhatsApp
        </Link>
      </div>
    </div>
  );
}
