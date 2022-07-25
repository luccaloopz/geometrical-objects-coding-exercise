const Hexagon = require('../lib/Hexagon');

describe('Hexagon class', () => {
    describe('Properties', () => {
        it('should create the Hexagon class property of side', () => {
            const side = 5;
            const apothem = 6;

            const testObj = new Hexagon(side, apothem);

            expect(testObj.side).toEqual(side);
        });

        it('should create the Hexagon class property of apothem', () => {
            const side = 5;
            const apothem = 6;

            const testObj = new Hexagon(side, apothem);

            expect(testObj.apothem).toEqual(apothem);
        });
    });

    describe('Methods', () => {
        it('the area() method should return the area of the hexagon', () => {
            const side = 5;
            const apothem = 6;

            const area = 1/2 * (6 * side) * apothem;

            const testObj = new Hexagon(side, apothem);

            expect(testObj.area()).toEqual(area);
        });

        it('the perimeter() method should return the perimeter of the hexagon', () => {
            const side = 5;
            const apothem = 6;

            const perimeter = 6 * side;

            const testObj = new Hexagon(side, apothem);

            expect(testObj.perimeter()).toEqual(perimeter);
        });
    });
})