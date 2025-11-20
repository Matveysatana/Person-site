interface Buttontype {
    className?: string,
    onClick?: () => void;
    children: React.ReactNode,
    size?: string,
    type?: string
}

export type { Buttontype };