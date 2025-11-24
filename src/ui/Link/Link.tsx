import './Link.css'

interface LinkProps {
    id?: string,
    className?: string,
    children?: React.ReactNode,
}



const Link = ({ id, className, children }: LinkProps) => {
    return (
        <a href={id} className={className}>{children}</a>
    );
};

export default Link;