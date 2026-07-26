import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl justify-center px-4 py-6 sm:px-6 lg:px-8">
      <BrandMark />
    </header>
  );
}
