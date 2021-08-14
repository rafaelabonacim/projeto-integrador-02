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