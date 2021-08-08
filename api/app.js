const express = require('express');
const app = express();
const db = require("./models")


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, GET, POST, PATCH, DELETE");
      return res.status(200).json({});
    }
    next();
  });
//


app.use('/get', require('./routes/parentRoute'))

const PORT = process.env.PORT || 5000;



db.sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})



