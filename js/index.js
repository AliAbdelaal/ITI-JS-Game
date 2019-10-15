var ironManCharacterAsset = "assets/iron_man.gif";
var thorCharacterAsset = "assets/thor.gif";
var levelMode = 'easy';




var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}



function displayHelp() {
    var p = document.getElementsByClassName('help')[0];
    if (p.hasAttribute('hidden'))
        p.removeAttribute('hidden');
    else
        p.setAttribute('hidden', '');
}

function displayMode() {
    var btn = document.getElementById('mode');
    var easy = document.createElement('button');
    easy.innerText = 'Easy';
    easy.setAttribute('onClick', "levelMode = 'easy'");
    var medium = document.createElement('button');
    medium.innerText = 'Medium';
    medium.setAttribute('onClick', "levelMode = 'medium'");
    var hard = document.createElement('button');
    hard.innerText = 'Hard';
    hard.setAttribute('onClick', "levelMode = 'hard'");
    var insane = document.createElement('button');
    insane.innerText = 'Insane';
    insane.setAttribute('onClick', "levelMode = 'insane'");
    btn.replaceWith(easy, medium, hard,insane);
}



function dispalyChooseCharacter() {
    openFullscreen();
    var menu = document.getElementsByClassName('menu')[0];
    menu.remove();

    var chooseCharacter = document.getElementById("charactersMenu");
    chooseCharacter.setAttribute("style", "display:block");

}

function chooseCharacter(characterName) {
    var chooseCharacter = document.getElementById("charactersMenu");
    chooseCharacter.remove();
    var characterAsset = ironManCharacterAsset;
    if (characterName === "Thor")
        characterAsset = thorCharacterAsset;

    var backgroundAudio = document.getElementById('backgroundAudio');
    backgroundAudio.setAttribute('src', 'assets/game audio.mp3');
    backgroundAudio.setAttribute('autoplay', '');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var character = new Character(windowWidth, windowHeight, characterAsset);
    new InputHandler(character);
    var game = new Game(config, character);
    game.changeMode(levelMode);

    game.startGame();
}