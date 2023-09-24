class Game {
    constructor(options) {
        this.fields = document.querySelectorAll('.field')
        this.score = 0
        this.time = 1000
        this.noClicks = 0
        this.clicks = 0
        this.scoreBlock = document.getElementById('score')
    }

    start() {
        setInterval(() => {
            let game = true 
            this.random()
            for (let i = 0; i < this.fields.length; i++) {
                this.fields[i].addEventListener('click', () => {
                    if (this.fields[i].classList.contains('goblin')) {
                        for (let i = 0; i < this.fields.length; i++) {
                            this.fields[i].classList.remove('goblin')
                        } 
                        this.score += 1
                        this.scoreBlock.innerHTML = this.score
                        this.clicks += 1
                        game = false
                    }
                })
            }
            if (game == true){ 
                this.noClicks += 1
                if (this.noClicks == 5) {
                    window.alert('Game over!')
                    window.location.reload()
                }
            }
        }, this.time)
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