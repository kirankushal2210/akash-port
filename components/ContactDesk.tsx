"use client";

import { FormEvent, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  NAME,
  PUBLIC_OFFICE,
  enquiries,
  socials,
} from "@/content/profile";

type FormValues = {
  name: string;
  mobile: string;
  email: string;
  category: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_FORM: FormValues = {
  name: "",
  mobile: "",
  email: "",
  category: "",
  message: "",
};

const MAX_MESSAGE = 1200;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeIndianMobile(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  const stripped =
    digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(stripped) ? stripped : null;
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (values.mobile.trim() && !normalizeIndianMobile(values.mobile)) {
    errors.mobile =
      "Enter a valid 10-digit Indian mobile number, or leave blank.";
  }
  if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address, or leave blank.";
  }
  if (!values.message.trim()) {
    errors.message = "Please enter a brief message or enquiry.";
  } else if (values.message.length > MAX_MESSAGE) {
    errors.message = `Message must be ${MAX_MESSAGE} characters or fewer.`;
  }
  return errors;
}

function buildDraft(values: FormValues) {
  const category = values.category || "General Enquiry";
  const mobile = values.mobile.trim()
    ? `+91 ${normalizeIndianMobile(values.mobile) ?? values.mobile.trim()}`
    : "Not provided";
  const subject = `${category} — ${values.name.trim()}`;
  const body = [
    `To the Office of ${NAME}`,
    "",
    `Full Name: ${values.name.trim()}`,
    `Mobile: ${mobile}`,
    `Email: ${values.email.trim() || "Not provided"}`,
    `Subject: ${category}`,
    "",
    "Message:",
    values.message.trim(),
  ].join("\n");

  return { subject, body };
}

export function ContactDesk() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(
    null,
  );
  const [emailCopied, setEmailCopied] = useState(false);
  const [draftCopyStatus, setDraftCopyStatus] = useState<"idle" | "ok" | "fail">(
    "idle",
  );
  const readyRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      setEmailCopied(false);
    }
  };

  const updateField = (key: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
    if (draft) {
      setDraft(null);
      setDraftCopyStatus("idle");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setDraft(null);
      return;
    }

    setDraft(buildDraft(values));
    setDraftCopyStatus("idle");
    setTimeout(() => readyRef.current?.focus(), 0);
  };

  const fullDraftText = draft
    ? `To: ${CONTACT_EMAIL}\nSubject: ${draft.subject}\n\n${draft.body}`
    : "";

  const handleCopyDraft = async () => {
    try {
      await navigator.clipboard.writeText(fullDraftText);
      setDraftCopyStatus("ok");
    } catch {
      setDraftCopyStatus("fail");
    }
  };

  const handleDownloadVcard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${NAME}`,
      `ORG:${PUBLIC_OFFICE.party}`,
      `TITLE:${PUBLIC_OFFICE.candidacy} (${PUBLIC_OFFICE.constituency})`,
      `TEL;TYPE=CELL:${CONTACT_PHONE.replace(/\s+/g, "")}`,
      `EMAIL;TYPE=INTERNET:${CONTACT_EMAIL}`,
      "END:VCARD",
    ].join("\r\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Akash-Kolluru.vcf";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([fullDraftText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "akash-kolluru-enquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="contact-grid">
      <div className="contact-ledger">
        <div className="contact-ledger__block">
          <p className="label label--green">Direct details</p>
          <p className="contact-ledger__office">
            {PUBLIC_OFFICE.candidacy} · {PUBLIC_OFFICE.party}
          </p>
          <p className="contact-ledger__constituency">
            {PUBLIC_OFFICE.constituency}
          </p>
          <div className="contact-ledger__actions">
            <button
              type="button"
              className="copy-btn"
              onClick={handleDownloadVcard}
            >
              Save Contact (.vcf)
            </button>
            <button
              type="button"
              className="copy-btn print-hide"
              onClick={() => window.print()}
            >
              Print Bio / Save PDF
            </button>
          </div>
        </div>

        <dl className="contact-channels">
          <div className="contact-channels__item">
            <dt className="label">Phone</dt>
            <dd>
              <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}>
                {CONTACT_PHONE}
              </a>
            </dd>
          </div>
          <div className="contact-channels__item">
            <dt className="label">Email</dt>
            <dd className="contact-channels__email-row">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {emailCopied ? "Copied" : "Copy"}
              </button>
            </dd>
          </div>
        </dl>

        <div className="contact-ledger__block">
          <p className="label label--green">Direct enquiries</p>
          <ul className="enquiries">
            {enquiries.map((q) => (
              <li key={q.label}>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(q.subject)}`}
                >
                  <span>{q.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-ledger__block">
          <p className="label label--green">Social channels</p>
          <ul className="social-list">
            {socials.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>
                      <strong>{s.label}</strong> {s.handle}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="social-link social-link--handle">
                    <span>
                      <strong>{s.label}</strong> {s.handle}
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="contact-form-panel">
        <p className="label label--green">Write to the office</p>
        <h3 className="contact-form-panel__title">Prepare an enquiry</h3>

        <form onSubmit={handleSubmit} noValidate className="enquiry-form">
          <div className="field-group">
            <label htmlFor="enq-name">
              Full Name <span className="req">*</span>
            </label>
            <input
              id="enq-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => updateField("name")(e.target.value)}
              aria-invalid={errors.name ? true : undefined}
            />
            {errors.name ? <p className="field-error">{errors.name}</p> : null}
          </div>

          <div className="field-row">
            <div className="field-group">
              <label htmlFor="enq-mobile">
                Mobile <span className="opt">(optional)</span>
              </label>
              <div className="phone-input">
                <span aria-hidden="true">+91</span>
                <input
                  id="enq-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={values.mobile}
                  onChange={(e) => updateField("mobile")(e.target.value)}
                  aria-invalid={errors.mobile ? true : undefined}
                />
              </div>
              {errors.mobile ? (
                <p className="field-error">{errors.mobile}</p>
              ) : null}
            </div>

            <div className="field-group">
              <label htmlFor="enq-email">
                Email <span className="opt">(optional)</span>
              </label>
              <input
                id="enq-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => updateField("email")(e.target.value)}
                aria-invalid={errors.email ? true : undefined}
              />
              {errors.email ? (
                <p className="field-error">{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="enq-category">
              Subject <span className="opt">(optional)</span>
            </label>
            <select
              id="enq-category"
              name="category"
              value={values.category}
              onChange={(e) => updateField("category")(e.target.value)}
            >
              <option value="">Select enquiry type</option>
              {enquiries.map((q) => (
                <option key={q.label} value={q.label}>
                  {q.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="enq-message">
              Message <span className="req">*</span>
            </label>
            <textarea
              id="enq-message"
              name="message"
              rows={4}
              maxLength={MAX_MESSAGE}
              value={values.message}
              onChange={(e) => updateField("message")(e.target.value)}
              aria-invalid={errors.message ? true : undefined}
            />
            <p className="field-counter">
              {values.message.length} / {MAX_MESSAGE}
            </p>
            {errors.message ? (
              <p className="field-error">{errors.message}</p>
            ) : null}
          </div>

          <button type="submit" className="btn btn--primary">
            Prepare Email Draft →
          </button>
        </form>

        <div aria-live="polite">
          {draft ? (
            <div
              ref={readyRef}
              tabIndex={-1}
              role="region"
              aria-labelledby="draft-ready-heading"
              className="draft-ready"
            >
              <h4 id="draft-ready-heading">Draft prepared</h4>
              <p>
                Open your email app to send to {CONTACT_EMAIL}, or copy/save the
                text below.
              </p>
              <div className="draft-ready__actions">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
                  className="btn btn--primary"
                >
                  Open Email App →
                </a>
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="btn btn--secondary"
                >
                  {draftCopyStatus === "ok" ? "Copied" : "Copy Draft"}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadTxt}
                  className="btn btn--secondary"
                >
                  Download .txt
                </button>
              </div>
              {draftCopyStatus === "fail" ? (
                <p className="field-error">
                  Clipboard access was blocked. Use Download .txt or Open Email
                  App instead.
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
