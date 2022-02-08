import { AllplatFormes,levierdesac,ctx } from '../../../global/lvl4/glb_var.js';
export class Levier{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = levierdesac;
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}