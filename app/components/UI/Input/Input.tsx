import "./Input.css";
type Props = {
  children: string;

  type: string;
  name: string;
};

const Input = ({ children, type, name }: Props) => {
  return (
    <label className="input ">
      <span>{children}</span>
      <input type={type} name={name} required />
    </label>
  );
};
export default Input;
