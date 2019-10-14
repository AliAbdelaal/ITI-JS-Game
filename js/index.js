
var ironManCharacterAsset = "assets/iron_man.gif";
var thorCharacterAsset = "assets/thor.gif";
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;





function displayHelp(){
    var p = document.getElementsByClassName('help')[0];
    if(p.hasAttribute('hidden'))
        p.removeAttribute('hidden');
    else
        p.setAttribute('hidden','');
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

function dispalyChooseCharacter()
{
    var menu = document.getElementsByClassName('menu')[0];
    menu.remove();

    var chooseCharacter = document.getElementById("charactersMenu");
    chooseCharacter.setAttribute("style","display:block");

}

function chooseCharacter(characterName)
{
    var chooseCharacter = document.getElementById("charactersMenu");
    chooseCharacter.remove();
    var characterAsset = ironManCharacterAsset;
    if(characterName === "Thor")
        characterAsset = thorCharacterAsset;


    var backgroundAudio = document.getElementById('backgroundAudio');
    backgroundAudio.setAttribute('src','assets/game audio.mp3');
    backgroundAudio.setAttribute('autoplay','');
    var character = new Character(windowWidth,windowHeight, characterAsset);
    new InputHandler(character);
    var game = new Game(config,character);
    game.startGame();
}


