class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'https://media.giphy.com/media/MNHk1YGGkWaha/giphy.gif');
    $el.append(this.node);
    this.top = this.randomCoord()
    this.left = this.randomCoord()
    this.node.css({ top: this.top, left: this.left });
    this.location = { top: this.top, left: this.left }
  }

  randomCoord() {
    const coordinate = Math.floor(Math.random() * (19) * 50);
    this.location = {top: this.top + 'px', left: this.left + 'px'}
    return coordinate - coordinate % 50;
  }



}
