import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  project?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const project = (payload.project ?? "").trim();

  if (!name || !email || !project || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and your project." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, project }),
    });

    if (!res.ok) {
      throw new Error(`Sheet webhook responded ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward contact form to Google Sheet:", err);
    return NextResponse.json(
      { error: "Couldn't reach the sheet right now. Please try again." },
      { status: 502 }
    );
  }
}
