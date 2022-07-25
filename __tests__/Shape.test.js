const Shape = require('../lib/Shape');

describe('Shape class', () => {
    describe('Properties', () => {
        it('should create the Shape class property of side', () => {
            const side = 5;
            const apothem = 6;

            const testObj = new Shape(side, apothem);

            expect(testObj.side).toEqual(side);
        });

        it('should create the Shape class property of apothem', () => {
            const side = 5;
            const apothem = 6;

            const testObj = new Shape(side, apothem);

            expect(testObj.apothem).toEqual(apothem);
        });
    });
})