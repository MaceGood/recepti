import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { LoginButton } from "ui";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import Menu from "./recipes";

const Login: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setproviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setproviders(setupProviders);
    };
    setTheProviders();
  }, []);

  if (session?.user) {
    router.push("/recipes");
    <Menu />;
  }

  return (
    <div className="w-full min-h-screen max-w-screen-2xl mx-auto bg-soft-pink px-10 py-6 text-soft-white flex flex-col justify-center text-center">
      <Head>
        <title>Login - Recepti</title>
        <meta name="home" content="Login - Recepti" />
      </Head>

      <div
        className="sm:hidden flex text-2xl justify-center cursor-pointer mt-10 hover:text-soft-blue"
        onClick={() => router.push("/")}
      >
        <Image src="/logo.svg" width={120} height={50} />
      </div>

      <div className="w-full grid justify-center my-auto">
        <h1 className="sm:text-2xl text-xl mb-4">Welcome</h1>

        <LoginButton
          text="Login With Google"
          src="/google.svg"
          alt="Google Logo"
          className="mb-4"
          onClick={() => signIn(providers.google.id)}
        />
        <LoginButton
          text="Login With Facebook"
          src="/facebook.svg"
          alt="Facebook Logo"
          onClick={() => signIn(providers.facebook.id)}
        />
      </div>

      <div className="w-full flex items-center justify-between sm:text-lg text-base mt-5">
        <div
          className="cursor-pointer hover:text-soft-blue sm:flex hidden"
          onClick={() => router.push("/")}
        >
          <Image src="/logo.svg" width={120} height={50} />
        </div>

        <div className="flex items-center">
          <a href="https://github.com/MaceGood/recepti/issues" target="_blank">
            <h1 className="cursor-pointer mr-8 hover:text-dark">
              Report a bug
            </h1>
          </a>

          <a href="https://github.com/MaceGood/recipes-app" target="_blank">
            <Image
              src="/github.png"
              alt="GitHub Logo"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
