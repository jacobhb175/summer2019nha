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

//Status-Calculation Function
function statusCalc() {
    you.status = (you.stars * 0.01 + you.age * 0.01);
    if (you.job == "farmer" && you.lands == "iron") {
        you.status = you.status * 0.5;
    }
    //Rounding off status
    you.status = Math.round(you.status * 100) / 100;
}
//Calling the function
statusCalc();
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
//Link to different work pages depending on job
$(".work").click(function () {
    switch (you.job) {
        case "farmer":
            location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/farmindex.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;            
            break;
        case "artisan":
            location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/artisanindex.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;            
            break;
        case "merchant":
            location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/merchantindex.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;
            break;
        case "sellsword":
            location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/sellswordindex.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;    
        }
});
//Link to tavern page, bring variables in url
$(".tavern").click(function () {
    location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/tavernindex.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;
});
//Next Year
$(".nextYear").click(function () {
    //+1 year/turn
    year = year + 1;
    you.age = you.age + 1;
    farm.turnOver = false;
    //Season changes (Game of thrones has weird seasons with winters and summers that can last years)
    switch (season) {
        case "Spring":
            //Spring to summer
            season = "Summer";
            //Alert of seasonal change
            alert("A white raven from the citadel has arrived at the castle of your local lord. The seasons are changing. Spring is over and summer is coming.");
            //Set how many years the season has lasted
            seasonLng = 1;
            break;
        case "Summer":
            //Chance of summer to end gets higher depending on how long it's already lasted
            var x = Math.floor(Math.random() * Math.floor(15));
            //Summer ends
            if (x <= seasonLng) {
                //Winter comes without warning
                if (x*2 <= seasonLng) {
                    season = "Winter"
                    //Alert of seasonal change
                    alert("A white raven from the citadel has arrived at the castle of your local lord. The seasons are changing. Summer is over and winter has arrived.");
                    //Crops destroyed
                    alert("Winter has come early this year. An early cold snap has killed off your crops.")
                    farm.growth = 0;
                    //You must pay for food
                    alert("With the arrival of winter, you can no longer subsist off of excess from your farm. Each year of winter, you will need to spend an increasing amount of money to purchase food. This year, it will be 3 stars.");
                    you.stars = you.stars - 3;
                    document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
                }
                //Fall arrives
                else {
                    season = "Fall";
                }
                //Set how many years the new season has lasted
                seasonLng = 1;
            }
            //Summer continues
            else {
                //Record how long summer has lasted
                seasonLng = seasonLng + 1;
            }
            break;
        case "Fall":
            //Fall to winter
            season = "Winter";
            //Alert of seasonal change
            alert("A white raven from the citadel has arrived at the castle of your local lord. The seasons are changing and winter is here.");
            //Crops destroyed
            alert("Winter has come early this year. An early cold snap has killed off your crops.")
            farm.growth = 0;
            //You must pay for food
            alert("With the arrival of winter, you can no longer subsist off of excess from your farm. Each year of winter, you will need to spend an increasing amount of money to purchase food. This year, it will be 3 stars.");
            you.stars = you.stars - 3;
            document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
            //Set how many years the new season has lasted
            seasonLng = 1;
            break;
        case "Winter":
            //Chance of winter to end gets higher depending on how long it's already lasted
            var y = Math.floor(Math.random() * Math.floor(20));
            if (y <= seasonLng) {
                season = "Spring";
                //Alert of seasonal change
                alert("A white raven from the citadel has arrived at the castle of your local lord. The seasons are changing. Winter is finally over and spring is coming.");
            }
            //Winter continues
            else {
                //Making you pay for food
                alert("This year, food will cost " + (3 + Math.pow(2, seasonLng)) + " stars");
                you.stars = you.stars - (3 + Math.pow(2, seasonLng));
                document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
                //Record how long winter has lasted
                seasonLng = seasonLng + 1;
                //Starvation
                if(you.stars < 0) {
                    location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/deathindex.html" + "?year=" + year + "&season=" + season + "&seasonLng=" + seasonLng + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status + "&seed=" + farm.seed + "&growth=" + farm.growth + "&turnOver=" + farm.turnOver;
                }
            }
            break;
    }
    //Update display of year, season, & age
    document.getElementById("year").innerHTML = year + " AC";
    document.getElementById("season").innerHTML = season;
    document.getElementById("age").innerHTML = you.age;
    console.log(seasonLng);
});
//Displaying values of variables
document.getElementById("year").innerHTML = year + " AC";
document.getElementById("season").innerHTML = season;
document.getElementById("age").innerHTML = you.age;
document.getElementById("job").innerHTML = fJob;
document.getElementById("lands").innerHTML = fLands;
document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
document.getElementById("status").innerHTML = you.status;
