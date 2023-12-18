class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log("Hello World!");
        console.log(canvas);

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "cyan";
        g.moveTo(400,480);
        g.lineTo(500,500);
        g.lineTo(500,450);
        g.lineTo(400,430);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
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