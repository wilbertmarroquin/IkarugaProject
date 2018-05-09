class Enemy{
	constructor(ctp, px, py , src){
		this.ctp = ctp;
        this.paddleX = px;
        this.paddleY = py;
        this.sprite = new Image();
        this.sprite.src = src;
        this.life = Math.floor((Math.random() * 100) + 1);
        this.puntos = this.life;
        this.spiral = false;
        this.spiral_counter = 0;
	}
	drawEnemy() {
		ctx.drawImage(this.sprite,53,3,79-53,36,this.paddleX,this.paddleY,50,50);
	}
}

class EnemyHandler{
	constructor(ctxE) {
		this.EnemyArray = [];
		this.ctxE = ctxE;
		this.enemySprite = "images/Ship.png";
	}
	Generate_Enemy(){
		let rand = Math.floor((Math.random() * 100) + 1);
		if (rand > 99) {
			let Xpos = Math.floor((Math.random() * 9) + 1)*50;
			var New_Enemy = new Enemy(this.ctxE,Xpos,-50,this.enemySprite);
			this.EnemyArray.push(New_Enemy);	
		}
	}
	Draw_Enemies(){
		for (var i = 0; i < this.EnemyArray.length; i++) {
			this.EnemyArray[i].drawEnemy();
			this.EnemyArray[i].paddleY += 3;
			if(this.EnemyArray[i].paddleY > canvas.height){
				this.EnemyArray.splice(i,1);
			}
		}

	}
	collisionDetector(){
		for (var i = 0; i < this.EnemyArray.length; i++) {
			let X = this.EnemyArray[i].paddleX;
			let Y = this.EnemyArray[i].paddleY;
			for (var j = 0; j < listBullet.length; j++) {
				let bx = listBullet[j].X;
				let by = listBullet[j].Y;
				if(bx > X && bx < X+50 && by > Y && by < Y+50) {
					this.EnemyArray[i].life -= 2;
					if(this.EnemyArray[i].life < 0){
						puntaje += this.EnemyArray[i].puntos;
						this.EnemyArray.splice(i,1);
					}
                	listBullet.splice(j,1);
            	}
			}
		}
	}
	enemyAttack(){
		for (var i = 0; i < this.EnemyArray.length; i++) {
			if(!this.EnemyArray[i].spiral){
				let rand = Math.floor((Math.random() * 100) + 1);
				if (rand > 99) {
					let randB = Math.floor((Math.random() * 100) + 1);
					for (var j = 0; j < 2*3.14; j+=3.14/8) {
						var vel = [3 * Math.cos(j) , 3 * Math.sin(j)];
						var newBullet = new Bullet(this.EnemyArray[i].paddleX+25,this.EnemyArray[i].paddleY+25,this.ctxE,vel,bulletSprite, randB < 50);
		        		listEnemyBullet.push(newBullet);
					}
				}
				else{
					if (rand < 2) {
						this.EnemyArray[i].spiral = true;
					}	
				}	
			}
			else{
				let randB = Math.floor((Math.random() * 100) + 1);
				for (var j = 0.1 * this.EnemyArray[i].spiral_counter ; j < 2*3.14; j+=3.14/4) {
					var vel = [3 * Math.cos(j) , 3 * Math.sin(j)];
					var newBullet = new Bullet(this.EnemyArray[i].paddleX+25,this.EnemyArray[i].paddleY+25,this.ctxE,vel,bulletSprite, randB < 50);
	        		listEnemyBullet.push(newBullet);
				}
				this.EnemyArray[i].spiral_counter++;
				if(this.EnemyArray[i].spiral_counter == 4){
					this.EnemyArray[i].spiral = false;
					this.EnemyArray[i].spiral_counter = 0;
				}
			}
			//this.EnemyArray[i]
			
			
		}
	}
}