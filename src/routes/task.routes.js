import { Router } from 'express';
const router = Router();

//Database connection
import {connect} from '../database';
import {ObjectID} from 'mongodb';

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
	//console.log(req.body);
	const task = {
		title: req.body.title,
		description: req.body.description
	};
	const result = await db.collection('tasks').insert(task);
	res.json(result.ops[0]);
});

//Consultar por id
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const db = await connect();
	const result = await db.collection('tasks').findOne({ _id: ObjectID(id) })
	//console.log(id);
	res.json(result);
});

//Eliminar
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const db = await connect();
	const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
	res.json({
		message: `Task ${id} deleted`,
		result
	})
});

//Actualizar
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const updateTask = {
		title: req.body.title,
		description: req.body.description
	};
	const db = await connect();
	await db.collection('tasks').updateOne({_id:ObjectID(id)}, {$set: updateTask});
	res.json({
		message: `Task ${id} Updated`
	})
})

export default router;
