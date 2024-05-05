function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magicians_names = ["harrypoter", "hamza", "usman"];
var copy_magician_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
show_magicians(magicians_names);
show_magicians(copy_great_magicians);
