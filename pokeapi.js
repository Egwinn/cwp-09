const Promise = require('bluebird');
const axios = require('axios');

// task01 - 1
axios.get('https://pokeapi.co/api/v2/pokemon/42/')
    .then((response) => {
        console.log('======= task01 - 1 =======');
        console.log(`name: ${response.data.name},\nweight: ${response.data.weight},\nheight: ${response.data.height}`)
    })

// task01 - 2 
let requests = [];
for(let i = 0; i < 3; i++) {
    requests.push(axios.get('http://pokeapi.co/api/v2/pokemon/?limit=10'));
}
Promise.all(requests)
    .then((results) => {
        console.log('======= task01 - 2 =======');
        results.forEach((value, index) => {
            value.data.results.forEach((pokemon, pokeInd) => {
                console.log(`${index}${pokeInd} - ${pokemon.name}`)
            })
            console.log('---------------\n');
        })
    })
    .catch((err) => {
        console.error(err);
    })

// task01 - 3
Promise.any([
    axios.get('https://pokeapi.co/api/v2/pokemon/1/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/4/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/7/')    
]).then((value) => {
    console.log('======= task01 - 3 =======');
    console.log(value.data.name);
}).catch((error) => {
    console.error(error);
})