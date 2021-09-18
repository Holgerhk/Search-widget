const input = document.querySelector(".input");
const img = document.querySelector(".img");

img.addEventListener("click", () => {
    if (input.classList.contains("inputBig") && img.classList.contains("imgBig")) {
        input.classList.add("inputSmall");
        img.classList.add("imgSmall");

        input.classList.remove("inputBig");
        img.classList.remove("imgBig");
    } else {
        input.classList.add("inputBig");
        img.classList.add("imgBig");
        input.focus();

        input.classList.remove("inputSmall");
        img.classList.remove("imgSmall");
    }
});