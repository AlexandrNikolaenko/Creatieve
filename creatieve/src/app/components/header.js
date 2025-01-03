'use client'
import Image from "next/image";
import { useState } from "react";
import scrollToBlock from "./optData";
import Link from "next/link";

export default function Header() {
    let [isHidden, setIsHidden] = useState(false);
    
    // window.onscroll = async function() {
    //     if (window.scrollY != 0) {
    //         setIsHidden(false);
    //         setTimeout(setIsHidden(true), 5000)
    //     }   
    // }

    return (
        <header className={`fixed z-50 w-full transition-all duration-1000 ${isHidden && '-translate-y-full'} bg-white shadow-base`}>
            <div className="flex justify-between wrapper flex-row items-center">
                <Link href="/#" className="flex gap-x-2 flex-row h-full items-center">
                    <Image alt="Logo" src={'/Logo.svg'} width={15} height={35.5}/>
                    <h5 className="text-base font-attention uppercase text-dark-base">Crea<span className="text-bright">tie</span>ve</h5>
                </Link>
                <nav className="flex gap-x-7">
                    <HeaderButton text={'О нас'} blockId={1} />
                    <HeaderButton text={'Цены'} blockId={2} />
                    <HeaderButton text={'Портфолио'} blockId={4} />
                    <HeaderButton text={'Заказать'} blockId={5} />
                </nav>
            </div>
        </header>
    )
}

function HeaderButton({text, blockId}){       
    return (
        <button className="uppercase py-[21px] font-base text-dark" onClick={() => scrollToBlock(blockId)}>
            {text}
        </button>
    )
}