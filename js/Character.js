class Character {
    constructor(gameWidth, gameHeight, srcNormal, srcUp, srcDown) {
        this.width = 100;
        this.height = 100;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.position = {
            x: 50,
            y: (gameHeight / 2) - (this.width / 2)
        }
        this.speed = 0;
        this.gravity = 3;
        this.src = srcNormal;
        this.srcNormal = srcNormal;
        this.srcUp = srcUp;
        this.srcDown = srcDown;
    }

    draw() {
        this.character = document.getElementById("character");
        character.src = this.srcNormal;
        character.style.position = "fixed";
        character.style.left = this.position.x + "px";
        character.style.top = this.position.y + "px";
    }

    goUp() {
        this.speed = -this.gravity;
        this.src = this.srcUp;
    }

    goDown() {
        this.speed = this.gravity;
        this.src = this.srcDown;
    }

    update() {
        this.position.y += this.speed;
        if (this.position.y < 0) {
            this.position.y = 0;
            this.src = this.srcNormal;
        }
        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height;
            this.src = this.srcNormal;
        }

        character.style.top = this.position.y + "px";
        if (!this.character.src.includes(this.src)) {
            character.src = this.src;
        }
    }
}