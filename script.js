//Funksjon for å bygge nav-strukturen ved bruk av ressurser.js.
function start() {
    let nav = `<ul>`

    resources.map(element => {
        //Bruker split for ID, så det inneholder ingen mellomrom(HTML validator viste det som en rød feil). Kilde: https://bobbyhadz.com/blog/javascript-get-first-word-of-string
        const split = `${element.category}`.split(' ')[0]
        nav += `<li id="${split}" onClick="navClick('${element.category}')">${element.category}</li>`
    }) 

    nav += `</ul>`

    document.getElementById("nav").innerHTML = nav
}

//start() Kommentert ut pga. funksjon navClick() som starter med en gang og kjører start() inni seg; 
//start() kjører inni navClick() fordi det tømmes "clicked" klasse(som bytter farger til elementet) på nav-elementer da(bygger nav på nytt).

//Kaller funksjonen med "HTML" for å starte nettsiden med noen innhold.
navClick("HTML") 

//Funksjon som bygger hovedinnhold ved bruk av ressurser.js.
function navClick(clicked) {
    start()

    let content = ""
    //Filter array for å ha bare trykket på nav-elementet innhold på.
    let filteredCat = resources.filter(filter => filter.category === clicked) 

    //"Mappe" trykket objektet fra array for å sende ting til riktig HTML struktur.
    filteredCat.map(e => {
        content += `<article><h1>${e.category}</h1><p>${e.text}</p><ul>`

        //Split igjen for å finne riktig ID.
        const split2 = `${e.category}`.split(' ')[0]
        //La til "clicked" klasse for trykket elements nav. 
        let open = document.getElementById(`${split2}`)
        open.classList.toggle("clicked")

        e.sources.map(link => content += `<li><a class="title" href="${link.url}">${link.title}</a></li>`)

        content += `</ul></article>`
    })
    document.getElementById("content").innerHTML = content
}
