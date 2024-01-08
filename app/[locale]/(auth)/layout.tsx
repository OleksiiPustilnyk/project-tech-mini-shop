import type { Metadata } from 'next';

import '../../../styles/globals.css';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto grid grid-cols-4 gap-4">
            <div className="col-span-4 min-h-[fit-content]">{children}</div>
        </div>
    );
}
