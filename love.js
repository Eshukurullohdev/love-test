let result = document.querySelector("#result")

let btn = document.querySelector("#btn")

let a = btn.addEventListener("click", () => {

    let randomNumber = parseInt(Math.random() * 100);
    console.log(randomNumber);

    let yourName = document.querySelector("#your-name")

    let patnerName = document.querySelector("#patner-name")

    if (yourName === " ") {
        alert("Please enter your name !")
    }
    else if (patnerName === " ") {
        alert("please enter your patners name !")
    }
    else {
        result.innerHTML = yourName + " and " + patnerName +
            "love percentege is:" + randomNumber + "%"
    }

})