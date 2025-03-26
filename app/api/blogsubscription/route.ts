import { NextResponse } from "next/server";
import { google } from "googleapis"
export async function POST(request: Request) {
    const body = await request.json();
    // Get the current timestamp using Date.now()
    const timestamp = Date.now();
    // Create a new Date object with the timestamp
    const date = new Date(timestamp);

    // Format the date and time components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Create a formatted date and time string
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const client = new google.auth.JWT(process.env.CLIENT_EMAIL, undefined, process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'), ['https://www.googleapis.com/auth/spreadsheets'])
    const sheets = google.sheets({ version: 'v4', auth: client })
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'blog-subscription!A:D',
            insertDataOption: 'INSERT_ROWs',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[formattedDateTime, body.name, body.phone, body.email]]
            }
        })
    } catch (error) {
        return new NextResponse("Sheet API error", { status: 500 })
    }
    return new NextResponse("Form Submitted Successfully", { status: 200 })
}