import * as React from "react";
import { Button } from "../Button";
import NavbarMenu from "./NavbarMenu";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between text-soft-white items-center select-none">
      <Image src="/logo.svg" width={120} height={50} />

      <div className="hidden md:flex text-lg items-center">
        <p className="mr-10 cursor-pointer hover:text-soft-blue">Home</p>
        <p className="mr-10 cursor-pointer hover:text-soft-blue">Recipes</p>
        <Button text="Login" onClick={() => router.push("/login")} />
      </div>

      <div className="md:hidden flex">
        <NavbarMenu />
      </div>
    </div>
  );
};
