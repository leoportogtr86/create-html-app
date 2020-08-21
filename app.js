const fs = require('fs')
const js = './js'
const css = './css'
const assets = './assets'
const img = './assets/img'
const audio = './assets/audio'

fs.mkdirSync(js)
fs.mkdirSync(css)
fs.mkdirSync(assets)
fs.mkdirSync(img)
fs.mkdirSync(audio)

fs.writeFile('./index.html', `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="./js/script.js"></script>
  </body>
</html>`, (err)=>{

    if (err){

        console.log(err)
    } else {

        console.log('index.html criado')
    }


})

fs.writeFile('./js/script.js', 'console.log("hello world") ', (err)=>{

    if (err){

        console.log(err)
    } else {

        console.log('script.js criado')
    }


})


fs.writeFile('./css/style.css', ' ', (err)=>{

    if (err){

        console.log(err)
    } else {

        console.log('style.css criado')
    }


})