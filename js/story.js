var sentenceGenerator = function() {

  var storyArray = ["", "", ""];
  var ourHero = "";
  var ourAction = "";
  var ourFoil = "";

  var heroesArray = ["Chicken", "Pickle", "Hamster", "Gerbil", "Cow", "Peacock",
    "Alien", "Little Brother", "Koala", "Ice Princess", "Zombie", "Goldfish",
    "Drivers Ed Teacher", "Cornsnake", "Baby Penguin"];
  var randomNum = Math.floor(Math.random() * heroesArray.length);
  $(".hero").on('click', function() {
    ourHero = heroesArray[randomNum];
    $(".hero-info").append("Our hero: " + ourHero + " ");
    storyArray[0] = ourHero;
  });

  var actionArray = ["robs", "rubs", "writes on", "sneezes on", "laughs at",
    "eats", "eats with", "kisses", "fights", "steps on", "plays air hockey with",
    "jumps on", "hugs", "pokes", "tickles", "smells"];
  var randomNum2 = Math.floor(Math.random() * actionArray.length);
  $(".action").on('click', function() {
    ourAction = actionArray[randomNum2];
    $(".action-info").append("Our action: " + ourAction + " ");
    storyArray[1] = ourAction;
  })

  var foilsArray = ["Chunk of Cheese", "Mouse", "Rat", "Mama Bear", "Papa Bear",
    "Snail", "Slug", "Leech", "Bully", "Hairless Cat", "Earthworm"];
  var randomNum3 = Math.floor(Math.random() * foilsArray.length);
  $(".foil").on('click', function() {
    ourFoil = foilsArray[randomNum3];
    $(".foil-info").append("Our foil: " + ourFoil + " ");
    storyArray[2] = ourFoil;
    console.log(storyArray);
  })

  $(".story-generator").on('click', function() {
    if (storyArray.length === 3) {
      var ourStory = storyArray.join(" ") +"!";
      $(".story-info").append(ourStory);
    }
  })

};

$(sentenceGenerator);
