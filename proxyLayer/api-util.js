const PROXY_Data = [
  {
    id: 1,
    title: "IT consultant and future guider",
    name: "Alam adam",
    description: "Arslan is good IT guider and solve many business problems",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: true,
    houre: "32K+hrs",
    img: "./img/Image (13).png",
    seasions: {
      mentorName: "Alam adam",
      topic_img: "/img/Image304_206.png",
      name: " Everything Design",
      attence: "400",
      date: new Date().toLocaleDateString(),
      mentor_img: "./img/Ellipse 15.png",
    },
  },
  {
    id: 2,
    title: " UI UX designer",
    name: "Jeams Dean",
    description: "Ateeq is senior designer and have eyes of details",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
    houre: "24K+hrs",
    img: "./img/Image (14).png",
    seasions: {
      mentorName: "Jeams Dean",
      topic_img: "/img/Image (11).png",
      name: "Programing Newbie",
      attence: "100",
      date: new Date().toLocaleDateString(),
      mentor_img: "./img/Ellipse 15.png",
    },
  },
  {
    id: 3,
    name: "Casy martha",
    title: " Front developer and Problem solver",
    description:
      "Sajid is very passionate about front end develpoment and ready to help out everyone",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
    houre: "29K+hrs",
    img: "./img/Image (7).png",
    seasions: {
      mentorName: "Casy martha",
      topic_img: "/img/Image (12).png",
      name: "Project Planing",
      attence: "200",
      date: new Date().toLocaleDateString(),
      mentor_img: "./img/Ellipse 15.png",
    },
  },
  {
    id: 4,
    name: "Valerie",
    title: " Machine Learning trainer",
    description:
      "Sajid is very passionate about front end develpoment and ready to help out everyone",
    location: "My Street 12, 10115 Broke City",
    date: new Date().toLocaleDateString(),
    image: "images/extrovert-event.jpg",
    isFeatured: true,
    houre: "29K+hrs",
    img: "./img/Image (9).png",
    seasions: {
      mentorName: "Valerie",
      topic_img: "/img/Image (10).png",
      name: "Qauilty Assurance",
      Attence: "300",
      date: new Date().toLocaleDateString(),
      mentor_img: "./img/Ellipse 15.png",
    },
  },
];

const DummySkill_Data = [
  { skills: ["React", "Nodejs", "Graphic Design", "UI Design", "javaScript"] },
];

export function getAllSkills() {
  return DummySkill_Data;
}

// export function getFeaturedEvents() {
//   return PROXY_Data.filter((event) => event.isFeatured);
// }

// export function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredEvents = PROXY_Data.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredEvents;
// }

export function getAllMentors() {
  return PROXY_Data;
}

export function getAllMentorSeasions() {
  const mentors = getAllMentors();
  const seasions = mentors.map((mentor) => mentor.seasions);
  return seasions;
}

export function getMentorsId(id) {
  return PROXY_Data.find((event) => event.id === id);
}
