//Importar server.js
import app from './server';

//Importar conexion a la bd
import { connect } from './database';

async function main(){
	await app.listen(app.get('port'));
	await connect();
	console.log('Server on port', 3000);
}

main();