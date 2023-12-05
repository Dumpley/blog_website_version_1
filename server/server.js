const { User, retrieve_a_sample_user } = require("./Objects/User");

const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(body_parser.json());
app.use(cors());

const port = process.env.PORT || 3000;

/**
 * This is a testing getter
 */
app.get("/", (req, res) => {
    res.send({
        message: "This is the BACKEND API",
    });
});

/**
 * This is a sample user for fun
 */

app.get("/user_sample", (req, res) => {
    res.json(retrieve_a_sample_user());
});

/**
 * This is a post for registration
 */
app.post("/register_user", (req, res) => {
    res.send({
        message: `Hello ${req.body.user_name}. Welcome @ my place`
    })
})


/**
 * This is the listener
 */
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
