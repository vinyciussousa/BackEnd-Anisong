const mongoose = require('mongoose');
const Personagem = require ('/home/runner/DotingMeaslyAstronomy/src/models/Personagem');

module.exports = {
	
	async show(req, res) {
		let personagens = await Personagem.findById(req.params._id, function (err, doc) {
			if (err){
				console.log(err);
				return res.json(err);
			}
			else {
				console.log(doc);
				return res.json(doc);
			}
		});
		// return res.json(personagens);
	},
	async show2(req, res) {
		let personagens = await Personagem.find({ nome : req.query.nome }, function (err, doc) {
			if (err){
				console.log(err);
				return res.json(err);
			}
			else {
				console.log(doc);
				return res.json(doc);
			}
		});
		// return res.json(personagens);
	},
	async show3(req, res) {
		let personagens = await Personagem.find();
		return res.json(personagens);
	},
	async store(req, res) {
		const personagemm = await Personagem.create(req.body);
		return res.json(personagemm);
	},
	async remove(req, res) {
		const batata = await Personagem.findByIdAndRemove({_id : req.query._id}, function (err, result) { 
    if (err){ 
        console.log(err)
    } 
    else{ 
        console.log(result);
    } 
});
	},
	async update(req, res) {
		await Personagem.findByIdAndUpdate(req.body._id, req.body, (err, todo) => {
					if (err) return res.status(500).send(err);
					return res.json(todo);
			}
		)
	}
}