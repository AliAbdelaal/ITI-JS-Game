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
        this.status = "moving";
        this.speed = 0;
        this.gravity = 3;
        this.src = srcNormal;
        this.srcNormal = srcNormal;
        this.srcUp = srcUp;
        this.srcDown = srcDown;
    }

    draw() {
        this.characterElement = document.getElementById("character");
        this.characterElement.src = this.srcNormal;
        this.characterElement.style.position = "fixed";
        this.characterElement.style.left = this.position.x + "px";
        this.characterElement.style.top = this.position.y + "px";
    }

    goUp() {
        if (this.status !== "stoped") {
            this.speed = -this.gravity;
            this.src = this.srcUp;
        }
    }

    goDown() {
        if (this.status !== "stoped") {
            this.speed = this.gravity;
            this.src = this.srcDown;
        }
    }

    stop() {
        this.speed = 0;
        this.src = this.srcNormal;
        this.status = "stoped";
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

        this.characterElement.style.top = this.position.y + "px";
        if (!this.characterElement.src.includes(this.src)) {
            this.characterElement.src = this.src;
        }
    }
}