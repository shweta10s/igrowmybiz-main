import { NextResponse } from "next/server";
import { google } from "googleapis"
import nodemailer from 'nodemailer';
export async function POST(request: Request) {
    const body = await request.json();

    const transporter = await nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: "info@igrowmybiz.com",
            pass: "Admin_igrow123"
        }
    });

    const ccRecipients = ["aadarsh@igrowmybiz.com","info@igrowmybiz.com","sarfaraz@igrowmybiz.com"]

    const mailOpionts = {
        from: "info@igrowmybiz.com",
        to: body.email,
        cc: ccRecipients,
        subject: `${body.company} x Igrow My Biz   Thanks for filling the website form`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Igrow My Biz - Email</title>
        </head>
        <body style="width: 100%;">
            <p>Hi ${body.name}</p>
            <br>
            <p>Thanks for filling out this form on our website</p>
            <br>
            <p>Igrow My Biz is a media network of agencies that helps business to brands for scaling their online presence through video production, social media content, marketing, and website development</p>
            <br>
            <p>Please let us know what's the best time to schedule a short 10-15 minutes call.</p>
            <br>
            <p>Best,</p>
            <p>Aadarsh Kumar | Call/WhatsApp +91 8349752729</p>
            <p>Co-Founder, IGROW MY BIZ</p>
        </body>
        
        </html>`
    }

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
    const options = body.options.join(", ");
    const client = new google.auth.JWT(process.env.CLIENT_EMAIL, undefined, process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'), ['https://www.googleapis.com/auth/spreadsheets'])
    const sheets = google.sheets({ version: 'v4', auth: client })
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'typeform!A:G',
            insertDataOption: 'INSERT_ROWs',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[formattedDateTime, body.name, body.phone, body.email, body.website, body.company, options]]
            }
        })
    } catch (error) {
        return new NextResponse("Sheet API error", { status: 500 })
    }
    await transporter.sendMail(mailOpionts, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response)
        }
    })
    return new NextResponse("Form Submitted Successfully", { status: 200 })
}