const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://Joshua:qwerty123456@ac-sfucm5l-shard-00-00.adz9f2y.mongodb.net:27017,ac-sfucm5l-shard-00-01.adz9f2y.mongodb.net:27017,ac-sfucm5l-shard-00-02.adz9f2y.mongodb.net:27017/petdb?ssl=true&replicaSet=atlas-tq7irz-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{

    console.log("MongoDB Connected")

})
.catch((error)=>{

    console.log(error)

})

const Pet = mongoose.model("PetBoarding",new mongoose.Schema({

    bookingId:String,
    petName:String,
    petType:String,
    breed:String,
    age:String,
    weight:String,
    vaccinationStatus:String,
    ownerName:String,
    ownerPhone:String,
    ownerEmail:String,
    checkInDate:String,
    checkOutDate:String,
    kennelNumber:String

}))

app.post("/add-pet",async(req,res)=>{

    try{

        await Pet.create(req.body)

        res.json({

            status:"success",
            message:"Pet Added Successfully"

        })

    }

    catch(error){

        res.json({

            status:"error",
            message:error.message

        })

    }

})

app.listen(3000,()=>{

    console.log("Server Started")

})