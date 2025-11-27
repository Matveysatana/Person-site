import './Link.css'

interface LinkProps {
    id?: string,
    className?: string,
    children?: React.ReactNode,
    target?: string,
    onClick?: () => void
}



const Link = ({ id, className, children, target, onClick }: LinkProps) => {
    return (
        <a href={id} className={className} target={target} onClick={onClick}>{children}</a>
    );
};

export default Link;