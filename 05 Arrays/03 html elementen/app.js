class App
{
    runApplication()
    {
        console.log("manier A")
        let headers = document.getElementsByTagName("h1");
        for (let i = 0; i < headers.length; i++) {
            console.log(headers[i])
        }

        console.log("manier B")
        let headersByCssClass = document.getElementsByClassName("bandName");
        for (let i = 0; i < headersByCssClass.length; i++) {
            console.log(headersByCssClass[i].innerText)
        }

        let mijnH1 = document.getElementById("headerId")
        console.log(mijnH1.innerText);

        mijnH1.innerText = "Nieuwe text";
        headersByCssClass[0].innerText = "nieuws ";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar ";
        headersByCssClass[3].innerText = "beste forum posts ";
        headersByCssClass[4].innerText = "pricewatch ";
    }
}

let app = new App();
app.runApplication();

