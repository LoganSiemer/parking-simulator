//INTERVAL TIMER FOR THE VEHICLE.
//build a vehicle and an array of 10 parking spots.
//make a loop to then duplicate the one car you have. 
//make it so that the code can tell if their are ten full lots, 
//if not, move a car into an empty one

var cars = 100;
var i = 0;

function Car(color, model, licensplate, year){
	this.color = color;
	this.model = model;
	this.licenseplate = licensplate;
	this.year = year;
}
console.log(new Car("blue","ford","1","2017"));

function buildCars(count){
    var result = [];

    for (var i = 0; i < count; i++) {
        var car = new Car("blue","ford",i,"2017");
        var parked = false;
        result.push(car);
    }
    return result;
}
var unparkedCars = buildCars(100);

var parkedCars = [];

var unusedPlots = [];

var usedPlots = [];

function Plot(number){
    this.number = number;
}
function buildPlots(){
	for (var i = 0; i < 10; i++) {
		unusedPlots.push(new Plot(i));
	}
}
buildPlots();



function parkOneCar(){
	if(unparkedCars.length > 0 && unusedPlots.length > 0){
		var car = unparkedCars.splice(0, 1);
		var plot = unusedPlots.splice(0, 1);
		parkedCars.push(car[0]);
		usedPlots.push(plot[0]);

		console.log("(" + Car.color + ")" + " - " + "(" + Car.model + ")" + " - " + "(" + Car.licenseplate + ")" + " - "+ "(" + Car.year + ")");


		ScheduleCarToLeave(car[0], plot[0]);
    }
}

function ScheduleCarToLeave(car, plot){
     setTimeout(function(){
        var carIndex = parkedCars.indexOf(car);
        parkedCars.splice(carIndex, 1);

        var plotIndex = usedPlots.indexOf(plot);
        usedPlots.splice(plotIndex, 1);

        unusedPlots.push(plot);

        console.log("car has left the building");
     }, 1000);
}

var intervalId = setInterval(function(){

    parkOneCar();

    if (unparkedCars.length == 0) {
    	clearInterval(intervalId);
    }

}, 1000);

console.log(unparkedCars);

console.log(parkedCars);

console.log(unusedPlots);

console.log(usedPlots);






