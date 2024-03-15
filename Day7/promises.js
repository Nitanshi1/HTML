// let success=true;

// function fetchData(){
//     return new Promise((resolve, reject)=>
// {
//     console.log("Fetching data Started...");
//         setTimeout(()=>{
//             if(success){
//                 let info={
//                    name: "Nitanshi",
//                    date: "2ndOct"

//             }
//             console.log("Fetching data completeed...");
//             resolve(info);
//         }
//         else{
//             reject("ERROR: Not able to fetch the data");
//         }
//     },2000);
//     });          
// }
// fetchData().then((info)=>{
//     console.log(info);

// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log("My Angular Team");
// })

// let p = new Promise((resolve,reject) =>{
//     console.log("Fetching the data....");
//     let data={
//         name: "Nitanshi",
//         time: 5
//     }
//     setTimeout(()=>{
//         resolve(data);
// },5000);
// })

// p.then((data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(data.time);
//         },2000);
//     })
// }).then((breaktime)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("NEED A BREAK!");
//             resolve(breaktime*100);
//         },1000);
// })
// }).then((reduction)=>{
//     console.log(reduction);
// })

// function FetchData(){
//     let arr=[11,22,31,44,50];
//     return new Promise((resolve,reject)=>
//     setTimeout(()=>{
//         console.log(arr);
//       resolve(arr);
//     },3000)
// )}
// function FilterofData(arr){
  
//     return new Promise((resolve,reject)=>{
//     let newArr=[];
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]%2==0){
//             newArr.push(arr[j]);
//         }
//     }
//     setTimeout(()=>{
//         console.log(newArr);
//         resolve(newArr);
//       },2000)
//     }
// )}
    
// function SumUpofData(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return new Promise((resolve,reject)=>

//     setTimeout(()=>{
//         console.log(sum);
//         resolve(sum);
//       },2000)
    
// )}
// async function FinalAnswer()
// {
//     let data=await FetchData();
//     let evendata=await FilterofData(data);
//     let sumdata = await SumUpofData(evendata);
//     console.log(sumdata);
    
// }
// FinalAnswer();


// function fetchData() {
//     return new Promise((resolve,reject) =>
//         setTimeout(() => {
//             const arr = [11, 22, 31, 44, 50];
//             console.log(arr);
//             resolve(arr);
//         }, 2000)
//     );
// }

// function filterData(arr) {
//     return new Promise((resolve,reject) =>
//         setTimeout(() => {
//             const newArr = arr.filter((number) => number % 2 === 0);
//             console.log(newArr);
//             resolve(newArr);
//         }, 2000)
//     );
// }

// function sumUpData(arr) {
//     const sum = arr.reduce((num, number) => num + number);
//     return new Promise((resolve,reject) =>
//         setTimeout(() => {
//             console.log(sum);
//             resolve(sum);
//         }, 2000)
//     );
// }

// async function finalAnswer() {
   
//         const data = await fetchData();
//         const evenData = await filterData(data);
//         const sumData = await sumUpData(evenData);
//         console.log(sumData);
    
// }

// finalAnswer();


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result);
    });