const db = require('./db')

//get all products from db
const getProducts = ()=>{
    return db.Item.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No product found'
                }
            }
        }
    )
}

const viewproduct=(id)=>{
    return db.Item.findOne({
        id
    })
    .then((result)=>{
        console.log('id',result);
        return result
    })
}




module.exports ={
    getProducts,
    viewproduct
    
    
}