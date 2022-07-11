import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import classNames from "classnames"

export function Header() {
    const [menu, setMenu] = useState<boolean>(false)

  return (
    <header>
      <div className="flex justify-center gap-9 sm:hidden p-8">
        <a href="">Produtos</a>
        <a href="">Recursos</a>
        <a href="">Suporte</a>
        <a href="">Preços</a>
        <a href="">Blog</a>
      </div>

      <div className="hidden sm:block">
        <div className="flex justify-end items-center gap-5 p-8">
            <span>Menu</span>
            {
                menu ? <button onClick={() => setMenu(false)}><IoClose size={27}/></button> : <button onClick={() => setMenu(true)}><FaBars size={27} /></button>
            }
        </div>
      </div>

      <div>
      <div className={classNames("bg-background w-full min-h-sreen z-50 flex flex-col flex-1 items-center mt-8 gap-9 p-8 absolute", {
        "block": menu,
        "hidden": !menu
      })}>
        <a href="">Produtos</a>
        <a href="">Recursos</a>
        <a href="">Suporte</a>
        <a href="">Preços</a>
        <a href="">Blog</a>
      </div>
      </div>
    </header>
  );
}
