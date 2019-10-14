//CREATE THE CHARACTER
var ironManCharacter = new Character(window.innerWidth, window.innerHeight, "assets/Flying_Iron_Man.gif", "assets/Flying_Iron_Man_Up.gif", "assets/Flying_Iron_Man_Down.gif");
ironManCharacter.draw();
new InputHandler(ironManCharacter);
setInterval(updateGameArea, 10);

function updateGameArea() {
    ironManCharacter.update();
}