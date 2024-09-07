"use strict";
document?.addEventListener("DOMContentLoaded", () => {
    let fNo = document.querySelector("#fNo");
    let sNo = document.querySelector("#sNo");
    let submitButton = document.querySelector("button");
    let resDiv = document.querySelector(".results");
    submitButton.addEventListener("click", () => {
        let number1 = parseFloat(fNo.value);
        let number2 = parseFloat(sNo.value);
        let sum = number1 + number2;
        resDiv.innerHTML = `Results:${sum}`;
    });
});
