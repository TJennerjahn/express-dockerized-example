const app = require('express')();

app.get('/', (req, res) => {
    return res.send({message: 'docker is easy'});
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));