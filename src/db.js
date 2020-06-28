const mysql = require('mysql2')
const express = require('express')
let app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flowershop',
    multipleStatements: true
})

/*pool.connect((err) => {

    if (!err) 
        console.log('BD connection succeded')
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2))
})*/

app.listen(3000, () => console.log('Express server is running at post 3000'))

// Get all bouquets
app.get('/bouquets', (req, res) => {
    pool.query('SELECT * from bouquets', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

// Get a bouquet
app.get('/bouquets/:id', (req, res) => {
    pool.query('SELECT * from bouquets WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

//mysqlConnection.end()

// Delete a bouquet
app.delete('/bouquets/:id', (req, res) => {
    pool.query('DELETE FROM bouquets WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete succesfully')
        }
        else {
            console.log(err)
        }
    })
})

// Insert a bouquet
app.post('/bouquets', (req, res) => {
    let d = req.body
    let sql = 'INSERT INTO bouquets (title, full_price, price, category, rating, img)  VALUES (?,?,?,?,?,?)';
    pool.query(sql, [d.title, d.full_price, d.price, d.category, d.rating, d.img], (err, rows, fields) => {
        if (!err) {
            /*rows.forEach(element => {
                if (element.constructor == Array)
                    res.send('Inserted item id ' + element[0].id)
            })*/
            res.send('Success insert')
        }
        else {
            console.log(err)
        }
    })
})

// UPDATE a bouquet
app.put('/bouquets/:id', (req, res) => {
    let d = req.body
    let sql = 'UPDATE bouquets SET title = ? WHERE id = ?';
    pool.query(sql, ["945", req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Update complete')
        }
        else {
            console.log(err)
        }
    })
})

//pool.end()
