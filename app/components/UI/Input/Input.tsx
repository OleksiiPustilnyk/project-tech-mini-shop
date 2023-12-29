import "./Input.css";
type Props = {
  children: string;
  placeholder: string;
  type: string;
  name: string;
};

const Input = ({ children, type, name, placeholder }: Props) => {
  return (
    <label className="input ">
      <span>{children}</span>
      <input type={type} name={name} placeholder={placeholder} required />
    </label>
  );
};
export default Input;
