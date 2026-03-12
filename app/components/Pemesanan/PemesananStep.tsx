import Image from "next/image";

type StepProps = {
  icon: string;
  title: string;
  description: string;
};

export default function PemesananStep({ icon, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <Image src={icon} alt={title} width={56} height={56} className="mb-4" />

      <p className="font-semibold text-black text-lg">{title}</p>

      <p className="text-hitamCerah text-md mt-2">{description}</p>
    </div>
  );
}
