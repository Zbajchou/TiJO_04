describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('DescendingNumbers function',function(){
        it('should return false when numberFrom is smaller numberTo', function () {
            expect(app.getDescendingNumbers(11, 12)).toEqual(false);
        });
        it('should return false when numberFrom is equal numberTo', function () {
            expect(app.getDescendingNumbers(11, 11)).toEqual(false);
        });
        it('should return false when numberFrom is not a number', function () {
            expect(app.getDescendingNumbers('string', 11)).toEqual(false);
        });
        it('should return false when numberTo is not a number', function () {
            expect(app.getDescendingNumbers(11, 'string')).toEqual(false);
        });
        it('should return string when numberFrom is greater than numberTo', function () {
            expect(app.getDescendingNumbers(11, 1)).toEqual('11 10 9 8 7 6 5 4 3 2 1');
        });
    });
    describe('Area of trapezoid function', function(){
        it('should return false when a is smaller than 0', function () {
            expect(app.areaOfTrapezoid(-1,1,2)).toEqual(false);
        });
        it('should return false when b is smaller than 0', function () {
            expect(app.areaOfTrapezoid(1,-1,2)).toEqual(false);
        });
        it('should return false when h is smaller than 0', function () {
            expect(app.areaOfTrapezoid(1,1,-1)).toEqual(false);
        });
        it('should return false when a is not a number', function () {
            expect(app.areaOfTrapezoid('string',1,2)).toEqual(false);
        });
        it('should return false when d is not a number', function () {
            expect(app.areaOfTrapezoid(1,'string',2)).toEqual(false);
        });
        it('should return false when h is not a number', function () {
            expect(app.areaOfTrapezoid(1,1,'string')).toEqual(false);
        });
        it('should equal a area of trapezoid', function () {
            expect(app.areaOfTrapezoid(2,4,4)).toEqual(12);
        });
    });
});
