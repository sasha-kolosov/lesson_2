class Game {
    constructor(options) {
        this.fields = document.getElementsByClassName('field')
        this.score = 0
        this.scoreBlock = document.getElementById('score')
    }

    start() {
        for (let i = 0; i < this.fields.length; i++) {
            this.fields[i].addEventListener('click', () => {
                if (this.fields[i].classList.contains('goblin')) {
                    for (let i = 0; i < this.fields.length; i++) {
                        this.fields[i].classList.remove('goblin')
                    } 
                    this.score += 1
                    this.scoreBlock.innerHTML = this.score
                }
            })
        }

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