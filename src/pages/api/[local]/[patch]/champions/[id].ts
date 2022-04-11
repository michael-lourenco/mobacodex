// export default async function handler(req, res) {
//     if(req.method === 'GET') {
//       try{
//         const { local, patch, id } = req.query
//         const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
//         const champion = championsData.data[id] ? championsData.data[id] : {}
//         res.status(200).json(champion)
//       } catch(e) {
//         res.status(500).json({
//           error: 'Internal server error'
//         })
//       }
//     }
//   }
  

  const { promises: fs } = require('fs')
  var path = require("path");
  
  async function existsPath (directory) { 
   try {
    await fs.access(directory)
    return true
   } catch {
    return false
   }
  }
  
  export default async function handler(req, res) {
    try{
      if(req.method === 'GET') {
        try{
          const { local, patch, id } = req.query
  
          const url= `${process.env.dragontail_url}/dragontail-${patch}/${patch}/data/${local}/champion.json`
  
          if(!await existsPath(url)){
            console.log("Directory does not exist.")
            res.status(200).json({})
          } else {  
            console.log("Directory exists.")
            const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
            const champion = championsData.data[id] ? championsData.data[id] : {}
            res.status(200).json(champion)
          }
        } catch(error) {
          res.status(500).json({
            error: 'Internal server error',
            message: error.message
          })
        }
      }
  
    } catch(error){
      console.log(error)
    }
  }
  
  