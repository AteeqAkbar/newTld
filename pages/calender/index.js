import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useEffect, useState } from "react";
import { getAllSessions } from "../../utils_firebase/sessions";
import Spinner from "../../components/spinner";

export default function Home() {
  const [sessions, setSessions] = useState(false);
  // const Mentors = getAllMentors();
  useEffect(() => {
    async function name() {
      const seasion = await getAllSessions(true);
      // console.log(seasion, ">>>>>>>>>>><<<LLLLLLLLKKKKKKKKKKK");
      const filtersession = seasion.map((doc) => {
        // console.log(
        //   new Date(
        //     doc.startTime.seconds * 1000 + doc.startTime.nanoseconds / 1000000
        //   ).toISOString()
        // );
        const start = new Date(
          doc.startTime.seconds * 1000 + doc.startTime.nanoseconds / 1000000
        ).toISOString();
        const end = new Date(
          doc.endTime.seconds * 1000 + doc.endTime.nanoseconds / 1000000
        ).toISOString();
        return {
          title: doc.title,
          start,
          end,
        };
      });
      console.log(filtersession, ">>>>>>>>>>>>><<<<SSS<S<<S<S");
      setSessions(filtersession);
    }
    name();
  }, []);

  if (!sessions) {
    return <Spinner />;
  }

  console.log(sessions);
  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialView="dayGridMonth"
      nowIndicator={true}
      editable={false}
      initialEvents={sessions}
    />
  );
}
