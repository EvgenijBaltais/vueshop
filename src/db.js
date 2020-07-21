const mysql = require('mysql2')
const express = require('express')
let app = express()
const bodyparser = require('body-parser')
const PoolCluster = require('mysql2/lib/pool_cluster')

app.use(bodyparser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  const pool = mysql.createPool({
    connectionLimit: 5,
    host: '79.174.12.75',
    user: 'flowers',
    password: 'M2c4J6v3',
    database: 'flowers',
    multipleStatements: true
})

app.listen(3000, () => console.log('Express server is running at post 3000'))

// Get all products
app.get('/products', (req, res) => {
    pool.query('SELECT * from products limit ' + req.query.limit + '', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

// Get all prices
app.get('/prices', (req, res) => {
    pool.query('SELECT price from products', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

// Get more products
app.get('/getMoreProducts', (req, res) => {
    pool.query('SELECT * from products where id > ' + req.query.from + ' limit 6', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

// Get selected products
app.get('/selectProducts', (req, res) => {
    pool.query('SELECT * from products where color_variants = ?', [req.query.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

// Get all colors
app.get('/colors', (req, res) => {
    pool.query('SELECT * from color_variants', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

// Get a product
app.get('/products/:id', (req, res) => {
    pool.query('SELECT * from products WHERE id = ?',[req.query.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

app.get('/getMenu', (req, res) => {
    pool.query('SELECT * FROM menu', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

app.get('/getSubMenu', (req, res) => {
    pool.query('SELECT * FROM submenu', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err)
        }
    })
})

app.get('/subscribe', (req, res) => {
   if (!req.query.email || req.query.email.indexOf('@') == -1 || req.query.email.length < 5) return false

    let a = pool.query('SELECT * FROM email_subscribers where email LIKE ?', req.query.email, (err, rows, fields) => {
        if (err) {
            res.send('Ошибка!')
            return false
        }
        if (rows.length == 0){
            let sql = 'INSERT INTO email_subscribers (id, email, name, all_clients_key) VALUES (DEFAULT,?,DEFAULT,DEFAULT)'
            pool.query(sql, req.query.email, (err, rows, fields) => {
                if (!err) {
                    res.send('Успешно!')
                }
                else {
                    console.log(err)
                }
            })
            return false
        }
        rows[0].email == req.query.email ? res.send('Ваш id-' + rows[0].id) : ''
    })
})

//mysqlConnection.end()

// Delete a product
app.delete('/products/:id', (req, res) => {
    pool.query('DELETE FROM products WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete succesfully')
        }
        else {
            console.log(err)
        }
    })
})

// Insert a product
app.post('/products', (req, res) => {
    let d = req.body
    let sql = 'INSERT INTO products (title, full_price, price, category, rating, img)  VALUES (?,?,?,?,?,?)';
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

// UPDATE a product
app.put('/products/:id', (req, res) => {
    let d = req.body
    let sql = 'UPDATE products SET title = ? WHERE id = ?';
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
