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
    overviewArr: [],
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
        deadline: new Date(2024, 6, 19),
      },
      {
        title: "Læselektie 5",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 6, 23),
      },
      {
        title: "Læselektie 3",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 6, 26),
      },
      {
        title: "Læselektie 2",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 6, 30),
      },
      {
        title: "Læselektie 4",
        desc: "Læs 20 sider i bogen.",
        amount: 20,
        type: "pages",
        deadline: new Date(2024, 7, 4),
      },
    ],
  },
  {
    name: "Matematik",
    homeworkArr: [
      {
        title: "Regneopgave 1",
        desc: "Løs 5 opgaver i bogen.",
        amount: 147,
        type: "minutes",
        deadline: new Date(2024, 6, 21),
      },
      {
        title: "Regneopgave 2",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 6, 26),
      },
      {
        title: "Regneopgave 3",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 6, 29),
      },
      {
        title: "Regneopgave 4",
        desc: "Løs 5 opgaver i bogen.",
        amount: 30,
        type: "minutes",
        deadline: new Date(2024, 7, 1),
      },
    ],
  },
  {
    name: "Engelsk",
    homeworkArr: [
      {
        title: "Engelsk 1",
        desc: "Læs kapitel 1",
        amount: 87,
        type: "minutes",
        deadline: new Date(2024, 6, 24),
      },
      {
        title: "Engelsk 2",
        desc: "Læs kapitel 2",
        amount: 40,
        type: "pages",
        deadline: new Date(2024, 6, 28),
      },
      {
        title: "Engelsk 3",
        desc: "Læs kapitel 3",
        amount: 43,
        type: "minutes",
        deadline: new Date(2024, 7, 2),
      },
      {
        title: "Engelsk 4",
        desc: "Læs kapitel 4",
        amount: 30,
        type: "pages",
        deadline: new Date(2024, 7, 3),
      },
      {
        title: "Engelsk 5",
        desc: "Læs kapitel 5",
        amount: 4000,
        type: "words",
        deadline: new Date(2024, 7, 10),
      },
    ],
  },
  {
    name: "Tysk",
    homeworkArr: [
      {
        title: "Tysk 1",
        desc: "Læs kapitel 1",
        amount: 40,
        type: "minutes",
        deadline: new Date(2024, 6, 14),
      },
      {
        title: "Tysk 2",
        desc: "Læs kapitel 2",
        amount: 57,
        type: "pages",
        deadline: new Date(2024, 6, 17),
      },
    ],
  },
];
