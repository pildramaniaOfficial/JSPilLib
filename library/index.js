
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

