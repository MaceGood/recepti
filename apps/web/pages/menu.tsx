import { useSession, signIn, signOut } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <div>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Menu;
