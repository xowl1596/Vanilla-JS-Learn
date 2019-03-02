//get document object
const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);

    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

//change document object's attribute
// title.innerHTML = "Changed!";
// title.style.color = "red";
// document.title = "chnged title";