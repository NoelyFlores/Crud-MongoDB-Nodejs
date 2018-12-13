const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/products.route'); // Imports routes for the products
const app = express();

const mongoose = require('mongoose');
//mongodb://<dbuser>:<dbpassword>@ds131954.mlab.com:31954/product_tutorial
let dev_db_url = 'mongodb://usermymongo:florliz123@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
