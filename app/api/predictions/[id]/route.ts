// import { NextResponse, NextRequest } from "next/server";

// export const GET = async (request: NextRequest, { params }) => {

//     // const data = await res.json()
//     const id = params.id
//     console.log(id)

//     try {
//         const response = await fetch(
//             "https://api.replicate.com/v1/predictions/" + id,
//             // "https://api.replicate.com/v1/predictions/y6amcnlbogsfdofkojqgwjjmya",
//             {
//                 headers: {
//                     Authorization: `Token `,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         console.log(response)

//         if (response.status === 200) {
//             const data = await response.json()
//             return NextResponse.json({ data }, { status: 200 })
//         }
//         return NextResponse.json({ error: "An error occurred" }, { status: response.status })
//     } catch (e) {
//         return NextResponse.json({ error: e }, { status: 500 })
//     }
// }