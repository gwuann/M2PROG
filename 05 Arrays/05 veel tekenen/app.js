class App {
    runApplication() {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        function tekenCirkel(g, x, y) {
            g.beginPath();
            g.arc(x, y, 20, 0, Math.PI * 2); 
            g.stroke();
            g.fill();
            g.closePath();
        }

        for (let i = 0; i < 200; i++) {
            let x = Math.random() * canvas.width; 
            let y = Math.random() * canvas.height; 
            tekenCirkel(g, x, y); 
        }
    }
}

let app = new App();
app.runApplication();
