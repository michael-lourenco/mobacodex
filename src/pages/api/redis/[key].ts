import { getRedis } from "../../../services/redisConfig"

export default async function handlerGetRedis(req, res) {
    try{
        const { key } = req.query
        if( req.method === 'GET') {
            const result = await getRedis(key)

            if(!result || result === null){
                res.status(200).json(
                    {
                        message: 'A chave não existe',
                    })
            }

            res.status(200).json(
                {
                    message: 'chave encontrada',
                    data: result,
                }
            )
        } else{
            res.status(400).json(
                {
                    message: 'metodo não permitido',
                })
        }
    }catch(error){
      console.log(error)
    }
  }
  
  