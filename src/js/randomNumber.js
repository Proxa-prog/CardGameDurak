export default function randomNumber(min, max) {
    let randNumber = min + Math.random() * (max + 1 - min);

    return Math.floor(randNumber)
};
