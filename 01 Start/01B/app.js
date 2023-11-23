class App
{
    runApplication()
    {
        this.greeting = "Starting Up";
        this.appNaam = "demoApp";
        this.versienummer = 1.0;
        this.versiedatum = 11 + "/" + 21 + "/" +2023;
        this.autheur = "Julian";
        this.copyright = "Julian Kreike";
        this.distributeur = "Julian";
        this.darkmode1 = "True";
        this.darkmode2 = "False";
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
