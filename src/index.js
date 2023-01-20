const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    // Both inputs must be numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let sum = 0;
    res.status(200).json({
        status: "Sucess",
        message: "the sum of given two numbers",
        sum: num1 + num2
    })
})
app.post("/sub", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    // Both inputs must be numbers
    if (isNaN(num1) || isNaN(num1)) {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let sum = 0;
    res.status(200).json({
        status: "Sucess",
        message: "the difference of given two numbers",
        sub: num1 - num2
    })

})
app.post("/multiply", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    // Both inputs must be numbers
    if (isNaN(num1) || isNaN(num1)) {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }

    if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let sum = 0;
    res.status(200).json({
        status: "Sucess",
        message: "the product of given numbers",
        multiply: num1 * num2
    })

})
app.post("/divide", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    // Both inputs must be numbers
    if (isNaN(num1) || isNaN(num1)) {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    if (num2 == 0) {
        return res.status(400).json({
            status: "Error",
            message: "Cannot divide by zero"
        })
    }
    if (num1 === "" || num2 === "") {
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    let sum = 0;
    res.status(200).json({
        status: "Sucess",
        message: "The division of given numbers",
        division: num1 / num2
    })

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;