'use server'
import Image from "next/image"

export default async function About() {
    return (
        <section className="h-screen wrapper flex flex-col items-center justify-center gap-14">
            <div className="flex items-center gap-x-16">
                <div className="flex flex-col gap-y-14">
                    <h3 className="text-base-color font-bold font-base text-2xl">Нужен сайт или веб-приложение?<br/>
                    <span className="text-bright font-bold text-2xl">Вы по адресу!</span></h3>
                    <h1 className="text-dark-base text-5xl font-attention uppercase">Веб-разработка под ключ</h1>
                    <p className="text-base">Мы <span className="text-active-base">молодая</span> и <span className="text-active-base">креативная команда</span> разработчиков. Каждый член нашей команды имеет опыт работы в сфере веб-разработки.
                    Для нас очень <span className="text-active-base">важен</span> каждый <span className="text-active-base">клиент</span>, и мы <span className="text-active-base">дорожим</span> нашей <span className="text-active-base">репутацией</span>, поэтому мы создаем только уникальные, качественные и современные продукты.</p>
                </div>
                <Image alt="Let's work with us!" src={'/Обложка.svg'} width={637} height={308}/>
            </div>
            <button className="flex gap-x-3 items-center py-2.5 px-4 rounded-base transition-all duration-300 bg-base-color active:bg-active-base hover:bg-active-base focus:bg-active-base">
                <span className="text-white font-normal text-2xl">Наши работы</span>
                <Image alt="To portfolio" src={'/arrow-down.svg'} width={24} height={24}/>
            </button>
        </section>
    )
}