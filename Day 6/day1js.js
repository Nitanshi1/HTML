// function getData(get){
//     console.log("fetch the data....")
//     setTimeout(()=>{
//         let arr=[1,2,3,4,5];
        
//         get(arr);
//     },1000)
// }
// function get(arr){
//     console.log(` Length of array is ${arr.length}`);
// }
// getData(get);

// const url1 = 'https://www.nits.com';
// const url2 = 'https://www.kits.com';
// const url3 = 'https://www.pits.com';
// //callback hells /pyramid of doom
// function download1(url1, process1){
//          console.log(`Downloading started.....${url1}`);
//          setTimeout(()=>{
//             console.log(`Downloading Complete..${url1}`);
//             process1(url1);
         
//          },2000);

//         }
// function download2(url2,process2)
// {
//     console.log(`Downloading started.....${url2}`);
//     setTimeout(()=>{
//        console.log(`Downloading Complete..${url2}`);
//        process2(url2);
    
//     },2000);
// }
// function download3(url3,process3)
// {
//     console.log(`Downloading started.....${url3}`);
//     setTimeout(()=>{
//        console.log(`Downloading Complete..${url3}`);
//        process3(url3);

//     },2000);
// }
//         function process1(url1){
//             console.log(`Processing Image....${url1}`);
//             download2(url2,process2);
//         }
//         function process2(url2){
//             console.log(`Processing Image....${url2}`);
//             download3(url3,process3);
//         }
//         function process3(url3){
//             console.log(`Processing Image....${url3}`);
//         }
//         download1(url1,process1);


//-->TASK3
let obj1={
    Name:"Nitanshi",
    LastName:"Agarwal"

}
get(Print,obj1);
function get(Print,obj1){
    console.log("Fetch Data");
    setTimeout(()=>{
        Print(obj1);
    },1000)
}
function Print(obj1)
{
   console.log(obj1.Name);
}