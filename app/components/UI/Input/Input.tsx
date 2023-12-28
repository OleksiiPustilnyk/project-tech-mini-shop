import "./Input.css";
type Props = {
  children: string;
  placeholder: string;
  type: string;
};

const Input = ({ children, placeholder, type }: Props) => {
  return (
    <label className="input ">
      <span>{children}</span>
      <input type={type} placeholder={placeholder} />
    </label>
  );
};
export default Input;
