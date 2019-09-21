const NewsService = require('../services/newsService');

exports.get = (req, res, next) => {
    NewsService.getAll()
    .then((news) => {
        res.status(200).send(news);
    }).catch(err => res.status(500).send(err))
};


exports.getById = (req, res, next) => {
    const _id = req.params.id;

    NewsService.getById(_id)
        .then((news) => {
            res.status(200).send(news);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const vm = req.body;

    NewsService.create(vm)
        .then(() => {
            res.status(200).send(`News criada com sucesso!`);
        }).catch(err => res.status(500).send(err))
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    
    const vm = req.body;

    NewsService.update(id,vm)
        .then(() => {
            res.status(200).send(`News atualizada com sucesso!`);
        }).catch(err => res.status(500).send(err))

};

exports.delete = (req, res, next) => {
  
NewsService.delete(id)
    .then(() => {
        res.status(200).send(`News deletada com sucesso!`);
    }) .catch(err => res.status(500).send(err)) 
};