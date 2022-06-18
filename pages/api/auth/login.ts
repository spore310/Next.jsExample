// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import nc from "next-connect";


const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).post((req, res) => {
  const {username, password} = req.body;
  if(username === 'admin' && password === 'admin') {

    const token = sign({username,},'antra', { expiresIn: '1d' });

    const seralizedCookie = serialize('antraAuth',token,{
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, //1 day
      path: "/",
    });

    res.status(200).setHeader("Set-Cookie", seralizedCookie);
    res.status(200).json({message:"successfully logged in!"});

  }else{
    res.status(401).json({ message:'Incorrect username/password'})
  }

  

});

export default handler;