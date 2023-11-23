class App
{
    runApplication()
    {
        console.log("Hello World!");
    }
}

let app = new App();
app.runApplication();

const d = new Date();
let hour = d.getHours();

function runApplication() {
    let appNaam = "demoApp";
    let versienummer = 1.0;
    let versiedatum = 11 + "/" + 21 + "/" +2023;
    let autheur = "Julian";
    let copyright = "Julian Kreike";
    let distributeur = "Julian";
    let darkmode1 = "True";
    let darkmode2 = "False";
    console.log("appNaam:" + appNaam);
    console.log("versienummer:" + versienummer);
    console.log("versiedatum:" + versiedatum);
    console.log("autheur:" + autheur);
    console.log("copright:" + copyright);
    console.log("distributeur:" + distributeur);
    if (hour < 17) {
        console.log("darkmode:" + darkmode2);
    } else {
        console.log("darkmode:" + darkmode1);
    }
}
runApplication();