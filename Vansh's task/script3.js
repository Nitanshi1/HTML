//Method3--> Promise
let pro= new Promise((resolve,reject)=>{
    console.log("Step 1:Fetching the data!!!!!!!");
    let data=[
    {first_name:'Nitanshi',last_name:'Agarwal',projects:['p1','p2','p3','p4'],roll_no:10},
    {first_name:'Disha',last_name:'Sachdeva',projects:['p1','p2','p3','p4'],roll_no:20},
    {first_name:'Ankit',last_name:'Kumar',projects:['p1','p2','p3','p4'],roll_no:30},
    {first_name:'Vansh',last_name:'Misra',projects:['p1','p2','p3','p4'],roll_no:40}
  ]
    setTimeout(()=>{
      resolve(data);
    },3000)
})
const abc=(data)=>{
  for(let i=0;i<data.length;i++){
      console.log(data[i]);
  }
return new Promise((resolve,reject)=>{
    console.log("Getting the default index data-->");
    setTimeout(()=>{
       resolve(data[3]);
    },1000)
})
}
const def=(abcdata)=>{
  console.log(`Printing data of a particular member..-->${abcdata.first_name} ${abcdata.last_name} ${abcdata.projects} ${abcdata.roll_no}`);
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      
       resolve(abcdata.projects.length);
     },2000)
 })
}
const ghi=(projects)=>{
  console.log("No of projects are..-->"+projects);
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(projects*100);
      },1000)
  })
}
const jkl=(count)=>{
  console.log("Final counted  value..-->"+count);
}
pro.then(abc).then(def).then(ghi).then(jkl);