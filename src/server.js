//Importar express
import express from 'express';
const app = express();

//Routes
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

//Settings
app.set('port', process.env.PORT || 3000);

//Utilizar las rutas
app.use(IndexRoutes);
app.use('/task', TaskRoutes);

export default app;
