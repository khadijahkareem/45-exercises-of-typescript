// creating a guestlist array
let guestList = ["ayesha","usman","rabia","areeba"];

// making variable for those who cant come
let dontCome = guestList[0];

// print the name of guest who cant come
console.log(dontCome, "nai ahh skty hen");

// add or remove values from guestlist array
guestList.splice(0, 1, "Amir");

// message print for bigger table
console.log("Good News ! We have found a bigger table for dinner");

// adding a new value at starting index of array
guestList.unshift("Ali");

// adding a new value at ending index of array
guestList.push("zain");

// get a middle index of our guest list array
let middleIndex: number =  Math.floor(guestList.length / 2); 

//adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "usama");

// print message of updated lis
console.log("updated list of our Guests");

// sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log (`salam ${oneguest}, would you like to dinner with me`));