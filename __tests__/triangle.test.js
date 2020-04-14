import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  // test1 // 
  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2, 4, 5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  // test2 //
  test('should correctly determine whether three lengths are not a triangle', () => {
    var notTriangle = new Triangle(3, 9, 22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  // test3 //
  test('should correctly determine whether three lengths make scalene triangle', function () {
    var scalTriangle = new Triangle(4, 5, 7)
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });


  
});