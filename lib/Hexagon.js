const Shape = require('../lib/Shape');

class Hexagon extends Shape {
    constructor(side, apothem) {
        super(side, apothem);
    };

    area() {
        return 1/2 * (6 * this.side) * this.apothem;
    };

    perimeter() {
        return 6 * this.side;
    };
};

module.exports = Hexagon;