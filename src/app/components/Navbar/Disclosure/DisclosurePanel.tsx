import { DisclosureButton, DisclosurePanel } from "@headlessui/react";

const DisclosurePanelComponent = ({ items, classNames }: Props) => {
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {items.map((item, index) => (
          <DisclosureButton
            key={index}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default DisclosurePanelComponent;

interface Props {
  items: { name: string; href: string; current: boolean }[];
  classNames: (...classes: string[]) => string;
}
