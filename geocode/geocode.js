const request = require ('request');

var geocodeAddress = (address,callback) =>{
    //console.log('In Geo');
    var url = encodeURIComponent(address);
    var APIkey = 'AIzaSyCChUbqTSjLyikuBxn5ckFVRW_3gULtnWI';
    //API key needs to be updated often
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${url}&key=${APIkey}`,
        json:true
    },(error,response,body) => {
        //console.log(JSON.stringify(response,undefined,2)); //2 is parsing JSON obj 
        if(error){
            callback('Unable to connect to server');
        }
        else if(body.status ==='ZERO_RESULTS'){
            callback('Unable to find the address');
        }
        else if(body.status === 'OK'){
            callback(undefined,{
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng,
                full:body.results[0].formatted_address
            })
 
        }

    });//Options and callback func as option
    
};

module.exports.geocodeAddress = geocodeAddress;