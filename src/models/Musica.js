const mongoose = require('mongoose');

const MusicaSchema = new mongoose.Schema(
	{
		obra: String,
		code: String,
		nome: String
	}
);

module.exports = mongoose.model('Musica', MusicaSchema);