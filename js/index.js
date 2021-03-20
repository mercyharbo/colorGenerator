let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector(".change");
let css = document.querySelector("h4");

function changeGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);