// creates a constructor function - research ES6 classes
class Head {

  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $(`<div id="head"><img src='https://media.giphy.com/media/8jXLSLp0gtcVG/giphy.gif'></img></div>`);
    this.currentDirection = 'right';
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

  }

}
