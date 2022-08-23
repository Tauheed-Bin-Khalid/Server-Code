const express = require("express")
const router = new express.Router()
const List = require("../models/lists");



router.get("/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const data = await List.findById(_id)

        if (!data) {
            return res.status(404).send();
        } else {
            res.send(data)
        }

    } catch (e) {
        res.send(e)
    }


})

router.get("/", async (req, res) => {
    const data = await List.find()
    res.send(data)
})
router.post("/", async (req, res) => {
    console.log(req.body, "body")
    const product = new List({
        text: req.body.text,
    })
    const data = await product.save()

    res.send(data)

})

router.put("/:id", async (req, res) => {
    const _id =req.params.id;

    const data = await List.findByIdAndUpdate(_id,{
        $set :{
            text: req.body.text,
        },
    },{
        new: true
    })
    res.send(data)
})

router.put("/taskDone/:id", async (req, res) => {
    const _id =req.params.id;

    const data = await List.findByIdAndUpdate(_id,{
        $set :{
            taskDone: req.body.taskDone,
        },
    },{
        new: true
    })
    res.send(data)
})

router.delete("/:id", async (req, res) => {

    try{

        const _id = req.params.id;
        const d = await List.findById(_id)
        if(d){
            const data = await List.findByIdAndDelete(_id)

            res.send(data)
        }
        else{
            res.send("No data on this id")
        }
        
        


    }catch(e){
        res.send(e)

    }

})

module.exports = router;