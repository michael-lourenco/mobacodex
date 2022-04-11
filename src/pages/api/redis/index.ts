import { getRedis, setRedis } from "../../../services/redisConfig"

export default async function handlerSetRedis(req, res) {
    try{
        if(req.method === 'POST') {
            console.log(req.body)
            await setRedis(req.body.key, req.body.value);
            res.status(200).json(
                {
                    message:'redis alterado',
                    payload: req.body
                })
        }else if( req.method === 'GET') {
            const result = await getRedis(req.body.key)
            res.status(200).json({message: result})
        } else{

        }
    }catch(error){
      console.log(error)
    }
  }
  