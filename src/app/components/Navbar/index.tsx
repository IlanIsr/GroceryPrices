"use client";

import { Disclosure } from "@headlessui/react";
import DisclosurePanelComponent from "./Disclosure/DisclosurePanel";
import DisclosureButtonComponent from "./Disclosure/DisclosureButton";
import { usePathname } from 'next/navigation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ navbarItems }: Props) {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-database-tertiary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButtonComponent />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navbarItems.map((navbarItem, index) => (
                  <a
                    key={index}
                    href={navbarItem.href}
                    aria-current={pathname === navbarItem.href ? "page" : undefined}
                    className={classNames(
                      pathname === navbarItem.href
                        ? "bg-database-hover text-white"
                        : "text-gray-300 hover:bg-database-hover hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {navbarItem.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanelComponent items={navbarItems} classNames={classNames} />
    </Disclosure>
  );
}

export default Navbar;

interface Props {
  navbarItems: { name: string; href: string; current: boolean }[];
}
