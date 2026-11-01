"use client";

import { useState, type FormEvent } from "react";

const initial = { name: "", email: "", phone: "", businessName: "", website: "", goal: "", message: "", consent: false, company: "" };
type FormData = typeof initial;
type Status = "idle" | "sending" | "success" | "activation" | "error";

export function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const set = (key: keyof FormData, value: string | boolean) => setData(previous => ({ ...previous, [key]: value }));

  async function submit(event: FormEvent) {
    event.preventDefault(); setError("");
    if (!data.name || !data.email || !data.goal || !data.message || !data.consent) { setStatus("error"); setError("Please complete the required fields and consent checkbox."); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await response.json();
      if (!response.ok && response.status !== 202) throw new Error(body.error || "Unable to send your message.");
      if (body.activationRequired) { setStatus("activation"); return; }
      setStatus("success"); setData(initial);
    } catch (submissionError) { setStatus("error"); setError(submissionError instanceof Error ? submissionError.message : "Unable to send your message."); }
  }

  const fields: [keyof FormData, string, string, boolean?][] = [["name", "Name", "text"], ["email", "Email", "email"], ["phone", "Phone (optional)", "tel", true], ["businessName", "Business name", "text"], ["website", "Website or social media URL (optional)", "url", true]];
  return <form onSubmit={submit} className="surface rounded-3xl p-6 sm:p-8" noValidate><div className="grid gap-5 sm:grid-cols-2">{fields.map(([key, label, type, optional]) => <label key={key} className={key === "businessName" ? "sm:col-span-2" : ""}><span className="text-sm font-bold text-slate-800">{label}{!optional && <span className="text-teal-700"> *</span>}</span><input type={type} required={!optional} value={String(data[key])} onChange={event => set(key, event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900" /></label>)}<label className="sm:col-span-2"><span className="text-sm font-bold text-slate-800">Main business goal <span className="text-teal-700">*</span></span><input required value={data.goal} onChange={event => set("goal", event.target.value)} placeholder="For example: more qualified local enquiries" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900" /></label><label className="sm:col-span-2"><span className="text-sm font-bold text-slate-800">Message <span className="text-teal-700">*</span></span><textarea required rows={5} value={data.message} onChange={event => set("message", event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900" /></label><label className="hidden" aria-hidden="true"><span>Company</span><input tabIndex={-1} autoComplete="off" value={data.company} onChange={event => set("company", event.target.value)} /></label><label className="sm:col-span-2 flex gap-3 text-sm leading-6 text-slate-600"><input className="mt-1 h-4 w-4" type="checkbox" checked={data.consent} onChange={event => set("consent", event.target.checked)} required /><span>I agree that my details may be used to respond to this enquiry. <span className="text-teal-700">*</span></span></label></div>{status === "success" && <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 text-green-800">Thanks—your message has been sent to Digital Binam. I’ll be in touch soon.</p>}{status === "activation" && <p role="status" className="mt-5 rounded-xl bg-amber-50 p-4 text-amber-900">The form needs a one-time activation. Check the Digital Binam inbox and confirm the “Activate Form” email, then submit again.</p>}{status === "error" && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-red-800">{error}</p>}<button disabled={status === "sending"} className="mt-6 rounded-full bg-[#087ea4] px-6 py-3 font-bold text-white disabled:opacity-60">{status === "sending" ? "Sending…" : "Send enquiry"}</button></form>;
}
