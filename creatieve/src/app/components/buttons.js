'use client'

import scrollToBlock, {sectionsId} from "./optData"

export default function OrderButton() {    
    return (
        <button onClick={() => {
                let blockId = sectionsId.filter(section => section.name == 'contact')[0].id
                scrollToBlock(blockId)
            }} className="shadow-small text-center w-min py-4 px-10 rounded-[10px] font-base text-2xl text-white transition-all duration-300 bg-bright active:bg-active-bright focus:bg-active-bright hover:bg-active-bright">
            Заказать
        </button>
    )
}

export function BrightButton ({text, link}) {
    if (link) {
        return(
            <a href={link} className="w-fit text-nowrap px-10 py-4 rounded-[10px] transition-all duration-300 bg-bright hover:bg-active-bright active:bg-active-bright text-white font-base text-xl shadow-small">
                {text}
            </a>
        )
    }
    return(
        <button type="submit" className="w-fit px-10 py-4 rounded-[10px] transition-all duration-300 bg-bright hover:bg-active-bright active:bg-active-bright text-white font-base text-xl shadow-small">
            {text}
        </button>
    )
}