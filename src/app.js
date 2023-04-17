const express = require('express')
const path = require('path')
const pokedex = require('./utils/pokedex')

const port = 2000;
const app = express()
const viewsPath = path.join(__dirname, '../templates/views')
const publicDirectoryPath = path.join(__dirname, '../public')


// Handlebars'ı kullanmak için motoru kaydedin
app.set('view engine', 'hbs');
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))



app.get('',  (req, res) => {
  res.render('index')

    // data.results.forEach((element) => {
    //     console.log(element)
    //     res.json(element)

    // });
    // console.log(data)
})

app.get('/pokedex', (req, res) => {
  console.log(req.query.name)

  if(!req.query.name) {
    return res.send({
      error: "you must provide a name"
    })
  }

  pokedex(req.query.name, (error, {image} = {}) => {
    if(error) {
      return req.send({error})
    }
    res.send ({
      pokeIMG: image,
      name: req.query.name,
    })
  })

})

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı.`);
});
