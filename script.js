function start() {
    let nav = `<ul>`

    resources.map(element => nav += `<li id="${element.category}" onClick="navClick('${element.category}')">${element.category}</li>`) 

    nav += `</ul>`

    document.getElementById("nav").innerHTML = nav
}

//start() function navClick() starts on auto and it runs start(), so no need for start() before it anymore

navClick("HTML")

function navClick(clicked) {
    start()

    let content = ""
    let filteredCat = resources.filter(filter => filter.category === clicked)


    filteredCat.map(e => {
        content += `<article><h1>${e.category}</h1><p>${e.text}</p><ul>`

        let open = document.getElementById(`${e.category}`)
        open.classList.toggle("clicked")

        e.sources.map(link => content += `<li><a class="title" href="${link.url}">${link.title}</a></li>`)

        content += `</ul></article>`
    })
    document.getElementById("content").innerHTML = content
}
