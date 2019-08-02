//Finding the variables in the URL
var searchParams = new URLSearchParams(window.location.search);
console.log(window.location.search);
//Declaring variables and classifying most under an object
var year = 299;
var you = {
    age: 20,
    job: searchParams.get("job"),
    lands: searchParams.get("lands"),
    stars: 25,
    status: 0
};
//Status-Calculation Function
function statusCalc() {
    you.status = (you.stars * 0.01 + you.age * 0.01);
    if (you.job == "farmer" && you.lands == "iron") {
        you.status = you.status * 0.5;
    }
    ;
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
        //audio = $("<source>").attr("src", "TargTheme.mp3");
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
document.getElementById("age").innerHTML = you.age;
document.getElementById("job").innerHTML = fJob;
document.getElementById("lands").innerHTML = fLands;
document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
document.getElementById("status").innerHTML = you.status;
