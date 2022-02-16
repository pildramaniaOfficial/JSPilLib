import { _print , _len , _dbl , _diffrence , _div , _half , _rnum , _sum , _t , _x , _rect , _square 
, _a , _upper, _capitalize , _lower , _fjson , _p , _sqrt , _setBackgroundColor , _setbottomMargin , _setcolor , _sethtml , _setleftMargin , _setrightMargin , _settopMargin , _click , _clickhide , _clickshow 
,_hide , _inc ,_setBorderColor , _setBorderRadius , _setBorderStyle , _setBorderWidth , _setTextShadow , _setborder , _setdisplay ,
_setfontFamily , _setpadding , _setpos , _setshadow} from './library/index.js';

import { Triangle , _tri  } from './library/triangle.js';


//Example code
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
_print(`As mySecondTri is ${mySecondTri.sum}, mySecondTri = ${mySecondTri.valid}`);
_print(mySecondTri.calcC());
_print(mySecondTri.calcA());
_print(mySecondTri.calcB());
_print(_upper('hi'))
_print(_capitalize('hi'))
//_a('library working!!');
//_p('What is your name: ');