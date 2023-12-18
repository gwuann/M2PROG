class App
{
    runApplication()
    {
        console.log("test")
        this.marioFunction();
        this.funnyFunction();
        
    }

    marioFunction()
    {
        console.log("MARIO!!");
    }

    funnyFunction(funny)
    {
        console.log("BWAHAHA!!!");
        return funny;
    }

    rekenFunction(y)
    {

    }
}

let app = new App
app.runApplication();