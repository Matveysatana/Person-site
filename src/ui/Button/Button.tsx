import type { Buttontype } from "../../types/Button";
import './Button.css'

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