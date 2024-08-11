class MathUtils {
  static circleArea(radios: number): number {
    return Math.PI * radios * radios;
  }

  static circleCircumference(radios: number) {
    return Math.PI * radios * 2;
  }
  static rectangleArea(lenth: number, width: number) {
    return lenth * width;
  }
}

console.log("masahat dayerh =" + MathUtils.circleArea(5));

console.log("mohit dayerh =" + MathUtils.circleCircumference(5));

console.log("masahat mostatile =" + MathUtils.rectangleArea(5, 6));
