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
    const agegroup = body.agegroup.join(", ");
    const customagegroup = agegroup + ", " + body.customagegroup;
    const primarytargetedlocation = body.primarytargetedlocation.join(", ");
    const educationlevel = body.educationlevel.join(", ");
    const customeducationlevel = educationlevel + ", " + body.customeducationlevel;
    const languages = body.languages.join(", ");
    const customlanguages = languages + ", " + body.customlanguages;
    const taincome = body.taincome.join(", ");
    const homeowner = body.homeowner.join(", ");
    const politicalchoice = body.politicalchoice.join(", ");
    const custompoliticalchoice = politicalchoice + ", " + body.custompoliticalchoice;
    const tafavplace = body.tafavplace.join(", ");
    const customtafavplace = tafavplace + ", " + body.customtafavplace;
    const tafavgenre = body.tafavgenre.join(", ");
    const customtafavgenre = tafavgenre + ", " + body.customtafavgenre;
    const whatarethey = body.whatarethey.join(", ");
    const customwhatarethey = whatarethey + ", " + body.customwhatarethey;

    const client = new google.auth.JWT(process.env.CLIENT_EMAIL, undefined, process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'), ['https://www.googleapis.com/auth/spreadsheets'])
    const sheets = google.sheets({ version: 'v4', auth: client })
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'buyer-persona-form!A:AH',
            insertDataOption: 'INSERT_ROWs',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[formattedDateTime, body.businessname, body.websitelink, body.aboutbusiness, customagegroup, body.gender, body.targetedlocation, primarytargetedlocation, customeducationlevel, body.ethnicity, customlanguages, body.primaryta, taincome, body.taprofession, body.taproblems, body.oursolution, body.servicebrief, body.competitiveanalysis, homeowner, body.maritalstatus, custompoliticalchoice, body.taindustry, body.tadesignation, customtafavplace, body.eventname, customtafavgenre, body.bookname, body.competitorsname, body.thingstheybuy, body.peopletheyfollow, body.influencertheyfollow, body.apptheyused, body.primaryfactor, body.pagetheyfollow, customwhatarethey]]
            }
        })
    } catch (error) {
        return new NextResponse("Sheet API error", { status: 500 })
    }
    return new NextResponse("Response Submitted Successfully", { status: 200 })
}