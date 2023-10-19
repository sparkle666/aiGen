// import { NextResponse, NextRequest } from "next/server";

// export const GET = async (request: NextRequest
// ) => {

//   // const data = await res.json()
//   const prompt = request.nextUrl.searchParams.get("prompt")

//   try {
//     const response = await fetch("https://api.replicate.com/v1/predictions", {
//       method: "POST",
//       headers: {
//         Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         // Pinned to a specific version of Stable Diffusion
//         // See https://replicate.com/stability-ai/sdxl
//         version: "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",

//         // This is the text prompt that will be submitted by a form on the frontend
//         input: { prompt },
//       }),
//     });
//     const data = await response.json()
//     return NextResponse.json({ data }, { status: 200 })
//   } catch (e) {
//     return NextResponse.json({ error: e }, { status: 500 })
//   }
// }