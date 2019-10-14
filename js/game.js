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
        if (!this.curCols)
            return;
        this.curCols.forEach(x => {
            var col = document.getElementById(x);
            var right = +col.style.right.split('px')[0];
            right = `${right+2}px`;
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


        var characterLogo = document.getElementById('characterLogo');
        var overlayLogo = document.getElementById('overlayLogo');
        if (this.character.src === "assets/thor.gif")
        {
            characterLogo.setAttribute("src","assets/Thor logo.gif");
        }
        overlayLogo.style.display = "block";
        setTimeout(function(){overlayLogo.style.display = "none";},4000);
        

        this.scoreParagraph = document.createElement('p');
        this.scoreParagraph.setAttribute('id', 'score');
        this.scoreParagraph.style.zIndex = 2;
        this.scoreParagraph.style.fontFamily = 'game';
        this.scoreParagraph.style.fontSize = '30px';
        this.scoreParagraph.style.color = 'white';
        this.scoreParagraph.style.position = 'absolute';
        this.scoreParagraph.style.left = '20px';
        this.scoreParagraph.style.top = '15px';
        this.scoreParagraph.textContent = this.score;

        this.modeParagraph = document.createElement('p');
        this.modeParagraph.style.zIndex = 2;
        this.modeParagraph.style.fontFamily = 'game';
        this.modeParagraph.style.fontSize = '30px';
        this.modeParagraph.style.color = 'white';
        this.modeParagraph.style.position = 'absolute';
        this.modeParagraph.style.left = '20px';
        this.modeParagraph.style.top = '40px';
        this.modeParagraph.textContent = this.mode;

        this.body.appendChild(this.scoreParagraph);
        this.body.appendChild(this.modeParagraph);
        this.character.characterElement.style.display = 'initial';

        this.pumpCreation = setInterval(() => {
            this.createPumps();
        }, this.config[this.mode].creationSpeed);


        this.pumpUpdate = setInterval(() => {
            if (!this.character.characterElement || !this.curCols)
                return;
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpTop')[0].getElementsByClassName('bottomPart')[0]);
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpTop')[0].getElementsByClassName('topPart')[0]);
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpBottom')[0].getElementsByClassName('bottomPart')[0]);
            this.isOverlapping(this.character.characterElement, document.getElementById(this.curCols[0]).getElementsByClassName('pumpBottom')[0].getElementsByClassName('topPart')[0]);
            this.updatePumps();
            this.score++;
            this.displayscore();
            //this.moveBackgroundImage();
        }, this.config[this.mode].speed);

        this.characterUpdate = setInterval(() => {
            this.character.update();
        }, 10);

        this.backgroundMove = setInterval(() => {
            this.moveBackgroundImage();
        }, this.config[this.mode].speed - 1);
    }
    displayscore() {
        this.scoreParagraph.textContent = this.score;
    }
    changeMode(str) {
        if (['easy', 'medium', 'hard'].indexOf(str) !== -1) {
            this.mode = str;
        } else {
            this.mode = 'easy';
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
            this.ClearIntervals();
            this.gameOver();
        }
        return overlap;
    }

    ClearIntervals() {
        clearInterval(this.pumpUpdate);
        clearInterval(this.characterUpdate);
        clearInterval(this.pumpCreation);
        clearInterval(this.backgroundMove);
    }

    gameOver() {
        
        this.body.innerHTML = '';
        this.body.style.display = 'flex';
        this.body.style.flexDirection = 'column';
        this.body.style.justifyContent = 'space-evenly';
        this.body.style.alignItems = 'center';
        this.body.style.justifyContent = 'center';
        var p = document.createElement('p');
        p.textContent = 'Game Over';
        p.style.fontFamily = 'game';
        p.style.fontSize = "150px";
        this.body.appendChild(p);
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/Thanos hand.gif');
        this.body.appendChild(img);
        p = document.createElement('p');
        p.style.fontFamily = 'game';
        p.style.fontSize = '100px';
        p.style.color = 'white';
        p.textContent = `score : ${this.score}`;
        this.body.appendChild(p);
        var backgroundAudio = document.createElement('audio');
        backgroundAudio.setAttribute('hidden','');
        backgroundAudio.setAttribute('src', 'assets/gameover.mp3');
        backgroundAudio.setAttribute('autoplay', '');
        this.body.appendChild(backgroundAudio);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }
}