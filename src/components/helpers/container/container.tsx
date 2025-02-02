import "./container.scss";

interface IContainerProps {
    children?: React.ReactNode;
}
export const Container: React.FC<IContainerProps> = ({ children }) => {
    return <div className="container">{children}</div>;
}
