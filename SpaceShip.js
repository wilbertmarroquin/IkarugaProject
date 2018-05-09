class SpaceShip {
	constructor(state , ctp, px, py , src){
		this.state = 0;
		this.ctp = ctp;
        this.paddleX = px;
        this.paddleY = py;
        this.sprite = new Image();
        this.sprite.src = src;
        this.shield = false;
        this.shield_image = new Image();
        this.life = 3;
	}
	drawSpaceShip() {
		this.ctp.drawImage(this.sprite,53,3,79-53,36,this.paddleX,this.paddleY,50,50);
		if(this.shield == false){
			this.shield_image.src = "images/E2.png";
		}
		else{
			this.shield_image.src = "images/E1.png";
		}
		this.ctp.drawImage(this.shield_image,0,0,512,512,this.paddleX-10,this.paddleY-10,70,70);
		this.ctp.fillText("life: " + this.life.toString(),50,700);
	}
	collisionDetector(){
		let X = this.paddleX;
		let Y = this.paddleY;
		for (var j = 0; j < listEnemyBullet.length; j++) {
			let bx = listEnemyBullet[j].X;
			let by = listEnemyBullet[j].Y;
			if(bx > X && bx < X+50 && by > Y && by < Y+50 && this.shield != listEnemyBullet[j].type ) {
            	listEnemyBullet.splice(j,1);
            	this.life--;
        	}
		}
	}
}