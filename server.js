const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database(
  './employee.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);

    console.log('connection succesful');
  }
);

app.get('/view', function (request, response) {
  const sql = 'SELECT * FROM Cars';
  var rows;
  db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
      console.log(rows);
    });
    response.send(rows);
  });
});

app.post('/savedetails/:param', function (request, response) {
  var data = request.params.param.split(';');

  const sql =
    "INSERT into Cars (marka, ev, km, hasznalt, muszaki, rendszam, motor, loero, gyorsulas, sebesseg, fordulat, suly, sebvaltoTipus, sebvaltoSzam, fogyasztas, benzin, biztonsag, atalakitas, kiegeszites) values ('" +
    data[0] +
    "', '" +
    data[1] +
    "', '" +
    data[2] +
    "', '" +
    data[3] +
    "', '" +
    data[4] +
    "', '" +
    data[5] +
    "', '" +
    data[6] +
    "', '" +
    data[7] +
    "', '" +
    data[8] +
    "', '" +
    data[9] +
    "', '" +
    data[10] +
    "', '" +
    data[11] +
    "', '" +
    data[12] +
    "', '" +
    data[13] +
    "', '" +
    data[14] +
    "', '" +
    data[15] +
    "', '" +
    data[16] +
    "', '" +
    data[17] +
    "', '" +
    data[18] +
    "')";
  console.log(sql);
  db.run(sql);
  console.log('New data added');
});

app.post('/update/:param', function (request, response) {
  var data = request.params.param.split(';');
  const sql =
    "UPDATE Employees SET marka='" +
    data[1] +
    "', ev='" +
    data[2] +
    "', km='" +
    data[3] +
    "', hasznalt='" +
    data[4] +
    "', muszaki='" +
    data[5] +
    "', rendszam='" +
    data[6] +
    "', motor='" +
    data[7] +
    "', loero='" +
    data[8] +
    "', gyorsulas='" +
    data[9] +
    "', fordulat='" +
    data[10] +
    "', suly='" +
    data[11] +
    "', sebvaltoTipus='" +
    data[12] +
    "', sebvaltoSzam='" +
    data[13] +
    "', fogyasztas='" +
    data[14] +
    "', benzin='" +
    data[15] +
    "', biztonsag='" +
    data[16] +
    "', atalakitas='" +
    data[17] +
    "', kiegeszites='" +
    data[18] +
    "' WHERE id='" +
    data[0] +
    "'";
  console.log(sql);
  db.run(sql);
  console.log('Data updated, id: ' + data[0]);
});

app.post('/deleterecord/:param', function (request, response) {
  console.log('Deleting...');
  var data = request.params.param;
  const sql = 'delete from Employees where id = ' + data + '';
  console.log(sql);
  db.run(sql);
  console.log('data deleted, id: ' + data);
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function () {
  console.log('Server started succesfully!');
});
