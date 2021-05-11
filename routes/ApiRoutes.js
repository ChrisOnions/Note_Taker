const Data_base_JSON = require('../db/db.json')
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
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) console.log(err)

      let NewData = JSON.parse(data)
      NewData.push(NoteData)

      fs.writeFile(filePath, JSON.stringify(NewData), (err) => {
        if (err) console.log(err)
        console.log('The file has been saved!');
      })
    })
    return res.json(req.body)
  })

  app.delete('/api/notes/:id', (req, res) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) console.log(err);
      let newData = JSON.parse(data)
      for (let i = 0; i < newData.length; i++) {
        if (req.params.id === newData[i].id) {

          newData.splice(i, 1)
          fs.writeFile(filePath, JSON.stringify(newData), (err) => {
            if (err) console.log(err)
            res.json(true);
            console.log('The file has been saved!');
          })
        }
      }
    })
    return res.json(req.body)
  })
}