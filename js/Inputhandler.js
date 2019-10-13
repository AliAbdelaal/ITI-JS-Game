class InputHandler {
    constructor(character) {
        document.addEventListener("keydown", function (event) {
            //spacePressed
            if (event.keyCode == 32||event.keyCode == 38) {
                character.goUp();
            }

        });
        document.addEventListener("keyup", function (event) {
            //spacePressed
            if (event.keyCode == 32||event.keyCode == 38) {
                character.goDown();
            }

        });
    }
}