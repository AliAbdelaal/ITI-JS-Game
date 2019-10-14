class Character {
    constructor(gameWidth, gameHeight, srcNormal) {
        this.width;
        this.height = 100;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.position = {
            x: 50,
            y: (gameHeight / 2) - (this.width / 2)
        }
        this.status = "moving";
        this.speed = 0;
        this.gravity = 3;
        this.src = srcNormal;
    }

    draw() {
        this.characterElement = document.getElementById("character");
        this.characterElement.src = this.src;
        this.characterElement.style.position = "fixed";
        this.characterElement.style.left = this.position.x + "px";
        this.characterElement.style.top = this.position.y + "px";
        this.width = this.characterElement.style.width;
        this.position.y = (this.gameHeight / 2) - (this.width / 2);
    }

    goUp() {
        if (this.status !== "stoped") {
            this.speed = -this.gravity;
        }
    }

    goDown() {
        if (this.status !== "stoped") {
            this.speed = this.gravity - 2;
        }
    }

    fallDown() {
        if (this.status !== "stoped") {
            this.speed = this.gravity + 2;
        }
    }

    stop() {
        this.speed = 0;
        this.status = "stoped";
    }

    update() {
        this.position.y += this.speed;
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height;
        }

        this.characterElement.style.top = this.position.y + "px";

    }
}