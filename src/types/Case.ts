// import project from '../assets/images/project.png'

export interface CaseProps {
  id: number;
  link: string;
  image?: string;
  title: string;
  result: string;
  description: string;
  author: {
    image: string;
    name: string;
  };
}

export const projects: CaseProps[] = [
  {
    id: 1,
    link: "https://matveysatana.github.io/My-portfolio-blog/",
    image: "",
    title: "Корпоративный сайт для TechCompany",
    result: "Увеличение конверсии на 45%",
    description: "Разработали современный корпоративный сайт с системой управления контентом. Реализовали адаптивный дизайн и оптимизировали скорость загрузки.",
    author: {
      image: "/images/client1.jpg",
      name: "Анна Иванова"
    }
  },
  {
    id: 2,
    link: "https://matveysatana.github.io/cookies/",
    image: "/images/project2.jpg",
    title: "Интернет-магазин модной одежды",
    result: "Рост онлайн-продаж на 120%",
    description: "Создали полнофункциональный интернет-магазин с интеграцией платежных систем и CRM. Настроили аналитику и автоматизацию процессов.",
    author: {
      image: "/images/client2.jpg",
      name: "Михаил Петров"
    }
  },
  {
    id: 3,
    link: "https://www.instagram.com/p/DQDoxelihFo/?igsh=NWdwZDM3cWVxbzdu",
    image: "/images/project3.jpg",
    title: "Лендинг для запуска продукта",
    result: "Собрали 500+ заявок за первую неделю",
    description: "Разработали продающий лендинг для запуска нового продукта. Реализовали A/B тестирование и формы захвата лидов.",
    author: {
      image: "/images/client3.jpg",
      name: "Елена Сидорова"
    }
  },
  {
    id: 4,
    link: "https://www.instagram.com/p/DQDoxelihFo/?igsh=NWdwZDM3cWVxbzdu",
    image: "/images/project3.jpg",
    title: "Лендинг для запуска продукта",
    result: "Собрали 500+ заявок за первую неделю",
    description: "Разработали продающий лендинг для запуска нового продукта. Реализовали A/B тестирование и формы захвата лидов.",
    author: {
      image: "/images/client3.jpg",
      name: "Елена Сидорова"
    }
  }
];