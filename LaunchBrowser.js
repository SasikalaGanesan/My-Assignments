function browsername(){
let browser='chrome';
if(browser==="chrome")
{
    console.log("it is a chrome browser")

 
}

    else
    {
        console.log(browser)
    }

}

function runTests(){
    let Testingtype="Smoke"
    switch(Testingtype)
    {
        case "Smoke":
            console.log("Smoke Test");
            break;
        case "Sanity":
                console.log("Sanity Test");
                break;
        case "Regression":
               console.log("Regression Test");
              break;
       default:
            console.log("smoke")
            break;
    }
}
browsername();
runTests();
