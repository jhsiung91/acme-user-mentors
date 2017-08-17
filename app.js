const express = require('express');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const nunjucks = require('nunjucks');
const users = require('./routes/users');
const conn = require('./models');
const port = process.env.PORT || 3000;

const app = express();
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.get('/',(req,res)=>{
	res.render('index');
})

app.use((err,req,res,next)=>{
	res.render('error',{error:err.message});
})
conn.sync().then(()=> {
  conn.seed().then(()=> {
    app.listen(port, ()=> {
      console.log(`listening on port ${port}`);
    })
  })
})