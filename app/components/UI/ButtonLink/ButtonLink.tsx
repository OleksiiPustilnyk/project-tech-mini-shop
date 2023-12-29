import Link from "next/link";
import "./ButtonLink.css";

type Props = {
  children: string;
  href: string;
};
const ButtonLink = ({ children, href }: Props) => {
  return (
    <Link href={href} type="button" className="button">
      {children}
    </Link>
  );
};
export default ButtonLink;
