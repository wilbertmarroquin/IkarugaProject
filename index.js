var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var puntaje = 0;
var Enemy_H = new EnemyHandler(ctx);
var playerSprite = "images/Ship.png";
var bulletSprite = "images/beams.png";
var Player = new SpaceShip(0,ctx,(canvas.width-50)/2,(canvas.height-50)/2,playerSprite);
var listBullet = [];
var listEnemyBullet = [];
var back = new Image();
back.src = "stars.gif";
ctx.font ="20px Arial";
ctx.fillStyle = "white";
var move_back=0;
var move_back2=-720;
function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(back,0,0,512,512,0,move_back2,500,720);
    ctx.drawImage(back,0,0,512,512,0,move_back,500,720);
    move_back++;
    move_back2++;
    if (move_back==720) {move_back = 0; move_back2 = -720;}
    ctx.fillText("1P",50,20);
    ctx.fillText(puntaje.toString(),100,20);
    if(Player.life > 0){
        Enemy_H.Generate_Enemy();
        Enemy_H.collisionDetector();
        Enemy_H.enemyAttack();
    	Player.drawSpaceShip();
        Player.collisionDetector();
        Enemy_H.Draw_Enemies(); 
        for (var i = 0; i < listBullet.length; i++) {
            listBullet[i].drawBullet();
            listBullet[i].moveBullet();
            if(listBullet[i].Y < 0 || listBullet[i].Y > canvas.height || listBullet[i].X < 0 || listBullet[i].X > canvas.width )
            {
                listBullet.splice(i,1);
            }
        }
        for (var i = 0; i < listEnemyBullet.length; i++) {
            listEnemyBullet[i].drawBullet();
            listEnemyBullet[i].moveBullet();
            if(listEnemyBullet[i].Y < 0 || listEnemyBullet[i].Y > canvas.height || listEnemyBullet[i].X < 0 || listEnemyBullet[i].X > canvas.width )
            {
                listEnemyBullet.splice(i,1);
            }
        }
        //console.log(listBullet.length);
    	if(rightPressed && Player.paddleX < canvas.width-50) {
            Player.paddleX += 3;
        }
        else if(leftPressed && Player.paddleX > 0) {
            Player.paddleX -= 3;
        }
        if(downPressed && Player.paddleY < canvas.height-50) {1
            Player.paddleY += 3;
        }
        else if(upPressed && Player.paddleY > 0) {
            Player.paddleY -= 3;
        }
        if(spacePressed) {
            var vel = [0,-15]
            var newBullet = new Bullet(Player.paddleX+18,Player.paddleY-5,ctx,vel,bulletSprite,0);
            listBullet.push(newBullet);
        }
    }
    else{
        ctx.fillText("Perdiste", 220,300);
        ctx.fillText("Puntaje = " + puntaje.toString(),210,320);
        ctx.fillText("Press R to Restart", 180,340);
        if(restart)
        {
            puntaje = 0;
            Enemy_H.EnemyArray.length = 0;
            Player = new SpaceShip(0,ctx,(canvas.width-50)/2,(canvas.height-50)/2,playerSprite);
            listBullet.length = 0;
            listEnemyBullet.length = 0;
        }

    }
}

setInterval(draw, 20);
