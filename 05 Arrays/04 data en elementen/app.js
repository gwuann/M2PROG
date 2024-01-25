class App {
    runApplication() {
        let data = ["nieuws", "reviews", "commentaar", "beste forum posts", "pricewatch"];
        let headersByCssClass = document.querySelectorAll('.bandName');
        for (let i = 0; i < data.length; i++) {
            if (headersByCssClass[i]) {
                headersByCssClass[i].innerText = i + ": " + data[i];
            }
        }
    }
}

let app = new App();
app.runApplication();
