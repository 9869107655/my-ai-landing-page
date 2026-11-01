export const siteConfig = {
  name: "Digital Binam", businessName: "Digital Binam", email: "binamthapa988@gmail.com",
  phone: "9827716215", location: "Dhulikhel-10, Kavre", linkedin: "[LinkedIn URL]",
  instagram: "[Instagram URL]", calendarUrl: "[Calendar Booking URL]"
} as const;

export function bookingHref() { return siteConfig.calendarUrl.startsWith("http") ? siteConfig.calendarUrl : "/contact#book"; }
