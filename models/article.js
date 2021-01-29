const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    source: { type: String, required: true },
    abstract: { type: String, required: true },
    web_url: String,
    date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;