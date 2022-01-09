const Register = require('../models/Register');
const router = require('express').Router();

router.post('/register', async (req,res)=> {
  try {
    const savedReg = await new Register({
        fullname:req.body.fullname,
        email:req.body.email,
        course:req.body.course,
        number:req.body.number,
    });

    const resultReg = await savedReg.save();
    res.status(200).json(resultReg);

  } catch (error) {
      res.status(500).json(error);
  }  
});

module.exports = router;