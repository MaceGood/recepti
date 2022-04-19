import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarMenu: React.FC = () => {
  const router = useRouter();

  return (
    <Menu as="div" className="relative inline-block text-left ml-8 z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-soft-purple p-5">
          <div className="py-1">
            <Menu.Item>
              <button
                className={classNames(
                  "hover:bg-soft-white hover:text-soft-purple hover:rounded-md w-full flex items-center text-left px-4 py-2 text-base"
                )}
              >
                Home
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className={classNames(
                  "hover:bg-soft-white hover:text-soft-purple hover:rounded-md w-full flex items-center text-left px-4 py-2 text-base"
                )}
              >
                Recipes
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="text-soft-purple bg-soft-white rounded-lg px-10 py-2 border hover:text-soft-white hover:bg-soft-purple hover:border-soft-white"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarMenu;
