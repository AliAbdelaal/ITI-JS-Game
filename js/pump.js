class Pump {
    constructor(heightUpper,heightLower){
     this.id = Pump.colId++;
     this.heightUpper = heightUpper;
     this.heightLower = heightLower;
     this.body = document.getElementsByTagName('body')[0];
    }

    createPump(heightUpper,heightLower) {
        var col = document.createElement('div');
        col.setAttribute('class','col');
        col.setAttribute('id',`col${this.id}`);
        col.style.position ='fixed';
        col.style.height = '100%';
        col.style.right = '-200px';
        var topPump = document.createElement('div');
        topPump.setAttribute('class','pumpTop');
        var bottomPart = document.createElement('div');
        bottomPart.setAttribute('class','bottomPart');
        bottomPart.style.height = this.heightUpper;
        var topPart = document.createElement('div');
        topPart.setAttribute('class','topPart');
        topPump.appendChild(bottomPart);
        topPump.appendChild(topPart);
        var bottomPump = document.createElement('div');
        bottomPump.setAttribute('class','pumpBottom');
        bottomPart = document.createElement('div');
        bottomPart.setAttribute('class','bottomPart');
        bottomPart.style.height = this.heightLower;
        topPart = document.createElement('div');
        topPart.setAttribute('class','topPart');
        bottomPump.appendChild(topPart);
        bottomPump.appendChild(bottomPart);
        col.appendChild(topPump);
        col.appendChild(bottomPump);
        this.body.appendChild(col);
        return `col${this.id}`;
    }
}
Pump.colId = 1;