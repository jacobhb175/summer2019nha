//Setup

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
        break;
    case "river":
        fLands = "The Riverlands";
        urlSt = "https://vignette.wikia.nocookie.net/gameofthrones/images/6/66/Riverrun._battlements.png/revision/latest/scale-to-width-down/2000?cb=20160606102912";
        $(".bg").css("background-image", "url(" + urlSt + ")");
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
        break;
    case "iron":
        fLands = "The Iron Isles";
        urlSt = "https://cdnb.artstation.com/p/assets/images/images/007/920/459/large/olena-nemitkova-1920.jpg?1509367783";
        $(".bg").css("background-image", "url(" + urlSt + ")");
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
document.getElementById("seed").innerHTML = farm.seed + " Wagonloads";
document.getElementById("growth").innerHTML = farm.growth;

//Farm Stuff

//In case you haven't been to the farm yet
if (farm.seed == null || farm.turnOver == null) {
    //Explanation 
    alert("This is your farm. Each year/turn you may pick one of four actions: Buy Seed, which buys seed to be planted, Plant Seed, which plants the seed, Tend Crops, which increases your crops' growth and Harvest Crops, which harvests the crops and your profit. Crops will be ready for harvest after a growth of 3, and are unable to grow beyond 10. Warning: Crops cannot be planted in winter and, when winter hits, your existing crops will be destroyed by the cold if not already harvested.");
    //Set up your seed var
    farm.seed = 0;
    document.getElementById("seed").innerHTML = farm.seed + " Wagonloads";
    //Set up turnOver var
    farm.turnOver = false;
    //set up growth var
    farm.growth = 0;
    document.getElementById("growth").innerHTML = farm.growth;
}

//Declaring action variable
let action;

//Buttons and stuff
$(document).ready(function () {
    //Pick action
    $(".action").click(function () {
        action = this.id;
        console.log("action " + action);
        if (farm.turnOver == true) {
            alert("Sorry, you've used up your turn for this year. Return to the homepage and click Next Year to take your next turn.")
        }
        else {
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
                    //Change seed
                    farm.seed = farm.seed + purchase;
                    document.getElementById("seed").innerHTML = farm.seed + " Wagonloads";
                    //End your turn
                    farm.turnOver = true;
                    break;
                case "plant":
                    if (season == "Winter") {
                        alert("It is winter. Your field is buried in snow and you have no space to plant things.")
                    }
                    else {
                        //Lose seed
                        farm.seed = farm.seed - 1;
                        document.getElementById("seed").innerHTML = farm.seed + " Wagonloads";
                        //Plant field
                        farm.growth = 1;
                        document.getElementById("growth").innerHTML = farm.growth;
                        //End turn
                        farm.turnOver = true;
                    }
                    break;
                case "tend":
                    //If your crops are fully grown
                    if (farm.growth == 10) {
                        alert("Your crops have grown to full height and can no longer be tended to to increase their height. Usually, this is the time to harvest them before winter sets in.")
                    }
                    else if (farm.growth < 10) {
                        //Random growth increase, exponentially higher depending on existing growth
                        farm.growth = farm.growth + Math.floor(Math.random() * Math.floor(farm.growth)) + 1;
                        //Cap growth at 10
                        if (farm.growth >= 10) {
                            farm.growth = 10;
                        }
                        //Update growth
                        document.getElementById("growth").innerHTML = farm.growth;
                        //End turn
                        farm.turnOver = true;
                    }   
                    break;
                case "harvest":
                    //If there's too little to harvest
                    if (farm.growth <= 3) {
                        alert("Your crops haven't grown enough to be harvested yet.");
                    }
                    else if (farm.growth >= 3) {
                        //Get money exponentially depending on crop growth
                        you.stars = you.stars + Math.pow(2,farm.growth);
                        console.log(you.stars);
                        document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
                        //Remove crops and update
                        farm.growth = 0;
                        document.getElementById("growth").innerHTML = farm.growth;
                    }
                    break;
            }
        }
    });
    //Link to homepage, bring variables in url
    $(".back").click(function () {
        location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;
    });
});
