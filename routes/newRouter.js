const { Router } = require("express");
const {messages}=require("../db")
const newRouter=Router()
newRouter.get("/", (req, res) => {
    res.render("form");
});
newRouter.post("/", (req, res) => {
    const { messageUser, messageText } = req.body; // Get form data
    messages.push({ text: messageText, user:messageUser, added: new Date() }); // Add new message
    res.redirect("/")
});

module.exports = newRouter;