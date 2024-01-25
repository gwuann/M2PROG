class App
{
    runApplication()
    {
        this.marioFunction()

        let funnyResult = this.funnyFunction();
        console.log(funnyResult);

        let rekenResult = this.rekenFunction(9, 9);
        console.log(rekenResult);
    }

    marioFunction()
    {
        console.log("MARIO!!");
    }

    funnyFunction()
    {
        return "BWAHAHA!!!";
    }

    rekenFunction(x,y)
    {
        return x + y;
    }
}

let app = new App
app.runApplication();