import { NextPage } from "next";
import Head from "next/head";
import { Navbar, Home } from "ui";

const Index: NextPage = () => {
  return (
    <div className="w-full min-h-screen mx-auto bg-soft-pink px-10 py-6">
      <Head>
        <title>Recepti</title>
        <meta name="home" content="Recepti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Home />
    </div>
  );
};

export default Index;
