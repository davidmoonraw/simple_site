require('./db.js');
const cors = require("cors");
const express = require('express');
const middleware = require('./middleware/handler.js');

const PORT = process.env.EXPRESS_PORT || 3000;
const app = express();

app.use(middleware);
app.use(cors()); // for dev use only

app.listen(PORT, () => {
    if (PORT === undefined) {
        console.log("Server port is not defined.");
    }
    else {
        console.log(`Server is running on port ${PORT}`);
    }
});

/**
 * handle on container Stop
 */
process.on("SIGTERM", process.exit);
process.on("SIGINT", process.exit); //CTRL+C