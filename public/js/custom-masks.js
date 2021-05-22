// Mask for CEP
$(document).ready(function(){
	$("#zipcode").mask("00000-000");
});

// Mask for CPF
$(document).ready(function(){
	$("#cpf").mask("000.000.000-00");
});

// Mask for CNPJ
$(document).ready(function(){
	$("#cnpj").mask("00.000.000/0000-00");
});

// Mask for CPF or CNPJ
let documentFormats = {
    onKeyPress: function (cpf, ev, el, op) {
    let masks = ['000.000.000-000', '00.000.000/0000-00']
    $('#document').mask((cpf.length > 14) ? masks[1] : masks[0], op)
    }
}

$('#document').length > 11 ? $('#document').mask('00.000.000/0000-00', documentFormats) : $('#document').mask('000.000.000-00#', documentFormats);

// Mask for Phone or Cellphone
$(document).ready(function(){
	$("#phone").mask("(00) 00000-0000");
    $("#whatsapp").mask("(00) 00000-0000");
});