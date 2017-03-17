var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
        {
            title: 'Jackson Five',
            genre: 'Historical Fiction',
            author: 'Someone',
            bookId: 656,
            read: false
            },
        {
            title: 'Jackson Six',
            genre: 'Historical Non Fiction',
            author: 'Michael J.',
            bookId: 24280,
            read: false
            },
        {
            title: 'Cannon Twelve',
            genre: 'Fiction',
            author: 'Zach C.',
            bookId: 475,
            read: false
            },
        {
            title: 'Pollard Rocks',
            genre: 'Truth',
            author: 'Allison P.',
            bookId: 123,
            read: false
            }
    ];

var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });

    return adminRouter;
};

module.exports = router;