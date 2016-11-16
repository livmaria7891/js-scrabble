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
};

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

//Manual Tests
tst1 = new Scrabble();
tst1.scoreWord("A");
tst1.scoreWord("patagonia");

module.exports = Scrabble;
