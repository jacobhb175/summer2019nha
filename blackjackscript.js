let user = 'player';
let player = 0;
let playerStatus;
let house = 0;
let houseStatus;
function newGame() {
  fetch('https://deckofcardsapi.com/api/deck/new/')
    .then(function(response) {
      return response.json();
  })
        .then(function(myJson) {
          console.log(myJson);
          //let deckID = myJson.deck_id;
          draw(user);
          draw(user);
          draw('house');
        })
      }
    function draw(cUser) {
      fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          let image = document.createElement("IMG");
          image.setAttribute("src",myJson.cards[0].image);
          if (cUser=='player') {
            document.getElementById('player').appendChild(image);
            if (myJson.cards[0].value=='ACE') {
              let aceValue = prompt("1 or 11?")
              if (aceValue=='1') {
                player = player + 1;
              }
              else if (aceValue=='11'){
                player = player + 11;
              }
            }
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
          else {
            document.getElementById('house').appendChild(image);
            if (myJson.cards[0].value=='ACE') {
              let x = Math.floor((Math.random() * 2) + 1) - 1;
              if (x==0) {
                house = house + 1;
              }
              else if (x==1) {
                house = house + 11;
              }
            }
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
      function hit() {
        draw(user)
      }
      function stay() {
        if (user=='player') {
          user = 'house';
          draw(user);
          if (player > 21) {
            alert("The player busts!");
            playerStatus = 'Bust';
          }
          for (let i = 0; i < 20; i++); {
            if (house < 17) {
              draw(user);
            }
            else if (house>=17) {
              i = 20;
              stay();
            }
          }
        }
        else {
          if (house > 21) {
            alert("The house busts!")
            houseStatus = 'Bust';
          }
          if (playerStatus == 'Bust') {
            alert("The house wins!");
          }
          if (houseStatus == 'Bust' && playerStatus != 'Bust') {
            alert("The player wins!");
          }
          if (house>player && houseStatus != 'Bust') {
            alert("The house wins!");
          }
          if (player>house && playerStatus != 'Bust') {
            alert("The player wins!");
          }
          if(player==house&&playerStatus!='Bust'&&houseStatus!='Bust') {
            alert("A tie!");
          }
        }
      }