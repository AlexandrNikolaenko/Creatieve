let reasons = [
    {
        id: 1,
        title: 'Разработка уникального продукта',
        desc: 'Никаких шаблонов! Только уникальный дизайн и разработка с нуля. Проект будет разработан строго под ваши задачи.'
    },
    {
        id: 2,
        title: 'Гибкое формирование проекта',
        desc: 'Вы можете не только выбрать дополнительные услуги, но и заказать проект, который не подходит под описание наших услуг.'
    },
    {
        id: 3,
        title: 'Стоимость ниже рыночной',
        desc: 'Мы проанализировали рынок за вас. И, имея уникальную структуру работы внутри команды, мы можем предложить цены ниже рыночных.'
    }
];

let stages = [
    {
        id: 1,
        text: 'Общаемся с вами, формулируем задачи и цели'
    },
    {
        id: 2,
        text: 'Планируем разработку, составляем тз для каждого этапа'
    },
    {
        id: 3,
        text: 'Разрабатываем дизайн макет и функционал проекта'
    },
    {
        id: 4,
        text: 'Тестируем и разворачиваем проект'
    },
    {
        id: 5,
        text: 'Сопровождаем поностью функционирующий проект'
    }
]

export default function WhyWe() {
    return(
        <section className="shadow-section relative z-40 bg-active-base py-14">
            <div className="flex flex-col gap-14 wrapper items-center">
                <h3 className="uppercase font-base text-4xl font-bold text-white">Почему <span className="text-bright">мы?</span></h3>
                <div className="grid grid-cols-3 gap-10">
                    {reasons.map(reason => <ReasonBlock key={reason.id} reason={reason}/>)}
                </div>
                <h4 className="text-white text-3xl font-base">Прозрачный процесс разработки</h4>
                <ul className="relative flex flex-col gap-[30px] items-start">
                    <div className="z-20 absolute border-dashed border-[3px] h-full left-[33px] border-bright"></div>
                    {stages.map(stage => <Stage key={stage.id} stage={stage}/>)}
                </ul>
            </div>
        </section>
    )
}

function ReasonBlock({reason}) {
    return(
        <div className="p-[25px] bg-dark-base flex flex-col gap-y-10 rounded-[10px] shadow-base">
            <div className="flex items-start gap-2">
                <span className="text-white text-3xl font-base">{reason.id}.</span>
                <h4 className="text-white text-3xl font-base">{reason.title}</h4>
            </div>
            <p className="text-white text-xl">{reason.desc}</p>
        </div>
    )
}

function Stage({stage}) {
    return (
        <li className="relative z-30 flex gap-14 items-center">
            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-bright">
                <span className="text-white font-base text-4xl">{stage.id}</span>
            </div>
            <p className="text-white font-base text-xl">{stage.text}</p>
        </li>
    )
}