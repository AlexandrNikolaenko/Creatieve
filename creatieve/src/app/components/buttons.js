'use client'

export default function OrderButton() {
    function scrollToForm(){
        return
    }
    
    return (
        <button onClick={scrollToForm} className="text-center w-min py-4 px-10 rounded-[10px] font-base text-2xl text-white transition-all duration-300 bg-bright active:bg-active-bright focus:bg-active-bright hover:bg-active-bright">
            Заказать
        </button>
    )
}

export function BrightButton ({text, action}) {
    return(
        <button onClick={action} className="px-10 py-4 rounded-[10px] bg-bright text-white font-base text-xl">
            {text}
        </button>
    )
}