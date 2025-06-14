const btn = document.querySelector(".calculate");

btn.addEventListener("click", () => {
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector(".result");

    if(!height || !weight) {
        alert("Enter Valid Number!!");
        return;
    }
    
    const BMI = ((weight / height) / height) * 10000;
    result.classList.remove("red", "green");
    result.classList.add((BMI < 18.5 || BMI > 25) ? "red" : "green");
    console.log(result);
    
    result.innerHTML = `Your BMI is ${BMI.toFixed(2)}kg/m<sup>2<sup>`
})