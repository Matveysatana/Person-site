import designIcon from '../assets/icons/designIcon.svg'
import codeIcon from '../assets/icons/codeIcon.svg'
import videoIcon from '../assets/icons/videoIcon.svg'




export interface MiniCardProps {
  image: string;
  title: string;
  description?: string;
}

export const skills = [
  {
    id: 1,
    image: designIcon,
    title: "Дизайн",
    description: "UI/UX дизайн"
  },
  {
    id: 2,
    image: codeIcon,
    title: "Разработка",
    description: "Веб-приложения"
  },
  {
    id: 3,
    image: videoIcon,
    title: "Видео",
    description: "Монтаж и анимация"
  }
];

