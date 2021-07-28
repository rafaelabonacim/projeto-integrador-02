// Tratamento da data
const dataAtual = () => {
    return new Date();
};

const dataExpiracao = () => {
    const dataFinal = new Date;
    dataFinal.setFullYear(dataFinal.getFullYear() + 1);
    return dataFinal;
};

const dataInicio = dataAtual();
const dataFim = dataExpiracao();

console.log(dataInicio);
console.log('----------');
console.log(dataFim);