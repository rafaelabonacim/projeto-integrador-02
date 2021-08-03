// Mask for CEP
$(document).ready(function(){
    
    // Mascaras para formularios
    $("#cpf").mask("000.000.000-00");
    $("#cnpj").mask("00.000.000/0000-00");
	$("#zipcode").mask("00000-000");
    $("#phone").mask("(00) 00000-0000");
    $("#whatsapp").mask("(00) 00000-0000");
    $('.multi-select').selectpicker({ selectAllText: 'Selecionar todos', deselectAllText: 'Desmarcar todos'});

    // Mask for CPF or CNPJ
    const documentFormats = {
        onKeyPress: function (cpf, ev, el, op) {
        let masks = ['000.000.000-000', '00.000.000/0000-00']
        $('#document').mask((cpf.length > 14) ? masks[1] : masks[0], op)
        }
    };
    
    $('#document').length > 11 ? $('#document').mask('00.000.000/0000-00', documentFormats) : $('#document').mask('000.000.000-00#', documentFormats);
});

// Comparacao de senhas nos formularios
document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.querySelector(".confirm-password");
    console.log(confirmPasswordError)
    
    confirmPassword.addEventListener("keyup", function (){
        console.log(password.value, confirmPassword.value)
        if (password.value  !== confirmPassword.value) {
            confirmPassword.setAttribute("isvalid", "false");
            confirmPassword.classList.add("invalid");
            confirmPasswordError.style.display = "block"
        } else {
            confirmPassword.setAttribute("isvalid", "true");
            confirmPassword.classList.remove("invalid");
            confirmPasswordError.style.display = "none"
        };
    });
});

// Loop do Select
function selectSearch(selectId, dbParameter) {
    const select = document.getElementById(selectId);
    
    for (let i = 0; i < select.length; i++) {
        if (dbParameter === select[i].value){
            select[i].setAttribute('selected', 'true');
        };
    }
}