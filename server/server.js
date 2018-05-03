const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool ({
    database: 'shoe_store', //name of database
    host: 'localhost', //where your database is
    port: 5432, //this post is on postical,
    max: 10, //heroku allow 10 try, so this is how many query can run at one time
    idleTimeoutMillis: 30000 //30 second to try to connect
});

//--------these lines don't need but help us debug
pool.on('connect', () => {
    console.log('Postgresql connected');
})

pool.on('error', (error) =>{
    console.log('Error with postgress pool', error);
    res.send(500);
})
//-------END of these lines don't need but help us debug

const shoeList = [{name: 'nike shoe', cost: '100'}];

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 

app.get('/shoe', (req,res) => {
    res.send(shoeList);

});

app.post('/shoe', (req,res) =>{
    // shoeList.push(req.body); rather than push us PG below
    const shoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost") 
                VALUES ($1, $2)`, [shoe.name, shoe.cost])
        .then((results) =>{
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error with SQL insert on shoe POST', error);
            res.sendStatus(500);   
        });
})

app.listen(PORT, () => {
    console.log('up and running port', PORT);
})