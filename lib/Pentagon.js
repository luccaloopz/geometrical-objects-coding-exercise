const Shape = require('../lib/Shape');

class Pentagon extends Shape {
    constructor(side, apothem) {
        super(side, apothem); 
    };

    area() {
        return 1/2 * (5 * this.side) * this.apothem;
    };

    perimeter() {
        return 5 * this.side;
    };
};

module.exports = Pentagon;