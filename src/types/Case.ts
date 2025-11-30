import project from '../assets/images/project.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'

import author from '../assets/images/order.png'

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
    title: "Личный блог-портфолио",
    result: "Успешная защита проекта с максимальной оценкой",
    description: "Разработал полнофункциональный сайт-портфолио на React с системой блога. Реализовал адаптивный дизайн и интерактивные компоненты, освоив современные подходы фронтенд-разработки.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  },
  {
    id: 2,
    link: "https://matveysatana.github.io/cookies/",
    image: project2,
    title: "Интернет-магазин кондитерских изделий",
    result: "Создание современного e-commerce решения",
    description: "Разработал лендинг для онлайн-магазина на Angular с продуманным UI/UX. Реализовал интуитивную навигацию и привлекательный дизайн, подчеркивающий premium-качество продукции.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  },
  {
    id: 3,
    link: "https://www.instagram.com/p/DQDoxelihFo/?igsh=NWdwZDM3cWVxbzdu",
    image: project3,
    title: "Продающий контент для социальных сетей",
    result: "500+ просмотров и высокая вовлеченность аудитории",
    description: "Создал серию продающих постов с A/B тестированием и формами захвата лидов. Разработал визуальную концепцию, которая увеличила узнаваемость бренда.",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  },
  {
    id: 4,
    link: "https://www.instagram.com/p/DQDoxelihFo/?igsh=NWdwZDM3cWVxbzdu",
    image: project4,
    title: "Динамический видеоконтент",
    result: "700+ просмотров в первые 24 часа",
    description: "Создал эмоциональный видеоролик с качественным монтажом и цветокоррекцией. Благодаря качественному монтажу, увеличил вовлекаемост зрителей и увеличил охват",
    author: {
      image: author,
      name: "Сатановский Матвей"
    }
  }
];