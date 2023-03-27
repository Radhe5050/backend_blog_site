require('dotenv').config()
const express = require('express');
require('./db/conn')
const cookieParser = require('cookie-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use("/users", require("./routes/usersRoutes"))
app.use("/blogs", require("./routes/blogsRoutes"))

app.listen(port, () => {
    console.log(`blog-app listening on port ${port}`);
})