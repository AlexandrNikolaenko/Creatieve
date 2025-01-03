export const sectionsId = [
    {
        id: 1,
        name: 'about'
    },
    {
        id: 2,
        name: 'products'
    },
    {
        id: 3,
        name: 'whywe'
    },
    {
        id: 4,
        name: 'portfolio'
    },
    {
        id: 5,
        name: 'contact'
    },
];

export default function scrollToBlock(blockId) {
    let block = document.getElementById(`${blockId}`);
    if (block) {
        window.scroll({
            top: block.getBoundingClientRect().top + window.scrollY,
            left: 0,
            behavior: "smooth"
        })
    }
}