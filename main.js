canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

carro_width = 75;
carro_height = 100;

background_image = "parkingLot.jpg";
carro_image = "car2.png";

carro_x = 5;
carro_y = 225;

function add() {

	background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image; 

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadcarro; 
    rover_imgTag.src = carro_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadcarro() {
	ctx.drawImage(carro_imgTag, carro_x, carro_y, carro_width, carro_height);	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			arriba();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			abajo();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			izquierda();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			derecha();
			console.log("right");
		}
		
		
}

function arriba()
{
    if(carro_y >=0)
    {
        carro_y = carro_y - 10;
        console.log("Cuando flecha arriba es presionada,  x = " + carro_x + " | y = " + carro_y);
         uploadBackground();
         uploadcarro();
    }
}
function abajo()
{
    if(carro_y <=500)
    {
        carro_y = carro_y+ 10;
        console.log("Cuando flecha abajo es presionada,  x = " + carro_x + " | y = " + carro_y);
        uploadBackground();
         uploadcarro();
    }
}
function izquierda()
{
    if(carro_x >= 0)
    {
        carro_x =carro_x - 10;
        console.log("Cuando la flecha izquierda es presionada,  x = " + carro_x + " | y = " + carro_y);
        uploadBackground();
         uploadcarro();
    }
}
function derecha()
{
    if(carro_x <= 700)
    {
        carro_x =carro_x + 10;
        console.log("Cuando la flecha derecha es presionada,  x = " + carro_x + " | y = " +carro_y);
        uploadBackground();
        uploadcarro();
    }
}