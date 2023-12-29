import { authConfig } from "@/app/components/configs/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div className="container mx-auto flex items-center">
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  );
}
