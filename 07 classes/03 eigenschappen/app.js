class App
{
    runApplication()
    {

    }
}
let app = new App();
app.runApplication();

class Greet
{
    constructor()
    {
        this.greeting = "Greetings!";
    }
    
    showGreeting()
    {
        console.log("greeting van binnen: " +this.greeting)
    }
}
let greet = new Greet();
greet.showGreeting();

class goodbye
{
    constructor()
    {
        this.bye = "Bye Bye"
    }

    showBye()
    {
        console.log("greeting vna binnen: " + this.bye)
    }
}
let bye = new goodbye();
bye.showBye();

console.log("greeting van buiten: " + greet.greeting);

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();