class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
    $el.append(this.node);
    this.top = this.randomCoord()
    this.left = this.randomCoord()
    this.node.css({ top: this.top, left: this.left });
  }

  randomCoord() {
    const coordinate = Math.floor(Math.random() * (13) * 50);
    return coordinate - coordinate % 50;
  }



}
