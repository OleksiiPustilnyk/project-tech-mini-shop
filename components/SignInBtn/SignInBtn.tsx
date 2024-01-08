import { GetSessionParams, signOut } from 'next-auth/react';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

type SessionType = any;

export default function SignInBtn({ session }: { session: SessionType }) {
    return (
        <>
            {session ? (
                <Link
                    href="#"
                    className="button"
                    onClick={() => signOut({ callbackUrl: '/' })}
                >
                    SignOut
                </Link>
            ) : (
                <Link href="/signin" className="button">
                    SignIn
                </Link>
            )}
        </>
    );
}

export async function getServerSideProps(
    context: GetSessionParams | undefined,
) {
    const session = await getSession(context);
    return {
        props: { session },
    };
}
