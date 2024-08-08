const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const apiServer = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT_APP = process.env.PORT_APP || 5080;
const PORT_API = process.env.PORT_API || 5891;

// Configuration pour servir l'application React
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configuration pour servir l'API JSON
apiServer.use(middlewares);
apiServer.use(router);

// Démarrer le serveur pour l'application React
app.listen(PORT_APP, () => {
  console.log(`React app is running on port ${PORT_APP}`);
});

// Démarrer le serveur pour l'API JSON
apiServer.listen(PORT_API, () => {
  console.log(`JSON API is running on port ${PORT_API}`);
});