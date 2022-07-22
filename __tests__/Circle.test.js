const Circle = require('../lib/Circle')

describe('Circle class', () => {
    describe('Properties', () => {
        it('should create the Circle class property of radius', () => {
            const radius = 4;

            const testObj = new Circle(radius);

            expect(testObj.radius).toEqual(radius); 
        });
    });

    describe('Methods', () => {
        it('the area() method should return the area of the circle', () => {
            const radius = 4;
            
            const area = Math.PI * (radius * radius);

            const testObj = new Circle(radius);

            expect(testObj.area()).toEqual(area);
        });

        it('the perimeter() method should return the perimeter of the circle', () => {
            const radius = 4;
            
            const perimeter = 2 * Math.PI * radius;

            const testObj = new Circle(radius);

            expect(testObj.perimeter()).toEqual(perimeter);
        });
    });
})