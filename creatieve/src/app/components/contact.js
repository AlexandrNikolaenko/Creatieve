'use client'

import { BrightButton } from "./buttons"

let fields = [
    {
        id: 1,
        name: 'name',
        placeholder: 'Как к вам обращаться?'
    },
    {
        id: 2,
        name: 'product',
        placeholder: 'Какой продукт вас интересует?'
    },
    {
        id: 3,
        name: 'time',
        placeholder: 'Укажите удобное время'
    },
    {
        id: 4,
        name: 'tel',
        placeholder: 'Ваш номер телефона'
    }
]

let reasons = [
    {
        id: 1,
        reason: 'хотите заказать услугу'
    },
    {
        id: 2,
        reason: 'не знаете какой продукт подходит Вам'
    },
    {
        id: 3,
        reason: 'хотите узнать стоимость услуги'
    },
    {
        id: 4,
        reason: 'остались другие вопросы'
    }
]

export default function Contact () {


    return (
        <section id="5" className="bg-white py-14 h-screen">
            <div className="wrapper flex flex-col gap-y-14 items-center">
                <div className="flex gap-x-10 items-center">
                    <p className="text-active-base font-base text-4xl"><span className="text-bright font-attention">Свяжитесь с нами</span>, если</p>
                    <ul className="flex flex-col gap-y-5">
                        {reasons.map(reason => <Reason key={reason.id} reason={reason}/>)}
                    </ul>
                </div>
                <div className="flex items-center gap-x-10 w-full">
                    <form className="flex w-full flex-col items-start gap-y-5">
                        <div className="grid grid-cols-2 w-full gap-x-5">
                            <div className="flex flex-col gap-y-5">
                                {fields.map(field => <InputField field={field} key={field.id}/>)}
                            </div>
                            <textarea placeholder="Напишите, если есть, что дополнить" className="border-2 outline-none rounded-[10px] px-5 py-4 border-base-color active:border-active-base focus:border-active-base placeholder:font-base"></textarea>
                        </div>
                        <BrightButton text={'Заказать звонок'} action={() => {return}}/>
                    </form>
                    <div className="w-min h-[400px] flex flex-col gap-y-2.5 items-center">
                        <div className="h-full rounded w-px bg-active-base"></div>
                        <p className="text-base font-base text-active-base">или</p>
                        <div className="h-full rounded w-px bg-active-base"></div>
                    </div>
                    <BrightButton link={"https://t.me/AliBabagg"} text={'Написать в Telegram'}/>
                </div>
            </div>
        </section>
    )
}

function InputField ({field}) {
    return (
        <input placeholder={field.placeholder} name={field.name} className="border-2 outline-none rounded-[10px] px-5 py-4 border-base-color active:border-active-base focus:border-active-base placeholder:font-base"></input>
    )
}

function Reason ({reason}) {
    return <li className="text-active-base font-base text-xl">{reason.reason}</li>
}