const express = require("express");
const transactionsApi = require('./Transactions');
const bodyParser = require('body-parser');
const app = express();

app.get("/", (req, res) => {
    res.send({ Cryptoast_faucet: "Working !" });
});

app.post("/", (req, res) => {
    res.send({ Cryptoast_faucet: "Working !" });
});

app.set("port", process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/transactions', transactionsApi);

let server = app.listen(app.get("port"), () => {
      console.log( "Cryptoast_faucet API is running at %d in %s mode",
      app.get("port"),
      app.get("env")
 );
});
