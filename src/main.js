if (!localStorage.getItem('HighScore')) {
  localStorage.setItem('HighScore','0');
}

$(document).ready(function () {
  //music section
  const mySong = new Audio();
  mySong.src = './src/assets/music.mp3';
  let isPlaying = false
  
  //scoring section
  let scoreSect = document.querySelector('#scores')
  
  let best = document.createElement('h1')
  best.innerHTML = "HighScore: " + localStorage.getItem('HighScore');
  scoreSect.append(best)

  const counter = document.createElement('h1')
  scoreSect.append(counter)
  counter.innerHTML = 'Score: 0'
  
  //build the game
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  

  $('body').on('keydown', function (e) {
    console.log(e.keyCode)
    switch (e.keyCode) {
      case 32:
        if (!isPlaying) {
          mySong.play()
          isPlaying = true
        } 
        else {
          mySong.pause()
          isPlaying = false
        }
        
        break;
      case 37:
        if (head.currentDirection === 'right') break;
        head.currentDirection = 'left';
        break;
      case 39:
        if (head.currentDirection === 'left') break;
        head.currentDirection = 'right';
        break;
      case 38:
        if (head.currentDirection === 'down') break;
        head.currentDirection = 'up';
        break;
      case 40:
        if (head.currentDirection === 'up') break;
        head.currentDirection = 'down';
        break;
        //resets high score on 'r' press
      case 82:
        localStorage.setItem('HighScore', '0');
        window.location.reload();
        break;
      default: head.currentDirection = 'right';
        break;
    }
  });


  const headId = document.querySelector('#head');
  const appleId = document.querySelector('#apple');
  const bodyPositions = [];
  let speed = 150;

  const snakeGame = () => {

    counter.textContent = 'Score: ' + bodyPositions.length
    //get head location
    let headLocation = {
      top: headId.style.top,
      left: headId.style.left
    }

    //collision detection for tail collisions
    for (let i = 0; i < bodyPositions.length; i++) {
      let body = JSON.stringify(bodyPositions[i]);
      let head = JSON.stringify(headLocation);

      if (body === head) {
        alert('YOU WIN');
        window.location.reload()
      }
    }

    //display our whole body from bodyPositions array - left to right
    var allTails = document.querySelectorAll('.body-piece')

    //remove the past snake iterations
    for (var i = allTails.length - 1; i >= 0; i--) {
      document.querySelector('#board').removeChild(allTails[i]);
    }

    //push Head Position into the body Array
    bodyPositions.unshift(headLocation)

    //if we hit an apple - new random apple - no change to body array because apple 
    //location is already pushed in as the new body
    if (headId.style.left === appleId.style.left && headId.style.top === appleId.style.top) {
      apple.node[0].style.left = `${apple.randomCoord()}`;
      apple.node[0].style.top = `${apple.randomCoord()}`;
      if (speed > 70) {
        speed -= 20;
      }
      let highscoreVal = localStorage.getItem('HighScore');
      let currentScore = bodyPositions.length;
      if (currentScore > highscoreVal){
        localStorage.setItem('HighScore', currentScore);
        best.innerHTML = "HighScore: " + localStorage.getItem('HighScore');
      }
    }
    //if we don't hit an apple we want to remove the last element from the body array
    else { bodyPositions.pop() }

    //render the body of the snake
    bodyPositions.forEach(pos => {
      let body = new Body($('#board'), pos);
    })

    //move the head of the snake
    head.move()

    //declare the position to check if it's out of bounds
    let position = head.node.position();

    //out of bounds logic
    if (position.left === 700 || position.left === -50) {
      clearTimeout(id);
      alert('YOU WIN');
      window.location.reload()
    } else if (position.top === 700 || position.top === -50) {
      clearTimeout(id);
      alert('YOU WIN');
      window.location.reload()

    }

    //loop again
    setTimeout(snakeGame, speed)
  }

  let id = setTimeout(snakeGame, speed);

});


