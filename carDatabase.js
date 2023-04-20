const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

fs.open('employee.db', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

const db = new sqlite3.Database(
  './employee.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);

    console.log('connection succesful');
  }
);

db.run(
  'CREATE TABLE Cars (id INTEGER PRIMARY KEY AUTOINCREMENT, marka TEXT NOT NULL, ev TEXT NOT NULL UNIQUE, km TEXT NOT NULL, hasznalt TEXT NOT NULL, muszaki	TEXT, rendszam	TEXT, motor TEXT, loero TEXT, gyorsulas TEXT, sebesseg TEXT, fordulat TEXT, suly TEXT, sebvaltoTipus TEXT, sebvaltoSzam TEXT, fogyasztas TEXT, benzin TEXT, biztonsag TEXT, atalakitas TEXT, kiegeszites TEXT)'
);

/*
const sql ='INSERT INTO employees(name, email, address) VALUES(?,?,?)';
db.run(sql, ["mike","asd@gmail.com", "aaaaaa aaaa"], (err)=>{
    if(err) return console.error(err.message);
    console.log("A new row added!");
});
*/
