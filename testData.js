let profileArr = [
  {
    name: "medialogi24",
    pass: "1528",
    wpm: 200,
    timeSchedule: {
      mon: 2, // 1
      tue: 1.5, // 2
      wed: 1, // 3
      thu: 1.5, // 4
      fri: 1, // 5
      sat: 2, // 6
      sun: 3, // 0
    },
    overviewArr: [
      {
        date: new Date("2024-04-23"),
        weekday: 2,
        availableTime: 1.5,
        totalTime: 1,
        homework: [
          {
            checked: false,
            title: "Regneopgave 1",
            course: "Matematik",
            time: 1,
          },
        ],
      },
      {
        date: new Date("2024-04-24"),
        weekday: 3,
        availableTime: 1,
        totalTime: 0.5,
        homework: [
          {
            checked: false,
            title: "Læseopgave 1",
            course: "Dansk",
            time: 0.5,
          },
        ],
      },
      {
        date: new Date("2024-04-25"),
        weekday: 4,
        availableTime: 1.5,
        totalTime: 1,
        homework: [
          {
            checked: false,
            title: "Regneopgave 2",
            course: "Matematik",
            time: 0.5,
          },
          {
            checked: false,
            title: "Regneopgave 3",
            course: "Matematik",
            time: 0.5,
          },
        ],
      },
      {
        date: new Date("2024-04-26"),
        weekday: 5,
        availableTime: 1,
        totalTime: 1,
        homework: [
          {
            checked: false,
            title: "Regneopgave 3",
            course: "Matematik",
            time: 0.5,
          },
          {
            checked: false,
            title: "Læselektie 2",
            course: "Dansk",
            time: 0.5,
          },
        ],
      },
      {
        date: new Date("2024-04-27"),
        weekday: 6,
        availableTime: 2,
        totalTime: 1.5,
        homework: [
          {
            checked: false,
            title: "Læselektie 3",
            course: "Dansk",
            time: 1.5,
          },
        ],
      },
    ],
  },
];

const courseArr = [
  {
    name: "Dansk",
    homeworkArr: [
      {
        title: "Læselektie 1",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 5, 22),
      },
      {
        title: "Læselektie 5",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 6, 2),
      },
      {
        title: "Læselektie 3",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 5, 26),
      },
      {
        title: "Læselektie 2",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 5, 24),
      },
      {
        title: "Læselektie 4",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 5, 28),
      },
      {
        title: "Læselektie 6",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 6, 28),
      },
    ],
  },
  {
    name: "Matematik",
    href: "classPageTest.html",
    homeworkArr: [
      {
        title: "Regneopgave 1",
        desc: "Løs 5 opgaver i bogen.",
        amount: 147,
        type: "minutes",
        deadline: new Date(2024, 5, 25),
      },
      {
        title: "Regneopgave 2",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 5, 27),
      },
      {
        title: "Regneopgave 3",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 5, 29),
      },
      {
        title: "Regneopgave 4",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 6, 1),
      },
      {
        title: "Regneopgave 5",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 6, 1),
      },
    ],
  },
  {
    name: "Engelsk",
    href: "classPageTest.html",
    homeworkArr: [
      {
        title: "Engelsk 1",
        desc: "Læs kapitel 1",
        amount: 87,
        type: "minutes",
        deadline: new Date(2024, 5, 10),
      },
      {
        title: "Engelsk 2",
        desc: "Læs kapitel 2",
        amount: 40,
        type: "pages",
        deadline: new Date(2024, 6, 11),
      },
      {
        title: "Engelsk 3",
        desc: "Læs kapitel 3",
        amount: 43,
        type: "minutes",
        deadline: new Date(2024, 6, 14),
      },
      {
        title: "Engelsk 4",
        desc: "Læs kapitel 4",
        amount: 30,
        type: "pages",
        deadline: new Date(2024, 6, 3),
      },
      {
        title: "Engelsk 5",
        desc: "Læs kapitel 5",
        amount: 4000,
        type: "words",
        deadline: new Date(2024, 6, 5),
      },
    ],
  },
  {
    name: "Tysk",
    href: "classPageTest.html",
    homeworkArr: [],
  },
];
