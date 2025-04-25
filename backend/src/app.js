import express from 'express';
import fileUpload from 'express-fileupload';
import indexRoutes from './routes/indexRoutes.js';
import imagesRoutes from './routes/imagesRoutes.js';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(fileUpload({
  tempFileDir: '/temp'
}));
app.use('/api', indexRoutes);
app.use('/api', imagesRoutes);

app.listen(app.get('port'));
console.log('Server on port: ', app.get('port'));