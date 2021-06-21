const checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;

};

const adultOrNot = function (age) {
    checkAge();
    if (checkAge((29)) == true) {
        return "Hello There";
    }
    return "Hey Kiddo";

};
console.log(adultOrNot());





//VAT exercise 1
const vatAmount = function (number) {
    const vat = number * 0.21;
    return vat;
};

const totalPrice = function (number) {
    vatAmount();
    const total = vatAmount((number)) + number;
    return total;
};
console.log(totalPrice((200)));






//VAT exercise 2
const vatAmount2 = function (number) {
    const vat = number - (number / 1.21);
    return vat;
};

const priceAndVat = function (number) {
    vatAmount2();
    const base = number / 1.21;
    const price = vatAmount2((number));
    return [base, price];
};
console.log(priceAndVat((1210)));