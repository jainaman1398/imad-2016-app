var express = require('express');
var morgan = require('morgan');
var path = require('path');
var http=require('http');
var pool=require('pg').pool;
var config={
  user: 'jainaman1398', 
  database: 'jainaman1398',
  host: 'db.imad.hasura-app.io',
  port:'5432',
  password:process.env.DB_PASSWORD
    
};
//var pool= new pool(config);
app.get('/test-db',function(req,res){
    
    pool.query('SELECT * FROM article',function(err,result){
        if(err){
            res.status('500').send(err.toString());
        }
        else{
            res.send(JSON.Stringify(result.rows));
        }
        
        
    });
    
    
});

var app = express();
app.use(morgan('combined'));
var articles={
 articleone:{
    title: ' Article-one|AJ ',
    heading:"Article-one",
    date:"13 april,1998",
    content: ` this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj'sworld
    this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj's world `,
},
articletwo:{
    
    title: ' Article-two|AJ ',
    heading:"Article-two",
    date:"13 april,1998",
    content: ` this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj'sworld
    this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj's world `,
},
articlethree:{
    
    title: ' Article-two|AJ ',
    heading:"Article-two",
    date:"13 april,1998",
    content: ` this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj'sworld
    this is aj's lappy n aj's world this is aj's lappy n aj's world this is aj's lappy n aj's world `,
}
};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`
    <html>
    <head>
     <link href="/ui/style.css" rel="stylesheet" />
    <title>
    ${title};
    </title>
    </head>
    <body>
    <div>
    ${date};
    </div>
    <div>
    ${content};
    </div>
    </body>
    </html> `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/IMG_20160709_124628.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20160709_124628.jpg'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
