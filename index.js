require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes 
app.use('/products', productRoute);


app.get('/', (req,res) => {
    res.send('Hello World from Express!');
});

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@backenddb.4qslxpz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
.then(() => {
    console.log('Connected to database!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log('Error connecting to database!')
});