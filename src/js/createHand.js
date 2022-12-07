import { randomDeck } from "/src/constants/cards";
import { findYourHand } from "./createCards";
import { findOpponent_1 } from "./createCards";
import { yourHand } from "./createCards";
import { opponentHand } from "./createCards";

export default function createHand() {
    const hand1 = randomDeck.splice(1, 6);
    const hand2 = randomDeck.splice(1, 6);

    for (let i = 0; i < hand1.length; i++) {
        const actualCard =hand1[i].card;
        actualCard.setAttribute("id", hand1[i].id);
        findYourHand.appendChild(actualCard);
        yourHand.push(hand1[i]);
    }

    for (let i = 0; i < hand2.length; i++) {
        const actualCard =hand2[i].card;
        actualCard.setAttribute("id", hand2[i].id);
        findOpponent_1.appendChild(actualCard);
        opponentHand.push(hand2[i]);
    }
};