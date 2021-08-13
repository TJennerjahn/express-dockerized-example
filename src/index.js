const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    return res.send({message: 'Docker is easy 🐳'});
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));