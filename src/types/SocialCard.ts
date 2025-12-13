export interface SocialCardProps {
  id: number;
  name: string;
  subscribers: string;
  description: string;
  icon: string;
  link: string;
  buttonText: string;
  color: string;
}

export const socialData: SocialCardProps[] = [
  {
    id: 1,
    name: "YouTube",
    subscribers: "27 подписчиков",
    description: "Челленджи, факты, исследования и бизнес-контент.",
    icon: "▶️",
    link: "https://youtube.com/@mottyrix",
    buttonText: "Подписаться",
    color: "#FF0000"
  },
  {
    id: 2,
    name: "Telegram",
    subscribers: "6 подписчиков",
    description: "Факты о моей жизни, мысли и планы. Бесплатные полезные материалы!",
    icon: "✈️",
    link: "https://t.me/Mottyrix",
    buttonText: "Присоединиться",
    color: "#0088CC"
  },
  {
    id: 3,
    name: "TikTok",
    subscribers: "13 подписчиков",
    description: "Эдиты, мотивационные и юмористические видео.",
    icon: "🎵",
    link: "https://www.tiktok.com/@mottyrix",
    buttonText: "Смотреть",
    color: "#000000"
  },
  {
    id: 4,
    name: "Instagram",
    subscribers: "20 постов",
    description: "Посты и рилсы о жизни и бизнесе.",
    icon: "📸",
    link: "https://www.instagram.com/motty.world",
    buttonText: "Читать",
    color: "#E4405F"
  }
];