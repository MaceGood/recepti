import { useSession } from "next-auth/react";
import Head from "next/head";
import { Banner, Navbar, Recipes } from "ui";

const RecipesHome = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full min-h-screen mx-auto bg-soft-white">
      <Head>
        <title>Recepti - Find the food you Love</title>
        <meta name="home" content="Login - Recepti" />
      </Head>

      <Navbar />
      <Banner />

      <Recipes />
    </div>
  );
};

export default RecipesHome;
