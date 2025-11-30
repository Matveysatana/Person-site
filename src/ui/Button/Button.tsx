import './Button.css'

interface Buttontype {
    className?: string,
    onClick?: () => void;
    children: React.ReactNode,
    size?: string,
    type?: string,
    disabled?: boolean
}

const Button = (props: Buttontype) => {

    const { className, onClick, children, size, disabled } = props

    return (
        <button
            className={`btn ${className} ${size}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;