const mongoose = require('mongoose');

const url = "mongodb+srv://root:root@atlascluster.brqpn5z.mongodb.net/CERL?retryWrites=true&w=majority&appName=AtlasCluster"
 
mongoose.connect(url)
.then((result)=> {
    console.log("Server Connected");
}).catch((err) => {
    console.log("error");
})
 module.exports = mongoose;