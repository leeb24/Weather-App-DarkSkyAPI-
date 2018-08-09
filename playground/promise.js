var asyncAdd=(a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a  === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('arguments must be numbers');
            }
        },1500);
    });
};


asyncAdd(5,7).then((res)=>{
    
    console.log(res);
    
},(errormsg)=>{
    
    console.log(errormsg);
});
/*var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('Hey it worked'); 
    },2500);
    
    
});

//this only gets run when promise is fufilled or reject 
somePromise.then((msg)=>{
    console.log(msg);
},(error)=>{
    
});*/

