import { SignInForm } from "@/app/components/SignInForm/SignInForm";
import { GoogleButton } from "@/app/components/UI/GoogleButton/GoogleButton";

export default async function SignIn() {
  return (
    <div className="container mx-auto flex items-center flex-col">
      <h1>SignIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
