class Rhombus {
    constructor(diagonal1, diagonal2, side) {
        this.diagonal1 = diagonal1;
        this.diagonal2= diagonal2;
        this.side = side;
    };

    area() {
        return (this.diagonal1 * this.diagonal2) / 2;
    };

    perimeter() {
        return 4 * this.side;
    };
};

module.exports = Rhombus;