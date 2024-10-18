function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice1').src = `./images/dice${randomNumber1}.png`;
    if (randomNumber1 > randomNumber2) {
      document.querySelector('.result').textContent = 'Player 1 wins!';
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector('.result').textContent = 'Player 2 wins!';
    } else {
      document.querySelector('.result').textContent = 'It\'s a tie!';
    }
    document.querySelector('.container').classList.add('show-result');
    setTimeout(function() {
      document.querySelector('.container').classList.remove('show-result');
    }, 2000);
  }