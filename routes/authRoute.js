import express from 'express'
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin,requireSignIn } from '../middlewares/authMiddleware.js';
import { updateProfileController } from './../controllers/authController.js';

const router =express.Router()

router.post("/register",registerController);

//LOGIN
router.post("/login",loginController);
// Forgot Password
router.post('/forgot-password',forgotPasswordController)
//test
router.get("/test",requireSignIn,isAdmin,testController);

//protected  User route auth

router.get("/user-auth",requireSignIn,(req,res)=>{
  res.status(200).send({ok:true});
});

//protected Admin  route auth
router.get("/admin-auth", requireSignIn ,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put('/profile',requireSignIn,updateProfileController)


export default router 