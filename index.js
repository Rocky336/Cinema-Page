const pages = document.getElementsByClassName("pages-container");
const buttons = document.getElementsByTagName("button");
const data = new Date();

async function setMovies() {
    const response = await fetch('./data.json');
    const dati = await response.json();
    for(let key in dati){
        for(let k = 0;k<dati[key].length;k++){
            pages.namedItem(key).innerHTML +='<div class="page">' +
            '<div><img src="https://picsum.photos/30'+(Number(key)+k)+'"><div>' +
            '<strong>'+dati[key][k].title+'</strong>'+
            '<span>Autore: '+dati[key][k].author+'</span>'+
            '<span>Trama: '+dati[key][k].plot+'</span></div></div>'+
            '<span>'+dati[key][k].timing+'</span></div>'
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            for (let i = 0; i < pages.length; i++)
                pages[i].style.display = "none";
            pages.namedItem(i).style.display = "block";
        });
    }
    setMovies();
    pages.namedItem(((data.getDay() + 6) % 7)).style.display = "block";
});