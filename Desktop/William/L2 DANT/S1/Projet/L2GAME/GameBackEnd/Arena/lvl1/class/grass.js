import {grass,AllplatFormes, ctx} from '../../../global/lvl1/glb_var.js';


export class Grass{
    constructor(x,y,width){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 64;
        this.image = grass;
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}