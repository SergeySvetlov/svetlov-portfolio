import { mail, phone, gh, tg, html, css, js, react } from "../assets/svg/index.js";
import { 
  antarctica, antarcticaWebp, antarctica2x, antarctica2xWebp, 
  booking, bookingWebp, booking2x, booking2xWebp,
  catcafe, catcafeWebp, catcafe2x, catcafe2xWebp,
  device, deviceWebp, device2x, device2xWebp,
  farmshop, farmshopWebp, farmshop2x, farmshop2xWebp,
  fitness, fitnessWebp, fitness2x, fitness2xWebp,
  gllacy, gllacyWebp, gllacy2x, gllacy2xWebp,
  keksogram, keksogramWebp, keksogram2x, keksogram2xWebp,
  mishka, mishkaWebp, mishka2x, mishka2xWebp 
} from "../assets/content/index.js";

const WORKS = [
  {
    link: "https://sergeysvetlov.github.io/booking/",
    name: "Букинг", 
    subtitle: "Букинг-сервис на JavaScript", 
    img: {
      jpg: booking,
      jpg2x: booking2x,
      webp: bookingWebp,
      webp2x: booking2xWebp
    }, 
    features: [
      "Загрузка карты и меток с данными",
      "Валидация формы",
      "Взаимодействие с сервером"
    ]
  },
  {
    link: "https://mycatcafe.netlify.app/",
    name: "Котокафе", 
    subtitle: "Проект на React", 
    img: {
      jpg: catcafe,
      jpg2x: catcafe2x,
      webp: catcafeWebp,
      webp2x: catcafe2xWebp
    }, 
    features: [
      "Стилизация styled-components",
      "Библиотека Swiper",
      "Сборка Create React App"
    ]
  },
  {
    link: "https://myfarmshop.netlify.app",
    name: "Фермерские продукты", 
    subtitle: "Проект на React", 
    img: {
      jpg: farmshop,
      jpg2x: farmshop2x,
      webp: farmshopWebp,
      webp2x: farmshop2xWebp
    }, 
    features: [
      "Стилизация styled-components",
      "Библиотека Swiper",
      "Сборка Create React App"
    ]
  },
  {
    link: "https://sergeysvetlov.github.io/Gym/",
    name: "Проект Fitness", 
    subtitle: "Резиновая верстка", 
    img: {
      jpg: fitness,
      jpg2x: fitness2x,
      webp: fitnessWebp,
      webp2x: fitness2xWebp
    }, 
    features: [
      "Aвтоматизация Gulp",
      "Препроцессор SASS",
      "Нативный JS + библиотека Swiper JS"
    ]
  },
  {
    link: "https://sergeysvetlov.github.io/kekstagram/",
    name: "Кекстаграм", 
    subtitle: "Веб-сервис на JavaScript", 
    img: {
      jpg: keksogram,
      jpg2x: keksogram2x,
      webp: keksogramWebp,
      webp2x: keksogram2xWebp
    }, 
    features: [
      "Загрузка изображения и редактор",
      "Валидация формы",
      "Взаимодействие с сервером"
    ]
  },
  {
    link: "https://sergeysvetlov.github.io/1796475-device-32/",
    name: 'Интернет-магазин гаджетов "Девайс"', 
    subtitle: "Первый учебный проект", 
    img: {
      jpg: device,
      jpg2x: device2x,
      webp: deviceWebp,
      webp2x: device2xWebp
    }, 
    features: [
      "Семантичная разметка",
      "Попап, слайдер, форма",
      "Сетки на гридах и флексах"
    ]
  },
  {
    link: "https://sergeysvetlov.github.io/1796475-gllacy-33/",
    name: `Интернет-магазин мороженого "Глейси"`, 
    subtitle: "Второй учебный проект", 
    img: {
      jpg: gllacy,
      jpg2x: gllacy2x,
      webp: gllacyWebp,
      webp2x: gllacy2xWebp
    }, 
    features: [
      "Семантичная разметка",
      "Попап, слайдер, форма",
      "Сетки на гридах и флексах"
    ]
  },
  {
    link: "https://sergeysvetlov.github.io/Mishka/",
    name: `Интернет-магазин игрушек ручной работы "Мишка"`, 
    subtitle: "Адаптивная верстка", 
    img: {
      jpg: mishka,
      jpg2x: mishka2x,
      webp: mishkaWebp,
      webp2x: mishka2xWebp
    }, 
    features: [
      "Методология БЭМ",
      "Инструмент автоматизации Gulp",
      "Препроцессор Less"
    ]
  },
  {
    link: "https://sergeysvetlov.github.io/Antarctica/",
    name: "Круизы в Антарктику", 
    subtitle: "Резиновая верстка", 
    img: {
      jpg: antarctica,
      jpg2x: antarctica2x,
      webp: antarcticaWebp,
      webp2x: antarctica2xWebp
    }, 
    features: [
      "Препроцессор SASS",
      "Нативный JS + библиотека Swiper JS",
      "Подключение Яндекс карты"
    ]
  },
];
  
const CONTACTS = [
  {
      name: 'sergey.svetlov.91@list.ru',
      link: 'mailto:sergey.svetlov.91@list.ru',
      icon: mail
  },
  {
      name: '+7 953 501 31 15',
      link: 'tel:+79535013115',
      icon: phone
  }
];
  
const SOCIALS = [
  {
    name: "Гитхаб",
    link: "https://github.com/SergeySvetlov?tab=repositories",
    icon: gh
  },
  {
    name: "Телеграм",
    link: "https://t.me/+79535013115",
    icon: tg
  }
];
  
const SKILLS = [
  {
    name: "HTML",
    level: 90,
    icon: html
  },
  {
    name: "CSS",
    level: 90,
    icon: css
  },
  {
    name: "JS",
    level: 70,
    icon: js
  },
  {
    name: "React",
    level: 50,
    icon: react
  },
];

const LINKS = [
  {
      name: 'О себе',
      href: '#about'
  }, 
  {
      name: 'Мои работы',
      href: '#portfolio'
  }
]

export { WORKS, CONTACTS, SOCIALS, SKILLS, LINKS };