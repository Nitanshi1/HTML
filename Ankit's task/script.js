let select = document.querySelector("select");
let showcontent = function () {
    const val = select.value;
    let image = document.querySelector("#image");
    let img = document.createElement('img');
    let para = document.querySelector("#para");
    switch (val) {

        case "1":
            while (images.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "Image5.jpg"
            image.appendChild(img);
            para.innerHTML = "Contact Us";
            para.innerHTML = "<a href='https://github.com/Akki0706'> Github </a>  <a href='https://github.com/Akki0706'>Linkedin</a>";
            document.body.body.backgroundColor = "Aliceblue";
            break;

        case "2":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "Image12.jpg"
            image.appendChild(img);
            para.innerHTML = "Conatct Us";
            para.innerHTML = " <a  href='https://github.com/vansh8299'> Github </a>  <a href=''>Linkedin</a>"; 
            document.body.style.backgroundColor = "Lightgreen";
            break;

        case "3":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "Image21.jpg"
            image.appendChild(img);
            para.innerHTML = "Conatct US";
            para.innerHTML = " <a href='https://github.com/DishaSachdeva-02'> Github </a>  <a href='https://www.linkedin.com/in/disha-sachdeva-740122249'>Linkedin</a>"; 
            document.body.style.backgroundColor = "LightPink";
            break;

        case "4":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "Image20.jpg"
            image.appendChild(img);
            para.innerHTML = "Conatct Us";
            para.innerHTML = " <a  href='https://github.com/Nitanshi1'> Github </a>  <a href='https://www.linkedin.com/in/nitanshi-agarwal-023989221'>Linkedin</a>";
             document.body.style.backgroundColor = "LightPurple";
            break;
        default:
            break;
    }
}
select.addEventListener('change', showcontent);
image.addEventListener('click', function () {
    let val = select.value;
    let backgroundColor = "";
    switch (val) {
        case "1":
            backgroundColor = "Skyblue";
            break;
        case "2":
            backgroundColor = "Orange";
            break;
        case "3":
            backgroundColor = "Offwhite";
            break;
        case "4":
            backgroundColor = "yellow";
            break;
        default:
            break;
    }

    document.body.style.backgroundColor = backgroundColor;
});
image.addEventListener('click', function () {
    let val = select.value;
    let message = "";
    switch (val) {
        case "1":
            message = "Meet and Greet the Ankit ";
            break;
        case "2":
            message = "Jeeyan of the Angular Team";
            break;
        case "3":
            message = "Just Looking like a wow! Doraemon";
            break;
        case "4":
            message = "Its me!";
            break;
        default:
            message = "No image selected!";
            break;
    }
    alert(message);
});


