const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./Routes/index');
const cors = require('cors');
const path = require('path');
const corsOptions = {
  origin:"https://developer-1.onrender.com"
}

dotenv.config();
connectDB();

const app = express();

const port = 5432;

const _dirname = path.resolve();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GeT, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
  next();
});

app.use(cors(corsOptions));

app.use('/', routes);

app.use(express.static(path.join(_dirname, "/client/build")));
app.get('*', ( req, res) => {
     res.sendFile(path.resolve(_dirname, '/client/build/index.html'));
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})