var express = require("express");
var app = express();
const movies = [{
        title: 'Jaws',
        year: 1975,
        rating: 8
    },
    {
        title: 'Avatar',
        year: 2009,
        rating: 7.8
    },
    {
        title: 'Brazil',
        year: 1985,
        rating: 8
    },
    {
        title: 'الإرهاب والكباب‎',
        year: 1992,
        rating: 6.2
    }
];

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/test', (req, res) => {
    res.json({
        status: 200,
        message: "hello"
    });
});

app.get('/time', (req, res) => {
    res.json({
        status: 200,
        message: new Date().getHours() + ":" + new Date().getMinutes()
    });
});

app.get('/hello/:ID', (req, res) => {
    res.json({
        status: 200,
        message: "hello " + req.params.ID
    });
});

app.get('/search', (req, res) => {
    const s = req.query.s;
    if (s)
        res.json({
            status: 200,
            message: "ok",
            data: s
        });
    else {
        res.status(500).json({
            status: 500,
            error: true,
            message: "you have to provide a search"
        })
    }
});

app.get('/movies/read', (req, res) => {
    res.json({
        status: 200,
        data: movies
    });
});

app.get('/movies/add', (req, res) => {
    let new_title = req.query.title,
        new_year = req.query.year,
        new_rate = req.query.rating;
    if (new_title && new_year && parseInt(new_year).length==4) {
        if (parseInt(new_rate)){
            movies.push({
                title: new_title,
                year: parseInt(new_year),
                rating: parseInt(new_rate)
            });
        }
        else{
            movies.push({
                title: new_title,
                year: parseInt(new_year),
                rating:4
            })}
        res.json({
            status: 200,
            message: "added into array",
            data: movies
        });

    } else {
        res.json({
            status: 403,
            message: "wrong"
        });

    }
});
app.get('/movies/create', (req, res) => {
    res.json({
        status: 200,
        message: "creation"
    });
});
app.get('/movies/delete', (req, res) => {
    res.json({
        status: 200,
        message: "deletion"
    });
});

app.get('/movies/read/by-date', (req, res) => {
    res.json({
        status: 200,
        data: movies.sort((a, b) => a.year - b.year)
    });
});

app.get('/movies/read/by-rating', (req, res) => {
    res.json({
        status: 200,
        data: movies.sort((a, b) => a.rating - b.rating)
    });
});
app.get('/movies/read/by-title', (req, res) => {
    res.json({
        status: 200,
        data: movies.sort((a, b) => a.title.localeCompare(b.title))
    });
});

app.get('/movies/id/:ID', (req, res) => {
    let index = parseInt(req.params.ID);
    if (index && index < movies.length) {
        if (index < movies.length) {
            res.json({
                status: 200,
                data: movies[index]
            });
        }
    } else { //wrong request
        res.status(404).json({
            status: 404,
            error: true,
            message: "the movie " + index + " doesn't exist"
        });
    }
});


// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(5050);