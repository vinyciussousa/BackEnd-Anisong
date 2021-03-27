const mongoose = require('mongoose');

const ListaSchema = new mongoose.Schema(
	{
		obra: String,
		code: String,
		nome: String
	}
);

module.exports = mongoose.model('Lista', ListaSchema);