function mix(callback)
{
    console.log("Mixing:");
    setTimeout(function (){
        console.log("Mixing Completed:");
        callback();
    },2000);
}
function chill(callback){
    console.log("Chilling:");
    setTimeout(function (){
        console.log("Chilling Completed:");
        callback();
    },2000);
}
function wait(callback){
    console.log("Waiting:");
    setTimeout(function (){
        console.log("Waiting Completed:");
        callback();
    },3000);
}
function baked(callback){
    console.log("Baking:");
    setTimeout(function (){
        console.log("Baking Completed:");
        callback();
    },4000);
}

mix(function (){
    chill(function (){
        wait(function (){
            baked(function (){
                console.log("Cookies are ready to eat:");
            });
        });
    });
});