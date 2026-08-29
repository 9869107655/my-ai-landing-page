import Image from "next/image";

export function BrandMark() {
  return (
    <div className="inline-flex items-center rounded-2xl bg-white/95 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
      <Image
        src="/logo.png"
        alt="Digitbisal logo"
        width={220}
        height={80}
        priority
        className="h-auto w-[150px] sm:w-[190px]"
      />
    </div>
  );
}
