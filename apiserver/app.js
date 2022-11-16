const express = require('express');
const app = express();
const port = 3300;
const config = require('./config.js')[process.env.NODE_ENV||"dev"]
//const PORT = config.port;
const { Client } = require('pg');
const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/workouts_db';
const client = new Client({
    connectionString: config.connectionString,
});
const cors = require('cors');
app.use(cors());
client.connect();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/workouts', (req, res) => {
    client.query("SELECT * FROM workouts")
        .then((result) => {
            res.status(200).send(result.rows)
        })
        .catch((err) => console.error(err.stack))
});

app.get('/api/workouts/:id', (req, res) => {
    const id = req.params.id;
    client.query(`SELECT * FROM workouts WHERE id=${id}`)
        .then((result) => {
            res.status(200).send(result.rows)
        })
        .catch((err) => console.error(err.stack))
});

app.post('/api/workouts', (req, res) => {
    const workout = req.body;
    const quote = workout.quote;
    const day_num = workout.day_num;
    const warmup = workout.warmup;
    const pushups = workout.pushups;
    const situps = workout.situps;
    const run = workout.run;
    const id = req.params.id;
    const queryString = "INSERT INTO workouts (picture, quote, day_num, warmup, pushups, situps, run)VALUES('https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80', $1, $2, $3, $4, $5, $6)"
    client.query(queryString, [quote, day_num, warmup, pushups, situps, run])
        .then((result) => {
            res.status(200).send(result.rows)
        })
        .catch((err) => console.error(err.stack))
});

app.delete('/api/workouts/:id', (req, res) => {
    const id = req.params.id;
    client.query(`DELETE FROM workouts WHERE id=${id}`)
        .then((result) => {
            res.status(200).send("workout removed")
        })
        .catch((err) => console.error(err.stack))
});

app.patch('/api/workouts/:id', (req, res) => {
    const workout = req.body;
    const quote = workout.quote;
    const day_num = workout.day_num;
    const warmup = workout.warmup;
    const pushups = workout.pushups;
    const situps = workout.situps;
    const run = workout.run;
    const id = req.params.id;
    client.query(`UPDATE workouts SET quote='${quote}', day_num=${day_num}, warmup='${warmup}', pushups='${pushups}', situps='${situps}', run='${run}' WHERE id=${id}`)
    .then((result) => {
        res.status(200).send(result.rows)
    })
    .catch((err)=> console.error(err.stack))
});

app.listen(3300, () => {
    console.log(`listening on port ${port}`)
});