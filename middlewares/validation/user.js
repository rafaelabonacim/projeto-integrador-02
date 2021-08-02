/** Middleware de validação de cadastro de Usuário  */
const usuario = (req,res,next) => {
    let { nome, email, senha } = req.body;

    const emailEcontrado = usuarios.find(emailUsuario => emailUsuario.email == email);

    if (nome.trim()== "" || email.trim() == "" || senha.trim() == "") {
        // retorna mensagem de erro
        return res.send('Preencha todos campos obrigatórios.')
    } else if (nome.trim().split(' ').length < 2 ) {
        return res.send('Preencha nome completo.')
    } else if (emailEcontrado && emailEcontrado !== undefined) {
        return res.send('E-mail já cadastrado.')
    } else if ( nome.length < 1 || nome.length > 15) {
        // retorna mensagem de erro
        return res.send('Nome inválido.');
    } else {
        next();
    }
}

module.exports = usuario;