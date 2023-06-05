// DEMO JOKE APP
import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'
import f1 from './assets/f1.jpeg'

console.log(f1, "image")
const im = document.getElementById('f1')
im.src = f1
const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

generateJoke()
