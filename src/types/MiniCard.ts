import designIcon from '../assets/icons/designIcon.svg'
import codeIcon from '../assets/icons/codeIcon.svg'
import videoIcon from '../assets/icons/videoIcon.svg'




export interface MiniCardProps {
  image: string;
  title: string;
  description?: string;
  section: string
  onClick?: () => void
}

export const skills = [
  {
    id: 1,
    image: designIcon,
    title: "Дизайн",
    description: "UI/UX дизайн",
    section: 'service'
  },
  {
    id: 2,
    image: codeIcon,
    title: "Разработка",
    description: "Веб-приложения",
    section: 'service'

  },
  {
    id: 3,
    image: videoIcon,
    title: "Видео",
    description: "Монтаж и анимация",
    section: 'service'

  }
];

