'use client'

import { useState } from "react";
import Image from "next/image";
import OrderButton from "./buttons";

let products = [
    {
        id: 1,
        name: 'Landing page',
        cost: '39 900 ₽',
        time: '5',
        description: 'Landing page — это одностраничный веб-сайт, созданный с целью привлечения клиентов. Обычно содержит информацию о продукте и призыв к действию.',
        fullDesc: 'Лендинг пэйдж (или целевая страница) — это веб-страница, созданная с целью привлечения внимания посетителей и побуждения их к конкретному действию, например, покупке товара, подписке на рассылку или заполнению формы. Обычно лендинг пэйдж имеет удерживающий внимание дизайн и сосредоточен на одной конкретной цели, что позволяет снизить количество отвлекающих факторов и повысить конверсию.',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '' 
            }
        ]
    },
    {
        id: 2,
        name: 'Корпоративный сайт',
        cost: '34 900 ₽',
        time: '5',
        description: 'Корпоративный сайт — это веб-ресурс, представляющий компанию, её продукты. Он служит для информирования посетителей о деятельности компании. Корпоративный сайт помогает укрепить имидж и улучшить коммуникацию с аудиторией.',
        fullDesc: '',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '' 
            }
        ]
    },
    {
        id: 3,
        name: 'Веб-приложение',
        cost: '39 900 ₽',
        time: '7',
        description: 'Веб-приложение — это программа, которая работает в веб-браузере и предоставляет пользователям определенные функции через интернет. Оно доступно с любого устройства с подключением к сети и не требует установки на устройтсве.',
        fullDesc: '',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '' 
            }
        ]
    },
    {
        id: 4,
        name: 'Сайт визитка',
        cost: '19 900 ₽',
        time: '4',
        description: 'Сайт-визитка — одностраничный веб-сайт, представляющий компанию. Содержит основную информацию о деятельности,  контактные данные, часто портфолио или отзывы. Его цель — быстро и эффективно донести информацию до потенциальных клиентов и облегчить связь с ними.',
        fullDesc: '',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '' 
            }
        ]
    }
]

export default function Products() {
    let [showId, setShowId] = useState(1);

    return(
        <section className="relative z-40 bg-base-color py-14">
            <div className="wrapper flex flex-col gap-y-14 items-center">
                <h4 className="text-white font-base text-4xl text-center">Что мы предлагаем?</h4>
                <ul className="grid grid-cols-6 w-full gap-10 justify-center items-center">
                    {products.map(product => <ProductBlock product={product} key={product.id}/>)}
                </ul>
                <OrderButton />
                <div className="flex flex-col w-full gap-y-5 rounded-[20px] shadow-inner p-5">
                    <div className="flex justify-between px-5">
                        <ul className="flex flex-col gap-3 h-[45px] overflow-hidden">
                            {products.map(product => <ProductTitle title={product.name} key={product.id}/>)}
                        </ul>
                        <div className="overflow-hidden rounded-[10px]">
                            <button className="px-5 py-2.5">
                                <Image alt='turn last' src={'/chevron-left.svg'} width={24} height={24}/>
                            </button>
                            <button>
                                <Image alt='turn next' src={'/chevron-right.svg'} width={24} height={24}/>
                            </button>
                        </div>
                    </div>  
                    <ul className="flex gap-x-10 w-full overflow-hidden">
                        {products.map(product => <DescProductBlock product={product} key={product.id}/>)}
                    </ul>
                    <OrderButton />        
                </div>
            </div>
        </section>
    )
}

function ProductTitle({title}){
    return (
        <li>
            <h3 className="font-base font-bold text-4xl text-white">{title}</h3>
        </li>
    )
}

function DescProductBlock({product}) {
    return (
        <li className="flex gap-x-12">
            <div className="flex flex-col gap-y-[30px]">
                <p className="text-white font-base text-base">стоимость услуги от <span className="font-ital text-xl italic">{product.cost}</span></p>
                <p className="text-white font-base text-base">срок реализации от <span className="font-ital text-xl italic">{product.time} дней</span></p>
                <div className="flex flex-col gap-y-2">
                    <p className="text-white font-base text-base">примеры:</p>
                    <ul className="flex flex-col gap-y-2">
                        {product.examples.map(example => <li key={example.id} className="text-white list-disc">{example.name}</li>)}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-y-5">
                <h5 className="text-white font-ital text-2xl italic">Что это?</h5>
                <p className="text-white text-base">{product.fullDesc}</p>
                <h5 className="text-white font-ital text-2xl italic">Дополнительно</h5>
                <ul className="leading-relaxed">
                    {product.add.map(service => <li key={service.id} className="text-white list-disc">{service.service}</li>)}
                </ul>
            </div>
        </li>
    )
}

function ProductBlock({product}) {
    return (
        <li className={`flex flex-col h-full gap-y-6 cursor-pointer bg-white p-8 shadow-base rounded-[10px] ${product.id == 4 ? 'col-start-3 col-span-2' : 'col-span-2'}`}>
            <h4 className="text-active-base font-base text-2xl font-bold">{product.name}</h4>
            <p className="text-dark font-base text-base">от <span className="text-bright text-xl">{product.cost}</span></p>
            <p className="text-dark font-base text-base">срок реализации от <span className="text-bright text-xl">{product.time} дней</span></p>
            <p className="text-dark text-sm">{product.description}</p>
        </li>
    )
}