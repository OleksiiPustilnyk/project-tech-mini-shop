import { signOut, useSession } from 'next-auth/react';

const LogoutButton = () => {
    const { data: session } = useSession();

    const handleLogout = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/' });
        console.log(data);
    };

    return (
        <>
            {session ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <p>You are not logged in</p>
            )}
        </>
    );
};

export default LogoutButton;