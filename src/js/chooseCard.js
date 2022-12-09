import { yourHand } from "./createCards";
import buttonEndMoveClick from "./endMove";

export default function chooseCard(actualOpponentHand, card, gamePlace) {
    for (let i = 0; i < yourHand.length; i++) {
        if (yourHand[i].id === Number(card.id)) {
            const hand = document.querySelector(".yourHand");
            hand.removeChild(card);
            gamePlace.appendChild(card)
          
            let isCover = true;
            const newArray = Array.from(actualOpponentHand);
            
            // Если ни одна из карт не подходит
            const isNotCover = newArray.some((element) => (
                card.className === element.className
                && Number(card.getAttribute("value")) < Number(element.getAttribute("value"))
            ));

            // Противник кроет, если есть та же масть с превышающим значением
            if (isNotCover) {
                actualOpponentHand.forEach((opponentCard) => {
                    if (
                        isCover
                        && card.className === opponentCard.className
                        && Number(card.getAttribute("value")) < Number(opponentCard.getAttribute("value"))) {
                            const opponentHand = document.querySelector(".opponent1");
                            opponentHand.removeChild(opponentCard);
                            opponentCard.classList.add("cardOnGame");
                            card.appendChild(opponentCard);
                            isCover = false;
                    }
                });
            } else {
                // buttonEndMoveClick(isNotCover);
                console.log("Беру")
            }
            buttonEndMoveClick(isNotCover);
        }
    }
};