import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarMenu: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block text-left ml-8 z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border px-4 py-2 text-sm font-medium  ">
          <MenuAlt3Icon className="h-10 w-10 cursor-pointer" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-dark ring-opacity-5 focus:outline-none bg-light-pink p-5 border border-dark">
          <div className="py-1">
            {!session?.user ? (
              <>
                {router.pathname !== "/recipes" && (
                  <Menu.Item>
                    <button
                      className={classNames(
                        "hover:bg-soft-white text-dark hover:rounded-md w-full flex items-center text-left px-4 py-2 text-base"
                      )}
                      onClick={() => router.push("/recipes")}
                    >
                      Recipes
                    </button>
                  </Menu.Item>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center w-full text-left px-4 py-2 text-base md:hidden">
                  <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="text-base ml-4 cursor-default text-dark">
                    {session?.user?.name}
                  </p>
                </div>

                {router.pathname !== "/recipes" && (
                  <Menu.Item>
                    <button
                      className={classNames(
                        "hover:bg-soft-white text-dark hover:rounded-md w-full flex items-center text-left px-4 py-2 text-base"
                      )}
                      onClick={() => router.push("/recipes")}
                    >
                      Recipes
                    </button>
                  </Menu.Item>
                )}
              </>
            )}

            <Menu.Item>
              <button
                className="text-dark bg-light-pink  hover:text-soft-white hover:bg-dark hover:border-soft-white
                  rounded-lg px-10 py-2 border"
                onClick={() =>
                  session?.user ? signOut() : router.push("/login")
                }
              >
                {session?.user ? "Sign out" : "Login"}
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarMenu;
