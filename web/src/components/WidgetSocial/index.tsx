import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
  X,
} from "phosphor-react";
import { CloseButton } from "../CloseButton";
import { Popover } from "@headlessui/react";
import { Footer } from "../Footer";

export function WidgetSocial() {
  const clickFB = () => {
    window.open("https://facebook.com");
  };
  const clickDS = () => {
    window.open("https://discord.com/");
  };
  const clickTW = () => {
    window.open("https://twitter.com/?lang=pb");
  };
  const clickIN = () => {
    window.open("https://www.instagram.com/?hl=pb");
  };
  const clickWA = () => {
    window.open("https://www.whatsapp.com/");
  };
  const clickTE = () => {
    window.open("https://telegram.org/");
  };

  return (
    <div className="bg-green-700 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto">
      <header>
        <span className="flex text-xl leading-6">Clique e acesse!</span>
        <CloseButton />
      </header>

      <div className="grid grid-cols-3 py-7 gap-4 w-full">
        <button
          type="button"
          onClick={clickFB}
          className="bg-green-900 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
        >
          <FacebookLogo className="h-8 w-8" />
        </button>

        <button
          type="button"
          onClick={clickDS}
          className="bg-green-900 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
        >
          <DiscordLogo className="h-8 w-8" />
        </button>

        <button
          type="button"
          onClick={clickTW}
          className="bg-green-900 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
        >
          <TwitterLogo className="h-8 w-8" />
        </button>

        <button
          type="button"
          onClick={clickIN}
          className="bg-green-900 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
        >
          <InstagramLogo className="h-8 w-8" />
        </button>

        <button
          type="button"
          onClick={clickWA}
          className="bg-green-900 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
        >
          <WhatsappLogo className="h-8 w-8" />
        </button>

        <button
          type="button"
          onClick={clickTE}
          className="bg-green-900 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
        >
          <TelegramLogo className="h-8 w-8" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
