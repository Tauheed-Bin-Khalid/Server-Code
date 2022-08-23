const express = require("express")
const app = express();
app.use(express.json())
const cors = require("cors")
app.use(cors())
require("./src/db/conn");
const port = process.env.PORT || 5000;
const StudentRouter=require("./src/routes/student")
const ListRouter=require("./src/routes/list")


app.use("/students",StudentRouter);
app.use("/lists",ListRouter);



app.listen(port, () => {
    console.log("Server is running on port ", port);
})
