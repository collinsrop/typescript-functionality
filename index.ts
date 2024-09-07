document?.addEventListener("DOMContentLoaded", ():void =>{
let fNo = document.querySelector("#fNo") as HTMLInputElement;
let sNo = document.querySelector("#sNo") as HTMLInputElement;
let submitButton = document.querySelector("button") as HTMLButtonElement;
let resDiv = document.querySelector(".results") as HTMLDivElement;
submitButton.addEventListener("click", (): void => {
	let number1 = parseFloat(fNo.value);
	let number2 = parseFloat(sNo.value);
	let sum = number1 + number2;
	resDiv.innerHTML = `Results:${sum}`;
});
})

