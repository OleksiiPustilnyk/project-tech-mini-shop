import Link from "next/link";
import css from "./ButtonLink.module.css";

type Props = {
  children: string;
  href: string;
};
const ButtonLink = ({ children, href }: Props) => {
  return (
    <Link href={href} type="button" className={css.button}>
      {children}
    </Link>
  );
};
export default ButtonLink;
