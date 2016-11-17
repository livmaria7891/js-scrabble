var Scrabble = function() {
  var alphabet = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
    };

  this.scoreWord = function(word){
    //set score to 0 or 50
    //do I need to set __var__ word here to stop it from being global?
    var word = word.toUpperCase();
    var score = 0;
    if(word.length >= 7){
      score = 50;
    }
    //Loop through word to add points to score
    for (var i = 0, len = word.length; i < len; i++){
      var points = alphabet[word[i]];
      score += points;
    }
    return score;
  };

  this.highestScoreFrom = function(arrayOfWords){
    //set highestScore var to 0
    var highestScore = 0;
    //set bestWord var to ;
    var bestWord;
    var that = this;
    //iterate through arrayOfWords
    arrayOfWords.forEach(function(word){
      //set variable wordScore to equal scoreWord(word)
      var wordScore = that.scoreWord(word);
      //if wordScore > highestScore
      if(wordScore > highestScore){
        //set bestWord to word
        bestWord = word;
        //set highestScore to wordScore
        highestScore = wordScore;
        //else if they're equal && word.length < bestWord.length
      }else if(wordScore == highestScore && word.length < bestWord.length){
        //set bestWord to word
        bestWord = word;
      }
    });
    return bestWord;
  };
};

var Player = function(name){
  Scrabble.call(this);
  this.name = name;
  this.plays = [];

  this.play = function(word){
    if (this.hasWon() == false){
    this.plays.push(word);
    }else{
    console.log("You've already won!");
  }
  };

  this.totalScore = function(){
    var forced_this = this;
    var player_score = 0;
    this.plays.forEach(function(word){
      player_score += forced_this.scoreWord(word);
    });
    return player_score;
  };

  this.hasWon = function(){
    var this_score = this.totalScore();
    var hasWon = false;
    if(this_score > 100){
      return hasWon = true;
    }
    return hasWon;
    ///test this, and call it from play(word)
  };

  this.highestScoringWord = function(){
    return this.highestScoreFrom(this.plays);
  };

  this.highestWordScore = function(){
    var players_highest_score = this.highestScoringWord();
    return this.scoreWord(players_highest_score);
  };

};




//Manual Tests

tst3 = new Player("Olivia");
console.log(tst3.name);
tst3.play("chalk");
tst3.play("monk");
tst3.play("turkey");
tst3.play("quiz");


console.log(tst3.plays);
console.log(tst3.hasWon());
tst3.play("chalk");
tst3.play("monk");
tst3.play("turkey");
tst3.play("quiz");
console.log(tst3.hasWon());
tst3.play("chalk");
console.log(tst3.highestScoringWord());
console.log(tst3.highestWordScore());


// console.log(tst3.scoreWord("dog"));
// console.log(tst3.totalScore());//chalk, monk, turkey



//SCRABBLE Module
// tst1 = new Scrabble();
// tst1.scoreWord("A");
// tst1.scoreWord("patagonia");

// var arrayOfWords = ["oat", "boat", "boats","borzoi"]; //should return borzoi
// var tiedWordsSameLength = ["tote", "tots"]; //should return tote (because it was first)
// var tiedWordsDifferentLength = ["dot", "oats"]; // should return dot (because it's shortest)
//
// tst2 = new Scrabble();
// console.log(tst2.highestScoreFrom(arrayOfWords));
// console.log(tst2.highestScoreFrom(tiedWordsSameLength));
// console.log(tst2.highestScoreFrom(tiedWordsDifferentLength));

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

module.exports = Scrabble;
