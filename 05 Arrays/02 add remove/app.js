class App
{
    runApplication()
    {
        let a = ["artiest1,artiest2,artiest3"]; 
        console.log(a);
        let array = ["artiest1","artiest2","artiest3"]
        array.push("bob dylan","prince")
        let indexToRemove = array.indexOf("bob dylan","prince")
        array.splice(indexToRemove,2)
        array.push("artiest4","artiest5")
        console.log("hello world")
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i+1 + ":" + element);

        }
    }
}

let app = new App();
app.runApplication();

