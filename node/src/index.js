require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.DB_PORT;
const config = require('../config');
const mysql = require('mysql2');
const faker = require('faker');

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    const randomName = faker.name.firstName();
    const insertSql = `INSERT INTO people(name) VALUES('${randomName}')`;

    connection.query(insertSql, (err, insertResults) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        const selectSql = 'SELECT * FROM people';
        connection.query(selectSql, (err, selectResults) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            const userList = selectResults.map(user => user.name).join(', ');
            const htmlResponse = `<h1>Full Cycle Rocks!</h1>\n<h3>Created peoples:</h3><br>${userList}`;
            res.send(htmlResponse);
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});