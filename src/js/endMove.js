const gamePlace = document.querySelector(".endMove");

gamePlace.addEventListener('click', () => {
    const actualGamePlace = document.querySelector(".gamePlace").querySelectorAll(".card");

    for (let j = 0; j < actualGamePlace.length; j++) {
            console.log("Беру")
            const opponentHand = document.querySelector(".opponent1");
            actualGamePlace[j].classList.remove('cardOnGame');
            opponentHand.appendChild(actualGamePlace[j]);
        }
});

function endMove() {

}