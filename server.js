const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors') 
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

require('dotenv').config();

require('./server/config/mongoose.config');

require('./server/routes/products.route')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
})
