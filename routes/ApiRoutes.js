const Data_base_JSON = require('../db/db.json')

module.exports = (app) => {
//Api Get Request
  app.get('api/notes', (req , res) => {
    res.json(Data_base_JSON)
  })

app.post('api/notes',(req,res) => {
 Data_base_JSON.push(req.body) 
})
}
