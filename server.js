const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080;
//Sets up express to handle data Parsing (Body.)

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(__dirname + '/public'))

require('./routes/ApiRoutes') (app);
require('./routes/HtmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
})