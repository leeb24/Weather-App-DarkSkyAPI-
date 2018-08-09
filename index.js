const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            descirbe:'address to fetch weather',
            string:true
        }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.a,(errormsg,results)=>{
    if(errormsg){
        console.log(errormsg);
    }else{
        console.log(JSON.stringify(results,undefined,2));
        
        request({
        url:`https://api.darksky.net/forecast/6ad1073d8123864976681c070e9fe562/${results.latitude},${results.longitude}`,
        json:true
        },(error,response,body)=>{
            console.log(body.currently.temperature);
        });
    }
});

