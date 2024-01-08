import { SignInForm } from '@/components/SignInForm/SignInForm';
import { GoogleButton } from '@/components/UI/GoogleButton/GoogleButton';

export default async function SignIn() {
    return (
        <div className="container mx-auto flex items-center flex-col">
            <h1>SignIn</h1>
            <SignInForm />
            <div>or</div>
            <GoogleButton />
        </div>
    );
}
