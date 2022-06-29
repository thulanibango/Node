var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l= "+ l +"b=" + b );

    if (l<=0 || b<= 0) {
        console.log("L or B can not be 0")
    }else{
        console.log("Area = " + rect.area(l,b))
        console.log("Perimeter = " + rect.perimeter(l,b))

    }
}

solveRect(4,4);
solveRect(0,4);
solveRect(-3,4);