import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
        <div className="container mx-auto grid grid-cols-4 gap-4">
          <div className="col-span-4 min-h-[fit-content]">{children}</div>
        </div>
      </main>
    </div>
  );
}
