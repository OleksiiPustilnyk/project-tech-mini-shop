import Input from "@/app/components/UI/Input/Input";
import Button from "@/app/components/UI/Button/Button";
import ButtonLink from "@/app/components/UI/ButtonLink/ButtonLink";

import "./signIn.css";

export default function SignIn() {
  return (
    <div className="container mx-auto flex items-center">
      <form className="form">
        <fieldset className="form-inputs">
          <legend>Please sign in to your account</legend>
          <Input type="email" placeholder="E-mail">
            E-mail:
          </Input>
          <Input type="password" placeholder="Password">
            Password:
          </Input>
        </fieldset>
        <div className="form-buttons">
          <ButtonLink href="/register">Sign-Up</ButtonLink>
          <Button>Enter</Button>
        </div>
      </form>
    </div>
  );
}
