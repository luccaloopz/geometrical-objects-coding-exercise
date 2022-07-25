const Pentagon = require('../lib/Pentagon');

describe('Pentagon class', () => {
    describe('Properties', () => {
        it('should create the Pentagon class property of side', () => {
            const side = 5;
            const apothem = 6;

            const testObj = new Pentagon(side, apothem);

            expect(testObj.side).toEqual(side);
        });

        it('should create the Pentagon class property of apothem', () => {
            const side = 5;
            const apothem = 6;

            const testObj = new Pentagon(side, apothem);

            expect(testObj.apothem).toEqual(apothem);
        });
    });

    describe('Methods', () => {
        it('the area() method should return the area of the pentagon', () => {
            const side = 5;
            const apothem = 6;

            const area = 1/2 * (5 * side) * apothem;;

            const testObj = new Pentagon(side, apothem);

            expect(testObj.area()).toEqual(area);
        });

        it('the perimeter() method should return the perimeter of the pentagon', () => {
            const side = 5;
            const apothem = 6;

            const perimeter = 5 * side;

            const testObj = new Pentagon(side, apothem);

            expect(testObj.perimeter()).toEqual(perimeter);
        });
    });
})