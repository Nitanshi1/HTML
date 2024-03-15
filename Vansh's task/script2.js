// Method2: CallBacks

const abc=(def)=>{
    console.log("Step 1:Fetching the data!!!!!!!");
    let data=[
    {first_name:'Nitanshi',last_name:'Agarwal',projects:['p1','p2','p3','p4'],roll_no:10},
    {first_name:'Disha',last_name:'Sachdeva',projects:['p1','p2','p3','p4'],roll_no:20},
    {first_name:'Ankit',last_name:'Kumar',projects:['p1','p2','p3','p4'],roll_no:30},
    {first_name:'Vansh',last_name:'Misra',projects:['p1','p2','p3','p4'],roll_no:40}
  
  ]
  setTimeout(()=>{
    console.log("Printing the details..!")
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
    }
    def(data[1],ghi);
  },3000)
}
const def=(data,ghi)=>{
   
   setTimeout(()=>{
    console.log(`Printing user1 detail..--> ${data.first_name} ${data.last_name} ${data.projects} ${data.roll_no}`);
    ghi(data.projects,jkl);
   },2000)
}
const ghi=(data,jkl)=>{
    setTimeout(()=>{
     console.log(`No of projects are: ${data.length}`);
     jkl(data.length);
    },2000)
}
const jkl=(nums)=>{
    console.log(`Multiply the projects by 100-> ${nums*100}`);
}
abc(def);