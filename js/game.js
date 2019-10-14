class Game {

    constructor(config, character) {
        this.score = 0;
        this.mode = 'easy';
        this.curCols = [];
        this.newColId = 1;
        this.col = document.getElementsByClassName('col')[0];
        this.body = document.getElementsByTagName('body')[0];
        this.config = config;
        this.character = character;
        this.character.draw();
    }

    updatePumps() {
        this.curCols.forEach(x => {
            var col = document.getElementById(x);
            var right = +col.style.right.split('px')[0];
            right = `${right+1}px`;
            col.style.right = right;
        });

        if (this.curCols.length) {
            var col = document.getElementById(this.curCols[0]);
            if (+col.style.right.split('px')[0] > window.innerWidth) {
                document.getElementById(this.curCols[0]).remove();
                this.curCols.shift();
            }
        }
    }
    createPumps() {
        const {
            heightUpper,
            heightLower
        } = this.config[this.mode].randomHeights[Math.floor(Math.random() * 5)];
        var pump = new Pump(heightUpper, heightLower);
        this.curCols.push(pump.createPump());
    }
    startGame() {
        this.character.characterElement.style.display = 'initial';
        setInterval(() => {
            this.createPumps();
        }, this.config[this.mode].creationSpeed);


        this.tmp = setInterval(() => {
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpTop')[0].getElementsByClassName('bottomPart')[0]);
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpTop')[0].getElementsByClassName('topPart')[0]);
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpBottom')[0].getElementsByClassName('bottomPart')[0]);
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpBottom')[0].getElementsByClassName('topPart')[0]);
            this.updatePumps();
            //this.moveBackgroundImage();
        }, this.config[this.mode].speed);

        setInterval(() => {
            this.character.update();
        }, 10);

        setInterval(() => {
            this.moveBackgroundImage();
        }, this.config[this.mode].speed - 1);
    }

    changeMode(str) {
        if (['easy', 'medium', 'hard'].indexOf(str) !== -1) {
            this.mode = str;
        }
    }

    moveBackgroundImage() {
        var x = this.body.style.backgroundPositionX;
        x = x.split('px')[0];
        x--;
        var n = window.innerWidth;
        x = ((x % n) + n) % n;
        this.body.style.backgroundPositionX = `${x}px`;
    }
    // collision detection function  
    isOverlapping(character, pump) {
        if (!character || !pump)
            return;
        if (character.length && character.length > 1) {
            character = character[0];
        }
        if (pump.length && pump.length > 1) {
            pump = pump[0];
        }
        var rect1 = character instanceof Element ? character.getBoundingClientRect() : false;
        var rect2 = pump instanceof Element ? pump.getBoundingClientRect() : false;

        var overlap = null;

        if (rect1 && rect2) {
            overlap = !(
                rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom
            )
        }
        if (overlap) {
            this.character.stop();
            clearInterval(this.tmp);
        }
        return overlap;
    }
}