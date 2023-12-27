import css from "./Button.module.css";

type Props = {
  children: string;
};
const Button = ({ children }: Props) => {
  return (
    <button type="button" className={css.button}>
      {children}
    </button>
  );
};
export default Button;
