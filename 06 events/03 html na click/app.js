class App {
    runApplication() {
        let uiButton = document.getElementById("myButton");
        let uiButton2 = document.getElementById("myButton2");
        let uiDiv = document.querySelector("div");
        uiButton.addEventListener("click", (e) => {
            
            const para = document.createElement("p");
            const node = document.createTextNode("new");
            para.appendChild(node)
            document.body.appendChild(para)
        });

        uiButton2.addEventListener("click", (e) => {
            
            const para = document.createElement("h1");
            const node = document.createTextNode("test");
            para.appendChild(node)
            document.body.appendChild(para)

            const para2 = document.createElement("p");
            const node2 = document.createTextNode("eigen tekst");
            para2.appendChild(node2)
            document.body.appendChild(para2)

            const para3 = document.createElement("img");
            para3.src = "IMG/download.jfif";
            document.body.appendChild(para3)

        });

        uiDiv.addEventListener("click", (e) => {
            const para = document.createElement("h1");
            const node = document.createTextNode("Clicked a div");
            para.appendChild(node);
            document.body.appendChild(para);

            uiDiv.style.backgroundColor = "blue";
        });
    }
}

let app = new App();
app.runApplication();
