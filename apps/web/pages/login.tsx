import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { LoginButton } from "ui";
import Image from "next/image";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen max-w-screen-2xl mx-auto bg-soft-pink px-10 py-6 text-soft-white flex flex-col justify-center text-center">
      <Head>
        <title>Login - Recepti</title>
        <meta name="home" content="Login - Recepti" />
        {/* <link rel="icon" href="/favicon.ico" />  */}
      </Head>

      <h1
        className="sm:hidden flex text-2xl justify-center cursor-pointer mt-10 hover:text-soft-blue"
        onClick={() => router.push("/")}
      >
        Recepti
      </h1>

      <div className="w-full grid justify-center my-auto">
        <h1 className="sm:text-2xl text-xl mb-4">Welcome</h1>

        <LoginButton
          text="Login With Google"
          src="/google.svg"
          alt="Google Logo"
          className="mb-4"
        />
        <LoginButton
          text="Login With Facebook"
          src="/facebook.svg"
          alt="Facebook Logo"
        />
      </div>

      <div className="w-full flex items-center justify-between sm:text-lg text-base mt-5">
        <h1
          className="cursor-pointer hover:text-soft-blue sm:flex hidden"
          onClick={() => router.push("/")}
        >
          Recepti
        </h1>

        <div className="flex items-center">
          <h1 className="cursor-pointer mr-8 hover:text-soft-blue">
            Report a bug
          </h1>

          <Image
            src="/github.png"
            alt="GitHub Logo"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
