import { type Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export const fadeInBottom: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0
    }
};

export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 80
    },
    visible: {
        opacity: 1,
        x: 0
    }
};




// 1. Анимация с поворотом (для изображений или карточек)
export const rotateIn: Variants = {
    hidden: {
        opacity: 0,
        rotate: -15,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1
    }
};

// 2. Анимация с "пружинным" эффектом (оживленная)
export const springIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        y: 50
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

// 3. Анимация появления снизу с отскоком (для кнопок)
export const bounceUp: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10
        }
    }
};

// 4. Анимация появления с увеличением (для акцентных элементов)
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.3
    },
    visible: {
        opacity: 1,
        scale: 1
    }
};

// 5. Анимация "затухания" сверху и снизу одновременно (для заголовков)
export const fadeInFromSides: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
        y: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0
    }
};

// 6. Анимация для списка (появление элементов по очереди)
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // задержка между анимациями детей
            delayChildren: 0.2    // начальная задержка
        }
    }
};

// 7. Анимация для дочерних элементов (используется с staggerContainer)
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// 8. Анимация с задержкой (для последовательного появления)
export const delayedFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

// 9. Анимация "волны" (для секций)
export const waveIn: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1
    }
};

// 10. Анимация 3D перспективы (сложная и красивая)
export const perspectiveIn: Variants = {
    hidden: {
        opacity: 0,
        rotateX: 90,
        y: 50
    },
    visible: {
        opacity: 1,
        rotateX: 0,
        y: 0
    }
};