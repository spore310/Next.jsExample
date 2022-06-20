import nc from "next-connect";
import {NextApiRequest, NextApiResponse} from 'next';
import protectedRoute from '../../../utils/api/protected'
import {verify} from 'jsonwebtoken';

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
      },
      onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
      },
}).use(protectedRoute).get((req,res)=>{
        const {antraAuth} = req.cookies;
        //decode the cookie
        const decodeLayer = verify(antraAuth,'antra');
        

        res.status(200).json({message:'profile'});

    
   
})

export default handler;