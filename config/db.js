var mongoose = require('mongoose');

mongoose.connect("mongodb://she-hacks.documents.azure.com:10255/?ssl=true&replicaSet=globaldb", {
    auth: {
      user: "she-hacks",
      password: "D0DezohIpG1VKnbId3PKZ4lCtAgrjH5Ns0kvX8F4bwzGBXvhYACzFE7ptjHZfZ8FcCJ89qnn06jqra6tZJQ4Gw=="
    }
  })

NewsSchema = require('../models/news');

var News = mongoose.model('News', NewsSchema);
module.exports = News;