//Finding the variables in the URL
var searchParams = new URLSearchParams(window.location.search);
console.log(window.location.search);
//Declaring the variables
var year = searchParams.get("year");
var you = {
    age: searchParams.get("age"),
    job: searchParams.get("job"),
    lands: searchParams.get("lands"),
    stars: searchParams.get("stars"),
    status: searchParams.get("status")
};
//Switching you.stars to a numerical value
you.stars = (you.stars - 1) + 1;
//Declaring values
document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
//Tavern conversation
prompt("Harry the Inkeeper: Hey, what are you doing here?");
var blackJackQ = prompt("Harry: Well, want to play some cards in the meantime? (Respond yes or no)");
//Switching to blackjack page if you say yes
if (blackJackQ == "yes") {
    console.log("yes");
    location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/blackjackindex.html" + "?year=" + year + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
}
//Continuing the convo if you say no
else {
    console.log("no");
    var drunkQ = prompt("Harry: Well, want some drinks? First one's on the house for you, each extra one is 3 stars.");
    //Asking how many drinks you want if you say yes
    if (drunkQ == "yes") {
        var beerNum = prompt("Harry: How many?") - 1 + 1;
        console.log(beerNum);
        //Calculating cost of drinks
        you.stars = you.stars - (beerNum - 1) * 3;
        document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";
        if (you.stars <= 0) {
            prompt("Harry: Hold on, that's not enough money. I'll have you washing dishes for the rest of the night! (Respond yes or no)");
        }
    }
}
