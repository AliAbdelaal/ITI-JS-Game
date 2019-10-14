class InputHandler {
    constructor(character) {
        document.addEventListener("keydown", function (event) {
            //Space Pressed              Up Arrow Pressed
            if (event.keyCode == 32 || event.keyCode == 38) {
                character.goUp();
            }
            // Down Arrow Pressed
            if (event.keyCode == 40) {
                character.fallDown();
            }

        });
        document.addEventListener("keyup", function (event) {
            //Space Released            Up Arrow Released      Down Arrow Released
            if (event.keyCode == 32 || event.keyCode == 38 || event.keyCode == 40) {
                character.goDown();
            }
        });
    }
}