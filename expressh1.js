var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views/img'));

app.get('/computer', function (req, res) {
    res.render('computer', {
        computers: [
            {
                name: 'Windows',
                pic: '1.JPG'
            },
            {
                name: 'OSX',
                pic: '2.jpg'
            },
            {
                name: 'Android',
                pic: '3.jpg'
            },
            {
                name: 'IOS',
                pic: '4.jpg'
            }
        ]
    })
})
app.listen(8000)