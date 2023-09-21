import './style.css'
import App from './app.js'
import Game from './game.js'

const root = document.getElementById('root')

root.innerHTML = new App().render()

{ new Game().start() }