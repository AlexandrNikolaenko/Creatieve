/* eslint-disable @next/next/no-img-element */
let works = [
    {
        id: 1,
        title: 'OlimpEducation',
        desc: 'Это веб-приложение помогает школьникам готовиться к олимпиада, предоставляя задания по определенным выбранным критериям.',
        urlImgDesk: '/Desktop - 1.jpg',
        urlImgMob: '/Android Large - 1.jpg',
        isReverse: false
    },
    {
        id: 2,
        title: 'VTB.fines',
        desc: 'Это приложение наша команда разрабатывала как конкурентное преимущество банка ВТБ. В нем можно осуществлять платежи, отслеживать свой рейтинг и прочее.',
        urlImgDesk: '/Desktop - Profile page.jpg',
        urlImgMob: '/Profile page.jpg',
        isReverse: true
    },
    {
        id: 3,
        title: 'Neotechnica',
        desc: 'Этот кооперативный сайт находится в процессе разработки на смену устаревшей версии сайт с сохранением стилистики, цветов и логотипов компании',
        urlImgDesk: '/Main page 2 variant.jpg',
        urlImgMob: '/Android Large - 1.jpg',
        isReverse: false
    }
]

export default function Portfolio() {
    return (
        <section className="bg-dark-base w-full py-14 relative z-40">
            <div className="flex flex-col gap-y-10 wrapper items-center">
                <div className="flex flex-col gap-y-5 items-center">
                    <h3 className="text-white font-base text-4xl font-bold"><span className="text-bright">О качестве</span> наши <span className="text-bright">работы</span> говорят за нас</h3>
                    <p className="text-2xl text-white">представляем вам несколько наших работ</p>
                </div>
                <ul className="flex flex-col gap-y-14">
                    {works.map(work => <Work key={work.id} work={work}/>)}
                </ul>
            </div>
        </section>
    )
}

function Work({work}) {
    return (
        <li className={`flex ${work.isReverse && 'flex-row-reverse'} items-center w-full`}>
            <div className="w-1/2 flex gap-5">
                <div className="w-[492px] h-[350px] overflow-y-scroll rounded-[10px]">
                    <img alt={work.title} className="w-full h-auto" src={work.urlImgDesk}></img>
                </div>
                <div className="w-[161px] h-[350px] overflow-y-scroll rounded-[10px]">
                    <img alt={work.title} className="w-full h-auto" src={work.urlImgMob}></img>
                </div>
            </div>
            <div className={`flex flex-col gap-7 ${work.isReverse ? 'pr-10' : 'pl-10'}`}>
                <h5 className="font-base text-white text-2xl font-bold">{work.title}</h5>
                <p className="text-white text-2xl">{work.desc}</p>
            </div>
        </li>
    )
}