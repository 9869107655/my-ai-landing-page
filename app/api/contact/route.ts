import { NextResponse } from "next/server";

const FORM_RECIPIENT = "binamthapa988@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.company) return NextResponse.json({ ok: true });
    if (!body.name || !body.email || !body.goal || !body.message || !body.consent) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    // This may be overridden later if Digital Binam changes email providers.
    const endpoint = process.env.CONTACT_FORM_ENDPOINT ?? `https://formsubmit.co/ajax/${FORM_RECIPIENT}`;
    const deliveryPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone || "Not provided",
      business_name: body.businessName || "Not provided",
      website_or_social_url: body.website || "Not provided",
      main_business_goal: body.goal,
      message: body.message,
      _subject: `New Digital Binam website enquiry from ${body.name}`,
      _replyto: body.email,
      _template: "table"
    };
    const formPage = request.headers.get("referer") ?? request.headers.get("origin") ?? "http://localhost:3000/contact";
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Referer: formPage },
      body: JSON.stringify(deliveryPayload)
    });
    const result = await upstream.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
    if (result?.message?.toLowerCase().includes("needs activation")) {
      return NextResponse.json({ activationRequired: true }, { status: 202 });
    }
    if (!upstream.ok || (result?.success !== true && result?.success !== "true")) {
      return NextResponse.json({ error: "Your message could not be delivered. Please try again or email binamthapa988@gmail.com." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send your message. Please try again or email binamthapa988@gmail.com." }, { status: 400 });
  }
}
