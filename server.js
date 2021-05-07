const express = require('express')
const app = express()
const PORT = 3000
//Sets up express to handle data Parsing (Body.)
app.use(express.urlencoded({extend: true}))
app.use(express.json());

require('./routes/ApiRoutes')(app);
require('./routes/HtmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
})