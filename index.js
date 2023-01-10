const express = require('express')

const cors = require('cors')

const dataservice =require ('./services/dataservice')

const app = express()

app.use(cors({
    origin:'http://localhost:4200'
}))

//to parse JSON
app.use(express.json())


app.listen(3000,()=>{
    console.log('server started at 3000');
})

app.get('/all-products',(req,res)=>{


    dataservice.getProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/viewProduct/:id',(req,res)=>{
    dataservice.viewproduct(req.params.id)
    .then((result)=>{
        console.log('id',result);
        res.send(result)
    })
})