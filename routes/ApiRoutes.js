const Data_base_JSON = require('../db/db.json')
const fs = require('fs');
const FilePath = '../db/db.json'

module.exports = (app) => {
//Api Get Request
  app.get('/api/notes', (req , res) => {
    res.json(Data_base_JSON)
  })

app.post('/api/notes',(req,res) => {
  console.log(res);
//  Data_base_JSON.push(req.body) 
fs.writeFile(FilePath, res.body ,(err) => {
  if (err) console.log(err);
  console.log('The file has been saved!');
})
})
// require / Add fs 
// Write file to db.json with unique name
// require / Import unique name gen
}
function ADDdata (Database) {
  
}
