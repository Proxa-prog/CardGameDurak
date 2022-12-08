import chooseCard from "./chooseCard";

const gamePlace = document.querySelector(".gamePlace");

export default function move() {
    const actualHand = document.querySelector(".yourHand").querySelectorAll(".card");
    const actualOpponentHand = document.querySelector(".opponent1").querySelectorAll(".card");

    actualHand.forEach((card) => {
        // Выбор карты и перенос в центр стола
        card.addEventListener("click", () => {
            const actualGamePlace = document.querySelector(".gamePlace").querySelectorAll(".card");

            if (actualGamePlace.length === 0) {
                chooseCard(actualOpponentHand, card, gamePlace);
            } else {
                const arrayActualGamePlace = Array.from(actualGamePlace);

                const isOnGamePlace = arrayActualGamePlace.some((element) => {

                    return (
                        Number(element.getAttribute("value") == Number(card.getAttribute("value"))
                    ))
                });

                if (isOnGamePlace) {
                    chooseCard(actualOpponentHand, card, gamePlace);
                }
            }
        });
    })
};

move()