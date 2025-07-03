const express = require("express")
const router  = new express.Router()
const MensRanking = require("../models/mens")
router.post("/mens",async (req,res)=>{
    const addingMensRanking = new MensRanking(req.body)
    console.log(req.body)
   const insertMens = await addingMensRanking.save()
   res.send(insertMens)
})
router.get("/mens",async (req,res)=>{
        const getMens = await MensRanking.find({}).sort({"ranking":1})
        res.send(getMens)
})
router.get("/mens/:id",async (req,res)=>{
    const _id = req.params.id
    const getMensById = await MensRanking.findById({_id})
    res.send(getMensById)
})
router.patch("/mens/:id",async (req,res)=>{
    const _id = req.params.id
    const getMensByIdAndUpdate = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})
    res.send(getMensByIdAndUpdate)
})
router.delete("/mens/:id",async (req,res)=>{
    const _id = req.params.id
    const getMensByIdAndDelete = await MensRanking.findByIdAndDelete(_id)
    res.send(getMensByIdAndDelete)
})

module.exports = router