const Router = require("express");
const {check, validationResult} = require("express-validator");

const bcrypt = require("bcrypt");
const User = require('../models/User');
const router = new Router();
const jwt = require("jsonwebtoken");
const config = require('config');

router.post('/registration', [
    check('email', 'Uncorrect').isEmail(),
    check('password', 'Password must be longer tan 3 and shorter than 12').isLength({min: 3, max: 12}),
], async (req, res) => {
    try {
        const errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message: `Uncorrect request`, errors});
        }
        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        console.log(email)
        if (candidate) {
            return res.status(300).json({message: "Email is already exist"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await new User({email, password: hashPassword});
        await user.save();
        return res.status(201).json({message: `User was created`});

    } catch (e) {
        console.log(`Registration Error ${e}`)
    }
});


router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(300).json({message: "User not found"})
        }
        const compare = bcrypt.compare(password, user.password);
        if (!compare) {
            return res.status(400).json({message: `Invalid password`});
        }
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                avatar: user.avatar,
                tel: user.tel,
                orders: user.orders
            }
        })

        return res.status(200).json({message: `User is logined`});

    } catch (e) {
        console.log(`Login Error ${e}`)
    }

});

module.exports = router;