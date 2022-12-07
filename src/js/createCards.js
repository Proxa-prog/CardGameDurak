import createDeck from "./createDeck";
import { deck } from "/src/constants/cards";
import { randomDeck } from "/src/constants/cards";
import createHand from "./createHand";


export const findYourHand = document.querySelector('.your_hand');
export const findOpponent_1 = document.querySelector('.opponent_1');
export let yourHand = [];
export let opponentHand = [];

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
createHand();