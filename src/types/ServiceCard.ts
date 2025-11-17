import programmIcon from '../assets/icons/Source Code.svg'
import designIcon from '../assets/icons/Pen.svg'
import videoIcon from '../assets/icons/Adobe After Effects.svg'



export interface ServiceCardProps {
    id?: number,
    title?: string,
    description?: string,
    image?: string,
    features?: string[];
}

export const services = [
    {
        id: 1,
        title: "Веб-разработка",
        description: "Создаю современные и адаптивные сайты под ключ. От лендингов до сайтов-визиток с чистым кодом и быстрой загрузкой.",
        image: programmIcon,
        features: [
            "React • TypeScript • JavaScript",
            "Современный и чистый код",
            "Адаптация под все устройства",
            "Быстрая загрузка и оптимизация"
        ]
    },
    {
        id: 2,
        title: "Графический дизайн",
        description: "Разрабатываю визуальный контент для социальных сетей и брендов. От постов до логотипов с современным подходом.",
        image: designIcon,
        features: [
            "Figma • Photoshop • Illustrator",
            "Современный и трендовый дизайн",
            "Быстрая реализация проектов",
            "Уникальный стиль для вашего бренда"
        ]
    },
    {
        id: 3,
        title: "Видеомонтаж",
        description: "Создаю динамичные и цепляющие видео для соцсетей и бизнеса. От коротких рилов до рекламных роликов.",
        image: videoIcon,
        features: [
            "CapCut • Premiere Pro • After Effects",
            "Динамичный и современный монтаж",
            "Быстрые сроки выполнения",
            "Оптимизация под соцсети"
        ]
    }
]