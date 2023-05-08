//Importando la biblioteca
//hanbdlebars
import { engine as exphbs } from 'express-handlebars';
import path from 'path';

//crear una función de configuración
//que exportaremos por defecto
export default ( app ) => {
    //registrando un nuevo motor de platillas 
    //compatible con consolidate.js
    app.engine(
        'hbs', 
        exphbs({
        //Definir la Extencion de las platillas 
        extname: '.hbs',
        //El layout por defecto 
        defaultLayout: 'main',

    }),
    );

    //Seleccionando el motor de platillas que integramos 

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '..', 'views'));

    //Se retorna la instancia recibida como argumento 
    return app;
};