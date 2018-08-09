var getUser = (id,callback)=>{
    var user ={
        id:id,
        name:'Lee'
    }
    setTimeout(()=>{
        callback(user); //Delay Happens
    },3000);
};


//get user obj from getUser and use it 
getUser(31,(user)=>{
    console.log(user);
});