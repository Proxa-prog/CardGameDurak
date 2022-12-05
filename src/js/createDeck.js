import { cards } from "/src/constants/cards.js";
import randomNumber from "/src/js/randomNumber.js";
import { deck } from "/src/constants/cards";


export default function createDeck() {
    let count = 36;

    while (count > -1) {
        const random = randomNumber(0, count);

        for (let i = 0; i < cards.length; i++) {
            if (i === random) {
                const item = cards.splice(i, 1);
                deck.push(item[0]);
            }
        }
        count--;
    }
}