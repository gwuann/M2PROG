class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let randomGetal = Math.random();
        console.log(randomGetal);
        console.log("Hello World!");
        console.log(canvas);

        g.beginPath() //dak
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath() //muur
        g.fillStyle = "grey"; 
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath() //muur
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath() //muur
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        if (randomGetal < 0.5) { //raam licht uit
            g.beginPath()
            g.fillStyle = "cyan";
            g.moveTo(400,480);
            g.lineTo(500,500);
            g.lineTo(500,450);
            g.lineTo(400,430);
            g.closePath();
            g.stroke();
            g.fill()
    
        } else { // raam licht aan
            g.beginPath()
            g.fillStyle = "rgba(173, 255, 47, 1)";
            g.moveTo(400,480);
            g.lineTo(500,500);
            g.lineTo(500,450);
            g.lineTo(400,430);
            g.closePath();
            g.stroke();
            g.fill()
    
        }

        g.beginPath()//deur
        g.fillStyle = "#5C4033";
        g.moveTo(700,550);
        g.lineTo(700,450);
        g.lineTo(750,430);
        g.lineTo(750,525);
        g.closePath();
        g.stroke();
        g.fill()
    }
}


let app = new App();
app.runApplication();