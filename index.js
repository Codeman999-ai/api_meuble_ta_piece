const express = require('express');
const app = express();

const items = require("./meubles.json");

// NOUVEAU : renvoie tout le catalogue (utilisé par Unity pour construire la grille)
app.get('/items', (req, res) => {
    res.json({ items: items.items });
});

// Renvoie un seul meuble par son id (inchangé)
app.get('/items/:id', (req, res) => {
    const idRecherche = req.params.id;

    const meubleTrouve = items.items.find(item => item.id === idRecherche);

    if (meubleTrouve) {
        res.json(meubleTrouve);
    }
    else {
        res.status(404).json({ message: "Désolé, ce meuble n'existe pas." });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur prêt sur le port ${PORT}`);
});
