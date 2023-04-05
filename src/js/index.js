const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const textError = document.querySelectorAll("small");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const inputNameValue = inputName.value
    const inputPhoneValue = inputPhone.value
   
    if (inputNameValue === "") {
        inputValidationError(inputName)
        textError[1].classList.add("text-error")
    } else {
        inputValidationSuccess(inputName)
        textError[1].classList.remove("text-error")
    }
    if (inputPhoneValue === "") {
        inputValidationError(inputPhone)
        textError[0].classList.add("text-error")
    } else {
        inputValidationSuccess(inputPhone)
        textError[0].classList.remove("text-error")
    }

}

function inputValidationSuccess(div) {
    const formFilled = div.parentElement;
    formFilled.classList.add("success")
}

function inputValidationError(div) {
    const formFilled = div.parentElement;
    formFilled.classList.add("error");
    formFilled.classList.remove("success")
}

