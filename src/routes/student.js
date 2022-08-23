const express = require("express")
const router = new express.Router()
const Student = require("../models/students");



router.get("/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const data = await Student.findById(_id)

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
    const data = await Student.find({ name: "Tauheed" })
    res.send(data)
})
router.post("/", async (req, res) => {
    console.log(req.body, "body")
    const user = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    })
    const result = await user.save()

    res.send(result)

})

router.put("/:id", async (req, res) => {
    const _id =req.params.id;

    const data = await Student.findByIdAndUpdate(_id,{
        $set :{
            name: "rman",
            phone:"9233239999",

        },
    },{
        new: true
    })
    res.send(data)
})

router.delete("/:id", async (req, res) => {

    try{

        const _id = req.params.id;
        const d = await Student.findById(_id)
        if(d){
            const data = await Student.findByIdAndDelete(_id)

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