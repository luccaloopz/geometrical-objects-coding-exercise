const Rectangle = require('../lib/Rectangle');

describe('Rectangle class', () => {
    describe('Properties', () => {
        it('should create the Rectangle class property of length', () => {
            const length = 4;

            const testObj = new Rectangle(length);

            expect(testObj.length).toEqual(length);
        });

        it('should create the Rectangle class property of width', () => {
            const width = 2;

            const testObj = new Rectangle(width);

            expect(testObj.width).toEqual(width);
        });
    });

    describe('Methods', () => {
        it('the area() method should return the area of the rectangle', () => {
            const length = 4;
            const width = 2;
            
            const area = length * width;

            const testObj = new Rectangle(length, width);

            expect(testObj.area()).toEqual(area);
        });

        it('the perimeter() method should return the perimeter of the rectangle', () => {
            const length = 4;
            const width = 2;
            
            const perimeter = 2 * (length + width);

            const testObj = new Rectangle(length, width);

            expect(testObj.perimeter()).toEqual(perimeter);
        });
    });
})