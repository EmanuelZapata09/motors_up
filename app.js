//Importando librerias o paquetes
const express = require('express');
const exphbs = require('express-handlebars');

//https://colorlib.com/wp/free-admin-templates/



//instalar hbs: motor de plantillas de node
const hbs = require('hbs')

const path = require('path');

const app = express(); //Especificar la funcion 

app.set('port', process.env.PORT || 8181);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'menu',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

const port= 8181 //Definir el puerto de la aplicacion

app.use(express.static(path.join(__dirname, 'public')));
//Directorio de paginas estaticas
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('/public/build/css'))



///Configuracion de vistas del hbs
//app.set('views',path.join(__dirname+'/public/views'))
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerPartials(__dirname+'./public/build/css')

app.set('view engine','hbs');

//Escuchar el puerto
app.listen(port,()=>{
    console.log(`Escuchando por el puerto ${port}`)
})

//La pagina que por defecto se cargará 
app.get('/',(req,res)=>{
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('index', {
        titulo:'index'
    })
    
})
app.get('/roles',(req,res)=>{
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('roles', {
        titulo:'index'
    })
    
})
//ERROR 404
//Direccionamieno pagina de Roles
app.get('/anadirRol',(req,res)=>{
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('anadirRol', {
        titulo:'Home',
        nombre: ' Emanuel Zapaa'
    })
    
})

//Direcionamiento pagina de permisos
app.get('/permisos',(req,res)=>{
    res.render('permisos')
    
})
//Direcionamiento pagina de anadirPermisos
app.get('/anadirPermisos',(req,res)=>{
    res.render('anadirPermisos')
    
})
//Direccionamiento pagina Usuarios
app.get('/usuarios',(req,res)=>{
    res.render('usuarios')
    
})
//Direccionamiento pagina anadirUsuarios
app.get('/anadirUsuarios',(req,res)=>{
    res.render('anadirUsuarios')
    
})

//direccionamiento a la pagina de productos
app.get('/productos',(req,res)=>{
    res.render('productos')
    
})
//direccionamiento a la pagina de anadirProductos
app.get('/anadirProducto',(req,res)=>{
    res.render('anadirProducto')
    
})
//direccionamiento a la pagina de vehiculos
app.get('/vehiculos',(req,res)=>{
    res.render('vehiculos')
    
})

//direccionamiento a la pagina de anadirVehiculos
app.get('/anadirVehiculos',(req,res)=>{
    res.render('anadirVehiculos')
    
})
//direccionamiento a la pagina de cotizaciones
app.get('/cotizaciones',(req,res)=>{
    res.render('cotizaciones')
    
})
//direccionamiento a la pagina de anadirCotizaciones
app.get('/anadirCotizaciones',(req,res)=>{
    res.render('anadirCotizaciones')
    
})

//direccionamiento a la pagina de gestion de compras 
app.get('/gestionCompras',(req,res)=>{
    res.render('gestionCompras')
    
})
//direccionamiento a la pagina de anadirCompra
app.get('/anadirCompra',(req,res)=>{
    res.render('anadirCompra')
    
})
//direccionamiento a la pagina de proveedor
app.get('/proveedor',(req,res)=>{
    res.render('proveedor')
    
})
//direccionamiento a la pagina de anadirProveedor
app.get('/anadirProveedor',(req,res)=>{
    res.render('anadirProveedor')
    
})

//direccionamiento a la pagina de clientes
app.get('/clientes',(req,res)=>{
    res.render('clientes')
    
})
//direccionamiento a la pagina de anadirCliente
app.get('/anadirCliente',(req,res)=>{
    res.render('anadirCliente')
    
})

//direccionamiento a la pagina de gestionServicio
app.get('/gestionServicio',(req,res)=>{
    res.render('gestionServicio')
    
})

//direccionamiento a la pagina de categoriaServicio
app.get('/categoriaServicio',(req,res)=>{
    res.render('categoriaServicio')
    
})

//direccionamiento a la pagina de empleado
app.get('/empleado',(req,res)=>{
    res.render('empleado')
    
})

//direccionamiento a la pagina de gestionVentas
app.get('/gestionVentas',(req,res)=>{
    res.render('gestionVentas')
    
})

//direccionamiento a la pagina de anadirServicio
app.get('/anadirServicio',(req,res)=>{
    res.render('anadirServicio')
    
})

//direccionamiento a la pagina de anadirCategoria
app.get('/anadirCategoria',(req,res)=>{
    res.render('anadirCategoria')
    
})

//direccionamiento a la pagina de anadirEmpleado
app.get('/anadirEmpleado',(req,res)=>{
    res.render('anadirEmpleado')
    
})

//direccionamiento a la pagina de anadirVenta
app.get('/anadirVenta',(req,res)=>{
    res.render('anadirVenta')
    
})

//direccionamiento a la pagina de agendamiento
app.get('/agendamiento',(req,res)=>{
    res.render('agendamiento')
    
})

//Pagina contacto
app.get('/contacto',(req,res)=>{
    res.render('contacto',{
        contacto: 3050488022,
        ubicacion: "Calle 77C #92.33"
    })
})

app.get('/mision',(req,res)=>{
    res.render('mision')
})
// app.get('/menu',(req,res)=>{
//     //res.sendFile(__dirname+'/public/contacto.hbs')
//     res.render('menu',{
        
//     })
// })

app.get('*',(req,res)=>{
    res.render('404')
})
//Metodos HHTTP:

//GET = CONSULTAR
//POST = INSERTAR
//PUT =MODIFICAR
//DELETE = ELIMINAR

//HTTP: hypertextransferprotocol