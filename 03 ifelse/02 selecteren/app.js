class App
{
    runApplication() 
    {
        console.log("hello world");
        let title = document.getElementById("newstitle");
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        let newsitem2 = document.getElementsByClassName("gamenews")[1];
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";//red
            newsitem1.style.backgroundColor = "#FF0000";
            newsitem2.style.backgroundColor = "#FF0000";

        } else if (random >= 0.2 && random <= 0.6) {
            title.style.backgroundColor = "#00FF00";//green
            newsitem1.style.backgroundColor = "#00FF00";
            newsitem2.style.backgroundColor = "#00FF00";

        } else if (random >= 0.6 && random <=0.75) {
            title.style.backgroundColor = "#0000FF";//blue
            newsitem1.style.backgroundColor = "#0000FF";
            newsitem2.style.backgroundColor = "#0000FF";
        } else {
            title.style.backgroundColor = "#FFFF00";//yellow
            newsitem1.style.backgroundColor = "#FFFF00";
            newsitem2.style.backgroundColor = "#FFFF00";
        }
    }
}

let app = new App
app.runApplication();