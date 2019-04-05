const express = require('express');
const app = express();
require('dotenv').config();
const {customRoles} = require('./database/services');

async function ja(){
    try {
        const data = await customRoles.addCustomRol(
            {name:'je'}                
                );
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

ja();


const {PORT} = process.env;


app.listen(PORT,()=>{
    console.log(`Server on por ${PORT}`)
})
