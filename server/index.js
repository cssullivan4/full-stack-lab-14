var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')

var clientPath = path.join(__dirname, '../client');
var dataPath = path.join(__dirname, 'data.json');

var app = express();
app.use(express.static(clientPath));
app.use(bodyParser.json()); // body parser, create one whose sole job is parsing json

app.route('/api/chirps') // MAKING API
    .get(function(req, res) {
        res.sendFile(dataPath); 
    }).post(function(req, res) {
        var newChirp = req.body; // properties are message, timestamp, user but stored in variable rn
        readFile(dataPath, 'utf8') // PROMISE
        .then(function(fileContents) {
            var chirps = JSON.parse(fileContents);
            chirps.push(newChirp); // req.body
            return writeFile(dataPath, JSON.stringify(chirps)); // if forget return, will jump to next then before read & if error or success could mess up, client could stop listening
        }).then(function() { // no parameter bc when writeFile resolves, nothing resolves -- no parameter
            res.sendStatus(201);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
        // follows var newChirp // redundant // can clean up after wrote generic functions below
        // fs.readFile(dataPath, 'utf8', function(err, fileContents) { // callback
        //     if (err) {
        //         console.log(err);
        //         res.sendStatus(500);
        //     } else {
        //         var chirps = JSON.parse(fileContents);
        //         chirps.push(newChirp); // updated, new IO but just local so
        //         fs.writeFile(dataPath, JSON.stringify(chirps), function(err) {
        //             if (err) {
        //                 console.log(err);
        //                 res.sendStatus(500);
        //             } else {
        //                 res.sendStatus(201);
        //             }
        //         });
        //     }
        // });
    });

app.listen(3000);

function readFile(filePath, encoding) { // writing own function // generic use // looking for path of file & content type
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoding, function(err, data) { // where to look but pass in any path w any type (value) plus need callback with handler
            if (err) {
                reject(err);
            } else {
                resolve(data); //no buffer bc of encoding parameter (already noted as string)
            }
        }); // resolves & passes data in
    });
}

function writeFile(filePath, data) { // resolve once written contents to file
    return new Promise(function(resolve, reject) {
        fs.writeFile(filePath, data, function(err) {
            if (err) {
                reject (err);
            } else {
                resolve();
            }
        });
    });
}