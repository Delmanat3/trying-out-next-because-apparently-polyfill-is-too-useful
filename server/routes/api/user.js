const { User } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    resData = await User.findAll({});
    if (!resData) {
      res.status(400).json({ message: "error in beep boop get all land sorry" });
      return;
    }
    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({message:"errors in the chain"})
}
});

router.get("/:id",async(req,res)=>{
try{
  console.log(req.params)
const userData=await User.findOne({
where:{user_id:req.params.id},

})
if(!userData){
    console.log(userData)
    res.status(400).json({message:"sumit wrong with responsy boy thanks for checking in "})
    return
}
res.status(200).json(userData)
}catch(err){
    res.status(500).json({message:"ballsy nopes in house "})
}
})


router.post("/", async (req, res) => {
  try {
const {body}=req;
console.log(body)
const {user_name}=body;
const {user_email}=body;
const {user_password}=body;
const newUser=await User.create({
    user_name:user_name,
    user_email:user_email,
    user_password:user_password
   
})
    if(!newUser){
        res.status(400).json({message:"error in beep boop new user process"});
        return
    }
    req.session.save(() => {
        req.session.user_id = newUser.user_id;
        req.session.username = newUser.user_name;
        req.session.logged_in = true;

        res.json(newUser);
    });
    // res.status(200).json(newUser);
  } catch (err) {
    console.log(err)
      res.status(500).json({message:"errors in the chain"})
  }
});



router.post("/login", async (req, res) => {
  try {
    console.log(req.body)
      const logy=req.body.user_email
      console.log(logy)
      console.log(req.body.user_password)

      const resData=await User.findOne({
          where:{user_email:logy},
        //   user_password:passy
      })
      if(!resData){
          res.status(400).json({message:"issa boo boo in login"})
          return
      }
      const passy= await resData.checkPassword(req.body.user_password);
      console.log(passy)
if(!passy){
res.status(501).json({message:"dun fucked up on that password boss"})
return
}
req.session.save(() => {

    req.session.user_id = resData.user_id;
    req.session.user_email = resData.user_email;
    req.session.logged_in = true;

    res.json({ user: resData, message: 'You are now logged in!' });
});
      // res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({message:"errors in the chain"})
  }
});

module.exports = router;
