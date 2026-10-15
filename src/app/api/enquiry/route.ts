import { NextResponse } from "next/server";

/**
 * Wire this route to email, CRM, or database when production handling is ready.
 */
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message:
        "Enquiry submission is not configured yet. Please contact the institution directly by email or phone.",
    },
    { status: 503 },
  );
}
