import type { Buttontype } from "../../types/Button";
import './Button.css'

const Button = (props:Buttontype) => {

    const {className, func, children, size} = props

    return (
        <button
        className={`btn ${className} ${size}`}
        onClick={func}
        >
            {children}
        </button>
    );
};

export default Button;