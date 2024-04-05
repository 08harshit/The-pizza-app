import express, { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken"



const router = express.Router();

export const signUp = async (req: Request, res: Response, next: () => void) => {

  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,

    });
    const token = jwt.sign({ email: user.email }, 'MY_JWT_SECRET', { expiresIn: '1d' });
    res.cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
      sameSite: 'none'
    });

  }
  catch (err: any) {
    console.log(err.message);
  }
};



export const login = async (req: express.Request, res: express.Response) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ where: { email } }) as any;
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "password missmatch" });
    }


    // creating JWT token 

    const token = jwt.sign({ email: user.email }, 'MY_JWT_SECRET', { expiresIn: '1d' });

    res.cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
      sameSite: 'none'
    });

    res.status(200).json({ message: "Successfull login" });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const checkUser = async (req: express.Request, res: express.Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Please Log-In' }).redirect('/login')
  }

  jwt.verify(token, 'MY-JWT-SECRET', (error:any, decoded:any) => {
    if (error) {
      return res.status(401).json({ message: "Log-In Again" }).redirect('/login');

    }
    req.user = decoded
    next();

  });
}




module.exports = { signUp, login };






































































































// const token = req.cookies.jwt;

// // check json web token exists & is verified
// if (token) {
//   jwt.verify(token, "MY_JWT_SECRET", (err, decodedToken) => {
//     if (err) {
//       console.log(err.message);
//       res.redirect("/login");
//     } else {
//       console.log(decodedToken);
//       next();
//     }
//   });
// } else {
//   res.redirect("/login");
// }
// };



// export const checkUser = (req:Express.Request, res:Express.Response, next:any) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(token, "MY-JWT-SECRET", async (err, decodedToken) => {
//       if (err) {
//         res.locals.user = null;
//         next();
//       } else {
//         let user = await User.findById(decodedToken.id);
//         res.locals.user = user;
//         next();
//       }
//     });
//   } else {
//     res.locals.user = null;
//     next();
//   }
// };
