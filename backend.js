const express = require('express')
const mysql = require('mysql')
var cors = require('cors')
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express()
const port = 22002

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('kepek'))


var connection
function kapcsolat(){
    connection = mysql.createConnection({
        host: '192.168.255.103',
        user: 'u68_q3yqrm9NFQ',
        password: 'TjVUSwJHH@QO9pN^dXZJpCgn',
        database: 's68_db'
    })
    connection.connect()
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/etelek', (req, res) => {
  kapcsolat()

  connection.query('SELECT * FROM etelek', (err, rows, fields) => {
  if (err) throw err

  console.log(rows)
  res.send(rows)
})

connection.end()
})


app.get('/etelekajanlat', (req, res) => {
  kapcsolat()

  connection.query('SELECT * FROM etelek INNER JOIN eteltipusok ON etelek_tipus=eteltipusok_id WHERE etelek_ajanlat!=0 ORDER BY etelek_ajanlat ASC;', (err, rows, fields) => {
  if (err) throw err

  console.log(rows)
  res.send(rows)
})

connection.end()
})


app.get('/eteltipusok', (req, res) => {
    kapcsolat()
  
    connection.query('SELECT * FROM eteltipusok', (err, rows, fields) => {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
})
  
  connection.end()
})


//INSERT INTO etelek VALUES (NULL, 'alma', 4, '1.jpg');
/*app.post('/felviteletel', (req, res) => {
  kapcsolat()
  
  connection.query(`INSERT INTO etelek VALUES (NULL, 'alma', 4, '1.jpg')`, (err, rows, fields) => {
  if (err){
    console.log("Hiba")
    res.send("Hiba")
  }
  else{
    console.log("Sikeres felvitel")
    res.send("Sikeres felvitel")
  }
  
  
  
  
  })
  connection.end() 
  })*/

  
//képfelöltés----------------------------
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './kepek');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.array('photo', 3), (req, res) => {
  console.log('file', req.files);
  console.log('body', req.body);
//adatb-be való felvitel-----------------
kapcsolat()
  
  connection.query(`INSERT INTO etelek VALUES (NULL, '${req.body.bevitel1}', ${req.body.bevitel2}, '${req.files[0].filename}', '${req.body.bevitel3}', '${req.body.bevitel4}', '${req.body.bevitel5}', '',  0)`, (err, rows, fields) => {
  if (err){
    console.log("Hiba")
    res.send("Hiba")
  }
  else{
    console.log("Sikeres felvitel")
    res.send("Sikeres felvitel")
  }
  
  
  
  
  })
  connection.end() 
//adatb felvitel vége
  
});


//képfeltöltés vége----------------------


app.post('/keresetelszoveg', (req, res) => {
  kapcsolat()

  connection.query(`SELECT * FROM etelek WHERE etelek_nev like "%${req.body.bevitel1}%"`, (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })
connection.end() 
})

app.post('/kereseteltipus', (req, res) => {
  kapcsolat()

  connection.query(`SELECT * FROM etelek WHERE etelek_tipus = ${req.body.bevitel2}`, (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })
connection.end() 
})

//---------------------------------------Erik-----------------------------------------------------------------

app.get('/megye', (req, res) => {
    
    kapcsolat()
    connection.query('SELECT * FROM megye', (err, rows, fields) => {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    connection.end() 
    })


app.post('/kereskommentek', (req, res) => {
kapcsolat()

connection.query(`SELECT * FROM kommentek WHERE komment_szoveg like "%${req.body.bevitel1}%"`, (err, rows, fields) => {
if (err) throw err

console.log(rows)
res.send(rows)
})
connection.end() 
})


app.post('/keresetterem', (req, res) => {
kapcsolat()

connection.query(`SELECT * FROM uzlet WHERE uzlet_nev like "%${req.body.bevitel1}%"`, (err, rows, fields) => {
if (err) throw err

console.log(rows)
res.send(rows)
})
connection.end() 
})







//------Gábor
app.get('/uzlettipus', (req, res) => {
    
  kapcsolat()
  connection.query('SELECT * FROM uzlettipus', (err, rows, fields) => {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  connection.end() 
  })

app.post('/keresszoveg', (req, res) => {
kapcsolat()

connection.query(`SELECT * FROM uzlet INNER JOIN varos ON uzlet.varosok_id = varos.varos_id WHERE varos_nev like "%${req.body.bevitel1}%"`, (err, rows, fields) => {
if (err) throw err

console.log(rows)
res.send(rows)
})
connection.end() 
})

app.get('/uzlet', (req, res) => {
    
kapcsolat()
connection.query('SELECT * FROM uzlet', (err, rows, fields) => {
  if (err) throw err

  console.log(rows)
  res.send(rows)
})
connection.end() 
})

app.post('/keresuzlet', (req, res) => {
kapcsolat()

connection.query(`SELECT * FROM uzlet INNER JOIN varos ON uzlet.varosok_id = varos.varos_id WHERE uzlettipus = ${req.body.bevitel1}`, (err, rows, fields) => {
if (err) throw err

console.log(rows)
res.send(rows)
})
connection.end() 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})