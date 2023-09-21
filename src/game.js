class Game {
    constructor(options) {
        this.fields = document.getElementsByClassName('field')
    }

    start() {
        setInterval(() => {
            this.random()
        }, 2000)
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    random() {
        let random = this.getRandomInt(16)
        if (this.fields[random].classList.contains('goblin') != true) {
            for (let i = 0; i < this.fields.length; i++) {
                this.fields[i].classList.remove('goblin')
            } 
            this.fields[random].classList.add('goblin')
        } else {
            this.random()
        }
    }
}

export default Game