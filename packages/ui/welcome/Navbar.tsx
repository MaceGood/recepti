import * as React from "react";
import { Button } from "../Button";
import NavbarMenu from "./NavbarMenu";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div
      className={classNames(
        router.pathname === "/recipes" && "px-10 py-6",
        "flex justify-between text-soft-white items-center select-none"
      )}
    >
      <Image
        src={router.pathname === "/" ? "/logo.svg" : "/logo-dark.svg"}
        width={120}
        height={50}
        onClick={() => router.push("/recipes")}
        className="cursor-pointer"
      />

      <div className="flex items-center">
        <div className="hidden md:flex text-lg items-center">
          {router.pathname !== "/" ? (
            <>
              {session?.user && (
                <div className="flex items-center text-dark text-base">
                  <Image
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {!session?.user && (
                <p
                  className="mr-10 cursor-pointer hover:text-dark"
                  onClick={() => router.push("/recipes")}
                >
                  Recipes
                </p>
              )}
              <Button
                text={session?.user ? "Recipes" : "Login"}
                onClick={() =>
                  session?.user
                    ? router.push("/recipes")
                    : router.push("/login")
                }
              />
            </>
          )}
        </div>

        <div
          className={
            router.pathname !== "/"
              ? "flex text-dark border-dark"
              : " md:hidden flex"
          }
        >
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
};
