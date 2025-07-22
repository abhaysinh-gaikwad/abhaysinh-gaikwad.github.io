import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://github-readme-streak-stats.herokuapp.com/?user=abhaysinh-gaikwad&ring=5094f0&currStreakLabel=5094f0&fire=5094f0&theme=city_light",
      {
        responseType: "arraybuffer",
      }
    );

    // Convert to Buffer and return as a standard Response
    return new Response(response.data, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error fetching GitHub streak stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch streak stats" },
      { status: 500 }
    );
  }
}
