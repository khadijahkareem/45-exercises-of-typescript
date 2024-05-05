//making a array of countries and print its original order
let countriesToVisit: string[] = ["china","danmark","brazil","arab"];
console.log("original order;", countriesToVisit);

//print the array in alphabatical order without modifaying the actual array list
console.log("Alphabatical order:", [...countriesToVisit].sort());

 //show that the array is still in its original order
console.log("still in original order:", countriesToVisit);

//print the array in revers order wuthout modifying the acutal array list
console.log("revers order:",[...countriesToVisit].reverse());

 //show that the array is still in its original order
 console.log("still in original order:", countriesToVisit);

 //we have changed the originalarray order now
 console.log ("orignal array reversed:", countriesToVisit.reverse());

 // print the array to show that it's back to its original order
 console.log("back to original order:", countriesToVisit.reverse());

 // print the array show that it.s order has been change in alphabatical order now
 console.log("sorted in alphabatical order:", countriesToVisit.sort());

//we have changed the original array order now in revers order again
console.log ("orignal array reversed again:", countriesToVisit.reverse());

