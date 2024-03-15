let select=document.querySelector('select');
let Sleepfunc=(val)=>{
    const para=document.querySelector("#newpara");
    para.innerHTML=`Sleep:${val} hours`;
    
}
let study=(val)=>{
    const para=document.querySelector("#newpara2");
    para.innerHTML=`Study:${val} hours`;
    
}
let eat=(val)=>{
    const para=document.querySelector("#newpara3");
    para.innerHTML=`Eat:${val} hours`;
    
}
let showcontent=function(){
    const val=select.value;
    switch (val) {
        case "1":
            Sleepfunc(12);
            study(6);
            eat(1);
            document.body.style.backgroundColor="black";
            break;
        case "2":
            Sleepfunc(7);
            study(6);
            eat(2);
            document.body.style.backgroundColor="blue";
            break;
        case "3":
            Sleepfunc(4);
            study(7);
            eat(1);
            document.body.style.backgroundColor="violet";
            break;
        case "4":
            Sleepfunc(6);
            study(8);
            eat(2);
            document.body.style.backgroundColor="orange";
            break;
        case "5":
            Sleepfunc(5);
            study(8);
            eat(1);
            document.body.style.backgroundColor="green";
            break;
        case "6":
            Sleepfunc(6);
            study(5);
            eat(2);
            document.body.style.backgroundColor="grey";
            break;
        case "7":
            Sleepfunc(8);
            study(2);
            eat(4);
            document.body.style.backgroundColor="yellow";
            break;

        default:
            break;
    }
}
select.addEventListener('change',showcontent);