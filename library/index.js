
//Print Console
export function _print( para ) {
    console.log( para );
};

//Alert
export function _a( para ) {
    alert( para )
}

// TODO: Print Document


//Length 
export function _len( para ) {
    return para.length;
};

//Console Table
export function _t ( para ) {
    console.table( para );
};

//Make Half
export function _half( para ) {
    return para / 2
}

//Double
export function _dbl( para )  {
    return para * 2;
};

//Get Random Number
export function _rnum ( para ) {
    return Math.floor( Math.random() * parseInt( para ));
};

//Addition
export function _sum( num1 , num2 ) {
    return num1 + num2;
};

//Diffrence
export function _diffrence ( num1 , num2 )
{
    return num1 - num2;
};

//Multiplication
export function _x( num1 , num2) {
    return num1 * num2;
};

//Division
export function _div(num1 , num2) { 
    return num1 / num2
};

//Rectangle
export function _rect ( l , b ) {
    return l * b
}

//Square
export function _square ( s ) {
    return s * s
}

//Triangle Finders
export var _tri = 180;

export function Triangle(angleA , angleB , angleC) {
    this.angleA = angleA;
    this.angleB = angleB;
    this.angleC = angleC;
    this.sum = angleA + angleB + angleC;
    this.valid = this.sum == _tri
    this.calcTri = function ( ) {
        this.angleC
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