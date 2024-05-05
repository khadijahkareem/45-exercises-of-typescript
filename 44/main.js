function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sendwich with the following items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n now enjoy sandwich");
}
makeSandwich("chicken", "chees", "mayo", "Egg");
makeSandwich("bread", "butter");
