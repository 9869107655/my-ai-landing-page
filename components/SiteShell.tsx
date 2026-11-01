import { Header } from "./Header";
import { Footer } from "./Footer";
import { ButtonLink } from "./ButtonLink";
export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header /><main id="main">{children}</main><Footer /><div className="fixed inset-x-3 bottom-3 z-30 sm:hidden"><ButtonLink className="w-full shadow-lg">Book a Free Consultation</ButtonLink></div></>; }
