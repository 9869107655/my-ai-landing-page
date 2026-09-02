import Image from "next/image";

export function BrandMark() {
  return (
    <Image
      src="/logo.png"
      alt="Digitbisal logo"
      width={220}
      height={80}
      priority
      className="h-auto w-[150px] brightness-125 contrast-110 drop-shadow-[0_0_12px_rgba(255,225,134,0.42)] sm:w-[190px]"
    />
  );
}
