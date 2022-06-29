module.exports = (x,y, callback)=> {
    if(x<=0 || y<= 0) {
        setTimeout(()=>callback(
            callback(new Error("L or B can not be 0"), null)
        ), 5000);
       
    }else{
        setTimeout(()=>
            callback(null, 
                {perimeter: () => (2*(x+y)),
                    area: () => (x*y)}
                ),
                5000);
    }
}




