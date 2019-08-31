//Finding the variables in the URL
var searchParams = new URLSearchParams(window.location.search);
console.log(window.location.search);

//Declaring variables and classifying most under an object
var year = searchParams.get("year");
var season = searchParams.get("season");
var you = {
    age: searchParams.get("age"),
    job: searchParams.get("job"),
    lands: searchParams.get("lands"),
    stars: searchParams.get("stars"),
    status: searchParams.get("status")
};

//Rounding off status
you.status = Math.round(you.status * 100) / 100;

//Converting strings to integers
year = (year - 1) + 1;
you.age = (you.age - 1) + 1;
you.stars = (you.stars - 1) + 1;

//Declaring formal variables
var fJob;
var fLands;

//Declaring url storage variable
var urlSt;

//Setting values of formal variables and changing bg image and audio and txt color depending on lands
switch (you.job) {
    case "farmer":
        fJob = "Farmer";
        break;
    case "artisan":
        fJob = "Artisan";
        break;
    case "merchant":
        fJob = "Merchant";
}
switch (you.lands) {
    case "crown":
        fLands = "The Crownlands";
        urlSt = "https://cdna.artstation.com/p/assets/images/images/018/099/756/large/kieran-belshaw-redkeepgate-new-largerversion-v006copy.jpg?1558371072";
        $(".bg").css("background-image", "url(" + urlSt + ")");
        audio = $("<source>").attr("src", "TargTheme.mp3");
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
document.getElementById("season").innerHTML = season;
document.getElementById("age").innerHTML = you.age;
document.getElementById("job").innerHTML = fJob;
document.getElementById("lands").innerHTML = fLands;
document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
document.getElementById("status").innerHTML = you.status;

//Explanation 
alert("This is your farm. Each year you may pick one of four actions: Buy Seed, which buys seed to be planted, Plant Seed, which plants the seed, Tend Crops, which increases the money you will get when you harvest your crops, and Harvest Crops, which harvests the crops and your profit. Warning: Crops cannot be planted in winter and, when winter hits, your existing crops will be destroyed by the cold if not already harvested.");

//Action Var
let action;

//Buttons and stuff
$(document).ready(function () {
    //Pick action
    $(".action").click(function () {
        action = this.id;
        console.log("action " + action);
        switch (action) {
            case "buy":
                //Asking how much seed they want
                let purchase = prompt("How much seed would you like to buy? Each wagonload of seed will cost 15 stars and be enough seed to cover 1 field.");
                //str to int conversion
                purchase = purchase - 1 + 1;
                console.log(purchase);
                //Change wealth
                you.stars = you.stars - 15*purchase;
                document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
                break;
            case "plant":
                break;
            case "tend":
                break;
            case "harvest":
                break;
        }
    });
    //Link to homepage, bring variables in url
    $(".back").click(function () {
        location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&"
    });
});
