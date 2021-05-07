const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080;
//Sets up express to handle data Parsing (Body.)

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

require('./routes/ApiRoutes') (app);
require('./routes/HtmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
})