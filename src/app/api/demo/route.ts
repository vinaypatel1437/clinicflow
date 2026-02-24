import { NextRequest, NextResponse } from "next/server";

type DemoRequestBody = {
  name: string;
  phone: string;
  service: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<DemoRequestBody>;
    const { name, phone, service } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const zapierWebhookUrl =
      "https://hooks.zapier.com/hooks/catch/26574155/ucjbzm3/";
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("service", service);
    const response = await fetch(zapierWebhookUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Zapier webhook error", await response.text());
      return NextResponse.json(
        { success: false, error: "Failed to send data to Zapier" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/demo", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

