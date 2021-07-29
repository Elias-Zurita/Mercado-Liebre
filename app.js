const express= require("express"); // requiere el modulo express //
const path= require("path") // requiere le modulo path que viene con node
const port= process.env.PORT || 3030

const app= express();  // guardar la funcion de express en una variable llamada "app" //

app.listen(port,()=> {   // levantamos el servidor en el puerto 3030 //
    console.log("Servidor corriendo en el puerto 3030");  // si esta levantado en ese puerto muestra el mensaje ese //
})

const publicPath= path.resolve(__dirname, "./public"); //guarda en una variable la ruta hacia la carpeta public desde el archivo js //
app.use(express.static(publicPath)); //dice que todos los archivos dentro de la carpeta public seran estaticos para luego poder usarlos con mayor facilidad //

app.get("/", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/home.html")); // Sirve para que se muestre todo lo realizado en el HTML (seria como la respuesta de lo que se tiene que ver) //
})

app.get("/register.html", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/register.html")); //Sirve para que se muestre todo lo realizado en el register.html //
})

app.get("/login.html", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/login.html")); //Sirve para que se muestre todo lo realizado en el login.html //
})