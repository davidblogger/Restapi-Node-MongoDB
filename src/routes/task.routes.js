import { Router } from 'express';
const router = Router();

//Database connection
import {connect} from '../database';

//Listar
router.get('/', async (req, res) => {
	const db =  await connect();
	const result = await db.collection('tasks').find({}).toArray();
	console.log(result);
	//res.send('Tasks');
	res.json(result);
});

//Enviar datos
router.post('/', async (req, res) => {
	const db = await connect();
	res.send('Task created');
});

export default router;