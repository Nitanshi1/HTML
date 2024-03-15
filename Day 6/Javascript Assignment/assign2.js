function shower(callback)
{
    console.log("Showering:");
    setTimeout(function (){
        console.log("Showering Completed:");
        callback();
    },2000);
}
function dressup(callback){
    console.log("Dressing:");
    setTimeout(function (){
        console.log("Dressing Completed:");
        callback();
    },3000);
}
function breakfast(callback){
    console.log("Breakfast started:");
    setTimeout(function (){
        console.log("Breakfast Completed:");
        callback();
    },4000);
}


shower(function (){
    dressup(function (){
        breakfast(function (){
                console.log(" Getting ready in the MOrning has completed!");
        });
    });
});