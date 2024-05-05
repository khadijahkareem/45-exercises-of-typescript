function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `the great ${name}`);
}

let magicians_names = ["harrypoter","hamza","usman"];

let copy_magician_names = magicians_names.slice()

let copy_great_magicians = make_great(copy_magician_names);

show_magicians(magicians_names);

show_magicians(copy_great_magicians);
