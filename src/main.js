$(document).ready(function () {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));

  $('body').on('keydown', function (e) {
    switch (e.keyCode) {
      case 37:
        head.currentDirection = 'left';
        break;
      case 39:
        head.currentDirection = 'right';
        break;
      case 38:
        head.currentDirection = 'up';
        break;
      case 40:
        head.currentDirection = 'down';
        break;
      default: head.currentDirection = 'right';
        break;
    }
  });

  console.log(head.node[0].style.left, head.node[0].style.top);
  console.log(apple.node[0].style.left, apple.node[0].style.top);

  const headId = document.querySelector('#head');
  const appleId = document.querySelector('#apple');

  setInterval(() => {
    if (headId.style.left === appleId.style.left && headId.style.top === appleId.style.top) {
      apple.node[0].style.left = `${apple.randomCoord()}`;
      apple.node[0].style.top = `${apple.randomCoord()}`;
    }
  }, 500);
});
