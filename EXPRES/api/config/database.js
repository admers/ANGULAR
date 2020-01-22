const  mongose = require('mongoose');
const dbName = 'places_facilito_api';
module.exports = {
    connect: ()=>mongoose.connect('mongobd://localhost/'+dbName),
    dbName,
    connection: ()=>{
        if (mongose.connection)
            return mongoose.connection;
        return mongoose.connect();
    }
}