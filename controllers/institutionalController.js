const institutionalController = {
    index: (req, res) => {
        return res.render('index', { title: 'Portal para Cotação em Usinagem'})
    },
    anuncie: (req, res) => {
        return res.render('anuncie', { title: 'Anuncie'})
    },
    parceiros: (req, res) => {
        return res.render('parceiros', { title: 'Parceiros'})
    }
};

module.exports = institutionalController;