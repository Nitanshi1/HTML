let select=document.querySelector('select');

let showcontent=function(){
    const val=select.value;
    let image=document.querySelector("#image");
    let para=document.querySelector("#para");
    switch (val) {
        case "1":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="Image16.jpg"
                }
                if(i==2){
                    img.src="Image17.jpg"
                }
                if(i==3){
                    img.src="Image18.jpg"
                }
                if(i==4){
                    img.src="Image19.jpg"
                }
                if(i==5){
                    img.src="Image20.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="Heyya! Myself Nitanshi Agarwal. I am an Enthusiastic Software Developer & an adventurous person."
            document.body.style.backgroundColor="green";
            break;
        case "2":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="Image1.jpg"
                }
                if(i==2){
                    img.src="Image2.jpg"
                }
                if(i==3){
                    img.src="Image3.jpg"
                }
                if(i==4){
                    img.src="Image4.jpg"
                }
                if(i==5){
                    img.src="Image5.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="Meet & Greet--> This is Ankit. Ek dum Genuine banda!";
            document.body.style.backgroundColor="orange";
            break;
        case "3":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="Image11.jpg"
                }
                if(i==2){
                    img.src="Image12.jpg"
                }
                if(i==3){
                    img.src="Image13.jpg"
                }
                if(i==4){
                    img.src="Image14.jpg"
                }
                if(i==5){
                    img.src="Image15.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="Meet Beautiful Disha!. She is my current Googler with its WOW Nature."
            document.body.style.backgroundColor="aliceblue";
            break;
        case "4":
            while (image.firstChild) {
                image.removeChild(image.firstChild);
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                img.setAttribute("class","cimg");
                if(i==1){
                    img.src="Image21.jpg"
                }
                if(i==2){
                    img.src="Image22.jpg"
                }
                if(i==3){
                    img.src="Image23.jpg"
                }
                if(i==4){
                    img.src="Image24.jpg"
                }
                if(i==5){
                    img.src="Image25.jpg"
                }
                
                image.appendChild(img);
            }
            para.innerHTML="Meet the bossy Vansh..who is too jolly."
            document.body.style.backgroundColor="grey";
            break;
        
        default:
            break;
        
    }
}
select.addEventListener('change',showcontent);