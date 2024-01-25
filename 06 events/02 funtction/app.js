class App {
    runApplication() {
        let uiButton = document.getElementById("myButton");

        uiButton.addEventListener("click", (e) => {
            console.log("clicked");
        });
    }
}

let app = new App();
app.runApplication();
