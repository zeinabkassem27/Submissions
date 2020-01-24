var express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
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

app.post('/movies/add', (req, res) => {
    let new_title = req.body.title,
        new_year = req.body.year,
        new_rate = req.body.rating;
    if (new_title && new_year.length == 4) {
        if (parseInt(new_rate)) {
            movies.push({
                title: new_title,
                year: parseInt(new_year),
                rating: parseFloat(new_rate)
            });
        } else {
            movies.push({
                title: new_title,
                year: parseInt(new_year),
                rating: 4
            })
        }
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

app.delete('/movies/delete/:ID', (req, res) => {
    let index = req.params.ID;
    if (parseInt(index) < movies.length && parseInt(index) >= 0) {
        movies.splice(parseInt(index), 1)
        res.json({
            status: 200,
            message: "delete " + index + " index from array",
            data: movies
        });
    } else {
        res.json({
            status: 404,
            error: true,
            message: "the movie " + parseInt(index) + " does not exist"
        });

    }

});

app.get('/movies/read/:ID', (req, res) => {
    let choice = req.params.ID,
        my_data, flag = 0;
    switch (choice) {
        case 'by-date':
            flag = 1;
            my_data = movies.sort((a, b) => a.year - b.year);
            break;
        case 'by-rating':
            flag = 1;
            my_data = movies.sort((a, b) => a.rating - b.rating);
            break;
        case 'by-title':
            flag = 1;
            my_data = movies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            res.json({
                status: 400,
                message: "wrong url"
            });
    }
    if (flag == 1)
        res.json({
            status: 200,
            data: movies
        });

});

app.get('/movies/id/:ID', (req, res) => {
    let index = parseInt(req.params.ID);
    if (index >= 0 && index < movies.length) {
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

app.put('/movies/update/:ID', (req, res) => {
    let update_id = req.params.ID,
        update_year = req.body.year,
        update_rate = parseFloat(req.body.rating)
    update_title = req.body.title;
    let flag = 0;
    if (parseInt(update_id) < movies.length && parseInt(update_id) >= 0) {
        if (update_title) {
            movies[update_id].title = update_title;
            flag = 1;
        }
        if (update_rate) {
            movies[update_id].rating = update_rate;
            flag = 1;
        }
        if (update_year && update_year.length == 4) {
            movies[update_id].year = parseInt(update_year);
            flag = 1;
        }
        if (flag == 1) {
            res.json({
                status: 200,
                message: "update took place in index " + update_id,
                data: movies[update_id]
            })
        } else {
            res.json({
                status: 404,
                message: " wrong entering data"
            })

        }
    } else {
        res.json({
            status: 404,
            message: " wrong index"
        })

    }
});
// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(5050);