class Triangle {
    constructor(base, height, side1, side2) {
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    };

    area() {
        return (this.base * this.height) / 2;
    };

    perimeter() {
        return this.base + this.side1 + this.side2;
    };
};

module.exports = Triangle;