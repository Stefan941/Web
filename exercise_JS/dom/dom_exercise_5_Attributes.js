

function validatesTheForm() {
    var inputs = document.querySelectorAll("input")

    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && !inputs[i].value)
            inputs[i].classList.add("required")
    }

}

validatesTheForm();
