import type { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  return {
    statusCode: 503,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ok: false,
      message:
        "Enquiry submission is not configured yet. Please contact the institution directly by email or phone.",
    }),
  };
};
