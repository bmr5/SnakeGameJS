$(document).ready(function () {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));

  $('body').on('keydown', function (e) {
    switch (e.keyCode) {
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
      default: head.currentDirection = 'right';
        break;
    }
  });


  const headId = document.querySelector('#head');
  const appleId = document.querySelector('#apple');
  const bodyPositions = []

  setInterval( () => {
    // head.move()
    // let position = head.node.position();
    // console.log(position)
    // head.node.css(position);

    // if (position.left === 700 || position.left === -50) {
    //   clearTimeout(id);
    //   alert('YOU LOST');
    // } else if (position.top === 700 || position.top === -50) {
    //   clearTimeout(id);
    //   alert('YOU LOST');
    // }


    //get head location
    let headLocation = {
      top: headId.style.top,
      left: headId.style.left
    }
    // console.log(JSON.stringify(lastHeadPosition), 'last')
    // console.log(JSON.stringify(headLocation), 'curr')

    //collision detection for tail collisions
    for (let i =0; i<bodyPositions.length; i++) {
      let body = JSON.stringify(bodyPositions[i]);
      let head = JSON.stringify(headLocation);

      if (body === head) {
        alert('YOU LOST');
      }
    }
    
    //display our whole body from bodyPositions array - left to right
    var allTails = document.querySelectorAll('.body-piece')

    for (var i=allTails.length-1; i>=0; i--) {
      document.querySelector('#board').removeChild(allTails[i]);
    } 

    //push Head Position into the body Array
    bodyPositions.unshift(headLocation)
    
    //if we hit an apple - new random apple - no change to body array because apple 
      //location is already pushed in as the new body
    if (headId.style.left === appleId.style.left && headId.style.top === appleId.style.top) {
      apple.node[0].style.left = `${apple.randomCoord()}`;
      apple.node[0].style.top = `${apple.randomCoord()}`;
    }
    //if we don't hit an apple we want to remove the last element from the body array
    else {bodyPositions.pop()}

    bodyPositions.forEach(pos => {
      let body = new Body($('#board'), pos);
    })

    // console.log(head.node[0].style.left, head.node[0].style.top);
    // console.log(apple.node[0].style.left, apple.node[0].style.top);    
  }, 200);

});
