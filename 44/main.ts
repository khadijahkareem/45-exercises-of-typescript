function makeSandwich(...items: string[]){
    console.log("\n making a sendwich with the following items: \n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\n now enjoy sandwich");
}

makeSandwich("chicken", "chees", "mayo","Egg");

makeSandwich("bread", "butter");
