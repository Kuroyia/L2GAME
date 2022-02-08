import {ctx, HEIGHT, WIDTH,skys,AllplatFormes,sky} from '../../../global/lvl2/glb_var.js';
export class Fond{
    constructor(x){
        this.x=x;
        this.y=0;
        this.width = WIDTH;
        this.height = HEIGHT+2;
        skys.push(this);
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(sky,this.x,this.y,this.width,this.height);
    }
}