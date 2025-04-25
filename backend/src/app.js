import express from 'express';
import indexRoutes from './routes/indexRoutes.js';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use('/api', indexRoutes);

app.listen(app.get('port'));
console.log('Server on port: ', app.get('port'));