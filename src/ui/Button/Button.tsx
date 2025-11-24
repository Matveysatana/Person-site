import './Button.css'

interface Buttontype {
    className?: string,
    onClick?: () => void;
    children: React.ReactNode,
    size?: string,
    type?: string
}

const Button = (props: Buttontype) => {

    const { className, onClick, children, size } = props

    return (
        <button
            className={`btn ${className} ${size}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;