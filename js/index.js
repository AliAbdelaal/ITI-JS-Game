
var ironManCharacterAsset = "assets/iron_man.gif";
var thorCharacterAsset = "assets/thor.gif";

var character = new Character(window.innerWidth, window.innerHeight, ironManCharacterAsset);

new InputHandler(character);

var game = new Game(config,character);

function displayHelp(){
    var p = document.getElementsByClassName('help')[0];
    p.removeAttribute('hidden');
}

function  displayMode(){
    var btn = document.getElementById('mode');
    var easy = document.createElement('button');
    easy.innerText='Easy';
    easy.setAttribute('onClick',"game.changeMode('easy')");
    var medium = document.createElement('button');
    medium.innerText='Medium';
    medium.setAttribute('onClick',"game.changeMode('medium')");
    var hard = document.createElement('button');
    hard.innerText ='Hard';
    hard.setAttribute('onClick',"game.changeMode('hard')");
    btn.replaceWith(easy,medium,hard);
}


