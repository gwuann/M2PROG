class App
{
    runApplication()
    {
        class Greet
        {
            constructor()
            {
                console.log("Greetings!");
            }
        }
        let greet = new Greet();
        new Greet();
        new Greet();
        new Greet();
        class GoodBye
        {
            constructor()
            {
                console.log("Bye Bye");
            }
        }
        let goodbye = new GoodBye();
    }
}

let app = new App();
app.runApplication();