function calculateBonus(liters, cardTypes) {
    let bonusRate;

    switch (cardType.toLowerCase()) {
        case "серебро":
            bonusRate = 0.5;
            break;
        case "золото":
            bonusRate = 0.75;
            break;
        case "платина":
            bonusRate = 1;
            break;
        default:
            return "Неверный тип карты. Пожалуйста, введите 'серебро', 'золото' или 'платина'.";
    }

    return liters * bonusRate;
}
let litersInput = prompt("Введите количество литров бензина:");
let liters = parseFloat(litersInput);

let cardType = prompt("Введите тип карты (серебро, золото, платина):");

if (isNaN(liters) || liters <= 0) {
    console.log("Неверное количество литров. Введите положительное число.");
} else {
    let bonusPoints = calculateBonus(liters, cardType);
    if (typeof bonusPoints === "string") {
        console.log(bonusPoints);
    } else {
        console.log(`Вы получите ${bonusPoints} бонусных баллов за ${liters} литров топлива с картой типа "${cardType}".`);
    }
}
