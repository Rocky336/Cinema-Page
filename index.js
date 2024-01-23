const pages = document.getElementsByClassName("pages-container");
const buttons = document.getElementsByTagName("button");
const data = new Date();
const date = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            for (let i = 0; i < pages.length; i++)
                pages[i].style.display = "none";
            pages.namedItem(buttons[i].innerHTML).style.display = "block";
        });                
    }
    pages.namedItem(date[data.getDay()]).style.display = "block";
});