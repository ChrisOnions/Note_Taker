const Data_base_JSON = require('../db/db.json')
const fs = require('fs');
const path = require('path');
const filePath = __dirname + '/../db/db.json';
//11-express\Homework\Note_Taker\db
//11-express\Homework\Note_Taker\routes/db/db.json

module.exports = (app) => {
//Api Get Request
  app.get('/api/notes', (req , res) => {
    res.json(Data_base_JSON)
  })

app.post('/api/notes',(req,res) => {
  console.log(filePath);
  const NoteData = 
`
  {
   "id": "test",
   "title": "${req.body.title}", 
   "text": "${req.body.text}"
  }
` ;
fs.writeFile(filePath ,(err) => {
  Data_base_JSON.push(req.body) 
  if (err) console.log(err);
})
// fs.appendFile(filePath ,NoteData,(err) => {
//   if (err) console.log(err);
//   console.log('The file has been saved!');
// })
})

// require / Add fs 
// Write file to db.json with unique name
// require / Import unique name gen
}
// function ADDdata (Database) {
  
// }
