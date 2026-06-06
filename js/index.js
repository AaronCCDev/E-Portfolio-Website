document.addEventListener("DOMContentLoaded", () => {

    const orangeText = document.querySelector(".orange-text");

    if(!orangeText) return;

    const name = "Aaron Cairns";

    orangeText.innerHTML = "";

    [...name].forEach((letter, index) => {

        const span = document.createElement("span");

        span.innerHTML =
            letter === " "
            ? "&nbsp;"
            : letter;

        span.style.opacity = "0";

        span.style.animation =
            `revealLetter .6s ease forwards ${0.5 + index * 0.08}s`;

        orangeText.appendChild(span);
    });

});