const express = require("express");

const app = express();


const PORT = 3000;

app.get('/',(req, res) =>{
    return res.json({message: 'using the node.js app for docker'})
})

app.listen(PORT,() =>{
    console.log(`server is running on the PORT ${PORT}`);
})