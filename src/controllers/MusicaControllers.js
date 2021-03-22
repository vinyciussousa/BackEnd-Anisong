const mongoose = require('mongoose');
const Musica = require ('/home/runner/DotingMeaslyAstronomy/src/models/Musica');

module.exports = {
	
	async show(req, res) {
		let Musicas = await Musica.findById(req.params._id, function (err, doc) {
			if (err){
				console.log(err);
				return res.json(err);
			}
			else {
				console.log(doc);
				return res.json(doc);
			}
		});
	},
	async show2(req, res) {
		let Musicas = await Musica.find({ obra : req.query.obra }, function (err, doc) {
			if (err){
				console.log(err);
				return res.json(err);
			}
			else {
				console.log(doc);
				return res.json(doc);
			}
		});
	},
	async show3(req, res) {
		let Musicas = await Musica.find();
		return res.json(Musicas);
	},
	async store(req, res) {
		const Musicaa = await Musica.create(req.body);
		return res.json(Musicaa);
	},
	async remove(req, res) {
		const batata = await Musica.findByIdAndRemove({_id : req.query._id}, function (err, result) { 
    if (err){ 
        console.log(err)
    } 
    else{ 
        console.log(result);
    } 
});
	},
	async update(req, res) {
		await Musica.findByIdAndUpdate(req.body._id, req.body, (err, todo) => {
					if (err) return res.status(500).send(err);
					return res.json(todo);
			}
		)
	}
}