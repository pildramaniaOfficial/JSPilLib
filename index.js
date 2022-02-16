import { _print , _len , _dbl , _diffrence , _div , _half , _rnum , _sum , _t , _x , _rect , _square , _tri , Triangle } from './library/index.js';
_print('Hello');
_print( 'The length of "Hello" is ' + _len('hello'));
_print('Sum of "1+1" is ' + _sum(1 , 1));
_print('Diffrence of "1 - 1" is ' + _diffrence(1 , 1));
_print('Multiplication of "3 x 3" is ' + _x (3 , 3));
_print('Division of "9 / 3" is ' + _div(9 , 3));
_print('The Double of 3 is ' + _dbl( 3 ) );
_print('The Half of 6 is ' + _half(6));
_print('A Random Number within 10 is ' + _rnum(10));
_print('Square of 4 is' + _square(4));
var myTri = new Triangle(2 , 2 , 4 );
_t(myTri.ratioTri());
var mySecondTri = new Triangle( 100 , 60 , 20  );
_print(`As mySecondTri is ${mySecondTri.sum}, mySecondTri = ${mySecondTri.valid}`)
