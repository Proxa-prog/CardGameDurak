export default function buttonEndMoveClick(isNotCover) {
    const endMove = document.querySelector(".endMove");
    const actualGamePlace = document.querySelector(".gamePlace").querySelectorAll(".card");

    endMove.addEventListener('click', () => {
        if (isNotCover) {
            actualGamePlace.forEach((item) => {
                const gamePlace = document.querySelector(".gamePlace");
                gamePlace.removeChild(item);
            })
        } else {
            for (let j = 0; j < actualGamePlace.length; j++) {
                const opponentHand = document.querySelector(".opponent1");
                actualGamePlace[j].classList.remove('cardOnGame');
                opponentHand.appendChild(actualGamePlace[j]);
            }
        }});
}


