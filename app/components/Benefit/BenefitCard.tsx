import Image from "next/image";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="bg-white shadow-xl rounded-[12px] p-6">
      {/* Icon */}
      <div className="mb-4">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      {/* Content */}
      <h4 className="text-xl font-bold text-black mb-2">{title}</h4>

      <p className="text-abuSFG text-md">{description}</p>
    </div>
  );
}
