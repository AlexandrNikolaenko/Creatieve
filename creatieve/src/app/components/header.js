'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import scrollToBlock from "./optData";
import Link from "next/link";

export default function Header() {
    let [isHidden, setIsHidden] = useState(false);
    let [isShadow, setIsShadow] = useState(window.scrollY != 0);
    let position = useRef(window.scrollY);
    let lastTimeout = useRef([]);
    
    useEffect(() => {
        window.onscroll = function() {
            let timeout = setTimeout(() => setIsHidden(true), 2000);
            if (position.current >= window.scrollY) {
                lastTimeout.current.forEach(time => clearTimeout(time));
                lastTimeout.current = []
                clearTimeout(timeout);
                setIsHidden(false);
                if (window.scrollY != 0) timeout = setTimeout(() => setIsHidden(true), 2000);
            }
            if (window.scrollY != 0) setIsShadow(true);
            else setIsShadow(false);
            lastTimeout.current = lastTimeout.current.concat([timeout]);
            position.current = window.scrollY; 
        }
    })

    useEffect(() => {
        window.onmousemove = function (event) {
            let header = document.getElementsByTagName('header')[0];
            if (event.clientY < header.getBoundingClientRect().height && isHidden) {
                setIsHidden(false);
                header.addEventListener('mouseleave', function() {
                    if (window.scrollY != 0) setIsHidden(true);
                    header.removeEventListener('mouseleave', () => {return});
                })
            }
        }
    })
    

    return (
        <header className={`fixed z-50 w-full transition-all duration-1000 ${isHidden && '-translate-y-full'} bg-white ${isShadow && 'shadow-base'}`}>
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