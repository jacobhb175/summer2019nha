let searchParams = new URLSearchParams(window.location.search);
console.log(window.location.search);

//Declaring variables anew
let job = searchParams.get("job");
let lands = searchParams.get("lands");

//Declaring formal variables
let fJob
let fLands

//Declaring url storage variable
let urlSt

//Declaring and calculating value of other variables
let age = Math.floor(Math.random() * (30 - 20) + 20);
let year = 299
let stars = 25
let status = stars*0.01 + age*0.01;
if (job=="farmer"&&lands=="iron") {
	status = status*0.5;
};
status = Math.round(status * 100) / 100

//Setting values of formal variables and changing bg image
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
		urlSt = "https://cdna.artstation.com/p/assets/images/images/018/099/756/large/kieran-belshaw-redkeepgate-new-largerversion-v006copy.jpg?1558371072";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		break;
	case "river":
		fLands = "The Riverlands";
		urlSt = "https://vignette.wikia.nocookie.net/gameofthrones/images/6/66/Riverrun._battlements.png/revision/latest/scale-to-width-down/2000?cb=20160606102912";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		$("p").css("color", "white");
		$("h2").css("color", "white");
		break;
	case "storm":
		fLands = "The Stormlands";
		urlSt = "https://i.pinimg.com/originals/0c/ce/33/0cce330b07e3d662c39bc43d0a106ac8.jpg";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		break;
	case "dorne":
		fLands = "Dorne";
		urlSt = "https://cdna.artstation.com/p/assets/images/images/017/150/796/large/daniel-alekow-uw-sunspear-daniel-alekow.jpg?1554830966";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		$("p").css("color", "white");
		$("h2").css("color", "white");
		break;
	case "reach":
		fLands = "The Reach";
		urlSt = "https://cdnb.artstation.com/p/assets/images/images/013/953/267/large/aaron-mcnaughton-hg-fin.jpg?1541799939";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		break;
	case "west":
		fLands = "The Westerlands";
		urlSt = "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5b/Lannisport.png/revision/latest?cb=20170211173049";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		$("p").css("color", "white");
		$("h2").css("color", "white");
		break;
	case "iron":
		fLands = "The Iron Isles";
		urlSt = "https://cdnb.artstation.com/p/assets/images/images/007/920/459/large/olena-nemitkova-1920.jpg?1509367783";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		$("p").css("color", "white");
		$("h2").css("color", "white");
		break;
	case "north":
		fLands = "The North";
		urlSt = "https://cdn.dribbble.com/users/2894815/screenshots/6393792/winterfell.jpg";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		break;
	case "vale":
		fLands = "The Vale";
		urlSt = "https://cdna.artstation.com/p/assets/images/images/003/980/346/large/elie-gomez-got-alt.jpg?1479145358";
		$(".bg").css("background-image", "url(" + urlSt + ")");
		break;
}

//Displaying values of variables
document.getElementById("year").innerHTML = year + " AC";
document.getElementById("age").innerHTML = age;
document.getElementById("job").innerHTML = fJob;
document.getElementById("lands").innerHTML = fLands;
document.getElementById("wealth").innerHTML = stars + " Copper Stars";
document.getElementById("status").innerHTML = status;