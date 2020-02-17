const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.options('*', cors());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/shopping-cart", {useUnifiedTopology: true});
const productSchema = new mongoose.Schema({
    isPublished: String,
    productName: String,
    productImage: String,
    price: Number
});

const cartSchema = new mongoose.Schema({
    productName: String,
    productImage: String,
    price: Number
});
const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);

app.get('cart', (req, res) => {
    Cart.find((err, items) => {
        if (err) {
            res.send(err);
        }
        res.send(items);
    })
});

app.post('cart', (req, res) => {
    Cart.create(req.body, (err, items) => {
        if (err) {
            res.send(err);
        }
        res.send(items);
    })
});


app.get('/api/v1/products', (req, res) => {
    Product.find((err, products) => {
        if (err) {
            res.send(err);
        }
        if (products.length === 0) {
            Product.create(sampleProducts, (err, data) => {
                if (err) {
                    res.send(err);
                }
                res.send(data);
            });
        }
        res.send({
            data: products
        });
    })
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

const sampleProducts = [{
    "isPublished": "true",
    "productName": "Apple iPhone X",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
    "price": "299"
}, {
    "isPublished": "true",
    "productName": "Apple iPhone 8",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
    "price": "100"
}, {
    "isPublished": "false",
    "productName": "Apple iPhone 8 Plus",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
    "price": "99"
}, {
    "isPublished": "true",
    "productName": "Samsung Galaxy S9",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png",
    "price": "149"
}, {
    "isPublished": "true",
    "productName": "OPPO R15 Pro",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/oppo-r15-pro/oppo-r15-device-front.png",
    "price": "199"
}, {
    "isPublished": "true",
    "productName": "Sony Xperia XA2",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
    "price": "19"
}];
