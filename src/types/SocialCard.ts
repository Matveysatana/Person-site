

// export interface SocialCardProps {
//     id: number;
//     name: string;
//     subscribers: string;
//     description: string;
//     contentTypes: string[];
//     icon: string;
//     link: string;
//     color: string;
// }

// export const socialData: SocialCardProps[] = [
//     {
//         id: 1,
//         name: "YouTube",
//         subscribers: "27 подписчиков",
//         description: "Челленджи, факты, исследования и бизнес-контент. Планирую расширять контент!",
//         contentTypes: ["Челленджи", "Факты", "Исследования", "Бизнес"],
//         icon: "▶️",
//         link: "#",
//         color: "linear-gradient(135deg, #FF0000, #CC0000)"
//     },

// ];


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
    description: "Челленджи, факты, исследования и бизнес-контент",
    icon: "▶️",
    link: "https://youtube.com/@mottyrix",
    buttonText: "Subscribe",
    color: "#FF0000"
  },
  {
    id: 2,
    name: "Telegram",
    subscribers: "7 подписчиков",
    description: "Факты о моей жизни, мысли и планы. Бесплатные полезные материалы!",
    icon: "✈️",
    link: "https://t.me/Mottyrix",
    buttonText: "Join",
    color: "#0088CC"
  },
  {
    id: 3,
    name: "TikTok",
    subscribers: "10 подписчиков",
    description: "Эдиты, мотивационные и юмористические видео",
    icon: "🎵",
    link: "https://www.tiktok.com/@mottyrix",
    buttonText: "Follow",
    color: "#000000"
  },
  {
    id: 4,
    name: "Instagram",
    subscribers: "20 постов",
    description: "Посты и рилсы о жизни и бизнесе",
    icon: "📸",
    link: "https://www.instagram.com/motty.world",
    buttonText: "Follow",
    color: "#E4405F"
  }
];