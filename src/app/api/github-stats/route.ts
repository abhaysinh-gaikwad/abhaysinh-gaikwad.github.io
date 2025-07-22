import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const url =
    "https://github-readme-stats.vercel.app/api?username=abhaysinh-gaikwad";
  const response = await axios.get(url, { responseType: "arraybuffer" });
  return new Response(response.data, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
