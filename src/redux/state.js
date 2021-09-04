let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Привет привет!!!", likesCount: 12 },
      { id: 2, message: "Hello man!", likesCount: 13 },
    ],
  },

  dialogsPage: {
    dialogsData: [
      {
        id: 1,
        image:
          "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
        name: "Сережа",
      },
      {
        id: 2,
        image:
          "https://play-lh.googleusercontent.com/XtyURW0mKNnKu_6TzQ5_WpuKF4A7M1oFV6p828eVEWIvTZPtZz2gq5sNM78jpNPMMRmZ",
        name: "Артем",
      },
      {
        id: 3,
        image: "https://image.flaticon.com/icons/png/512/219/219988.png",
        name: "Дима",
      },
      {
        id: 4,
        image: "https://image.flaticon.com/icons/png/512/219/219989.png",
        name: "Жека",
      },
      {
        id: 5,
        image: "https://bak.kg/wp-content/uploads/2020/04/219969.png",
        name: "Игорь",
      },
      {
        id: 6,
        image: "https://radugasad.ru/wp-content/uploads/2019/11/feedback-1.png",
        name: "Вова",
      },
    ],

    messagesData: [
      {
        id: 1,
        image: "https://pngimg.com/uploads/circle/circle_PNG59.png",
        message: "Привет привет!!!",
      },
      {
        id: 2,
        image: "https://pngimg.com/uploads/circle/circle_PNG59.png",
        message: "Hello man!",
      },
      {
        id: 3,
        image: "https://pngimg.com/uploads/circle/circle_PNG59.png",
        message: "Players",
      },
      {
        id: 4,
        image: "https://pngimg.com/uploads/circle/circle_PNG59.png",
        message: "Hochu eating",
      },
      {
        id: 5,
        image: "https://pngimg.com/uploads/circle/circle_PNG59.png",
        message: "Help man???",
      },
      {
        id: 6,
        image: "https://pngimg.com/uploads/circle/circle_PNG59.png",
        message: "WHAT ARE YOU DOING!!!",
      },
    ],
  },

  navbarInfo: {
    friendsData: [
      {
        id: 1,
        image: "https://www.tkstil.ru/images/avatars/male-avatar-4.png",
        name: "Андрей",
      },
      {
        id: 2,
        image: "https://radugasad.ru/wp-content/uploads/2019/11/feedback-1.png",
        name: "Юлька",
      },
      {
        id: 3,
        image:
          "https://homevest.com/wp-content/uploads/2019/05/female1-512.png",
        name: "Лизка",
      },
    ],

    navData: [
      { id: 1, name: "Profile", linking: "/profile/" },
      { id: 2, name: "Dialogs", linking: "/dialogs/" },
      { id: 3, name: "News", linking: "/news/" },
      { id: 4, name: "Music", linking: "/music/" },
      { id: 5, name: "Setings", linking: "/setings/" },
    ],
  },
};

export default state;
