const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    res.status(200).send({ message: 'Webhook received successfully!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Webhook server running at http://localhost:${PORT}/webhook`);
});
