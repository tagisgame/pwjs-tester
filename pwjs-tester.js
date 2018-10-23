const express = require('express');
const app = express();
const FileSync = require('lowdb/adapters/FileSync');
const low = require('lowdb');

app.set('view engine', 'hbs');

const dataPath = process.argv[2] || "./data";
const resultsDB = low(new FileSync(dataPath + '/results.json'));

app.get('/', function (req, res) {
    let sha1 = req.query.sha1 || "";
    res.render('index.hbs', {
        results: resultsDB.get('results').filter({
            'student': sha1
        }).value().map((record) => {
            let d = new Date(record.timestamp);
            return {
                date: d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.toTimeString(),
                problem: record.problem,
                status: record.status === 'success',
                description: record.description 
            };
        })
    });
});

app.listen(3001);