const Triangle = require('../lib/Triangle');

describe('Triangle class', () => {
    describe('Properties', () => {
        it('should create the Triangle class property of base', () => {
            const base = 8;

            const testObj = new Triangle(base);

            expect(testObj.base).toEqual(base);
        });

        it('should create the Triangle class property of height', () => {
            const base = 8;
            const height = 5;

            const testObj = new Triangle(base, height);

            expect(testObj.height).toEqual(height);
        });
    });

    describe('Methods', () => {
        it('the area() method should return the area of the triangle', () => {
            const base = 8;
            const height = 5;
            
            const area = (base * height) / 2;

            const testObj = new Triangle(base, height);

            expect(testObj.area()).toEqual(area);
        });

        it('the perimeter() method should return the perimeter of the triangle', () => {
            const base = 8;
            const height = 5;
            const side1 = 4;
            const side2 = 3;
            
            const perimeter = base + side1 + side2;

            const testObj = new Triangle(base, height, side1, side2);

            expect(testObj.perimeter()).toEqual(perimeter);
        });
    });
})