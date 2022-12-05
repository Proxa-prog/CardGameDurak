import createDeck from "./createDeck";
import { deck } from "/src/constants/cards";
import { randomDeck } from "/src/constants/cards";


const your_hand = document.querySelector('.your_hand');

function createCard() {
    for (let i = 0; i < deck.length; i++) {
        const card = document.createElement('div');

        card.classList.add('card');
        card.classList.add(deck[i].lear);
        card.style.backgroundImage = `url(/image/${deck[i].lear}/${deck[i].rating}.svg)`;
        randomDeck.push({
            card: card,
            id: deck[i].id,
        });
    }
};

createDeck();
createCard();

randomDeck.forEach((item) => {
    your_hand.appendChild(item.card);
});



