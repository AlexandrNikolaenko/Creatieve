

let products = [
    {
        id: 1,
        name: 'Landing page',
        cost: '39 900 ₽',
        time: '5',
        description: 'Landing page — это одностраничный веб-сайт, созданный с целью привлечения клиентов. Обычно содержит информацию о продукте и призыв к действию.',
        fullDesc: ''
    },
    {
        id: 2,
        name: 'Корпоративный сайт',
        cost: '34 900 ₽',
        time: '5',
        description: 'Корпоративный сайт — это веб-ресурс, представляющий компанию, её продукты. Он служит для информирования посетителей о деятельности компании. Корпоративный сайт помогает укрепить имидж и улучшить коммуникацию с аудиторией.',
        fullDesc: ''
    },
    {
        id: 3,
        name: 'Веб-приложение',
        cost: '39 900 ₽',
        time: '7',
        description: 'Веб-приложение — это программа, которая работает в веб-браузере и предоставляет пользователям определенные функции через интернет. Оно доступно с любого устройства с подключением к сети и не требует установки на устройтсве.',
        fullDesc: ''
    },
    {
        id: 4,
        name: 'Сайт визитка',
        cost: '19 900 ₽',
        time: '4',
        description: 'Сайт-визитка — одностраничный веб-сайт, представляющий компанию. Содержит основную информацию о деятельности,  контактные данные, часто портфолио или отзывы. Его цель — быстро и эффективно донести информацию до потенциальных клиентов и облегчить связь с ними.',
        fullDesc: ''
    }
]

export default function Products() {
    function scrollToForm(){

    }

    return(
        <section className="relative z-40 bg-base-color py-14">
            <div className="wrapper flex flex-col gap-y-14 items-center">
                <h4 className="text-white font-base text-4xl text-center">Что мы предлагаем?</h4>
                <ul className="grid grid-cols-6 w-full gap-10 justify-center items-center">
                    {products.map(product => <ProductBlock product={product} key={product.id}/>)}
                </ul>
                <button onClick={scrollToForm} className="text-center py-4 px-10 rounded-[10px] font-base text-2xl text-white transition-all duration-300 bg-bright active:bg-active-bright focus:bg-active-bright hover:bg-active-bright">
                    Заказать
                </button>
                <div className="flex flex-col gap-y-5 rounded-[20px] shadow-inner p-5">
                    <div className="flex justify-between px-5">
                        <ul className="flex flex-col gap-3">
                            {products.map(product => <ProductTitle title={product.name} key={product.id}/>)}
                        </ul>
                    </div>            
                </div>
            </div>
        </section>
    )
}

function ProductTitle({title}){
    return (
        <h3 className="font-base font-bold text-4xl text-white">

        </h3>
    )
}

function DescProductBlock({product}) {
    return (
        <></>
    )
}

function ProductBlock({product}) {
    return (
        <li className={`flex flex-col gap-y-6 cursor-pointer bg-white p-8 shadow-base rounded-[10px] ${product.id == 4 ? 'col-start-3 col-span-2' : 'col-span-2'}`}>
            <h4 className="text-bright font-base text-2xl font-bold">{product.name}</h4>
            <p className="text-dark font-base text-base">от <span className="text-bright text-xl">{product.cost}</span></p>
            <p className="text-dark font-base text-base">срок реализации от <span className="text-bright text-xl">{product.time} дней</span></p>
            <p className="text-dark text-sm">{product.description}</p>
        </li>
    )
}