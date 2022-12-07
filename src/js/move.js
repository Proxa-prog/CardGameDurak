import { yourHand } from "./createCards";

const gamePlace = document.querySelector('.gamePlace');

export default function move() {
    const actualHand = document.querySelector('.your_hand').querySelectorAll('.card');

    actualHand.forEach((card) => {
        card.addEventListener('click', () => {
            for (let i = 0; i < yourHand.length; i++) {
                if (yourHand[i].id === Number(card.id)) {
                    const hand = document.querySelector('.your_hand');
                    hand.removeChild(card);
                    gamePlace.appendChild(card)
                }
            }
        })
    })
            
}

move()