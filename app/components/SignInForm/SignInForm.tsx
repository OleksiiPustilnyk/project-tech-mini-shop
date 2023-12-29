"use client";

import Input from "@/app/components/UI/Input/Input";
import Button from "@/app/components/UI/Button/Button";
import ButtonLink from "@/app/components/UI/ButtonLink/ButtonLink";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";

import "./SignInForm.css";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type="email" name="email">
        E-mail:
      </Input>
      <Input type="password" name="password">
        Password:
      </Input>

      <button type="submit" className="button">
        Sign In
      </button>

      {/* <div className="form-buttons">
        <ButtonLink href="/register">Sign-Up</ButtonLink>
        <Button type="submit">Enter</Button>
      </div> */}
    </form>
  );
};

export { SignInForm };
