var guestList = ["ayesha", "usman", "rabia", "alia"];
var dontCome = guestList[0];
console.log(dontCome, "nai ahh skta");
guestList.splice(0, 1, "amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
