import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from 'next'
 const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  }).post((req,res)=>{
    const {username, password} = req.body;
    if(username && password){
        res.status(200).json({message:'success, if only we had a budget for a backend XD'});
    }else{
    res.status(401).json({message:'invalid registeration'});
}
  })

export default handler;