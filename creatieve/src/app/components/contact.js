let fields = [
    {
        id: 1,
        name: '',
        placeholder: ''
    },
    {
        id: 2,
        name: '',
        placeholder: ''
    },
    {
        id: 3,
        name: '',
        placeholder: ''
    },
    {
        id: 4,
        name: '',
        placeholder: ''
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
        <section className="bg-white py-14 h-screen">
            <div className="wrapper flex flex-col gap-y-14 items-center">
                <div className="flex gap-x-10 items-center">
                    <p className="text-active-base font-base text-4xl"><span className="text-bright font-attention">Свяжитесь с нами</span>, если</p>
                    <ul className="flex flex-col gap-y-5">
                        {reasons.map(reason => <Reason key={reason.id} reason={reason}/>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

function InputField ({field}) {
    return (
        <input>
        </input>
    )
}

function Reason ({reason}) {
    return <li className="text-active-base font-base text-xl">{reason.reason}</li>
}