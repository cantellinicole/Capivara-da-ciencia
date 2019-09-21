const WppService = require('../services/whatsappService');

exports.get = (req, res, next) => {
    WppService.getAll()
    .then((wpp) => {
        res.status(200).send(wpp);
    }).catch(err => res.status(500).send(err))
};


exports.getById = (req, res, next) => {
    const _id = req.params.id;

    WppService.getById(_id)
        .then((wpp) => {
            res.status(200).send(wpp);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const vm = req.body;

    WppService.create(vm)
        .then(() => {
            res.status(200).send(`Mensagem enviada!`);
        }).catch(err => res.status(500).send(err))
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    
    const vm = req.body;

    WppService.update(id,vm)
        .then(() => {
            res.status(200).send(`News atualizada com sucesso!`);
        }).catch(err => res.status(500).send(err))

};

exports.delete = (req, res, next) => {
  
WppService.delete(id)
    .then(() => {
        res.status(200).send(`News deletada com sucesso!`);
    }) .catch(err => res.status(500).send(err)) 
};