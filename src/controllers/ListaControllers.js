const mongoose = require('mongoose');
const Lista = require ('/home/runner/DotingMeaslyAstronomy/src/models/Lista');

module.exports = {
	
	async show(req, res) {
		let Listas = await Lista.findById(req.params._id, function (err, doc) {
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
		let Listas = await Lista.find({ obra : {'$regex' : req.query.obra, '$options' : 'i'} }, function (err, doc) {
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
		let Listas = await Lista.find();
		return res.json(Listas);
	},
	async show4(req, res) {
		console.log("Entrou em show4")
	let Listas = await Lista.find({code : req.params.code}, function (err, doc) {
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
	async show5(req, res) {
		let Listas = await Lista.find({nome : {'$regex' : req.params.nome, '$options' : 'i'}}, function (err, doc) {
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
	async store(req, res) {
		const Listaa = await Lista.create(req.body);
		return res.json(Listaa);
	},
	async remove(req, res) {
		const batata = await Lista.findByIdAndRemove(req.params._id, function (err, result) { 
    if (err){ 
        console.log(err)
				return res.json(err);
    } 
    else{ 
        console.log(result);
				return res.json(result);
    } 
});
	},
	async update(req, res) {
		await Lista.findByIdAndUpdate(req.body._id, req.body, (err, todo) => {
					if (err) return res.status(500).send(err);
					return res.json(todo);
			}
		)
	}
}