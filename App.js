// var, let, const
// Guarde los datos en forma de promesa
/* 
Definir el codigo 
*/



const promises = [];

for (let i = 1; i <= 151; i++){

    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(url)
        .then(res => res.json())
        .then(pokemon =>
                console.log("Nombre: "+pokemon.forms[0].name));
}