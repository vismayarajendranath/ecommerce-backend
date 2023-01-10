const mongoose = require('mongoose')

// to connect to database
mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log('MongoDb Connected Successfully...');
})

//create model to store all product
const Item =mongoose.model('Item',{
    id:Number,
    name:String,
    photograph:String,
    description:String
   
    
    
   

})
// for using model export 
module.exports={
    Item
}