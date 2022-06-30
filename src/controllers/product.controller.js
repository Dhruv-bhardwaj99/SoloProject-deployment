const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.post("", async(req, res) =>{
    try {
        const post = await Product.create(req.body);
        return res.status(201).send(post);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) =>{
    try {
        const post = await Product.find().lean().exec();
        return res.send(post);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.patch("/:id", async(req, res) =>{
    try {
        const post = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        res.status(201).send(post);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async(req, res) =>{
    try {
        const post = await Product.findByIdAndDelete(req.params.id).lean().exec();
        res.status(201).send(post)
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;