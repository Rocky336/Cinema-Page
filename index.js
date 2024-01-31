const pages = document.getElementsByClassName("pages-container");
const buttons = document.getElementsByTagName("button");
const data = new Date();
const oggi = ((data.getDay() + 6) % 7)

async function setMovies() {
    const response  =    await fetch('https://www.sammasensei.it/scuola/movies/get-movies.php');
    const dati      =    await response.json();
    for(let i = 0;i<dati.length;i++){
        const page = document.createElement("div");
        page.className = "page";
        page.innerHTML = '<div><img src="'+dati[i].poster_url+'"><div>' +
        '<strong>'      +dati[i].title  +'</strong>'+
        '<span>Cast: '  +dati[i].cast   +'</span>'+
        '<span>Trama: ' +dati[i].plot   +'</span></div></div>'+
        '<span>'        +dati[i].showtimes+'</span>'
        for(let j = 1;j<4;j++){
            const clone = page.cloneNode(true);
            pages.namedItem(j).appendChild(clone);
            clone.firstChild.firstChild.addEventListener("click",()=>{
                document.getElementById("imgprev").style.display = "block";
                document.getElementById("imgprev").firstChild.src = dati[i].poster_url;
            })
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let giorni = new Date();
    giorni.setDate(data.getDate() - oggi);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML+=" " + giorni.getDate()+"/"+(giorni.getMonth()+1);
        giorni.setDate(giorni.getDate()+1);
        buttons[i].addEventListener("click", () => {
            for (let i = 0; i < pages.length; i++)
                pages[i].style.display = "none";
            pages.namedItem(i).style.display = "block";
        });
    }
    setMovies();
    pages.namedItem(oggi).style.display = "block";
});