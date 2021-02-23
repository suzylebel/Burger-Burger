const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// redirect as needed to /burgers


router.get("/", function (req, res) {
        burger.selectAll(function (data) {
            var hbsObject = {
                burger: data
            };
            console.log("data", hbsObject);
            res.render("index", hbsObject);
        });
    });

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"],[req.body.name], function (result) {
        res.json({ id: result.inserId});
    });
})

router.put("/api/burgers/:id", function (req, res) {
    // need to set condition of updated burger from user input selection
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    },
    condition,
    function (result) {
        if (result.changedRows === 0) {
            return res.status(404);
        }
        return res.status(200).send({ result });

    }
);
});
    


module.exports = router;