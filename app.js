var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
// var Busboy = require('connect-busboy');




var app = express();
// app.use(Busboy());


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
    console.log('Server Started At Port 3000');

});

app.get('/', function(req, res) {
    res.render('index')
        // res.redirect('/index')

});
var walk = require('walk');
var files = [];
app.get('/index', function(req, res) {

    // var walker = walk.walk(__dirname + '/public/assets/img/gallery/', { followLinks: false });
    // // console.log(__dirname)
    // walker.on('file', function(root, stat, next) {
    //     // console.log("filenames ", stat.name);
    //     // Add this file to the list of files
    //     files.push(stat.name);
    //     next();
    // });

    // walker.on('end', function() {
    //     console.log('files are :', files);
    // });
    res.render('index');
    // res.render('index', { namess: JSON.stringify(files) });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/gallery', function(req, res) {
    res.render('gallery');
});
app.get('/event', function(req, res) {
    res.render('event');
});
app.get('/commitee', function(req, res) {
    res.render('commitee');
});

app.get('/testing', function(req, res) {
    res.render('tss');
});