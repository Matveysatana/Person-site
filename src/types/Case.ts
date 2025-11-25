import project from '../assets/images/project.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'

import author from '../assets/images/red.jpg'

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
    image: project,
    title: "Корпоративный сайт для TechCompany",
    result: "Увеличение конверсии на 45%",
    description: "Разработали современный корпоративный сайт с системой управления контентом. Реализовали адаптивный дизайн и оптимизировали скорость загрузки.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  },
  {
    id: 2,
    link: "https://matveysatana.github.io/cookies/",
    image: project2,
    title: "Интернет-магазин модной одежды",
    result: "Рост онлайн-продаж на 120%",
    description: "Создали полнофункциональный интернет-магазин с интеграцией платежных систем и CRM. Настроили аналитику и автоматизацию процессов.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  },
  {
    id: 3,
    link: "https://www.instagram.com/p/DQDoxelihFo/?igsh=NWdwZDM3cWVxbzdu",
    image: project3,
    title: "Лендинг для запуска продукта",
    result: "Собрали 500+ заявок за первую неделю",
    description: "Разработали продающий лендинг для запуска нового продукта. Реализовали A/B тестирование и формы захвата лидов.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  },
  {
    id: 4,
    link: "https://www.instagram.com/p/DQDoxelihFo/?igsh=NWdwZDM3cWVxbzdu",
    image: project4,
    title: "Лендинг для запуска продукта",
    result: "Собрали 500+ заявок за первую неделю",
    description: "Разработали продающий лендинг для запуска нового продукта. Реализовали A/B тестирование и формы захвата лидов.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  }
];