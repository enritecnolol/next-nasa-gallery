import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import formatResponse from "../../../lib/formatResponse";

const API_TOKEN = process.env.NASA_API_TOKEN;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const camera = searchParams.get("camera");
    const earthDate = searchParams.get("earthDate");
    const sol = searchParams.get("sol") as string;
    const rover = searchParams.get("rover");
    const page = searchParams.get("page");

    let filterParams: { [key: string]: string | number } = {};

    if (camera) filterParams.camera = camera as string;

    if (earthDate) {
      filterParams.earth_date = earthDate;
    } else {
      filterParams.sol = sol as string;
    }

    const { data } = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
      {
        params: {
          api_key: API_TOKEN,
          page,
          ...filterParams,
        },
      }
    );
    const photos = formatResponse(data.photos);
    return NextResponse.json({ data: photos }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "SOMETHING WENT WRONG", error },
      { status: 500 }
    );
  }
}
