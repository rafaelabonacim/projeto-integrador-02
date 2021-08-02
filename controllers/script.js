const bcrypt = require('bcrypt');

let senha = bcrypt.hash('aporca5896', 10)

console.log(senha)