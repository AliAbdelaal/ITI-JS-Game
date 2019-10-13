var game = new Game(config);

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

// // collision detection function  
//  function isOverlapping(e1, e2){
//     if( e1.length && e1.length > 1 ){
//       e1 = e1[0];
//     }
//     if( e2.length && e2.length > 1 ){
//       e2 = e2[0];
//     }
//     var rect1 = e1 instanceof Element ? e1.getBoundingClientRect() : false;
//     var rect2 = e2 instanceof Element ? e2.getBoundingClientRect() : false;

//     var overlap = null;

//     if( rect1 && rect2 ){
//       overlap = !(
//           rect1.right < rect2.left || 
//           rect1.left > rect2.right || 
//           rect1.bottom < rect2.top || 
//           rect1.top > rect2.bottom
//         )
//     } 
//         return overlap;  
//   }
