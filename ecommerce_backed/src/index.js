const express = require('express')
const app = express();
const connect = require('./db');
const Model = require('./componenets/prducts.model')

app.use(express.json())


app.get('/products', async(req, res) => {


    let page = req.query.page || 1
    console.log(req.query)

    try {
        const product = await Model.find({ likes: { eg: 50 } }).limit(16).skip(Number(page)).lean().exec();
        const count = await Model.find().count();
        res.send({ product, count })

    } catch (err) {
        console.log(err)
    }
})

app.listen(2323, () => {
    connect()

    console.log('server started')
})