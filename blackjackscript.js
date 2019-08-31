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

//Declare variables
let user = 'player';
let player = 0;    
let house = 0;
let houseBust = false;

//Set bet
let bet = prompt("Harry: So, what'll you bet on this hand of blackjack?");

//Turning bet to an integer
bet = bet - 1
bet = bet +1

//Subtracting bet from your wealth
console.log(you.stars);
you.stars = you.stars - bet;
console.log(you.stars);

//Displaying wealth
document.getElementById("wealth").innerHTML = you.stars + " Copper Stars";

//New Game function
function newGame() {
  //Fetch deck from api
  fetch('https://deckofcardsapi.com/api/deck/new/')
  .then(function(response) {
    //Return deck
    return response.json();
  })
  .then(function(myJson) {
    //Log deck
    console.log(myJson);
    //Draw cards
    draw(user);
    draw(user);
    draw('house');
  })
}

//Draw function
function draw(cUser) {
  //Fetch 1 card from deck
  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(function(response) {
    //Return card
    return response.json();
  })
  .then(function(myJson) {
    //Log card
    console.log(myJson);
    //Add img element
    let image = document.createElement("IMG");
    //Find the image src for the card and set it
    image.setAttribute("src",myJson.cards[0].image);

    //If player is drawing
    if (cUser == 'player') {
      //Add the card image to player side
      document.getElementById('player').appendChild(image);
      //Is there an acee?
      if (myJson.cards[0].value == 'ACE') {
        //Ask player if they want ace to be 1 or 11
        let aceValue = prompt("1 or 11?")
        //Add value of ace to total
        if (aceValue == '1') {
          player = player + 1;
        }
        else if (aceValue == '11'){
          player = player + 11;
        }
      }

      //Find value of (non-ace) card and add it to player's total
      switch (myJson.cards[0].value) {
        case "2":
          player = player + 2;
          break;
       case "3":
          player = player + 3;
          break;
        case "4":
          player = player + 4;
          break;
        case "5":
          player = player + 5;
          break;
        case "6":
          player = player + 6;
          break;
        case "7":
          player = player + 7;
          break;
        case "8":
          player = player + 8;
          break;
        case "9":
          player = player + 9;
          break;
        case "10":
        case "JACK":
        case "QUEEN":
        case "KING":
          player = player + 10;
          break;
      }
    }

    //If house is drawing
    else {
      //Add card image to house side
      document.getElementById('house').appendChild(image);
      //Is there an ace
      if (myJson.cards[0].value=='ACE') {
        //Calculate random number (0 or 1) to decide if ace should be 1 or 11
        // -- Add code to let ai decide at some point
        let x = Math.floor((Math.random() * 2) + 1) - 1;
        //RNG = 0
        if (x==0) {
          //Ace is 1
          house = house + 1;
        }
        //RNG = 1
        else if (x==1) {
          //Ace is 11
          house = house + 11;
        }
      }

      //Find value of (non-ace) card and add it to house's total
      switch (myJson.cards[0].value) {
        case "2":
          house = house + 2;
          break;
        case "3":
          house = house + 3;
          break;
        case "4":
          house = house + 4;
          break;
        case "5":
          house = house + 5;
          break;
        case "6":
          house = house + 6;
          break;
        case "7":
          house = house + 7;
          break;
        case "8":
          house = house + 8;
          break;
        case "9":
          house = house + 9;
          break;
        case "10":
        case "JACK":
        case "QUEEN":
        case "KING":
          house = house + 10;
          break;
      }
    }
  })
}

//Hit function
function hit() {
  //Draw 1 to whoever the user is
  draw(user)
}

//Stay function
function stay() {
  //If the user is player, house takes turn
  if (user == "player") {
    //Change to house
    user = "house";
    //Is player bust?
    if (player > 21) {
      setTimeout(function(){ alert("Harry: Hah, you went bust. I win!"); }, 3000);
      location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
    }
    //House will draw until it is over 17
    let i = 0;
    while (i < 17) {
      draw(user);
      i = user;
    }
    stay();
  }

  //Score resolution when house ends turn, plus money resolutions and dialogue and going home
  else if (user == "house") {
    //console.log("Game ends");
    if (house == 21) {
      alert("Harry: Blackjack! You know what they say: the house always wins.")
      location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
    }
    if (house > 21) {
      alert("Aggh I shouldn't have been so aggressive. Fine, you win this round.");
      you.stars = you.stars + 2*bet;
      houseBust = true;
      location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
    }
    if (house>player && houseBust == false) {
      alert("Harry: Well, you didn't go bust, but you still couldn't beat the house.");
      location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
    }
    if (player>house) {
      alert("Fine, you win. Take your money and get outta here.");
      you.stars = you.stars + 2*bet;
      location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
    }   
  }      
}

//The jQuery that actually triggers all the functions above
$(document).ready(function () {
  //New Game
  $(".newGame").click(function () {
    newGame();
  });
  //Hit
  $(".hit").click(function () {
    hit();
  });
  //Stay
  $(".stay").click(function () {
    stay();
  });

  //Back
  $(".back").click(function () {
  location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/home2index.html" + "?year=" + year + "&season=" + season + "&age=" + you.age + "&job=" + you.job + "&lands=" + you.lands + "&stars=" + you.stars + "&status=" + you.status;
  });
});