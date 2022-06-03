import {ctx, HEIGHT, WIDTH,skys,AllplatFormes,sky} from '../../../global/lvl1/glb_var.js';
export class Fond{
    constructor(x){
        this.x=x;
        this.y=0;
        this.width = WIDTH;
        this.height = HEIGHT+2;
        this.image = sky;
        skys.push(this);
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}