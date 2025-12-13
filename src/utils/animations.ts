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


// Анимация с "пружинным" эффектом 
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


