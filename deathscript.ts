//Finding the variables in the URL
var searchParams = new URLSearchParams(window.location.search);
console.log(window.location.search);
//Declaring variables and classifying most under the object you
var year = searchParams.get("year");
var season = searchParams.get("season");
var seasonLng = searchParams.get("seasonLng")

var you = {
    age: searchParams.get("age"),
    job: searchParams.get("job"),
    lands: searchParams.get("lands"),
    stars: searchParams.get("stars"),
    status: searchParams.get("status")
};

//Other variables under object farm
var farm = {
    seed: searchParams.get("seed"),
    turnOver: searchParams.get("turnOver"),
    growth: searchParams.get("growth")
}

//Rounding off status
you.status = Math.round(you.status * 100) / 100;

//Converting strings to integers
year = year - 1 + 1;
seasonLng = seasonLng - 1 + 1;
you.age = you.age - 1 + 1;
you.stars = you.stars - 1 + 1;
farm.seed = farm.seed - 1 + 1;
farm.growth = farm.growth - 1 + 1;

//Converting string to boolean
if (farm.turnOver == "true") {
    farm.turnOver = true;
}
else if (farm.turnOver == "false") {
    farm.turnOver = false;
}

//Telling you how you did in life
if (you.status < 1) {
	//Poor
	document.getElementById("status").innerHTML = "destitute and impoverished";
}
else if (you.status > 5) {
	//Rich
	document.getElementById("status").innerHTML = "wealthy and well-known";
}
else {
	//In the middle
	document.getElementById("status").innerHTML = "";
}