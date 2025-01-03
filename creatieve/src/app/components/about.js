/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import scrollToBlock, { sectionsId } from "./optData";

export default function About() {
    return (
        <section id="1" className="h-screen max-[1200px]:h-auto max-[1200px]:pt-[140px] max-[1200px]:pb-[60px] wrapper flex flex-col items-center justify-center gap-14">
            <div className="grid grid-cols-2 max-[1200px]:grid-cols-1 items-center gap-16">
                <div className="flex flex-col gap-y-14">
                    <h3 className="text-base-color font-bold font-base text-2xl">Нужен сайт или веб-приложение?<br/>
                    <span className="text-bright font-bold text-2xl">Вы по адресу!</span></h3>
                    <h1 className="text-dark-base text-5xl font-attention uppercase">Веб-разработка под ключ</h1>
                    <p className="text-base font-base">Мы <span className="text-active-base">молодая</span> и <span className="text-active-base">креативная команда</span> разработчиков. Каждый член нашей команды имеет опыт работы в сфере веб-разработки.
                    Для нас очень <span className="text-active-base">важен</span> каждый <span className="text-active-base">клиент</span>, и мы <span className="text-active-base">дорожим</span> нашей <span className="text-active-base">репутацией</span>, поэтому мы создаем только уникальные, качественные и современные продукты.</p>
                </div>
                <img alt="Let's work with us!" src={'/Обложка.png'} className="w-full h-auto"/>
            </div>
            <button onClick={() => {
                    let blockId = sectionsId.filter(section => section.name == 'portfolio')[0].id
                    scrollToBlock(blockId)
                }} className="flex gap-x-3 items-center py-2.5 px-4 rounded-base transition-all duration-300 bg-base-color active:bg-active-base hover:bg-active-base focus:bg-active-base">
                <span className="text-white font-normal text-2xl">Наши работы</span>
                <Image alt="To portfolio" src={'/arrow-down.svg'} width={24} height={24}/>
            </button>
        </section>
    )
}