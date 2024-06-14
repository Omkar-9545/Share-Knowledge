const express = require("express");
const router = require("./routers/auth-router");
const app = express();


const PORT = 3000;

app.use("/api/v1/auth", router);

app.listen(PORT, () => {
    console.log("Welcome to the development server")
})