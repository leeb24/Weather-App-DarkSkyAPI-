console.log(`Starting App`);

setTimeout(()=>{
    console.log('inside of callback');
},2000); //ASYNC CALLBACK TIMER

console.log(`Closing App`);