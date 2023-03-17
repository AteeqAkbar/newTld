import clipboardy from "clipboardy";
const { google } = require("googleapis");
const calendar = google.calendar({
  version: "v3",
  auth: "AIzaSyAX0cdNr8lF_5Mfmut9YUCQEc5cmPk1K2A",
});

const oauth2Client = new google.auth.OAuth2(
  "500830928651-k7elbsakk11v6ofk5iprgrs8ifaef3j6.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/api/calendar/google/redirect"
);
const scopes = ["https://www.googleapis.com/auth/calendar"];

export default async function handler(req, res) {
  const code = req.query.code;
  const state = JSON.parse(req.query.state);
  const { tokens } = await oauth2Client.getToken(code);
  console.log(code, tokens);
  const eventData = state.eventData;
  oauth2Client.setCredentials(tokens);
  if (tokens) {
    const result = await calendar.events.insert({
      calendarId: "primary",
      auth: oauth2Client,
      conferenceDataVersion: 1,
      requestBody: {
        summary: eventData.summary,
        start: {
          dateTime: eventData.startDate,

          timeZone: "Asia/Karachi",
        },
        end: {
          dateTime: eventData.endDate,

          timeZone: "Asia/Karachi",
        },
        conferenceData: {
          createRequest: {
            requestId: "7qxalsvy0e",
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
      },
    });
    var hangoutLink = result.data.hangoutLink;
    console.log(hangoutLink);
    await clipboardy.write(hangoutLink);
    res.write("<script>window.close();</script>");
    res.end();
    // res.redirect(`/link?hanoutLink=${hangoutLink}`);
  }
}
