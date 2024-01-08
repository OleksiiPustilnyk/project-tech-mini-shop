import './Button.css';

type Props = {
    children: string;
};

const Button = ({ children }: Props) => {
    return (
        <button type="button" className="button">
            {children}
        </button>
    );
};
export default Button;
