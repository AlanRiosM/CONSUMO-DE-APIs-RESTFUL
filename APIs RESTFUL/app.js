const consultarPersonajes = (id, number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            pintarPokemon(data, number);
        })
        .catch(error => {
            console.log(error);
        });
};

const btnSeleccionar = () => {
    let primerPersonaje = Math.round(Math.random() * 826);
    let segundoPersonaje = Math.round(Math.random() * 826);
    consultarPersonajes(primerPersonaje,1);
    consultarPersonajes(segundoPersonaje,2);
}

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.image);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}