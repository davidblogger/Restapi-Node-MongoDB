//Importar mongodb
import MongoClient from 'mongodb';

//Function para conectarse a la base de datos
export async function connect(){
	try{
		const client = await MongoClient.connect('mongodb://localhost:27017', {
			 useUnifiedTopology: true
		});
		const db = client.db('node-restapi');
		console.log('DB is connected');
		return db;
	} catch(e){
		console.log(e);
	}
}