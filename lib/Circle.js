class Circle {
    constructor(radius) {
        this.radius = radius
    };

    area() {
        return Math.PI * (this.radius * this.radius);
    };

    perimeter() {
        return 2 * Math.PI * this.radius;
    };
};

module.exports = Circle;