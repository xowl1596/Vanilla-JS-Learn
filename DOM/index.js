//get document object
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    // const currentColor = title.style.color;
    // console.log(currentColor);

    // if(currentColor === BASE_COLOR){
    //     title.style.color = OTHER_COLOR
    // }
    // else{
    //     title.style.color = BASE_COLOR;
    // }

    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }
    // else{
    //     title.classList.remove(CLICKED_CLASS);
    // }

    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();