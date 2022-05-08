import { Popover } from "@headlessui/react";
import { UsersFour } from "phosphor-react";
import { WidgetSocial } from "./WidgetSocial";

export function Social() {
  return (
    <Popover className="absolute bottom-2 left-2 md:bottom-7 md:left-7">
      <Popover.Panel>
        <WidgetSocial />
      </Popover.Panel>

      <Popover.Button className="bg-green-700 rounded-full px-3 h-12 flex items-center text-white group">
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-linear">
          Redes Sociais <span className="pl-2"></span>
        </span>
        <UsersFour className="w-6 h-6" />
      </Popover.Button>
    </Popover>
  );
}
