const express=require('express');
const conectarDB=require('./config/db');
const cors=require('cors');

console.log('desde index2.js')

//creamos servidor

const app=express();

//conectamos la bbdd
conectarDB();
app.use(cors());

app.use(express.json());


//definimos ruta

app.get('/',(req,res)=>{
    res.send("Todo funciona correctamente")
})
app.use('/api/productos',require('./routes/producto'));


app.listen(4000,()=>{
    console.log("el servidor esta funcionando correctamente")
})