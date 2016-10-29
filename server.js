var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
aapp.get('/ui/server.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'server.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
