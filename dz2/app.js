console.log("DZ2");

const fuelPrices = {
    "АИ-92": 82,
    "АИ-95": 85,
    "АИ-98": 87,
    "ДТ": 76,
    "Газ": 45,
}
function calculateFuel(amount, fuelType) {
    const pricePerLiter = fuelPrices[fuelType];
    if (!pricePerLiter) {
        return "Неправильный тип топлива!";
    }
    return amount / pricePerLiter;
}

const amount = parseFloat(prompt("Введите сумму в сомах:"));
const fuelType = prompt("Выберите тип топлива (АИ-92, АИ-95, АИ-98, ДТ, Газ):");

const liters = calculateFuel(amount, fuelType);
if (isNaN(liters)) {
    console.log("Пожалуйста, введите корректную сумму.");
} else {
    console.log(`На сумму ${amount} сом вы можете приобрести ${liters} литров ${fuelType}.`);
}