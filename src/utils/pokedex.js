const request = require('request')

const pokedex = (name, callback) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('unable to connect' + error,undefined)
        } else {
            callback(undefined, {
                image: body.sprites.other.home.front_default                
            })
        }
    })
}

module.exports = pokedex