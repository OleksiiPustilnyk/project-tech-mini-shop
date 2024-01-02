import { SignInForm } from "@/app/components/SignInForm/SignInForm";
import { GoogleButton } from "@/app/components/UI/GoogleButton/GoogleButton";
import SignInLayout from "./layout";

export default async function SignIn() {
  return (
    <SignInLayout>
      <div className="container mx-auto flex items-center flex-col">
        <h1>SignIn</h1>
        <SignInForm />
        <div>or</div>
        <GoogleButton />
      </div>
    </SignInLayout>
  );
}
