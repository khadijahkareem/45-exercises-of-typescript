let guestList = ["ayesha", "usman", "rabia", "alia"];

let dontCome = guestList[0];

console.log(dontCome, "nai ahh skta");

guestList.splice(0, 1, "amir");

guestList.forEach(guest => console.log (`salam ${guest}, would you like to dinner with me?`));