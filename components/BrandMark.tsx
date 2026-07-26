import Image from "next/image";

export function BrandMark() {
  return (
    <Image
      src="/logo.png"
      alt="Digitbisal logo"
      width={220}
      height={80}
      priority
      className="h-auto w-[150px] sm:w-[190px]"
    />
  );
}
