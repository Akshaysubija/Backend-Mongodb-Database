const {default: mongoose } = require("mongoose")


const connectDB =async()=>{
try {
    await mongoose.connect("mongodb+srv://Akshay-Kolliyan-8891:MySecPassword@cluster0.owtrd.mongodb.net/userDB");
    console.log("db connected sucessfully in cloud");
}catch(error) {
    console.log(error);
}

};

module.exports = {connectDB}

