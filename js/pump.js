class Pump {
    constructor(heightUpper, heightLower) {
        this.direction = 0.2;
        this.id = `col${Pump.colId++}`;
        this.heightUpper = heightUpper;
        this.heightLower = heightLower;
        this.body = document.getElementsByTagName('body')[0];
    }

    createPump() {
        var col = document.createElement('div');
        col.style.zIndex = 1;
        col.setAttribute('class', 'col');
        col.setAttribute('id', `${this.id}`);
        col.style.position = 'fixed';
        col.style.height = '100%';
        col.style.right = '-200px';

        var topPump = this.createTopPump();

        var bottomPump = this.createBottomPump();

        col.appendChild(topPump);
        col.appendChild(bottomPump);
        this.body.appendChild(col);
        return this;
    }

    createTopPump() {
        var topPump = document.createElement('div');
        topPump.setAttribute('class', 'pumpTop');
        var bottomPart = document.createElement('div');
        bottomPart.setAttribute('class', 'bottomPart');
        bottomPart.style.position = 'relative';
        var img = document.createElement("img");
        img.setAttribute('src', 'assets/Avengers Logo.gif');
        img.setAttribute('width', '45px');
        img.style.position = 'absolute';
        img.style.left = '10px';
        img.style.bottom = '15px';
        bottomPart.appendChild(img);
        bottomPart.style.height = this.heightUpper;
        var topPart = document.createElement('div');
        topPart.setAttribute('class', 'topPart');
        topPump.appendChild(bottomPart);
        topPump.appendChild(topPart);

        return topPump;
    }

    createBottomPump() {
        var bottomPump = document.createElement('div');
        bottomPump.setAttribute('class', 'pumpBottom');
        var bottomPart = document.createElement('div');
        bottomPart.setAttribute('class', 'bottomPart');
        bottomPart.style.position = 'relative';
        bottomPart.style.height = this.heightLower;
        var img = document.createElement("img");
        img.setAttribute('src', 'assets/Avengers Logo.gif');
        img.setAttribute('width', '45px');
        img.style.position = 'absolute';
        img.style.right = '10px';
        img.style.top = '15px';
        bottomPart.appendChild(img);
        var topPart = document.createElement('div');
        topPart.setAttribute('class', 'topPart');
        bottomPump.appendChild(topPart);
        bottomPump.appendChild(bottomPart);

        return bottomPump;
    }


}
Pump.colId = 1;