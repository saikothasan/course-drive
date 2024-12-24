import { NextResponse } from "next/server";
import axios from "axios";

const GOOGLE_API_URL = "https://www.googleapis.com/customsearch/v1";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required." }, { status: 400 });
  }

  try {
    const response = await axios.get(GOOGLE_API_URL, {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_CX,
        q: query,
        fileType: "pdf",
        num: 10,
      },
    });

    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch data from Google API." }, { status: 500 });
  }
}
