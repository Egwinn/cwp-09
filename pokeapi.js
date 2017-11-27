const Promise = require('bluebird');
const axios = require('axios');

// task01 - 1
console.log('======= task01 - 1 =======')
axios.get('https://pokeapi.co/api/v2/pokemon/42/')
    .then(response => {
        console.log(`name: ${response.data.name},\nweight: ${response.data.weight},\nheight: ${response.data.height}`)
    })

// task01 - 2 