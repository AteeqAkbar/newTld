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

const dateTimeForCalander = (idate) => {
  const TIMEOFFSET = "+05:00";
  let date = new Date(idate);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00${TIMEOFFSET}`;

  let finalDate = new Date(Date.parse(newDateTime));

  return finalDate;
};

export default async function handler(req, res) {
  const { calendar } = req.query;
  if (calendar == "google") {
    const summary = req.query.title;
    const startDate = dateTimeForCalander(req.query.start);
    const endDate = dateTimeForCalander(req.query.end);

    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",

      scope: scopes,
      state: JSON.stringify({
        eventData: {
          summary: summary,
          startDate: startDate,
          endDate: endDate,
          timeZone: "Asia/Karachi",
        },
      }),
    });

    res.redirect(url);
  }
}
