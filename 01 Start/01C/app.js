class App
{
    runApplication()
    {
        let nummer = 10;
        let epic = "epic";
        let epicness1 = "True";
        let epicness2 = "False";
        console.log("Nummer:" + nummer);
        console.log("Epic?:" + epic);
        if (epic = "epic") {
            console.log("Epicness:" + epicness1);
        } else {
            console.log("Epicness:" + epicness2);
        }
        this.greeting = "Starting Up";
        this.appNaam = "demoApp";
        this.versienummer = 1.0;
        this.versiedatum = 11 + "/" + 21 + "/" +2023;
        this.autheur = "Julian";
        this.copyright = "Julian Kreike";
        this.distributeur = "Julian";
        this.darkmode1 = "True";
        this.darkmode2 = "False";
        this.woord = "woord!";
        this.pronummer = 8;
        this.pro1 = "Klein pro";
        this.pro2 = "Groot pro";
    }
}

let app = new App();
app.runApplication();

const d = new Date();
let hour = d.getHours();

console.log(app.greeting)
console.log("appNaam:" + app.appNaam);
console.log("versienummer:" + app.versienummer);
console.log("versiedatum:" + app.versiedatum);
console.log("autheur:" + app.autheur);
console.log("copright:" + app.copyright);
console.log("distributeur:" + app.distributeur);
if (hour < 17) {
    console.log("darkmode:" + app.darkmode2);
} else {
    console.log("darkmode:" + app.darkmode1);
}
console.log("Woord:" + app.woord);
console.log("Pronummer:" + app.pronummer);
if (app.pronummer < 10) {
    console.log(app.pro1);
} else {
    console.log(app.pro2);
}