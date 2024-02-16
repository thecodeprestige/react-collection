"use client";
import { PinContainer } from "./components/ui/3d-pin";
import "./AnimatedPin.css";

function AnimatedPin() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        imageSrc="https://media.tenor.com/r-O2xbfTEWIAAAAi/bear-dance-no-background.gif"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Let Dance
          </h3>
          <div className="bg-[url('https://wallpapercave.com/wp/wp11296779.jpg')] bg-cover bg-center w-full h-full flex flex-1 rounded-lg mt-4">
            <img src=""></img>
          </div>
          <h3 className="mt-4  font-bold text-center text-slate-100">
            <a className="text-cyan-400" href="https://ui.aceternity.com/">ui.aceternity.com</a>
          </h3>
        </div>
      </PinContainer>
    </div>
  );
}

export default AnimatedPin;
