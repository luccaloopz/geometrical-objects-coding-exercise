const Rhombus = require('../lib/Rhombus');

describe('Rhombus class', () => {
    describe('Properties', () => {
        it('should create the Rhombus class property of diagonal1', () => {
            const diagonal1 = 6;
            const diagonal2 = 5;

            const testObj = new Rhombus(diagonal1, diagonal2);

            expect(testObj.diagonal1).toEqual(diagonal1);
        });

        it('should create the Rhombus class property of diagonal2', () => {
            const diagonal1 = 6;
            const diagonal2 = 5;

            const testObj = new Rhombus(diagonal1, diagonal2);

            expect(testObj.diagonal2).toEqual(diagonal2);
        });

        it('should create the Rhombus class property of side', () => {
            const diagonal1 = 6;
            const diagonal2 = 5;
            const side = 6;

            const testObj = new Rhombus(diagonal1, diagonal2, side);

            expect(testObj.side).toEqual(side);
        });

    });

    describe('Methods', () => {
        it('the area() method should return the area of the rhombus', () => {
            const diagonal1 = 6;
            const diagonal2 = 5;
            
            const area = (diagonal1 * diagonal2) / 2;

            const testObj = new Rhombus(diagonal1, diagonal2);

            expect(testObj.area()).toEqual(area);
        });

        it('the perimeter() method should return the perimeter of the rhombus', () => {
            const diagonal1 = 6;
            const diagonal2 = 5;
            const side = 6
            
            const perimeter = 4 * side;

            const testObj = new Rhombus(diagonal1, diagonal2, side);

            expect(testObj.perimeter()).toEqual(perimeter);
        });
    });
})