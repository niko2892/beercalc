const express = require('express');
const app = express();
const port = 60000;

const beers = [
    {
        id: 1,
        title: "Охота крепкая",
        alcoholStrength: 7
    },
    {
        id: 2,
        title: "Балтика 3",
        alcoholStrength: 4.5
    }
]

app.get('/api/v1/greeting', (req, res) => {
	res.json({"data":"Привет, мой юный почитатель пиваса!"});
	}
);

app.get('/api/v1/beers/list', (req, res) => {
    console.log('Вызвали /api/v1/beerslist , Возвращаю список марок пива');
    res.json(beers);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
