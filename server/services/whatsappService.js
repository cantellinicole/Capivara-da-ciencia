const NewsService = require('../services/newsService');
const axios = require('axios');


 
module.exports = new class WppService {

    getAll() {
    }

    getById(id) {
    }

    create(capivara) {
        NewsService.getAll()
        .then((news) => {
            let index = 1;
            index = Math.floor(Math.random() * news.length);

            while(!news[index].headline){
                index = Math.floor(Math.random() * news.length);
            }
            axios.post('https://eu71.chat-api.com/instance67468/sendMessage?token=ldopeiob8fm0ndav', {
            "phone": "55" + capivara.number,
            "body": 'ESSA É A *CAPIVARA DA CIÊNCIA* TRAZENDO PESQUISAS BRASILEIRAS PRA VOCÊ\n' +
            '                 /)―ヘ \n'+
            '          ＿／　　　＼\n'+
            '       ／　  　   (o)    (o)丶\n'+
            '      ｜　　　　　▼　| \n'+
            '      ｜　　　　　亠ノ \n'+
            '         U￣U￣￣￣U\n'+
            '*'+ news[index].headline + '*\n' +
            news[index].url + '\n'
            ,
          })
          .then(function (response) {
            //console.log(response);
          })
          .catch(function (error) {
            //console.log(error);
          });


        }).catch(err => res.status(500).send(err))
        
    }

    update(id, news) {
    }

    delete(id) {
    }
}