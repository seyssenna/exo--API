const url = "https://places-dsn.algolia.net/1/places/query";

const placeList = document.querySelector("#place");
console.log(placeList)

const keyword = document.querySelector("#keyword");
keyword.addEventListener("keyup", (event) => {
    event.preventDefault();
    console.log(keyword.value)

    fetch(url, {
        method: "POST",
        body: JSON.stringify({query: keyword.value})
    })
    .then(response => response.json())
    .then((data) => {
        //vide la UL avant d'afficher la nouvelle proposition 
        placeList.innerHTML = "";
        // boucle sur les resultats
        data.hits.forEach(element => {
            // affiche
            placeList.insertAdjacentHTML("beforeend", `
                <li>
                    ${element.locale_names.default}
                </li>`)
        });
    })
    .catch((err) => {
        console.log(err);
    })


})


