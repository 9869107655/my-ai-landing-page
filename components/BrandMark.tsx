import Image from "next/image";

export function BrandMark() {
  return (
    <Image
      src="/logo.png"
      alt="Digitbisal logo"
      width={220}
      height={80}
      priority
      className="h-auto w-[150px] drop-shadow-[0_0_10px_rgba(0,0,0,0.35)] sm:w-[190px]"
    />
  );
}
