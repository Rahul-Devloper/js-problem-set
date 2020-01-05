
function isEven(c){
    if(c%2===0){
        return true;
    }
    else{
        return false;
    }
}

/*function factorial(x) { 
    if (x === 0) {  
        return 1;  
    } 

        return x  * factorial( x - 1 );  
    
} */ //this is also a correct method. It is done by calling a function.

function factorial(x){
    var a=1;
    for(var b=2;b<=x;b++){
        a=a*b;
    }
    return a;
}
function kebabToSnake(str) {
    var newStr = str.replace(/ - /g  , "_");
    return newStr;
}