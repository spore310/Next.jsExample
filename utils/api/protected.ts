import nc  from 'next-connect';
import {NextApiRequest, NextApiResponse} from 'next'
const middlerware = nc<NextApiRequest, NextApiResponse>().use('/',(req,res,next)=>{
    const {antraAuth} = req.cookies;
    if(antraAuth === undefined){
        res.status(401).json({message:'not logged in'});
    }else{
    console.log('from protected route!', antraAuth);
    next();
}
})

export default middlerware;