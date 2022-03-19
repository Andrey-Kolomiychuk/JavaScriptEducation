
const log = function(a, b, ...rest){
    console.log(a,b, rest);
};

log('basic', 'rest', 'operator', 'usag');

function calcorDouble(number, basis = 2) {
    console.log(number * basic);
}

calcorDouble(3, 5);