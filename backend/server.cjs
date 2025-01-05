const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const host = 'localhost';
const id = 'localhost';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/ordercall', function (request, response) {
    console.log('done')
    let body = request.body;

    function sendMail() {
        return
    }

    function checkName() {
        let isCheck = true;
        let name = body.name.split('');
        Array.from(name).forEach(letter => {
            if (!isNaN(Number(letter)) && letter != ' ') {
                isCheck = false;
            }
        })
        return isCheck;
    }

    function checkTel() {
        return true;
    }

    if (checkName() && checkTel()) {
        sendMail();
        response.status(200);
    } else if (checkName()) {
        response.status(400);
        response.send({error: 'Имя не должно содержать цифры или специальные символы'});
    } else if (checkTel()) {
        response.status(400);
        response.send({error: 'Поле телефон заполнено некорректно'});
    } else {
        response.status(400);
    }
})

app.listen(5000);