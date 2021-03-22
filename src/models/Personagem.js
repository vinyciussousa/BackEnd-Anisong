const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema(
	{
		nome: String,
		estado: String,
		edotensei: Boolean
	}
);

module.exports = mongoose.model('Personagen', PersonagemSchema);