const route = require('express').Router();
const { Notices } = require('../../db/model');

route.get("/deleteNotice/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    Notices.findOneAndDelete({_id:id},(err,docs)=>{
        if(err) res.send(err);
        else{
            res.send(docs);
        }
    })
})

route.put("/editNotice/:id",(req,res)=>{
    const id=req.params.id;
    console.log(req.body);
    Notices.updateOne({_id:id},{
        title:req.body.title,
        description:req.body.description
    },(err,docs)=>{
        if(err) res.send(err);
        else res.send(docs);
    })
})

route.post('/newNotice',async (req,res) =>{
    console.log(req.body);
    const {title,description} = req.body;
    if(!title || !description){
        res.status(400).json({success:false,msg:"please fill all the fields"});
    }
    else{
        try {
            const notice = await Notices.create({title:title,description:description});
            res.status(200).json({success:true,msg:"new notice created"});

        } catch (error) {
            console.log(error);
            res.status(500).json({success:false,msg:"internal server error"});
        }
    }
})

module.exports = route;