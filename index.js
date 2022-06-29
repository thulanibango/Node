var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l= "+ l +"b=" + b );
    rect(l,b ,(err, rectangle) => {
        if(err){
            console.log("Error ", err.message)
        }else{
            console.log("the area for the recatngle = " + rectangle.area());
            console.log("the parameter for the recatngle = " + rectangle.perimeter())
        }

    })
    console.log("Statement is after the call rect()")


}

solveRect(4,4);
solveRect(0,4);
solveRect(-3,4);