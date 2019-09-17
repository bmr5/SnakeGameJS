class Body {

    // this is what's called when you use the "new" keyword
    constructor($el, pos) {
      this.node = $('<div class="body-piece"></div>');
      $el.append(this.node);
      this.node.css(pos);
    //   setTimeout(this.move.bind(this), this.SPEED);
    }



     // same as Head.prototype.move = function() {...}
//   move() {
//     let position = this.node.position();

//     this.node.css(position);
//     const id = setTimeout(this.move.bind(this), this.SPEED);
//   }

}