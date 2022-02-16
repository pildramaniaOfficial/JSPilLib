//library Working
console.log('library working.')

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

//Upper Case
export function _upper ( para ) {
    return para.toUpperCase()
}

//Capitalize
export function _capitalize(para) {
    return para[0].toUpperCase() + para.substring(1);
}

//Lower Case
export function _lower ( para ) {
    return para.toLowerCase()
};

//Prompt
export function _p (para) {
    prompt( para )  
};

//Function to find square root
export function _sqrt(val) {
    return Math.sqrt(val)
}

//Fetch 
export function _fjson ( link ) {
    return fetch(link).then((text) => {
          return text.json()
    }).then((data) => {
          return data
    });
    
}
export const days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']
export const months = [['January' , 31] , ['February' , 28 , 29] , ['March' , 31] , ['April' , 30] , ['May' , 31 ] , ['June' , 30] ,
['July' , 31] , ['August' , 31] , ['September' , 30] , ['October' , 31] , ['November' ,  30] , ['December' , 31]]
export const year = 365;
export const lyear = 366;
export function _sethtml( select , a ) {
    document.querySelector(select).innerHTML = a
}
export function _setcolor (select , a) {
    document.querySelector(select).style.color = a
}
export function _setBackgroundColor( select , a ) {
    document.querySelector(select).style.backgroundColor = a
}
export function _setleftMargin( select , a ) {
    document.querySelector(select).style.marginLeft = a
}
export function _setrightMargin( select , a ) {
    document.querySelector(select).style.marginRight = a
}
export function _settopMargin( select , a ) {
    document.querySelector(select).style.marginTop = a
}
export function _setbottomMargin( select , a ) {
    document.querySelector(select).style.marginBottom = a
};
export function _setpadding( ar , ar2 ) {
    document.querySelector(ar).style.paddingTop = ar2
    document.querySelector(ar).style.paddingBottom = ar2
    document.querySelector(ar).style.paddingRight= ar2
    document.querySelector(ar).style.paddingLeft = ar2
}
export function _setfontFamily( ar , ar2) {
    document.querySelector(ar).style.fontFamily = ar2
}
export var singleDigit = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]
export function _setBorderRadius( s , ar ) {
    document.querySelector(s).style.borderRadius = ar
} 
export function _setdisplay( s , ar ) {
    document.querySelector(s).style.display = ar
} 
export function _setpos( s , ar ) {
    document.querySelector(s).style.position = ar
} 
export function _click( s , arg) {
    document.querySelector(s).addEventListener('click' , arg)
}
export function _show( s ) {
    document.querySelector(s).style.display = 'block'
}
export function _hide( s ) {
    document.querySelector(s).style.display = 'none'
};
export function _inc( int ) {
    return int++
}
export function _clickshow( s , ar) {
   document.querySelector(s).addEventListener('click' , function() {
         document.querySelector(ar).style.display = 'block'
   })
}
export function _clickhide( s , ar) {
   document.querySelector(s).addEventListener('click' , function() {
         document.querySelector(ar).style.display = 'none'
   })
}
export var monkey = '1929 code';


//Set Shadow
export function _setshadow(s, val) {
    document.querySelector(s).style.boxShadow = val
}
//Set Text Shadow
export function _setTextShadow(s, val) {
    document.querySelector(s).style.boxShadow = val
}

//Set Border Width
export function _setBorderWidth(s, val) {
    document.querySelector(s).style.borderWidth = val
}

//Set border color
export function _setBorderColor(s, val) {
    document.querySelector(s).style.borderColor = String(val)
}

//Set border style
export function _setBorderStyle(s, val) {
    document.querySelector(s).style.borderStyle = val
}

//Set border
export function _setborder(s, arg) {
    document.querySelector(s).style.border = arg
}