// Importando la biblioteca
// habdlebars
import { engine as exphbs } from 'express-handlebars';
import path from 'path';

// Crear una funcion de configuracion
// que exportaremos por defecto
export default (app) => {
  // Agregando un nuevo motor de plantillas
  // compatible con consolidate.js
  app.engine(
    'hbs',
    exphbs({
      // Definir la extension de la plantillas
      extname: '.hbs',
      // Estableciendo el layout por defecto
      defaultLayout: 'main',
    })
  );
  // Seleccionando el motor de plantillas que integramos
  // anteriormente
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  // Se retorna la instancia recibida como argumento
  return app;
};
