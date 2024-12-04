import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    // Create form data
    const formData = new URLSearchParams();
    formData.append("url", url);

    const response = await axios.post(
      "https://cleanuri.com/api/v1/shorten",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = response.data;

    if (!data.result_url) {
      return NextResponse.json(
        { error: "Failed to shorten URL" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      result: {
        full_short_link: data.result_url,
      },
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
