let searchParams = new URLSearchParams(window.location.search);
console.log(window.location.search);

//Declaring variables anew
let job = searchParams.get("job");
let lands = searchParams.get("lands");

//Declaring formal variables
let fJob
let fLands

//Setting values of formal variables
switch(job) {
	case "farmer":
		fJob = "Farmer";
		break;
	case "artisan":
		fJob = "Artisan";
		break;
	case "knight":
		fJob = "Knight"
}

switch(lands) {
	case "crown":
		fLands = "The Crownlands";
		break;
	case "river":
		fLands = "The Riverlands";
		break;
	case "storm":
		fLands = "The Stormlands";
		break;
	case "dorne":
		fLands = "Dorne";
		break;
	case "reach":
		fLands = "The Reach";
		break;
	case "west":
		fLands = "The Westerlands";
		break;
	case "iron":
		fLands = "The Iron Isles";
		break;
	case "north":
		fLands = "The North";
		break;
	case "vale":
		fLands = "The Vale";
}

document.getElementById("job").innerHTML = fJob;
document.getElementById("lands").innerHTML = fLands;