//Triangle Finders
export var _tri = 180;

export function Triangle(angleA , angleB , angleC) {
    this.angleA = angleA;
    this.angleB = angleB;
    this.angleC = angleC;
    this.sum = angleA + angleB + angleC;
    this.valid = this.sum == _tri
    this.calcC = function ( ) {
        var calcC = 180 - (angleA + angleB);
        return calcC
    }
    this.calcA = function ( ) {
        var calcC = 180 - (angleB + angleC);
        return calcC
    }
    this.calcB = function ( ) {
        var calcC = 180 - (angleA + angleC);
        return calcC
    }

 this.ratioTri = () => {
      var added = this.angleA + this.angleB + this.angleC;
      var x = 180 / added;
      var angle_a = this.angleA * x;
      var angle_b = this.angleB * x;
      var angle_c = this.angleC * x;
      var angles = {
          AngleA : angle_a,
          AngleB : angle_b,
         "AngleC" : angle_c,
      }
      return angles
}

}