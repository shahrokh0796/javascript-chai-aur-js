const form = document.querySelector("form");
// this usecase will give you empty value
// const height = parseInt(form.querySelector("#height").value);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = form.querySelector("#results");
    const height = parseInt(form.querySelector("#height").value);
    const weight = parseInt(form.querySelector("#weight").value);
    console.log(weight);
    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";
    }

    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // show the result 
        results.innerHTML = `<span>${bmi}</span>`;
    }
});