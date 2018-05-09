class Bullet{
    constructor(X,Y, ctxB, velocity, src ,type) {
        this.X = X;
        this.Y = Y;
        this.ctxB = ctxB;
        this.velocityV = velocity;
        this.sprite = new Image();
        this.sprite.src = src;
        this.type = type;
    }
    moveBullet() {
        //console.log(this.velocityV[0]);
        this.X += this.velocityV[0];
        this.Y += this.velocityV[1]; 
    }
    drawBullet() {
        if(this.type == false){
            ctx.drawImage(this.sprite,3,120,20,20,this.X,this.Y,13,13);
        }
        else{
            ctx.drawImage(this.sprite,169,113,20,20,this.X,this.Y,13,13);
        
        }
        
    }
    
}