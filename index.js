//INTERVAL TIMER FOR THE VEHICLE.
//build a vehicle and an array of 10 parking spots.
//make a loop to then duplicate the one car you have. 
//make it so that the code can tell if their are ten full lots, 
//if not, move a car into an empty one

var cars = 100;
var i = 0;

function makeCar(color, model, licensplate, year){
	var car = {
		color : color,
		model : model,
		licenseplate : licensplate,
		year : year
	};
	return car;
}
console.log(makeCar("blue","ford","1","2017"));
function buildCars(count){
    var result = [];
    for (var i = 0; i < count; i++) {
        var car = makeCar("blue","ford",i,"2017");
        result.push(car);
    }
    return result;
}

console.log(buildCars(101));




var plots = 10;
var plot = [' '];
var i = 0;

do {
    console.log(i + 1);

    i++;
} while (i < plots){

}
var is_car_parked = false;

function park(){
	is_car_parked = true;
}

var is_car_removed = false;

function remove(){
	is_car_removed = true;
}










