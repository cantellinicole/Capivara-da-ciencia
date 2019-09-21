'use strict';
var News = require('../config/db');

module.exports = new class NewsService {

    getAll() {
        return News.find();
    }

    getById(id) {
        return News.findById(id);
    }

    create(news) {
        return News.create(news);
    }

    update(id, news) {
        return News.findByIdAndUpdate(id,news);
    }

    delete(id) {
        return News.findByIdAndDelete(id);
    }
}