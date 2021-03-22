const express = require('express');
const config = require('./config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fakeHMR = require('./fake-hmr');
const mongoose = require('mongoose');
const compiler = webpack(webpackConfig);
const personagemController = require('/home/runner/DotingMeaslyAstronomy/src/controllers/PersonagemControllers');
const musicaController = require('/home/runner/DotingMeaslyAstronomy/src/controllers/MusicaControllers');
const bodyParser = require("body-parser");

const watching = compiler.watch({
  // Example watchOptions
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => { // Stats Object
  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }))
  if (stats.hasErrors()) {
    console.log('didn\' t build')
    return;
  }
  console.log('built');
  fakeHMR.built();
});

const app = express();
mongoose.connect('mongodb+srv://dwa:databaseteste123@cluster0.ysr3b.mongodb.net/DWA?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
fakeHMR.config({ app });
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

// require('./webpackRunner');

// Testes Iniciais

// app.get('/api/personagens/jiraya', (req, res) => {
//   res.json({
// 		nome : "Jiraya",
// 		estado : "Morto",
// 		edotensei : "false"
// 	})
// });

// app.post('/api/personagens/kurama', (req, res) => {
// 		res.json(req.body);
//     res.sendStatus(200);
// });

// Funções de operação Mongoose CRUD

app.get('/api/personagens/:_id', personagemController.show);

app.get('/api/personagens', personagemController.show2);

app.get('/api/p', personagemController.show3);

app.get('/api/musicas/:_id', musicaController.show);

app.get('/api/musicas', musicaController.show2);

app.get('/api/m', musicaController.show3);

app.post('/api/personagens', personagemController.store);

app.post('/api/musicas', musicaController.store);

app.delete('/api/personagens', personagemController.remove);

app.delete('/api/musicas', musicaController.remove);

app.put('/api/personagens', personagemController.update);

app.put('/api/musicas', musicaController.update);

app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});