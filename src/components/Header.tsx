import React from "react";

export const Header = () => {
  return (
    <>
      <header className="flex w-[100%] h-[110px] justify-around">
        <div className="w-[80px]">
          <img src="/turkey.png" alt="Logo" />
        </div>
        <nav className="flex">
          <ul className="flex gap-[30px]">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
