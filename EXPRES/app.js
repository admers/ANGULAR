const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}));
const places = [
    {
        'title':'Oficina de admer',
        'description': 'lorem ipsum',
        'addres':'Ad imperial 345'
    },
    {
        'title':'Oficina de admer',
        'description': 'lorem ipsum',
        'addres':'Ad vegas 345'
    },
    {
        'title':'Oficina de admer',
        'description': 'lorem ipsum',
        'addres':'Ad peru 345'
    }
];

app.get('/',(req,res)=>{
    res.json(places);
});

app.use(express.static('public'));

app.post('/',(req,res)=>{
    res.json(req.body.nombre);
});

app.listen(3000,function () {
    console.log('Estoy listo para recibir la aplicacions');
});