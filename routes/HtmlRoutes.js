const path = require("path");

module.exports = (app) => {
  app.get("/home", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });
  app.get("./notes", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/notes.html"));
  });
  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });
};
