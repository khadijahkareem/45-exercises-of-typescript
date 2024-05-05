function creat_car(manufacturer, model, ...options){
    let car ={
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(option => {
        let[key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

let my_car = creat_car("toyota", "corrola","color: black" ,"sunroof: true");

console.log(my_car);