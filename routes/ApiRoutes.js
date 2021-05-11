let Data_base_JSON = require('../db/db.json')
const fs = require('fs');
const path = require('path');
const { NODATA } = require('dns');
const filePath = __dirname + '/../db/db.json';
var generate = require('project-name-generator');

//11-express\Homework\Note_Taker\db
//11-express\Homework\Note_Taker\routes/db/db.json

module.exports = (app) => {
  //Api Get Request
  app.get('/api/notes', (req, res) => {
    res.json(Data_base_JSON)
  })

  app.post('/api/notes', (req, res) => {
    const randomeId = generate().dashed;
    console.log("this is random Word :" + randomeId);
    const NoteData =
    {
      "title": req.body.title,
      "text": req.body.text,
      "id": randomeId
    }
    // fs.readFile(filePath, 'utf8', (err, data) => {
    //   if (err) console.log(err)

    //   let Data_base_JSON = JSON.parse(data)
    //   Data_base_JSON.push(NoteData)
    Data_base_JSON.push(NoteData)
    fs.writeFile(filePath, JSON.stringify(Data_base_JSON), (err) => {
      if (err) console.log(err)
      console.log('The file has been saved!');
      // res.json(Data_base_JSON)
      res.json(Data_base_JSON)
    })
    // })

  })

  app.delete('/api/notes/:id', (req, res) => {

    // fs.readFile(filePath, 'utf8', (err, data) => {
    //   if (err) console.log(err);
    //   let newData= JSON.parse(data)
    console.log("new data 1 ", Data_base_JSON);//
    // for (let i = 0; i < Data_base_JSON.length; i++) {
    //   if (req.params.id === Data_base_JSON[i].id) {

    // Data_base_JSON = Data_base_JSON.splice(i, 1)
    Data_base_JSON = Data_base_JSON.filter(i => i.id !== req.params.id)
    console.log(Data_base_JSON);
    fs.writeFile(filePath, JSON.stringify(Data_base_JSON), (err) => {
      if (err) console.log(err)
      console.log('The file has been saved!');
      res.json(Data_base_JSON)
    })

    //   }
    // }
    // })
  })
}