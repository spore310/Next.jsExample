import nc from "next-connect";
import {serialize} from 'cookie';
import type { NextApiRequest, NextApiResponse} from 'next'

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
      },
      onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
      },
}).delete((req, res) => {
    const {antraAuth} = req.cookies;

    const serializedCookie = serialize("antraAuth", ' ', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
      });
    res.setHeader('Set-Cookie', serializedCookie);
    res.status(200).json({ message: "Successfuly logged out!" });
});

export default handler;