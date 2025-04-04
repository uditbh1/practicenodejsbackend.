const { Router } = require("express");
const {messages}=require("../db")

const messageRouter=Router();
messageRouter.get("/:id",(req,res)=>{
    const messageId = parseInt(req.params.id); // Convert to number
    const message = messages[messageId]; // Find message
    res.render("messageDetails", { title: "Message Details", message });
})
module.exports = messageRouter;