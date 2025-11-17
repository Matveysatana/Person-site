import icon from "../assets/icons/codeIcon.svg"


export interface BenefitItemProps {
    image: string,
    title: string,
    description: string,
    onClick?: () => void,
    section: string
}

export const benefit = [
    {
        id: 1,
        section: 'service',
        title: "Современный стек",
        description: "Использую React, TypeScript, современные фреймворки",
        image: icon 
    },
    {
        id: 2,
        section: 'service',
        title: "Быстрая работа",
        description: "Средний проект за 3-7 дней с полным циклом разработки",
        image: icon
    },
    {
        id: 3,
        section: 'social',
        title: "Медийность",
        description: "Идельное отображение на всех устройствах",
        image: icon
    }
]