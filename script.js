//* JavaScript ООП

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._width * this._height;
  }

  getPerimeter() {
    return this._width * 2 + this._height * 2;
  }

  toString() {
    return `Прямоугольник с шириной ${this._width} и высотой ${
      this._height
    } имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this._side = side;
  }

  toString() {
    return `Квадрат со стороной ${this._side} имеет периметр ${super.getPerimeter()} и площадь ${super.getArea()}`;
  }
}

const rect = new Rectangle(5, 2);
console.log(rect.toString());
const sq = new Square(3);
console.log(sq.toString());