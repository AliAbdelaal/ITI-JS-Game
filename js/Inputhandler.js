class InputHandler {
    constructor(character) {
        document.addEventListener("keydown", function (event) {
            //Space Pressed              Up Arrow Pressed
            if (event.keyCode == 32||event.keyCode == 38) {
                character.goUp();
            }

        });
        document.addEventListener("keyup", function (event) {
            //Space Released            Up Arrow Released
            if (event.keyCode == 32||event.keyCode == 38) {
                character.goDown();
            }

        });
    }
}