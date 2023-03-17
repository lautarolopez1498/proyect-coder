const express = require('express');
const viewRouter = require('./routes/view.router')
const productsRouter = require('./routes/products.router')
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);



mongoose.connect(  'mongodb+srv://lautaro:528276@cluster0.8ag41uo.mongodb.net/?retryWrites=true&w=majority',  (error) => {
    if (error) {
      console.log("Cannot connect to database: ", + error);
      process.exit();
    } else {
      console.log('\n***** Successful connection! *****\n');
    }
  }
);


const app = express();
const PORT = 8080;

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', viewRouter);
app.use('/api/products', productsRouter);


app.listen(PORT, () => {
  console.log(`\nServer running on port ${PORT}`);
});

