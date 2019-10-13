class Game {
    constructor(){
        this.score = 0;
        this.mode = 'easy';
        this.curCols = [];
        this.newColId = 1;
        this.col = document.getElementsByClassName('col')[0];
        this.body = document.getElementsByTagName('body')[0];
        this.config = {
            easy:{
                randomHeights : [{
                    heightUpper :"30vh",
                    heightLower :'30vh'
                },
                {
                  heightUpper:'10vh',
                  heightLower:'50vh'
                },
                {
                    heightUpper:'0vh',
                    heightLower:'60vh'
                  },
                  {
                    heightUpper:'60vh',
                    heightLower:'0px'
                  },
                {
                    heightUpper:'50vh',
                    heightLower:'10vh'
                }
                ],
                creationSpeed:5000,
                speed:6
            },
            medium:{
                randomHeights : [{
                    heightUpper :"32.5vh",
                    heightLower :'32.5vh'
                },
                {
                  heightUpper:'10vh',
                  heightLower:'55vh'
                },
                {
                    heightUpper:'0vh',
                    heightLower:'65vh'
                  },
                  {
                    heightUpper:'65vh',
                    heightLower:'0px'
                  },
                {
                    heightUpper:'55vh',
                    heightLower:'10vh'
                }
                ],
                creationSpeed:4000,
                speed:5
            },
            hard:{
                randomHeights : [{
                    heightUpper :"37.5vh",
                    heightLower :'37.5vh'
                },
                {
                  heightUpper:'10vh',
                  heightLower:'65vh'
                },
                {
                    heightUpper:'0vh',
                    heightLower:'75vh'
                  },
                  {
                    heightUpper:'75vh',
                    heightLower:'0px'
                  },
                {
                    heightUpper:'65vh',
                    heightLower:'10vh'
                }
                ],
                creationSpeed:3000,
                speed:3
            }
        };
    }
    
    updatePumps(){
        this.curCols.forEach(x => {
            var col = document.getElementById(x);
            var right = + col.style.right.split('px')[0];
            right = `${right+1}px`;
            col.style.right = right;
        });

        if(this.curCols.length){
            var col = document.getElementById(this.curCols[0]);
            if(+ col.style.right.split('px')[0] > window.innerWidth){
                document.getElementById(this.curCols[0]).remove();
                this.curCols.shift();
            }
        }
    }
    createPumps(){
        const {heightUpper,heightLower} = this.config[this.mode].randomHeights[Math.floor(Math.random()*5)];
        var pump = new Pump(heightUpper,heightLower);
        this.curCols.push(pump.createPump());
    }
    startGame(){
           var menu = document.getElementsByClassName('menu')[0];
           menu.remove();
           setInterval(()=>{
           this.createPumps();
    },this.config[this.mode].creationSpeed);

   
    setInterval(()=>{
       this.updatePumps();
       //this.moveBackgroundImage();
    },this.config[this.mode].speed);

    setInterval(()=>{
     this.moveBackgroundImage();
    },this.config[this.mode].speed-1);
    }
      
        
    changeMode(str){
        if(['easy','medium','hard'].indexOf(str) !== -1){
            this.mode = str;
        }
    }

    moveBackgroundImage(){
        var x = this.body.style.backgroundPositionX;
        x = x.split('px')[0];
        x--;
        var n = window.innerWidth;
        x = ((x%n)+n)%n;
        this.body.style.backgroundPositionX = `${x}px`;
    }
}
