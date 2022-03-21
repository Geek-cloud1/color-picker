var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);

function colorPicker() {
    body.style.background = "linear-gradient(to right ," 
    + color1.value 
    + ", "
    + color2.value 
    +")";
    
    css.innerHTML = body.style.background;
}

color1.addEventListener("input", function() {
    colorPicker();
})
color2.addEventListener("input", function() {
    colorPicker();
})
