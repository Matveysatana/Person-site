import stackIcon from "../assets/icons/stack.svg"
import userIcon from "../assets/icons/users.svg"
import mediaIcon from "../assets/icons/heart.svg"



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
        description: "Использую все современные приложения и способы для работы. От фреймворков React до Figma и After Effects. Это позволяет быстро и адаптивно подойти к проекту.",
        image: stackIcon
    },
    {
        id: 2,
        section: 'service',
        title: "Понимание аудитории",
        description: "Как создатель контента, я знаю что цепляет современную аудиторию. Создаю проекты, которые не просто работают, а вовлекают и запоминаются.",
        image: userIcon
    },
    {
        id: 3,
        section: 'social',
        title: "Медийность",
        description: "Мой личный бренд — гарантия ответственности. Клиенты видят мой прогресс и достижения, что создаёт дополнительный уровень доверия к нашим проектам.",
        image: mediaIcon
    }
]