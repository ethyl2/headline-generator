var sentenceGenerator = function() {

  var storyArray = ["", "", ""];
  var ourHero = "";
  var ourAction = "";
  var ourFoil = "";

  var heroesArray = ["Chicken", "Pickle", "Hamster", "Gerbil", "Cow", "Peacock",
    "Alien", "Little Brother", "Koala", "Ice Princess", "Zombie", "Goldfish",
    "Drivers Ed Teacher", "Cornsnake", "Baby Penguin"];

  var actionArray = ["Robs", "Rubs", "Writes on", "Sneezes on", "Laughs at",
    "Eats", "Kisses", "Fights", "Steps on", "Plays Air Hockey with",
    "Jumps on", "Hugs", "Pokes", "Tickles", "Smells", "Starts a Rock Band with",
    "Operates on", "Falls in Love with", "Becomes Partners-in-Crime with"];

  var foilsArray = ["Chunk of Cheese", "Mouse", "Rat", "Mama Bear", "Papa Bear",
    "Snail", "Slug", "Leech", "Bully", "Hairless Cat", "Earthworm", "Vampire",
    "Werewolf", "Mummy", "Dirty Sock", "Toothbrush"];

  var randomNum = Math.floor(Math.random() * heroesArray.length);
  var randomNum2 = Math.floor(Math.random() * actionArray.length);
  var randomNum3 = Math.floor(Math.random() * foilsArray.length);

  $(".hero").on('click', function() {
    ourHero = heroesArray[randomNum];
    $(".hero-info").append(ourHero);
    storyArray[0] = ourHero;
  });

  $(".action").on('click', function() {
    ourAction = actionArray[randomNum2];
    $(".action-info").append(ourAction);
    storyArray[1] = ourAction;
  })

  $(".foil").on('click', function() {
    ourFoil = foilsArray[randomNum3];
    $(".foil-info").append(ourFoil);
    storyArray[2] = ourFoil;
    console.log(storyArray);
  })

  $(".story-generator").on('click', function() {
    if (storyArray.length === 3) {
      var ourStory = storyArray.join(" ") +"! ";
      $(".story-info").append(ourStory);
      storyArray = ["","",""];
      ourHero = "";
      ourAction = "";
      ourFoil = "";
      randomNum = Math.floor(Math.random() * heroesArray.length);
      randomNum2 = Math.floor(Math.random() * actionArray.length);
      randomNum3 = Math.floor(Math.random() * foilsArray.length);
      $(".hero-info").text("");
      $(".action-info").text("");
      $(".foil-info").text("");

    }
  })

  $(".reset").on('click', function() {
    storyArray = ["","",""];
    ourHero = "";
    ourAction = "";
    ourFoil = "";
    randomNum = Math.floor(Math.random() * heroesArray.length);
    randomNum2 = Math.floor(Math.random() * actionArray.length);
    randomNum3 = Math.floor(Math.random() * foilsArray.length);
    $(".hero-info").text("");
    $(".action-info").text("");
    $(".foil-info").text("");
    $(".story-info").text("");
  })
};

$(sentenceGenerator);
