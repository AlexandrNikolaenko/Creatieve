let works = [
    {
        id: 1,
        title: 'OlimpEducation',
        desc: 'Это веб-приложение помогает школьникам готовиться к олимпиада, предоставляя задания по определенным выбранным критериям.',
        urlImgDesk: '',
        urlImgMob: '',
        isReverse: false
    },
    {
        id: 2,
        title: 'VTB.fines',
        desc: 'Это приложение наша команда разрабатывала как конкурентное преимущество банка ВТБ. В нем можно осуществлять платежи, отслеживать свой рейтинг и прочее.',
        urlImgDesk: '',
        urlImgMob: '',
        isReverse: true
    },
    {
        id: 3,
        title: 'Neotechnica',
        desc: 'Этот кооперативный сайт находится в процессе разработки на смену устаревшей версии сайт с сохранением стилистики, цветов и логотипов компании',
        urlImgDesk: '',
        urlImgMob: '',
        isReverse: false
    }
]

export default function Portfolio() {
    return (
        <section className="bg-dark-base w-full py-14 relative z-40">
            <div className="flex flex-col gap-y-10 wrapper items-center">
                <div className="flex flex-col gap-y-5 items-center">
                    <h3 className="text-white font-base text-4xl font-bold"><span className="text-bright">О качестве</span> наши <span>работы</span> говорят за нас</h3>
                    <p className="text-2xl text-white">представляем вам несколько наших работ</p>
                </div>
                <ul>
                    {works.map(work => <Work key={work.id} work={work}/>)}
                </ul>
            </div>
        </section>
    )
}

function Work({work}) {
    return (
        <li className={`flex ${work.isReverse && 'flex-row-reverse'}`}>
            
        </li>
    )
}