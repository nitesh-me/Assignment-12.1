function counterReducer(actionType,  counter){
    if(actionType==='INC'){
        counter= counter+1;
        return counter;
    }
    if(actionType==='DEC'){
        counter = counter-1;
        return counter;
    }
}

var x =counterReducer('INC', 0);
var y =counterReducer('DEC', 0);
    console.log('After increment');
    console.log(x);
    console.log('After Decrement');
    console.log(y);