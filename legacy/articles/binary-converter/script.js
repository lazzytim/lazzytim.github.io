let field_bin = document.getElementById("bin");
let field_oct = document.getElementById("oct");
let field_dec = document.getElementById("dec");
let field_hex = document.getElementById("hex");
let text_error = document.getElementById("error_displayer")

field_bin.addEventListener("input", () => {
    let value_bin = field_bin.value;
    
    if (binValidator(value_bin)) {
        field_dec.value = parseInt(value_bin, 2);
        text_error.textContent = "";
    } else {
        text_error.textContent = "Please enter a valid binary number!";
        text_error.style.color = "#FF6C36";
    }
    
    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if(num[i] != "0" && num[i] != "1") {
                return false;
            }
        }
        return true;
    }
    
    
});

field_dec.addEventListener("input", () => {
    let value_dec = parseInt(field_dec.value);
    
    if (value_dec.toString().includes('.') == false && value_dec.toString().includes(',') == false) {
        field_bin.value = value_dec.toString(2);
    } else {
        text_error.textContent = "Please enter a valid binary number!";
        text_error.style.color = "#FF6C36";
    }
    
});