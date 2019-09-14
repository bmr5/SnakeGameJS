class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
    $el.append(this.node);
    this.node.css({ top: this.randomCoord(), left: this.randomCoord() });
  }

  randomCoord() {
    const coordinate = Math.floor(Math.random() * (13) * 50);
    return coordinate - coordinate % 50;
  }

}
