export function BrandMark() {
  return (
    <div className="inline-flex items-center gap-3 text-white">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-brand-200/70 bg-white/5 shadow-[0_0_35px_rgba(255,209,77,0.12)]">
        <div className="h-5 w-5 rounded-full border-[3px] border-brand-300" />
      </div>
      <span className="text-xl font-semibold tracking-[0.12em] text-white">Digitbisal</span>
    </div>
  );
}
