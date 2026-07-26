"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  activeEmail: string;
  whatsappNumber: string;
  businessName: string;
  websiteOrFacebook: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  activeEmail: "",
  whatsappNumber: "",
  businessName: "",
  websiteOrFacebook: "",
  message: ""
};

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.activeEmail.trim()) {
    errors.activeEmail = "Active email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.activeEmail.trim())) {
    errors.activeEmail = "Please enter a valid email address.";
  }

  if (!values.whatsappNumber.trim()) {
    errors.whatsappNumber = "WhatsApp number is required.";
  } else if (!/^[0-9+\-\s()]{7,}$/.test(values.whatsappNumber.trim())) {
    errors.whatsappNumber = "Please enter a valid phone number.";
  }

  if (!values.businessName.trim()) errors.businessName = "Business name is required.";

  if (values.websiteOrFacebook.trim() && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(values.websiteOrFacebook.trim())) {
    errors.websiteOrFacebook = "Please enter a valid website or Facebook URL.";
  }

  if (!values.message.trim()) errors.message = "Please share a short note.";

  return errors;
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
  optional = false,
  autoComplete
}: {
  id: keyof FormValues;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
  optional?: boolean;
  autoComplete?: string;
}) {
  const base =
    "mt-2 w-full rounded-2xl border bg-white/5 px-4 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-brand-300/70 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-300/20";
  const state = error ? "border-red-400/80" : "border-white/10";

  return (
    <label htmlFor={id} className="block">
      <div className="flex items-center gap-2 text-sm font-medium text-white/88">
        <span>{label}</span>
        {optional ? <span className="text-white/45">(optional)</span> : null}
      </div>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={5}
          className={`${base} ${state} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`${base} ${state}`}
        />
      )}
      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </label>
  );
}

export function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 550);
  };

  return (
    <section id="consultation-form" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-200/80">Book the Call</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One-to-One Consultation
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">
              Receive a personalized discussion focused on your business challenges and opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Customized Strategy for Your Business</p>
                <p className="mt-3 text-base leading-7 text-white/76">
                  Get an AI-powered marketing plan designed around your current situation and business goals.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">What you should have ready</p>
                <ul className="mt-3 space-y-3 text-base leading-7 text-white/76">
                  <li>Your website or Facebook page</li>
                  <li>Your main product or service</li>
                  <li>Your biggest marketing challenge</li>
                  <li>Your goal for the next 90 days</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-200/80">Form</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Book Free Consultation
                </h2>
                <p className="mt-4 text-base leading-7 text-white/72">
                  Fill out the form and we’ll review your details before the consultation.
                </p>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <Field
                  id="fullName"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={values.fullName}
                  onChange={(value) => updateField("fullName", value)}
                  error={errors.fullName}
                  autoComplete="name"
                />
                <Field
                  id="activeEmail"
                  label="Active Email"
                  placeholder="Enter your best email address"
                  value={values.activeEmail}
                  onChange={(value) => updateField("activeEmail", value)}
                  error={errors.activeEmail}
                  type="email"
                  autoComplete="email"
                />
                <Field
                  id="whatsappNumber"
                  label="WhatsApp Number"
                  placeholder="Enter your WhatsApp number"
                  value={values.whatsappNumber}
                  onChange={(value) => updateField("whatsappNumber", value)}
                  error={errors.whatsappNumber}
                  type="tel"
                  autoComplete="tel"
                />
                <Field
                  id="businessName"
                  label="Business Name"
                  placeholder="Enter your business name"
                  value={values.businessName}
                  onChange={(value) => updateField("businessName", value)}
                  error={errors.businessName}
                  autoComplete="organization"
                />
                <Field
                  id="websiteOrFacebook"
                  label="Website or Facebook URL"
                  placeholder="Enter your website or Facebook page"
                  value={values.websiteOrFacebook}
                  onChange={(value) => updateField("websiteOrFacebook", value)}
                  error={errors.websiteOrFacebook}
                  optional
                />
                <Field
                  id="message"
                  label="Anything You Want to Say"
                  placeholder="Share anything else you want us to know"
                  value={values.message}
                  onChange={(value) => updateField("message", value)}
                  error={errors.message}
                  textarea
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-200 via-brand-300 to-brand-400 px-6 py-4 text-base font-semibold text-black shadow-[0_18px_50px_rgba(255,209,77,0.24)] transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Book Free Consultation"}
                </button>

                <p className="text-center text-sm text-white/55">We respect your privacy. No spam.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
