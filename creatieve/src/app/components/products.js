'use client'

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import OrderButton from "./buttons";
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

let products = [
    {
        id: 1,
        name: 'Landing page',
        cost: '39 900 ₽',
        time: '5',
        description: 'Landing page — это одностраничный веб-сайт, созданный с целью привлечения клиентов. Обычно содержит информацию о продукте и призыв к действию.',
        fullDesc: 'Лендинг пэйдж (или целевая страница) — это веб-страница, созданная с целью привлечения внимания посетителей и побуждения их к конкретному действию, например, покупке товара, подписке на рассылку или заполнению формы. Обычно лендинг пэйдж имеет удерживающий внимание дизайн и сосредоточен на одной конкретной цели, что позволяет снизить количество отвлекающих факторов и повысить конверсию.',
        activeBg: 'landingBlock',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
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
        activeBg: 'siteBlock',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
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
        activeBg: 'appBlock',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
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
        activeBg: 'visitBlock',
        examples: [
            {
                id: 1,
                name: ''
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
            }
        ]
    }
]

export default function Products() {
    let [showId, setShowId] = useState(1);

    useEffect(() => {
        let slideProd = document.getElementById("slideProd");
        let xpoint = document.getElementById(`block${showId}`).offsetLeft;
        slideProd.scroll({
            top: 0,
            left: xpoint,
            behavior: "smooth"
        });
        let slideName = document.getElementById("slideName");
        let ypoint = document.getElementById(`title${showId}`).offsetTop;
        slideName.scroll({
            top: ypoint,
            left: 0,
            behavior: "smooth"
        });
    }, [showId]);

    return(
        <section id="2" className="shadow-section relative z-40 bg-base-color py-14">
            <div className="wrapper flex flex-col gap-y-14 items-center">
                <h4 className="text-white font-base text-4xl text-center font-bold">Что мы предлагаем?</h4>
                <div className="grid grid-cols-6 w-full gap-10 justify-center items-center">
                    {products.map(product => <ProductBlock product={product} key={product.id} changer={setShowId}/>)}
                </div>
                <OrderButton />
                <div id="block" className="flex flex-col w-full gap-y-5 rounded-[20px] shadow-inner p-5">
                    <div className="flex justify-between px-5">
                        <div id="slideName"  className="h-[45px] overflow-y-hidden relative">
                            <ul id="nameLine" className="flex flex-col gap-3">
                                {products.map(product => <ProductTitle product={product} key={product.id}/>)}
                            </ul>
                        </div>
                        <SlideButton changeId={setShowId} current={showId}/>
                    </div>  
                    <div id="slideProd" className="w-full overflow-x-hidden relative">
                        <ul id="blockLine" className="flex gap-x-10 w-max">
                            {products.map(product => <DescProductBlock product={product} key={product.id}/>)}
                            <div className="bg-white w-[3px] rounded"></div>
                        </ul>
                    </div>
                    <OrderButton />        
                </div>
            </div>
        </section>
    )
}

function SlideButton({changeId, current}) {
    return (
        <div className={`slideButton overflow-hidden rounded-[10px] bg-active-base`}>
            <button onClick={() => {
                if (current > 1) changeId(current - 1);
                else changeId(products.length);
            }} className="px-5 py-2.5 transition-all duration-300 bg-active-base hover:bg-dark-base">
                <Image alt='turn last' src={'/chevron-left.svg'} width={24} height={24}/>
            </button>
            <button onClick={() => {
                if (current < products.length) changeId(current + 1);
                else changeId(1);
            }} className="px-5 py-2.5 transition-all duration-300 bg-active-base hover:bg-dark-base">
                <Image alt='turn next' src={'/chevron-right.svg'} width={24} height={24}/>
            </button>
        </div>
    )
}

function ProductTitle({product}){
    return (
        <li id={`title${product.id}`}>
            <h3 className="font-base font-bold text-4xl text-white">{product.name}</h3>
        </li>
    )
}

function DescProductBlock({product}) {
    function getWidth() {
        if (window.innerWidth <= 1400) return window.innerWidth - 166
        else return 1360 - 126
    }

    return (
        <>
            <div className="bg-white w-[3px] rounded" id={`block${product.id}`}></div>
            <li className={`flex gap-x-12`} style={{width: getWidth() + 'px'}}>
                <div className="flex flex-col gap-y-[30px] w-max">
                    <p className="text-white font-base text-base text-nowrap">стоимость услуги от <span className="font-ital text-xl italic">{product.cost}</span></p>
                    <p className="text-white font-base text-base text-nowrap">срок реализации от <span className="font-ital text-xl italic">{product.time} дней</span></p>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-white font-base text-base text-nowrap">примеры:</p>
                        <ul className="flex flex-col gap-y-2">
                            {product.examples.map(example => <li key={example.id} className="text-white list-disc text-nowrap">{example.name}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <h5 className="text-white font-ital text-2xl italic">Что это?</h5>
                    <p className="text-white text-base">{product.fullDesc}</p>
                    <h5 className="text-white font-ital text-2xl italic">Дополнительно</h5>
                    <ul className="leading-relaxed">
                        {product.add.map(service => <li key={service.id} className="text-white list-disc">{service.service} <span>{service.price}</span></li>)}
                    </ul>
                </div>
            </li>
        </>
    )
}

function ProductBlock({product, changer}) {
    function scroller() {
        changer(product.id);
        let block = document.getElementById('block').getBoundingClientRect();
        window.scroll({
            top: block.top - ((window.innerHeight - block.height) / 2) + window.scrollY,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <button onClick={scroller} className={`productBlock text-left flex flex-col h-full gap-y-6  transition-all *:hover:text-white ${product.activeBg} cursor-pointer  p-8 shadow-base rounded-[10px] ${product.id == 4 ? 'col-start-3 col-span-2' : 'col-span-2'}`}>
            <h4 className="text-active-base font-base text-2xl font-bold transition-all">{product.name}</h4>
            <p className="text-bright font-base text-base transition-all">от <span className="text-inherit text-xl">{product.cost}</span></p>
            <p className="text-active-base font-base text-base transition-all">срок реализации от <span className="text-inherit text-xl">{product.time} дней</span></p>
            <p className="text-dark text-sm transition-all">{product.description}</p>
        </button>
    )
}