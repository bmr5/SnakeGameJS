// creates a constructor function - research ES6 classes
class Head {

  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'right';
    this.SPEED = 70;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });
    // setTimeout(this.move.bind(this), this.SPEED);
  }

  // same as Head.prototype.move = function() {...}
  move() {
    let direction = this.currentDirection;
    let position = this.node.position();

    switch (direction) {
      case 'right':
        position.left += 50;
        break;
      case 'left':
        position.left -= 50;
        break;
      case 'up':
        position.top -= 50;
        break;
      case 'down':
        position.top += 50;
        break;
      default:
        position.left += 50;
    }

    this.node.css(position);
    // const id = setTimeout(this.move.bind(this), this.SPEED);

    // if (position.left === 700 || position.left === -50) {
    //   clearTimeout(id);
    //   alert('YOU LOST');
    // } else if (position.top === 700 || position.top === -50) {
    //   clearTimeout(id);
    //   alert('YOU LOST');
    // }
  }

}
