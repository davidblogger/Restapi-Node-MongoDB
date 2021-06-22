//Importar express
import express, {json} from  'express';
const app = express();

//Routes
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(json());

//Utilizar las rutas
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;
