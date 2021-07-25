const dataAtual = () => {
    return new Date().toLocaleDateString('pt-PT');
};

const dataExpiracao = () => {
    const dataFim = new Date();
    dataFim.setFullYear(dataFim.getFullYear() + 1);
    const dataFimBr = dataFim.toLocaleDateString('pt-PT');
    return dataFimBr;
};

const dataInicio = dataAtual();
const dataFim = dataExpiracao();

console.log(dataInicio);
console.log('----------');
console.log(dataFim);