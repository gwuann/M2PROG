class App
{
    runApplication()
    {

        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let randomGetal = Math.random();
        function tekenHuis(g) {
            let x = 20;
            let y = 20;

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

        function tekenKerstBall(g) {
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
        
        function tekenKerstBoom(g) {
            let x = 20;
            let y = 20;
            g.beginPath()
            g.fillStyle = "green";
            g.moveTo(990,400);
            g.lineTo(900,400);
            g.lineTo(950,180);
            g.closePath();
            g.stroke();
            g.fill()

            g.beginPath()
            g.fillStyle = "brown";
            g.moveTo(940 + x,380 + y);
            g.lineTo(910 + x,380 + y);
            g.lineTo(910 + x,480 + y);
            g.lineTo(940 + x,480 + y);
            g.closePath();
            g.stroke();
            g.fill()

            g.beginPath();
            g.fillStyle = "yellow";
            g.moveTo(949, 130);
            g.lineTo(967, 160);   
            g.lineTo(1004, 161.25);
            g.lineTo(976, 175.5);
            g.lineTo(981.5, 195);
            g.lineTo(949, 185.25);
            g.lineTo(916.5, 195);  
            g.lineTo(922, 175.5);
            g.lineTo(895, 161.25);
            g.lineTo(933, 160);    
            g.lineTo(949, 130);
            g.closePath();
            g.stroke();
            g.fill();

            

            g.beginPath();
            g.arc(935, 300, 10, 0, Math.PI * 2);
            g.fillStyle = "red";
            g.stroke();
            g.fill();
            g.closePath();
            
            g.beginPath();
            g.arc(940, 340, 10, 0, Math.PI * 2);
            g.fillStyle = "blue";
            g.stroke();
            g.fill();
            g.closePath();

            g.beginPath();
            g.arc(970, 380, 10, 0, Math.PI * 2);
            g.fillStyle = "yellow";
            g.stroke();
            g.fill();
            g.closePath();

            g.beginPath();
            g.arc(920, 380, 10, 0, Math.PI * 2);
            g.fillStyle = "purple";
            g.stroke();
            g.fill();
            g.closePath();


            g.beginPath();
            g.arc(955, 210, 10, 0, Math.PI * 2);
            g.fillStyle = "orange";
            g.stroke();
            g.fill();
            g.closePath();

            g.beginPath();
            g.arc(935, 250, 10, 0, Math.PI * 2);
            g.fillStyle = "pink";
            g.stroke();
            g.fill();
            g.closePath();

            g.beginPath();
            g.arc(965, 270, 10, 0, Math.PI * 2);
            g.fillStyle = "cyan";
            g.stroke();
            g.fill();
            g.closePath();

            g.beginPath();
            g.arc(965, 270, 10, 0, Math.PI * 2);
            g.fillStyle = "black";
            g.stroke();
            g.fill();
            g.closePath();
 
 
            
            

        }
        tekenKerstBoom(g);
        tekenKerstBall(g);
        tekenHuis(g);
    }
}


let app = new App();
app.runApplication();

